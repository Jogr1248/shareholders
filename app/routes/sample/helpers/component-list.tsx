
// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "~/components/ui/table";
// import { DeleteForm } from "./component-form-delete";
// import { EditButton } from "./component-input";
// import type { Sample } from "./validation";
// import { string } from "zod";
// // --- Add these states ---
// import { useState, useMemo } from "react";

// type SortConfig = {
//   key: keyof Sample;
//   direction: "asc" | "desc";
// };


// type DisplaySamplesProps = {
//   samples: Sample[];
//   setEditSample: (sample: Sample) => void;
//   setIsModalOpen: (isModalOpen: boolean) => void;
// };

// export default function DisplaySamplesTable({
//   samples,
//   setEditSample,
//   setIsModalOpen,
// }: DisplaySamplesProps) {
//   const handleEdit = (sample: Sample) => {
//     setEditSample(sample);
//     setIsModalOpen(true);
//   };
//   // --- Sorting ---
// const [sortConfig, setSortConfig] = useState<SortConfig | null>(null);

// const handleSort = (key: keyof Sample) => {
//   setSortConfig((prev) => {
//     if (prev?.key === key) {
//       return {
//         key,
//         direction: prev.direction === "asc" ? "desc" : "asc",
//       };
//     }
//     return { key, direction: "asc" };
//   });
// };
// // --- Pagination ---
// const [page, setPage] = useState(1);
// const pageSize = 10;

// const paginatedData = useMemo(() => {
//   let data = [...samples];

//   // Apply sorting
//  if (sortConfig) {
//   data.sort((a, b) => {
//     let aVal = a[sortConfig.key];
//     let bVal = b[sortConfig.key];

//     // Prevent null/undefined comparison error
//     if (aVal === null || aVal === undefined) aVal = "";
//     if (bVal === null || bVal === undefined) bVal = "";

//     if (aVal < bVal) return sortConfig.direction === "asc" ? -1 : 1;
//     if (aVal > bVal) return sortConfig.direction === "asc" ? 1 : -1;
//     return 0;
//   });
// }


//   // Calculate pages
//   const start = (page - 1) * pageSize;
//   return data.slice(start, start + pageSize);
// }, [samples, sortConfig, page]);

// // --- Filters ---
// const [search, setSearch] = useState("");

// const filteredAndSorted = useMemo(() => {
//   let data = samples;

//   // Filter by name or shareholder_id
//   if (search.trim() !== "") {
//     data = data.filter((s) =>
//       `${s.shareholder_id} ${s.name_english}`
//         .toLowerCase()
//         .includes(search.toLowerCase())
//     );
//   }

//   return data;
// }, [samples, search]);


//   return (
//     <div className="rounded-md border overflow-x-auto">
//       <div className="p-3 flex justify-between items-center">
//   <input
//     type="text"
//     placeholder="Search..."
//     value={search}
//     onChange={(e) => {
//       setSearch(e.target.value);
//       setPage(1); // reset page
//     }}
//     className="border rounded px-3 py-1"
//   />

//   <div className="flex space-x-2">
//     <button
//       disabled={page === 1}
//       onClick={() => setPage((p) => p - 1)}
//       className="border px-3 py-1 rounded disabled:opacity-50"
//     >
//       Prev
//     </button>

//     <button
//       disabled={page * pageSize >= filteredAndSorted.length}
//       onClick={() => setPage((p) => p + 1)}
//       className="border px-3 py-1 rounded disabled:opacity-50"
//     >
//       Next
//     </button>
//   </div>
// </div>

//       <Table>
//         <TableHeader>
//           <TableRow>
//             <TableHead onClick={() => handleSort("shareholder_id")} className="cursor-pointer">
//   Shareholder ID
//   {sortConfig?.key === "shareholder_id" ? (sortConfig.direction === "asc" ? " ↑" : " ↓") : ""}
// </TableHead>
// <TableHead onClick={() => handleSort("name_english")} className="cursor-pointer">
//   Name (English)
//   {sortConfig?.key === "name_english" ? (sortConfig.direction === "asc" ? " ↑" : " ↓") : ""}
// </TableHead>

