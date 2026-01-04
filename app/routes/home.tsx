// import { Button } from "~/components/ui/button";
// import type { Route } from "../+types/root";
// import { Link } from "react-router";

// export function meta({}: Route.MetaArgs) {
//   return [
//     { title: "Riders Share Management System" },
//     {
//       name: "description",
//       content: "Welcome to Riders Share Management System",
//     },
//   ];
// }

// export default function Home() {
//   // this part is button
//   return <Button>Hello Riders <br />
//   <Link to="/sample">Shareholders</Link><br /><br /><br />
//  <Link to="/deposit">Record Deposit</Link>

  
//   </Button>;
// }
import { Link } from "react-router-dom";
import { getUser } from "~/services/auth.server";
import { Button } from "~/components/ui/button";

export async function loader({ request }: { request: Request }) {
  const user = getUser(request);
  return { user };
}

export default function Home({ loaderData }: { loaderData: { user: any } }) {
  const { user } = loaderData;

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col items-center justify-center px-6">
      <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 text-center">
        Riders Share Management System
      </h1>

      <p className="text-xl text-gray-600 mb-12 text-center max-w-2xl">
        Secure cooperative management for shareholders and deposits.
      </p>

      {user ? (
        <>
          <p className="text-lg mb-8">
            Welcome back, <strong>{user.username}</strong> ({user.role})
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <Button asChild size="lg">
              <Link to="/sample">Manage Shareholders</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/deposit">Record Deposit</Link>
            </Button>
          </div>
          <form action="/logout" method="post" className="mt-8">
            <button type="submit" className="text-red-600 hover:underline">
              Logout
            </button>
          </form>
        </>
      ) : (
        <Button asChild size="lg">
          <Link to="/login">Login to Continue</Link>
        </Button>
      )}
    </div>
  );
}