import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "~/components/ui/table";
import { Button } from "~/components/ui/button";
import { Pencil, Trash } from "lucide-react";

type Sample = {
  id: number;
  name_english: string;
  name_amharic: string;
  nationality: string;
  city: string;
  primary_phone: string;
  email: string;
};

export function SamplesTable({
  samples,
  onEdit,
  onDelete,
}: {
  samples: Sample[];
  onEdit: (s: Sample) => void;
  onDelete: (id: number) => void;
}) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>English Name</TableHead>
          <TableHead>Amharic Name</TableHead>
          <TableHead>Nationality</TableHead>
          <TableHead>City</TableHead>
          <TableHead>Phone</TableHead>
          <TableHead>Email</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {samples.map((s) => (
          <TableRow key={s.id}>
            <TableCell>{s.name_english}</TableCell>
            <TableCell>{s.name_amharic}</TableCell>
            <TableCell>{s.nationality}</TableCell>
            <TableCell>{s.city}</TableCell>
            <TableCell>{s.primary_phone}</TableCell>
            <TableCell>{s.email}</TableCell>

            <TableCell className="text-right space-x-2">
              <Button
                size="icon"
                variant="outline"
                onClick={() => onEdit(s)}
              >
                <Pencil className="h-4 w-4" />
              </Button>

              <Button
                size="icon"
                variant="destructive"
                onClick={() => onDelete(s.id)}
              >
                <Trash className="h-4 w-4" />
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
