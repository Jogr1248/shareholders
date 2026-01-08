// import { useActionData } from "react-router-dom";

export default function Home() {
  //  const actionData = useActionData() as { error?: string } | undefined;
  // const error = actionData?.error;
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-indigo-100 flex items-center justify-center p-6">
      <div className="bg-white rounded-3xl shadow-2xl p-16 w-full max-w-2xl text-center">
        <h1 className="text-6xl font-bold text-gray-800 mb-6">
          Riders Share
        </h1>
        <p className="text-2xl text-gray-600 mb-16">
          Cooperative Management System
        </p>

        <div className="max-w-md mx-auto">
          <h2 className="text-3xl font-semibold mb-10">Sign In</h2>

          <form method="post" action="/login" className="space-y-8">
            <input
              name="username"
              type="text"
              required
              placeholder="Username"
              className="w-full px-6 py-4 text-lg border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-500"
            />

            <input
              name="password"
              type="password"
              required
              placeholder="Password"
              className="w-full px-6 py-4 text-lg border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-500"
            />
             {/* {error && (
              <div className="bg-red-100 border-2 border-red-400 text-red-700 px-6 py-4 rounded-xl font-medium text-lg">
                {error}
              </div>
            )} */}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-2xl py-6 rounded-xl"
            >
              Login
            </button>
          </form>
          <p className="mt-12 text-center text-gray-600">
  <a href="/forgot-password" className="text-blue-600 hover:underline font-medium">
    Forgot password?
  </a>
</p>
  <p className="mt-12 text-gray-600">
            Test accounts: admin, deposit_encoder, shareholder_encoder, auditor<br />
            Password: admin123
          </p>
        </div>
      </div>
    </div>
  );
}