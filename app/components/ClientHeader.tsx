
// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// export function ClientHeader() {
//   const [hydrated, setHydrated] = useState(false);

//   useEffect(() => {
//     setHydrated(true);
//   }, []);

//   if (!hydrated) {
//     return (
//       <header className="bg-blue-800 text-white shadow-lg">
//         <div className="container mx-auto px-6 py-4 flex justify-between items-center">
//           <div className="text-2xl font-bold">Riders Share</div>
//           <div className="flex gap-8">
//             <div className="w-20 h-6 bg-gray-300 rounded animate-pulse" />
//             <div className="w-20 h-6 bg-gray-300 rounded animate-pulse" />
//             <div className="w-20 h-6 bg-gray-300 rounded animate-pulse" />
//             <div className="w-24 h-10 bg-gray-300 rounded animate-pulse" />
//           </div>
//         </div>
//       </header>
//     );
//   }

//   return (
//     <header className="bg-blue-800 text-white shadow-lg">
//       <div className="container mx-auto px-6 py-4 flex justify-between items-center">
//         <Link to="/" className="text-2xl font-bold">
//           Riders Share
//         </Link>

//         <nav className="flex items-center gap-8">
//           <Link to="/" className="hover:underline">
//             Home
//           </Link>
//           <Link to="/sample" className="hover:underline">
//             Shareholders
//           </Link>
//           <Link to="/deposit" className="hover:underline">
//             Deposit
//           </Link>
//           <Link to="/reports" className="hover:underline">
//             Reports
//           </Link>

//           <Link to="/login" className="bg-green-600 hover:bg-green-700 px-6 py-2 rounded">
//             Login
//           </Link>
//         </nav>
//       </div>
//     </header>
//   );
// }
// app/components/ClientHeader.tsx
import { useEffect, useState } from "react";

export function ClientHeader() {
  const [hydrated, setHydrated] = useState(false);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;

    const readUser = () => {
      const match = document.cookie.match(/__session=([^;]+)/);
      if (match) {
        try {
          const session = JSON.parse(atob(match[1]));
          setUser(session.user);
        } catch {
          setUser(null);
        }
      } else {
        setUser(null);
      }
    };

    readUser();
    const interval = setInterval(readUser, 30000000);

    return () => clearInterval(interval);
  }, [hydrated]);

  if (!hydrated) {
    return (
      <header className="bg-gradient-to-r from-green-900 to-green-700 text-white shadow-lg">
        <div className="container mx-auto px-6 py-5 flex justify-between items-center">
          <div className="text-3xl font-bold">Riders Share</div>
          <div className="flex gap-10">
            <div className="w-24 h-6 bg-gray-300 rounded animate-pulse" />
            <div className="w-24 h-6 bg-gray-300 rounded animate-pulse" />
            <div className="w-24 h-6 bg-gray-300 rounded animate-pulse" />
            <div className="w-32 h-10 bg-gray-300 rounded animate-pulse" />
          </div>
        </div>
      </header>
    );
  }

  const role = user?.role || "";

  const isAdmin = role === "ADMIN";

  const showShareholders = isAdmin || role === "MASTER_ENCODER" || role === "SHAREHOLDER_ENCODER";
  const showDeposit = isAdmin || role === "MASTER_ENCODER" || role === "DEPOSIT_ENCODER";
  const showReports = isAdmin || role === "MASTER_ENCODER" || role === "AUDITOR";
  const showAttendance = isAdmin || role === "MASTER_ENCODER" || role === "ATTENDANCE_ENCODER";
  const showAttendanceReport = isAdmin || role === "MASTER_ENCODER" || role === "AUDITOR";
  return (
    <header className="bg-gradient-to-r from-green-900 to-green-700 text-white shadow-xl">
      <div className="container mx-auto px-6 py-5 flex justify-between items-center">
        <a href="/" className="text-3xl font-bold tracking-tight hover:text-yellow-300 transition">
          Riders Share
        </a>

        <nav className="flex items-center gap-10 text-lg font-medium">
          <a href="/" className="hover:text-yellow-300 transition">
            Home
          </a>

          {showShareholders && (
            <a href="/sample" className="hover:text-yellow-300 transition">
              Shareholders
            </a>
          )}

          {showDeposit && (
            <a href="/deposit" className="hover:text-yellow-300 transition">
              Deposit
            </a>
          )}

          {showReports && (
            <a href="/reports" className="hover:text-yellow-300 transition">
              Reports
            </a>
          )}
          {showAttendance && (
  <a href="/attendance" className="hover:text-yellow-300 transition">
    Attendance
  </a>
)}


{showAttendanceReport && (
  <a href="/attendance-report" className="hover:text-yellow-300 transition">
    Attendance Report
  </a>
)}

          {user ? (
            <div className="flex items-center gap-8 border-l-4 border-yellow-400 pl-8">
              <div className="text-base">
                Logged in as <strong className="text-yellow-300">{user.username}</strong>
                <span className="block text-sm opacity-90">
                  ({role.replace("_", " ")})
                </span>
              </div>
              <form action="/logout" method="post">
                <button
                  type="submit"
                  className="bg-red-600 hover:bg-red-700 px-8 py-3 rounded-lg font-semibold transition shadow-md hover:shadow-lg"
                >
                  Logout
                </button>
              </form>
            </div>
          ) : (
            <a
              href="/"
              className="bg-green-700 hover:bg-green-600 px-10 py-3 rounded-lg font-semibold transition shadow-md hover:shadow-lg"
            >
              Login
            </a>
          )}
        </nav>
      </div>
    </header>
  );
}