//             {/* <TableHead>Shareholder ID</TableHead> */}
//             {/* <TableHead>Name (English)</TableHead> */}
//             {/* <TableHead>Name (Amharic)</TableHead> */}
//             <TableHead>Gender</TableHead>
//             <TableHead>Nationality</TableHead>
//             {/* <TableHead>Birth Date (Amharic)</TableHead> */}
//             <TableHead>Birth Date (English)</TableHead>
//             <TableHead>National ID No</TableHead>
//             {/* <TableHead>Passport No</TableHead> */}
//             <TableHead>TIN No</TableHead>
//             <TableHead>Residency Status</TableHead>
//             {/* <TableHead>City</TableHead>
//             <TableHead>Sub City</TableHead>
//             <TableHead>Wereda</TableHead> */}
//             {/* <TableHead>House No</TableHead> */}
//             <TableHead>Primary Phone</TableHead>
//             {/* <TableHead>Secondary Phone</TableHead> */}
//             <TableHead>Email</TableHead>
//             {/* <TableHead>Dividend Bank</TableHead>
//             <TableHead>Bank Account</TableHead> */}
//             <TableHead>Subscribed Share</TableHead>
//             <TableHead>Receipt No</TableHead>
//             {/* <TableHead>Certificate No</TableHead>
//             <TableHead>Certificate Taken</TableHead>
//             <TableHead>Medina Comment</TableHead>
//             <TableHead>General Comment</TableHead> */}
//             <TableHead className="text-right">Actions</TableHead>
//           </TableRow>
//         </TableHeader>

//         <TableBody>
//           {paginatedData.map((sample) => (
//             <TableRow key={sample.shareholder_id}>
//               <TableCell>{sample.shareholder_id}</TableCell>
//               <TableCell>{sample.name_english}</TableCell>
//               {/* <TableCell>{sample.name_amharic}</TableCell> */}
//               <TableCell>{sample.gender}</TableCell>
//               <TableCell>{sample.nationality}</TableCell>
//               {/* <TableCell>{sample.birth_date_amharic}</TableCell> */}
//               <TableCell>{sample.birth_date_english}</TableCell>
//               <TableCell>{sample.national_id_num}</TableCell>
//               {/* <TableCell>{sample.passport_num}</TableCell> */}
//               <TableCell>{sample.tin_num}</TableCell>
//               <TableCell>{sample.residency_status}</TableCell>
//               {/* <TableCell>{sample.city}</TableCell>
//               <TableCell>{sample.sub_city}</TableCell>
//               <TableCell>{sample.wereda}</TableCell> */}
//               {/* <TableCell>{sample.house_number}</TableCell> */}
//               <TableCell>{sample.primary_phone}</TableCell>
//               {/* <TableCell>{sample.secondary_phone}</TableCell> */}
//               <TableCell>{sample.email}</TableCell>
//               {/* <TableCell>{sample.dividend_bank_name}</TableCell>
//               <TableCell>{sample.dividend_bank_account}</TableCell> */}
//               <TableCell>{sample.subscribed_share}</TableCell>
//               <TableCell>{sample.receipt_num}</TableCell>
//               {/* <TableCell>{sample.certificate_num}</TableCell>
//               <TableCell>{sample.is_certificate_taken ? "Yes" : "No"}</TableCell>
//               <TableCell>{sample.medina_comment}</TableCell>
//               <TableCell>{sample.general_comment}</TableCell> */}

//               <TableCell className="text-right flex space-x-2 justify-end">
//                 <EditButton sample={sample} handleEdit={handleEdit} />
//                 <DeleteForm shareholder_id={sample.shareholder_id } />
//               </TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </div>
//   );
// }
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";
import { DeleteForm } from "./component-form-delete";
import { EditButton } from "./component-input";
import type { Sample } from "./validation";

import { useState, useMemo } from "react";

type SortConfig = {
  key: keyof Sample;
  direction: "asc" | "desc";
};

type DisplaySamplesProps = {
  samples: Sample[];
  setEditSample: (sample: Sample) => void;
  setIsModalOpen: (isModalOpen: boolean) => void;
};

