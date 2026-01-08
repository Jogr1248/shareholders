// // app/routes/login/login.tsx
// import { useFetcher } from "react-router-dom";
// import { Link } from "react-router-dom";

// export async function action({ request }: { request: Request }) {
//   const form = await request.formData();
//   const username = form.get("username") as string;
//   const password = form.get("password") as string;

//   const { login, setAuthCookie } = await import("~/services/auth.server");

//   const user = await login(username, password);
//   if (!user) return { error: "Invalid credentials" };

//   return new Response(null, {
//     status: 302,
//     headers: {
//       Location: "/",
//       "Set-Cookie": setAuthCookie(user),
//     },
//   });
// }

// export default function Login() {
//   const fetcher = useFetcher<typeof action>();
//   const error = fetcher.data?.error;

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
//       <div className="bg-white rounded-2xl shadow-2xl p-10 w-full max-w-md">
//         <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Login</h1>

//         <fetcher.Form method="post" className="space-y-6">
//           <div>
//             <label className="block text-lg font-medium mb-2">Username</label>
//             <input
//               name="username"
//               type="text"
//               required
//               className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               placeholder="admin"
//             />
//           </div>

//           <div>
//             <label className="block text-lg font-medium mb-2">Password</label>
//             <input
//               name="password"
//               type="password"
//               required
//               className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               placeholder="admin123"
//             />
//           </div>

//           {error && <p className="text-red-600 text-center font-medium">{error}</p>}

//           <button
//             type="submit"
//             className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-xl py-4 rounded-lg transition"
//           >
//             Login
//           </button>
//         </fetcher.Form>

//         <p className="mt-8 text-center text-gray-600">
//           Test accounts: <strong>admin</strong>, <strong>deposit_user</strong>, <strong>shareholder_user</strong><br />
//           Password: <strong>admin123</strong>
//         </p>
//       </div>
//     </div>
//   );
// }
// app/routes/login/login.tsx
// app/routes/login/login.tsx
export async function action({ request }: { request: Request }) {
  const formData = await request.formData();
  const username = formData.get("username") as string;
  const password = formData.get("password") as string;

  const { login, setAuthCookie } = await import("~/services/auth.server");

  const user = await login(username, password);
  if (!user) {
   
    return { error: "Invalid username or password" };
  }

  // Role-based redirect
  let redirectTo = "/";
  if (["ADMIN", "MASTER_ENCODER", "SHAREHOLDER_ENCODER"].includes(user.role)) {
    redirectTo = "/sample";
  } else if (user.role === "DEPOSIT_ENCODER") {
    redirectTo = "/deposit";
  } else if (user.role === "AUDITOR") {
    redirectTo = "/reports";
  }else if (user.role === "ATTENDANCE_ENCODER") {
    redirectTo = "/attendance"; 
  }

  return new Response(null, {
    status: 302,
    headers: {
      Location: redirectTo,
      "Set-Cookie": setAuthCookie(user),
    },
  });
}


export default function Login() {
  return null;
}