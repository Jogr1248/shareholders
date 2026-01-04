// app/routes/api/deposits.ts
import { query } from "~/services/db.server";

export async function action({ request }: { request: Request }) {
  if (request.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), { status: 405 });
  }

  const formData = await request.formData();
  const intent = formData.get("intent");

  if (intent === "create") {
    const shareholderId = String(formData.get("shareholder_id") ?? "").trim().toUpperCase();
    const depositDate = formData.get("deposit_date") as string;
    const amount = Number(formData.get("amount"));
    const paymentMethod = formData.get("payment_method") as string;
    const receiptNumber = formData.get("receipt_number") as string;
    const notes = (formData.get("notes") as string) || null;

    if (!shareholderId || !depositDate || amount <= 0 || !paymentMethod || !receiptNumber) {
      return new Response(JSON.stringify({ error: "All required fields must be filled" }), { status: 400 });
    }

    try {
      // Update latest receipt
      await query(
        `UPDATE shareholders SET receipt_num = ? WHERE shareholder_id = ?`,
        [receiptNumber, shareholderId]
      );

      // Insert deposit
      await query(
        `INSERT INTO deposits (shareholder_id, deposit_date, amount, payment_method, receipt_number, notes, created_by)
         VALUES (?, ?, ?, ?, ?, ?, ?)`,
        [shareholderId, depositDate, amount, paymentMethod, receiptNumber, notes, "deposit-encoder"]
      );

      return new Response(JSON.stringify({ success: true }), { status: 200 });
    } catch (err) {
      console.error("Deposit save failed:", err);
      return new Response(JSON.stringify({ error: "Failed to save deposit" }), { status: 500 });
    }
  }

  return new Response(JSON.stringify({ error: "Invalid intent" }), { status: 400 });
}