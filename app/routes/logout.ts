//logout.ts
import { clearAuthCookie } from "~/services/auth.server";

export const action = () => {
  return new Response(null, {
    status: 302,
    headers: {
      Location: "/",
      "Set-Cookie": clearAuthCookie(),
    },
  });
};