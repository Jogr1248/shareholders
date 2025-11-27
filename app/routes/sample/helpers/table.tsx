// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "~/components/ui/table";
// import { Button } from "~/components/ui/button";
// import { Pencil, Trash } from "lucide-react";
// import type { Sample } from "./validation";

// export function SamplesTable({
//   samples,
//   onEdit,
//   onDelete,
// }: {
//   samples: Sample[];
//   onEdit: (s: Sample) => void;
//   onDelete: (shareholder_id: string) => void;
// }) {
//   return (
//     <div className="overflow-x-auto rounded-md border">
//       <Table>
//         <TableHeader>
//           <TableRow>
//             <TableHead>Shareholder ID</TableHead>
//             <TableHead>Name (English)</TableHead>
//             <TableHead>Name (Amharic)</TableHead>
//             <TableHead>Gender</TableHead>
//             <TableHead>Nationality</TableHead>
//             <TableHead>Birth Date (Amharic)</TableHead>
//             <TableHead>Birth Date (English)</TableHead>
//             <TableHead>National ID</TableHead>
//             <TableHead>Passport No</TableHead>
//             <TableHead>TIN</TableHead>
//             <TableHead>Residency Status</TableHead>
//             <TableHead>City</TableHead>
//             <TableHead>Sub City</TableHead>
//             <TableHead>Wereda</TableHead>
//             <TableHead>House No</TableHead>
//             <TableHead>Primary Phone</TableHead>
//             <TableHead>Secondary Phone</TableHead>
//             <TableHead>Email</TableHead>
//             <TableHead>Dividend Bank</TableHead>
//             <TableHead>Bank Account</TableHead>
//             <TableHead>Subscribed Share</TableHead>
//             <TableHead>Receipt No</TableHead>
//             <TableHead>Certificate No</TableHead>
//             <TableHead>Certificate Taken?</TableHead>
//             <TableHead>Medina Comment</TableHead>
//             <TableHead>General Comment</TableHead>
//             <TableHead className="text-right">Actions</TableHead>
//           </TableRow>
//         </TableHeader>

//         <TableBody>
//           {samples.map((s) => (
//             <TableRow key={s.shareholder_id}>
//               <TableCell>{s.shareholder_id}</TableCell>
//               <TableCell>{s.name_english}</TableCell>
//               <TableCell>{s.name_amharic}</TableCell>
//               <TableCell>{s.gender}</TableCell>
//               <TableCell>{s.nationality}</TableCell>
//               <TableCell>{s.birth_date_amharic}</TableCell>
//               <TableCell>{s.birth_date_english}</TableCell>
//               <TableCell>{s.national_id_num}</TableCell>
//               <TableCell>{s.passport_num}</TableCell>
//               <TableCell>{s.tin_num}</TableCell>
//               <TableCell>{s.residency_status}</TableCell>
//               <TableCell>{s.city}</TableCell>
//               <TableCell>{s.sub_city}</TableCell>
//               <TableCell>{s.wereda}</TableCell>
//               <TableCell>{s.house_number}</TableCell>
//               <TableCell>{s.primary_phone}</TableCell>
//               <TableCell>{s.secondary_phone}</TableCell>
//               <TableCell>{s.email}</TableCell>
//               <TableCell>{s.dividend_bank_name}</TableCell>
//               <TableCell>{s.dividend_bank_account}</TableCell>
//               <TableCell>{s.subscribed_share}</TableCell>
//               <TableCell>{s.receipt_num}</TableCell>
//               <TableCell>{s.certificate_num}</TableCell>
//               <TableCell>{s.is_certificate_taken ? "Yes" : "No"}</TableCell>
//               <TableCell>{s.medina_comment}</TableCell>
//               <TableCell>{s.general_comment}</TableCell>

//               <TableCell className="text-right space-x-2">
//                 <Button
//                   size="icon"
//                   variant="outline"
//                   onClick={() => onEdit(s)}
//                 >
//                   <Pencil className="h-4 w-4" />
//                 </Button>

//                 <Button
//                   size="icon"
//                   variant="destructive"
//                   onClick={() => onDelete(s.shareholder_id)}
//                 >
//                   <Trash className="h-4 w-4" />
//                 </Button> 
//               </TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </div>
//   );
// }
