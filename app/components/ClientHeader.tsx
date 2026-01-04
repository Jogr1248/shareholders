// app/components/ClientHeader.tsx
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function ClientHeader() {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) {
    // Render placeholder on server
    return (
      <header className="bg-blue-800 text-white shadow-lg">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold">Riders Share</div>
          <div className="flex gap-8">
            <div className="w-20 h-6 bg-gray-300 rounded animate-pulse" />
            <div className="w-20 h-6 bg-gray-300 rounded animate-pulse" />
            <div className="w-20 h-6 bg-gray-300 rounded animate-pulse" />
            <div className="w-24 h-10 bg-gray-300 rounded animate-pulse" />
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className="bg-blue-800 text-white shadow-lg">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          Riders Share
        </Link>

        <nav className="flex items-center gap-8">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <Link to="/sample" className="hover:underline">
            Shareholders
          </Link>
          <Link to="/deposit" className="hover:underline">
            Deposit
          </Link>

          <Link to="/login" className="bg-green-600 hover:bg-green-700 px-6 py-2 rounded">
            Login
          </Link>
        </nav>
      </div>
    </header>
  );
}