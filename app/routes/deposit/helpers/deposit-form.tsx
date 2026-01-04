// app/routes/deposit/helpers/deposit-form.tsx
import { useFetcher } from "react-router-dom";

type Props = {
  shareholder: any;
  onBack: () => void;
};

export function DepositForm({ shareholder, onBack }: Props) {
  const fetcher = useFetcher();
  const isSubmitting = fetcher.state !== "idle";

  return (
    <div className="bg-white p-8 rounded shadow">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">Selected Shareholder</h2>
        <p className="text-lg">
          {shareholder.name_english} ({shareholder.name_amharic})
        </p>
        <p>ID: {shareholder.shareholder_id}</p>
        <p>Phone: {shareholder.primary_phone || "N/A"}</p>
        <button onClick={onBack} className="text-red-600 mt-4">
          Change Shareholder
        </button>
      </div>

      <fetcher.Form method="post">
        <input type="hidden" name="intent" value="create" />
        <input type="hidden" name="shareholder_id" value={shareholder.shareholder_id} />

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
              required
              className="w-full border rounded px-4 py-2"
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Payment Method</label>
            <select name="payment_method" required className="w-full border rounded px-4 py-2">
              <option>Cash</option>
              <option>Check</option>
              <option>Bank Transfer</option>
              <option>Mobile Banking</option>
            </select>
          </div>
          <div>
            <label className="block font-medium mb-1">Receipt Number</label>
            <input type="text" name="receipt_number" required className="w-full border rounded px-4 py-2" />
          </div>
          <div className="md:col-span-2">
            <label className="block font-medium mb-1">Notes</label>
            <textarea name="notes" rows={4} className="w-full border rounded px-4 py-2" />
          </div>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="mt-8 bg-green-600 text-white px-8 py-3 rounded font-bold hover:bg-green-700 disabled:opacity-50"
        >
          {isSubmitting ? "Saving..." : "Record Deposit"}
        </button>
      </fetcher.Form>

      {fetcher.data?.success && (
        <p className="mt-6 text-green-600 font-bold">Deposit recorded successfully!</p>
      )}
      {fetcher.data?.error && (
        <p className="mt-6 text-red-600">{fetcher.data.error}</p>
      )}
    </div>
  );
}