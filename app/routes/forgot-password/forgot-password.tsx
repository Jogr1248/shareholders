// // app/routes/forgot-password/forgot-password.tsx
// import { useFetcher } from "react-router-dom";

// export async function action({ request }: { request: Request }) {
//   const formData = await request.formData();
//   const email = formData.get("email") as string;

//   // Mock reset (in real, send email with token)
//   console.log(`Reset link sent to ${email}`);
//   return { success: true, message: "Reset link sent to your email" };
// }

// export default function ForgotPassword() {
//   const fetcher = useFetcher();
//   const message = fetcher.data?.message;

//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center">
//       <div className="bg-white p-10 rounded-lg shadow-lg w-96">
//         <h1 className="text-3xl font-bold mb-8 text-center">Forgot Password</h1>

//         <fetcher.Form method="post">
//           <div className="mb-6">
//             <label className="block font-medium mb-2">Email</label>
//             <input
//               type="email"
//               name="email"
//               required
//               className="w-full border rounded px-4 py-2"
//               placeholder="your@email.com"
//             />
//           </div>

//           <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded font-bold hover:bg-blue-700">
//             Send Reset Link
//           </button>

//           {message && <p className="mt-4 text-green-600">{message}</p>}
//         </fetcher.Form>
//       </div>
//     </div>
//   );
// }
// app/routes/forgot-password/forgot-password.tsx
// import { useFetcher } from "react-router-dom";

// export async function action({ request }: { request: Request }) {
//   const formData = await request.formData();
//   const email = formData.get("email") as string;

//   // Mock email send (replace with real email service later)
//   console.log(`Password reset link sent to ${email}`);

//   return { success: true, message: "Reset link sent to your email. Check your inbox." };
// }

// export default function ForgotPassword() {
//   const fetcher = useFetcher();
//   const message = fetcher.data?.message;

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-6">
//       <div className="bg-white rounded-3xl shadow-2xl p-16 w-full max-w-md text-center">
//         <h1 className="text-4xl font-bold text-gray-800 mb-8">Forgot Password</h1>

//         <fetcher.Form method="post" className="space-y-8">
//           <input
//             name="email"
//             type="email"
//             required
//             placeholder="Your email"
//             className="w-full px-6 py-4 text-lg border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-500"
//           />

//           <button
//             type="submit"
//             className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-2xl py-6 rounded-xl"
//           >
//             Send Reset Link
//           </button>
//         </fetcher.Form>

//         {message && (
//           <p className="mt-6 text-green-600 font-medium">{message}</p>
//         )}
//       </div>
//     </div>
//   );
// }
// app/routes/forgot-password.tsx
import { useState } from "react";

export async function action({ request }: { request: Request }) {
  const formData = await request.formData();
  const username = formData.get("username") as string;

  // Mock: In real app, find user by username/email and send reset link
  console.log(`[Forgot Password] Reset request for username: ${username}`);
  console.log(`[Mock Email Sent] Reset link: http://localhost:3000/reset-password?token= mock-token-for-${username}`);

  return { success: true, message: "Password reset link sent! Check console for mock link." };
}

export default function ForgotPassword() {
  const [message, setMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const response = await fetch("/forgot-password", {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    if (data.success) {
      setMessage(data.message);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-6">
      <div className="bg-white rounded-3xl shadow-2xl p-16 w-full max-w-md text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Forgot Password</h1>

        <form onSubmit={handleSubmit} className="space-y-8">
          <input
            name="username"
            type="text"
            required
            placeholder="Enter your username"
            className="w-full px-6 py-4 text-lg border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-500"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-2xl py-6 rounded-xl"
          >
            Send Reset Link
          </button>
        </form>

        {message && <p className="mt-8 text-green-600 font-medium text-lg">{message}</p>}

        <p className="mt-8 text-gray-600">
          <a href="/" className="text-blue-600 hover:underline">Back to Login</a>
        </p>
      </div>
    </div>
  );
}