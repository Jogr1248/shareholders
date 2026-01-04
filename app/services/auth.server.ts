// // app/services/auth.server.ts
// import { query } from "~/services/db.server";
// import bcrypt from "bcryptjs";

// export type Role = "ADMIN" | "MASTER_ENCODER" | "AUDITOR" | "SHAREHOLDER_ENCODER" | "DEPOSIT_ENCODER" | "ATTENDANCE_ENCODER";

// export type User = {
//   id: string;
//   username: string;
//   role: Role;
// };

// const SESSION_COOKIE = "__session";

// export async function login(username: string, password: string): Promise<User | null> {
//   const users = await query<User & { password_hash: string }>(
//     `SELECT id, username, role, password_hash FROM users WHERE username = ?`,
//     [username]
//   );

//   if (users.length === 0) return null;

//   const user = users[0];
//   const isValid = await bcrypt.compare(password, user.password_hash);
//   if (!isValid) return null;

//   return { id: user.id, username: user.username, role: user.role };
// }

// export function getSession(request: Request) {
//   const cookie = request.headers.get("Cookie");
//   const session = cookie?.includes(SESSION_COOKIE) ? cookie.split(`${SESSION_COOKIE}=`)[1].split(";")[0] : null;
//   return session ? JSON.parse(atob(session)) : null;
// }

// export function requireAuth(request: Request) {
//   const session = getSession(request);
//   if (!session || !session.user) {
//     throw new Response("Unauthorized", { status: 401 });
//   }
//   return session.user as User;
// }

// export function requireRole(request: Request, allowedRoles: Role[]) {
//   const user = requireAuth(request);
//   if (!allowedRoles.includes(user.role)) {
//     throw new Response("Forbidden", { status: 403 });
//   }
//   return user;
// }

// export function createSession(user: User) {
//   const sessionData = btoa(JSON.stringify({ user }));
//   return `${SESSION_COOKIE}=${sessionData}; HttpOnly; Path=/; Max-Age=604800`; // 7 days
// }

// export function destroySession() {
//   return `${SESSION_COOKIE}=; HttpOnly; Path=/; Max-Age=0`;
// }

// app/services/auth.server.ts
import { query } from "~/services/db.server";
import bcrypt from "bcryptjs";

export type Role = "ADMIN" | "MASTER_ENCODER" | "AUDITOR" | "SHAREHOLDER_ENCODER" | "DEPOSIT_ENCODER" | "ATTENDANCE_ENCODER";

export type User = {
  id: string;
  username: string;
  role: Role;
};

const SESSION_COOKIE = "__session";

export async function login(username: string, password: string): Promise<User | null> {
  const [row] = await query<{ id: string; username: string; role: Role; password_hash: string }>(
    "SELECT id, username, role, password_hash FROM users WHERE username = ?",
    [username]
  );

  if (!row) return null;

  const valid = await bcrypt.compare(password, row.password_hash);
  if (!valid) return null;

  return { id: row.id, username: row.username, role: row.role };
}

export function getUser(request: Request): User | null {
  const cookie = request.headers.get("Cookie");
  if (!cookie) return null;

  const match = cookie.match(new RegExp(`${SESSION_COOKIE}=([^;]+)`));
  if (!match) return null;

  try {
    const session = JSON.parse(atob(match[1]));
    return session.user || null;
  } catch {
    return null;
  }
}

export function requireUser(request: Request): User {
  const user = getUser(request);
  if (!user) throw new Response("", { status: 401 });
  return user;
}

export function requireRole(request: Request, roles: Role[]): User {
  const user = requireUser(request);
  if (!roles.includes(user.role)) throw new Response("", { status: 403 });
  return user;
}

export function setAuthCookie(user: User) {
  const session = btoa(JSON.stringify({ user }));
  return `${SESSION_COOKIE}=${session}; HttpOnly; Path=/; Max-Age=604800; SameSite=Lax`;
}

export function clearAuthCookie() {
  return `${SESSION_COOKIE}=; HttpOnly; Path=/; Max-Age=0`;
}