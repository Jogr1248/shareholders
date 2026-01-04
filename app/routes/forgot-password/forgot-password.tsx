// app/routes/forgot-password/forgot-password.tsx
import { useFetcher } from "react-router-dom";

export async function action({ request }: { request: Request }) {
  const formData = await request.formData();
  const email = formData.get("email") as string;

  // Mock reset (in real, send email with token)
  console.log(`Reset link sent to ${email}`);
  return { success: true, message: "Reset link sent to your email" };
}

export default function ForgotPassword() {
  const fetcher = useFetcher();
  const message = fetcher.data?.message;

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-10 rounded-lg shadow-lg w-96">
        <h1 className="text-3xl font-bold mb-8 text-center">Forgot Password</h1>

        <fetcher.Form method="post">
          <div className="mb-6">
            <label className="block font-medium mb-2">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full border rounded px-4 py-2"
              placeholder="your@email.com"
            />
          </div>

          <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded font-bold hover:bg-blue-700">
            Send Reset Link
          </button>

          {message && <p className="mt-4 text-green-600">{message}</p>}
        </fetcher.Form>
      </div>
    </div>
  );
}