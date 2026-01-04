import { Button } from "~/components/ui/button";
import type { Route } from "../+types/root";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Riders Share Management System" },
    {
      name: "description",
      content: "Welcome to Riders Share Management System",
    },
  ];
}

export default function Home() {
  // this part is button
  return <Button>Hello Riders <br />
  <Link to="/sample">Shareholders</Link><br /><br /><br />
 <Link to="/deposit">Record Deposit</Link>

  
  </Button>;
}
// app/routes/root.tsx (or wherever your home route is)
// import { Button } from "~/components/ui/button";
// import type { Route } from "../+types/root";
// import { Link } from "react-router-dom"; // ← Fixed: correct import

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
//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-6">
//       <h1 className="text-5xl font-bold text-gray-800 mb-8 text-center">
//         Riders Share Management System
//       </h1>
//       <p className="text-xl text-gray-600 mb-12 text-center max-w-2xl">
//         Manage shareholders, record deposits, generate reports, and maintain accurate financial records.
//       </p>

//       <div className="space-x-6">
//         <Button asChild size="lg" className="text-lg px-8 py-6">
//           <Link to="/sample">Go to Shareholders</Link>
//         </Button>

//         <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6">
//           <Link to="/deposit">Record Deposit</Link>
//         </Button>
//       </div>

//       <p className="mt-12 text-sm text-gray-500">
//         © 2026 Riders Share Cooperative
//       </p>
//     </div>
//   );
// }