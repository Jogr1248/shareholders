export default function Home() {
  // Safe way to get user (only on client)
  const user = typeof window !== "undefined" ? (window as any).__USER__ || null : null;

  if (user) {
    // Logged in version
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-green-100 to-green-200 flex flex-col items-center justify-center p-6">
        <div className="text-center max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold text-green-900 mb-6">
            Welcome back, {user.username}!
          </h1>

          <p className="text-xl md:text-2xl text-gray-700 mb-12">
            You're logged in as <strong>{user.role.replace("_", " ")}</strong>.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="/sample"
              className="inline-block bg-green-700 hover:bg-green-800 text-white font-bold text-xl px-12 py-6 rounded-2xl shadow-lg transform hover:scale-105 transition"
            >
              Go to Shareholders
            </a>

            <a
              href="/deposit"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold text-xl px-12 py-6 rounded-2xl shadow-lg transform hover:scale-105 transition"
            >
              Record Deposit
            </a>
          </div>

          <p className="mt-12 text-gray-600 text-lg">
            What would you like to do today?
          </p>
        </div>
      </div>
    );
  }

  // Not logged in (or SSR) - show welcome
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-green-100 to-green-200 flex flex-col items-center justify-center p-6">
      <div className="text-center max-w-4xl">
        <h1 className="text-5xl md:text-6xl font-bold text-green-900 mb-6">
          Welcome to Riders Share
        </h1>

        <p className="text-xl md:text-2xl text-gray-700 mb-12">
          A secure and modern system for managing your cooperative.  
          Track shareholders, record deposits, view reports, and more — all in one place.
        </p>

        <a
          href="/login"
          className="inline-block bg-green-700 hover:bg-green-800 text-white font-bold text-2xl md:text-3xl px-16 py-8 rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300"
        >
          Login to Your Account
        </a>

     
      </div>
    </div>
  );
}