export default function DisplaySamplesTable({
  samples,
  setEditSample,
  setIsModalOpen,
}: DisplaySamplesProps) {
  const handleEdit = (sample: Sample) => {
    setEditSample(sample);
    setIsModalOpen(true);
  };

  // ---------------------
  // 🔹 SORTING
  // ---------------------
  const [sortConfig, setSortConfig] = useState<SortConfig | null>(null);

  const handleSort = (key: keyof Sample) => {
    setSortConfig((prev) => {
      if (prev?.key === key) {
        return {
          key,
          direction: prev.direction === "asc" ? "desc" : "asc",
        };
      }
      return { key, direction: "asc" };
    });
  };

  // ---------------------
  // 🔹 SEARCH FILTER
  // ---------------------
  const [search, setSearch] = useState("");

  const filteredData = useMemo(() => {
    if (!search.trim()) return samples;

    return samples.filter((s) =>
      `${s.shareholder_id} ${s.name_english}`
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  }, [samples, search]);

  // ---------------------
  // 🔹 SORT + FILTER TOGETHER
  // ---------------------
  const sortedData = useMemo(() => {
    let data = [...filteredData];

    if (sortConfig) {
      data.sort((a, b) => {
        let aVal = a[sortConfig.key];
        let bVal = b[sortConfig.key];

        if (aVal === null || aVal === undefined) aVal = "";
        if (bVal === null || bVal === undefined) bVal = "";

        if (aVal < bVal) return sortConfig.direction === "asc" ? -1 : 1;
        if (aVal > bVal) return sortConfig.direction === "asc" ? 1 : -1;
        return 0;
      });
    }

    return data;
  }, [filteredData, sortConfig]);

  // ---------------------
  // 🔹 PAGINATION ON FILTERED + SORTED DATA
  // ---------------------
  const [page, setPage] = useState(1);
  const pageSize = 10;

  const paginatedData = useMemo(() => {
    const start = (page - 1) * pageSize;
    return sortedData.slice(start, start + pageSize);
  }, [sortedData, page]);

  return (
    <div className="rounded-md border overflow-x-auto">
      {/* Top Bar (Search + Pagination Buttons) */}
      <div className="p-3 flex justify-between items-center">
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setPage(1);
          }}
          className="border rounded px-3 py-1"
        />

        <div className="flex space-x-2">
          <button
            disabled={page === 1}
            onClick={() => setPage((p) => p - 1)}
            className="border px-3 py-1 rounded disabled:opacity-50"
          >
            Prev
          </button>

          <button
            disabled={page * pageSize >= sortedData.length}
            onClick={() => setPage((p) => p + 1)}
            className="border px-3 py-1 rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>

      {/* TABLE */}
      <Table>
        <TableHeader>
          <TableRow>
            {/* Sortable Columns */}
            <TableHead
              onClick={() => handleSort("shareholder_id")}
              className="cursor-pointer"
            >
              Shareholder ID{" "}
              {sortConfig?.key === "shareholder_id"
                ? sortConfig.direction === "asc"
                  ? "↑"
                  : "↓"
                : ""}
            </TableHead>

            <TableHead
              onClick={() => handleSort("name_english")}
              className="cursor-pointer"
            >
              Name (English){" "}
              {sortConfig?.key === "name_english"
                ? sortConfig.direction === "asc"
                  ? "↑"
                  : "↓"
                : ""}
            </TableHead>

            {/* Fixed Columns */}
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

            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {paginatedData.map((sample) => (
            <TableRow key={sample.shareholder_id}>
              <TableCell>{sample.shareholder_id}</TableCell>
              <TableCell>{sample.name_english}</TableCell>
              <TableCell>{sample.gender}</TableCell>
              <TableCell>{sample.nationality}</TableCell>
              <TableCell>{sample.birth_date_english}</TableCell>
              <TableCell>{sample.national_id_num}</TableCell>
              <TableCell>{sample.tin_num}</TableCell>
              <TableCell>{sample.residency_status}</TableCell>
              <TableCell>{sample.primary_phone}</TableCell>
              <TableCell>{sample.email}</TableCell>
              <TableCell>{sample.subscribed_share}</TableCell>
              <TableCell>{sample.receipt_num}</TableCell>

              <TableCell className="text-right flex space-x-2 justify-end">
                <EditButton sample={sample} handleEdit={handleEdit} />
                <DeleteForm shareholder_id={sample.shareholder_id} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
