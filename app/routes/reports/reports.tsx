// // app/routes/reports/reports.tsx
// import { useLoaderData } from "react-router-dom";
// import * as XLSX from "xlsx";
// import { getAll } from "~/routes/sample/helpers/services.server";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "~/components/ui/table";

// export async function loader() {
//   try {
//     const samples = await getAll();
//     return { samples };
//   } catch (err) {
//     console.error("Reports loader error:", err);
//     throw new Response("Failed to load data", { status: 500 });
//   }
// }

// export default function Reports() {
//   const data = useLoaderData() as { samples: any[] };
//   const samples = data?.samples || [];

//   const exportToExcel = () => {
//     const ws = XLSX.utils.json_to_sheet(samples);
//     const wb = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(wb, ws, "Shareholders");
//     XLSX.writeFile(wb, "shareholders_report.xlsx");
//   };

//   return (
//     <div className="container mx-auto p-6">
//       <h1 className="text-3xl font-bold mb-8">Shareholders Report</h1>

//       <button
//         onClick={exportToExcel}
//         className="mb-6 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg"
//       >
//         Export to Excel
//       </button>

//       <div className="rounded-md border overflow-x-auto">
//         <Table>
//           <TableHeader>
//             <TableRow>
//               <TableHead>Shareholder ID</TableHead>
//               <TableHead>Name (English)</TableHead>
//               <TableHead>Gender</TableHead>
//               <TableHead>Nationality</TableHead>
//               <TableHead>Birth Date (English)</TableHead>
//               <TableHead>National ID No</TableHead>
//               <TableHead>TIN No</TableHead>
//               <TableHead>Residency Status</TableHead>
//               <TableHead>Primary Phone</TableHead>
//               <TableHead>Email</TableHead>
//               <TableHead>Subscribed Share</TableHead>
//               <TableHead>Receipt No</TableHead>
//             </TableRow>
//           </TableHeader>
//           <TableBody>
//             {samples.length === 0 ? (
//               <TableRow>
//                 <TableCell colSpan={12} className="text-center py-8 text-gray-500">
//                   No shareholders found.
//                 </TableCell>
//               </TableRow>
//             ) : (
//               samples.map((sample) => (
//                 <TableRow key={sample.shareholder_id}>
//                   <TableCell className="font-mono">{sample.shareholder_id}</TableCell>
//                   <TableCell>{sample.name_english}</TableCell>
//                   <TableCell>{sample.gender || "-"}</TableCell>
//                   <TableHead>Nationality</TableHead>
//                   <TableCell>{sample.birth_date_english || "-"}</TableCell>
//                   <TableCell>{sample.national_id_num || "-"}</TableCell>
//                   <TableCell>{sample.tin_num || "-"}</TableCell>
//                   <TableCell>{sample.residency_status || "-"}</TableCell>
//                   <TableCell>{sample.primary_phone || "-"}</TableCell>
//                   <TableCell>{sample.email || "-"}</TableCell>
//                   <TableCell className="text-right">{sample.subscribed_share || 0}</TableCell>
//                   <TableCell>{sample.receipt_num || "-"}</TableCell>
//                 </TableRow>
//               ))
//             )}
//           </TableBody>
//         </Table>
//       </div>
//     </div>
//   );
// }
// app/routes/reports/reports.tsx
// app/routes/reports/reports.tsx
import * as XLSX from "xlsx";
import { getAll } from "~/routes/sample/helpers/services.server";
import { requireRole } from "~/services/auth.server";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";

export async function loader({ request }: { request: Request }) {
  requireRole(request, ["ADMIN", "MASTER_ENCODER", "AUDITOR"]);

  const samples = await getAll();
  return { samples };
}

export default function Reports({ loaderData }: { loaderData: { samples: any[] } }) {
  const samples = loaderData.samples || [];

  const exportToExcel = () => {
    const ws = XLSX.utils.json_to_sheet(samples);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Shareholders");
    XLSX.writeFile(wb, "shareholders_report.xlsx");
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Shareholders Report</h1>

      <button
        onClick={exportToExcel}
        className="mb-6 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg"
      >
        Export to Excel
      </button>

      <div className="rounded-md border overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Shareholder ID</TableHead>
              <TableHead>Name (English)</TableHead>
              <TableHead>Gender</TableHead>
              <TableHead>Nationality</TableHead>
              <TableHead>Birth Date (English)</TableHead>
              <TableHead>National ID No</TableHead>
              <TableHead>TIN No</TableHead>
              <TableHead>Residency Status</TableHead>
              <TableHead>Primary Phone</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Subscribed Share</TableHead>
              <TableHead>Receipt No</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {samples.length === 0 ? (
              <TableRow>
                <TableCell colSpan={12} className="text-center py-8 text-gray-500">
                  No shareholders found.
                </TableCell>
              </TableRow>
            ) : (
              samples.map((sample) => (
                <TableRow key={sample.shareholder_id}>
                  <TableCell className="font-mono">{sample.shareholder_id}</TableCell>
                  <TableCell>{sample.name_english}</TableCell>
                  <TableCell>{sample.gender || "-"}</TableCell>
                  <TableCell>{sample.nationality || "-"}</TableCell>
                  <TableCell>{sample.birth_date_english || "-"}</TableCell>
                  <TableCell>{sample.national_id_num || "-"}</TableCell>
                  <TableCell>{sample.tin_num || "-"}</TableCell>
                  <TableCell>{sample.residency_status || "-"}</TableCell>
                  <TableCell>{sample.primary_phone || "-"}</TableCell>
                  <TableCell>{sample.email || "-"}</TableCell>
                  <TableCell className="text-right">{sample.subscribed_share || 0}</TableCell>
                  <TableCell>{sample.receipt_num || "-"}</TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}