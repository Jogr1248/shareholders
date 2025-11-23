// import { DeleteForm } from "./component-form-delete";
// import { DisplayName_english, DisplayNationality, DisplayName_amharic,DisplayCity,DisplayWereda,DisplayHouse_number,DisplayPrimary_phone,DisplaySecondary_phone,DisplayEmail, DisplaySub_city } 
// from "./component-data";
// import type { Sample } from "./validation";
// import { EditButton } from "./component-input";

// type DisplaySamplesProps = {
//   samples: Sample[];
//   setEditSample: (sample: Sample) => void;
//   setIsModalOpen: (isModalOpen: boolean) => void;
// };

// export default function ({
//   samples,
//   setEditSample,
//   setIsModalOpen,
// }: DisplaySamplesProps) {
//   const handleEdit = (sample: Sample) => {
//     setEditSample(sample);
//     setIsModalOpen(true);
//   };

//   return samples.map((sample) => (
//     <div
//       key={sample.id}
//       className="border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition flex justify-between items-center"
//     >
//       <div className="flex items-center space-x-4">
//         <div>
//           <DisplayName_english name_english={sample.name_english} />
//           <DisplayName_amharic name_amharic={sample.name_amharic} />
//           <DisplayNationality nationality={sample.nationality} />
//           <DisplayCity city={sample.city} />
//           <DisplaySub_city sub_city={sample.sub_city} />
//           <DisplayWereda wereda={sample.wereda} />
//           <DisplayHouse_number house_number={sample.house_number} />
//           <DisplayPrimary_phone primary_phone={sample.primary_phone} />
//           <DisplaySecondary_phone secondary_phone={sample.secondary_phone} />
//           <DisplayEmail email={sample.email} />
//         </div>
//       </div>
//       <div className="flex space-x-2">
//         <EditButton sample={sample} handleEdit={handleEdit} />
//         <DeleteForm id={sample.id} />
//       </div>
//     </div>
//   ));
// }
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "~/components/ui/table";
import { DeleteForm } from "./component-form-delete";
import { EditButton } from "./component-input";
import type { Sample } from "./validation";

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

  return (
    <div className="rounded-md border overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name (English)</TableHead>
            <TableHead>Name (Amharic)</TableHead>
            <TableHead>Nationality</TableHead>
            <TableHead>City</TableHead>
            <TableHead>Sub City</TableHead>
            <TableHead>Wereda</TableHead>
            <TableHead>House No</TableHead>
            <TableHead>Primary Phone</TableHead>
            <TableHead>Secondary Phone</TableHead>
            <TableHead>Email</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {samples.map((sample) => (
            <TableRow key={sample.id}>
              <TableCell>{sample.name_english}</TableCell>
              <TableCell>{sample.name_amharic}</TableCell>
              <TableCell>{sample.nationality}</TableCell>
              <TableCell>{sample.city}</TableCell>
              <TableCell>{sample.sub_city}</TableCell>
              <TableCell>{sample.wereda}</TableCell>
              <TableCell>{sample.house_number}</TableCell>
              <TableCell>{sample.primary_phone}</TableCell>
              <TableCell>{sample.secondary_phone}</TableCell>
              <TableCell>{sample.email}</TableCell>

              <TableCell className="text-right flex space-x-2 justify-end">
                <EditButton sample={sample} handleEdit={handleEdit} />
                <DeleteForm id={sample.id} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
