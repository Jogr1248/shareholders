// app/routes/sample/helpers/display-form.tsx
import { useEffect, useRef, useState } from "react";
import { useFetcher } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "~/components/ui/dialog";
import {
  InputAction,
  InputShareholderId,
  InputName_english,
  InputName_amharic,
  InputGender,
  InputNationality,
  InputBirthDateAmharic,
  InputBirthDateEnglish,
  InputNationalIdNum,
  InputPassportNum,
  InputTinNum,
  InputResidencyStatus,
  InputCity,
  InputSub_city,
  InputWereda,
  InputHouse_number,
  InputPrimary_phone,
  InputSecondary_phone,
  InputEmail,
  InputDividendBankName,
  InputDividendBankAccount,
  InputSubscribedShare,
  InputReceiptNum,
  InputCertificateNum,
  InputIsCertificateTaken,
  InputMedinaComment,
  InputGeneralComment,
  InputSubmit,
} from "./component-input";
import type { Sample } from "./validation";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";

type FormDialogProps = {
  editSample: Sample | null;
  isModalOpen: boolean;
  setEditSample: (sample: Sample | null) => void;
  setIsModalOpen: (isOpen: boolean) => void;
};

function DepositHistory({ shareholderId }: { shareholderId: string }) {
  const [deposits, setDeposits] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!shareholderId) return;

    setLoading(true);
    fetch(`/api/deposits/history?shareholder_id=${encodeURIComponent(shareholderId)}`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load deposits");
        return res.json();
      })
      .then((data) => setDeposits(data.deposits || []))
      .catch((err) => {
        console.error("Load deposits error:", err);
        setDeposits([]);
      })
      .finally(() => setLoading(false));
  }, [shareholderId]);

  if (loading) return <p className="text-gray-500">Loading deposit history...</p>;
  if (deposits.length === 0) return <p className="text-gray-500 italic">No deposits recorded yet.</p>;

  return (
    <div className="mt-6">
      <h4 className="font-semibold mb-4">Deposit History ({deposits.length})</h4>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Method</TableHead>
            <TableHead>Receipt #</TableHead>
            <TableHead>Notes</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {deposits.map((d) => (
            <TableRow key={d.id}>
              <TableCell>{new Date(d.deposit_date).toLocaleDateString()}</TableCell>
              <TableCell className="text-right">{Number(d.amount).toLocaleString()}</TableCell>
              <TableCell>{d.payment_method}</TableCell>
              <TableCell>{d.receipt_number}</TableCell>
              <TableCell className="max-w-xs truncate">{d.notes || "-"}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export function DisplayForm({
  editSample,
  isModalOpen,
  setEditSample,
  setIsModalOpen,
}: FormDialogProps) {
  const formRef = useRef<HTMLFormElement>(null);
  const fetcher = useFetcher();
  const depositFetcher = useFetcher(); // separate for deposit actions
  const isSubmitting = fetcher.state === "submitting" || depositFetcher.state === "submitting";

  const handleOpenChange = (open: boolean) => {
    if (!open) setEditSample(null);
    setIsModalOpen(open);
  };

  useEffect(() => {
    if (fetcher.data?.success || depositFetcher.data?.success) {
      setIsModalOpen(false);
      setEditSample(null);
      formRef.current?.reset();
    }
  }, [fetcher.data, depositFetcher.data]);

  const isEdit = Boolean(editSample);
  const title = isEdit ? "Edit Shareholder" : "Create New Shareholder";
  const description = isEdit ? "Update shareholder details." : "Add a new shareholder.";

  return (
    <Dialog open={isModalOpen} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-[700px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>

        <fetcher.Form ref={formRef} method="post" className="space-y-6">
          <InputShareholderId fetcherData={fetcher.data} editSample={editSample} />
          <InputAction isEdit={isEdit} />
          <InputName_english fetcherData={fetcher.data} editSample={editSample} />
          <InputName_amharic fetcherData={fetcher.data} editSample={editSample} />
          <InputGender fetcherData={fetcher.data} editSample={editSample} />
          <InputNationality fetcherData={fetcher.data} editSample={editSample} />
          <InputBirthDateAmharic fetcherData={fetcher.data} editSample={editSample} />
          <InputBirthDateEnglish fetcherData={fetcher.data} editSample={editSample} />
          <InputNationalIdNum fetcherData={fetcher.data} editSample={editSample} />
          <InputPassportNum fetcherData={fetcher.data} editSample={editSample} />
          <InputTinNum fetcherData={fetcher.data} editSample={editSample} />
          <InputResidencyStatus fetcherData={fetcher.data} editSample={editSample} />
          <InputCity fetcherData={fetcher.data} editSample={editSample} />
          <InputSub_city fetcherData={fetcher.data} editSample={editSample} />
          <InputWereda fetcherData={fetcher.data} editSample={editSample} />
          <InputHouse_number fetcherData={fetcher.data} editSample={editSample} />
          <InputPrimary_phone fetcherData={fetcher.data} editSample={editSample} />
          <InputSecondary_phone fetcherData={fetcher.data} editSample={editSample} />
          <InputEmail fetcherData={fetcher.data} editSample={editSample} />
          <InputDividendBankName fetcherData={fetcher.data} editSample={editSample} />
          <InputDividendBankAccount fetcherData={fetcher.data} editSample={editSample} />
          <InputSubscribedShare fetcherData={fetcher.data} editSample={editSample} />
          <InputReceiptNum fetcherData={fetcher.data} editSample={editSample} />
          <InputCertificateNum fetcherData={fetcher.data} editSample={editSample} />
          <InputIsCertificateTaken fetcherData={fetcher.data} editSample={editSample} />
          <InputMedinaComment fetcherData={fetcher.data} editSample={editSample} />
          <InputGeneralComment fetcherData={fetcher.data} editSample={editSample} />

          {/* Deposit Section - Only when editing */}
          {isEdit && editSample && (
            <div className="mt-12 pt-8 border-t-4 border-dashed border-gray-300">
              <h3 className="text-2xl font-bold mb-8 text-blue-700">Deposit History & Recording</h3>

              {/* History Table */}
              <DepositHistory shareholderId={editSample.shareholder_id} />

              {/* New Deposit Form */}
              <div className="mt-10 bg-green-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold mb-6 text-green-800">+ Record New Deposit</h4>

                <depositFetcher.Form method="post" action="/sample">
                  <input type="hidden" name="_action" value="create_deposit" />
                  <input type="hidden" name="shareholder_id" value={editSample.shareholder_id} />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-medium mb-1">Deposit Date</label>
                      <input
                        type="date"
                        name="deposit_date"
                        required
                        defaultValue={new Date().toISOString().split("T")[0]}
                        className="w-full border rounded px-4 py-2"
                      />
                    </div>
                    <div>
                      <label className="block font-medium mb-1">Amount</label>
                      <input
                        type="number"
                        name="amount"
                        step="0.01"
                        min="0"
                        required
                        className="w-full border rounded px-4 py-2"
                        placeholder="0.00"
                      />
                    </div>
                    <div>
                      <label className="block font-medium mb-1">Payment Method</label>
                      <select name="payment_method" required className="w-full border rounded px-4 py-2">
                        <option value="Cash">Cash</option>
                        <option value="Check">Check</option>
                        <option value="Bank Transfer">Bank Transfer</option>
                        <option value="Mobile Banking">Mobile Banking</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block font-medium mb-1">Receipt Number</label>
                      <input
                        type="text"
                        name="receipt_number"
                        required
                        className="w-full border rounded px-4 py-2"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block font-medium mb-1">Notes (optional)</label>
                      <textarea
                        name="notes"
                        rows={3}
                        className="w-full border rounded px-4 py-2"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={depositFetcher.state !== "idle"}
                    className="mt-6 bg-green-600 text-white px-8 py-3 rounded font-bold hover:bg-green-700 disabled:opacity-50"
                  >
                    {depositFetcher.state !== "idle" ? "Saving..." : "Record Deposit"}
                  </button>

                  {depositFetcher.data?.success && (
                    <p className="mt-4 text-green-700 font-bold">✓ Deposit recorded successfully!</p>
                  )}
                  {depositFetcher.data?.error && (
                    <p className="mt-4 text-red-600">{depositFetcher.data.error}</p>
                  )}
                </depositFetcher.Form>
              </div>
            </div>
          )}

          <DialogFooter>
            <InputSubmit isEdit={isEdit} isSubmitting={isSubmitting} />
          </DialogFooter>
        </fetcher.Form>
      </DialogContent>
    </Dialog>
  );
}