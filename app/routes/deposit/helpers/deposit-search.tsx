// app/routes/deposit/helpers/deposit-search.tsx
import { useState } from "react";

type Props = {
  shareholders: any[];
  onSelect: (shareholder: any) => void;
};

export function DepositSearch({ shareholders, onSelect }: Props) {
  const [search, setSearch] = useState("");

  const filtered = shareholders.filter((sh) =>
    `${sh.shareholder_id} ${sh.name_english} ${sh.name_amharic} ${sh.primary_phone || ""}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="bg-white p-8 rounded shadow">
      <h2 className="text-2xl font-semibold mb-6">Search Shareholder</h2>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search by ID, name, or phone..."
        className="w-full border rounded px-4 py-2 mb-6"
      />

      <div className="space-y-4 max-h-96 overflow-y-auto">
        {filtered.map((sh) => (
          <div
            key={sh.shareholder_id}
            onClick={() => onSelect(sh)}
            className="p-4 border rounded cursor-pointer hover:bg-gray-50"
          >
            <div className="font-bold">{sh.shareholder_id} - {sh.name_english}</div>
            <div>({sh.name_amharic})</div>
            <div className="text-sm text-gray-600">Phone: {sh.primary_phone || "N/A"}</div>
          </div>
        ))}
      </div>
    </div>
  );
}