// app/routes/deposit/deposit.tsx
import { useState } from "react";
import { Link } from "react-router-dom";
// import { Button } from "~/components/ui/button";
import { handleDepositAction } from "./helpers/action-handler";
import { DepositSearch } from "./helpers/deposit-search";
import { DepositForm } from "./helpers/deposit-form";
import { getAllShareholders } from "./helpers/services.server";
import { requireRole } from "~/services/auth.server";


export async function loader({ request }: { request: Request }) {
  // Protect the route
  requireRole(request, ["ADMIN", "MASTER_ENCODER", "DEPOSIT_ENCODER"]);

  const shareholders = await getAllShareholders();
  return { shareholders };
}

export async function action({ request }: { request: Request }) {
  return handleDepositAction(request);
}

export default function DepositPage({ loaderData }: { loaderData: { shareholders: any[] } }) {
  const { shareholders } = loaderData;

  const [selectedShareholder, setSelectedShareholder] = useState<any | null>(null);

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-8">
        <Link to="/" className="text-blue-600 hover:underline">
          🏠 Home
        </Link>
        <h1 className="text-3xl font-bold">Deposit Encoder</h1>
        <div />
      </div>

      {!selectedShareholder ? (
        <DepositSearch
          shareholders={shareholders}
          onSelect={setSelectedShareholder}
        />
      ) : (
        <DepositForm
          shareholder={selectedShareholder}
          onBack={() => setSelectedShareholder(null)}
        />
      )}
    </div>
  );
}