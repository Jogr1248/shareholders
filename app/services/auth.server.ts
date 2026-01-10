
import { query } from "~/services/db.server";
import bcrypt from "bcryptjs";
import { redirect } from "react-router-dom";


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
  if (!user) throw redirect("/");
  return user;
}

export function requireRole(request: Request, allowedRoles: Role[]): User {
  const user = requireUser(request);
  if (!allowedRoles.includes(user.role)) throw redirect("/");
  return user;
}

// export function setAuthCookie(user: User) {
//   const session = btoa(JSON.stringify({ user }));
//   return `${SESSION_COOKIE}=${session}; HttpOnly; Path=/; Max-Age=604800; SameSite=Lax`;
// }
export function setAuthCookie(user: User) {
  const session = btoa(JSON.stringify({ user }));
  return `${SESSION_COOKIE}=${session}; Path=/; Max-Age=604800; SameSite=Lax`;  // ← HttpOnly removed
}
// export function clearAuthCookie() {
//   return `${SESSION_COOKIE}=; HttpOnly; Path=/; Max-Age=0`;
// }
export function clearAuthCookie() {
  return `${SESSION_COOKIE}=; Path=/; Max-Age=0; SameSite=Lax`;
}