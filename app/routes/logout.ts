// app/routes/logout.ts
import { clearAuthCookie } from "~/services/auth.server";

export const action = () => {
  return new Response(null, {
    status: 302,
    headers: {
      Location: "/login",
      "Set-Cookie": clearAuthCookie(),
    },
  });
};