// app/routes/deposit/helpers/services.server.ts
import { query } from "~/services/db.server";

export async function getAllShareholders() {
  return query(
    `SELECT shareholder_id, name_english, name_amharic, primary_phone 
     FROM shareholders 
     ORDER BY shareholder_id`
  );
}

export async function createDeposit(data: {
  shareholderId: string;
  depositDate: string;
  amount: number;
  paymentMethod: string;
  receiptNumber: string;
  notes?: string;
}) {
  const { shareholderId, depositDate, amount, paymentMethod, receiptNumber, notes } = data;

  await query(
    `UPDATE shareholders SET receipt_num = ? WHERE shareholder_id = ?`,
    [receiptNumber, shareholderId]
  );

  await query(
    `INSERT INTO deposits 
     (shareholder_id, deposit_date, amount, payment_method, receipt_number, notes, created_by)
     VALUES (?, ?, ?, ?, ?, ?, ?)`,
    [shareholderId, depositDate, amount, paymentMethod, receiptNumber, notes || null, "deposit-encoder"]
  );
}