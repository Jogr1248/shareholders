// app/routes/shareholder-deposits.ts
import { query } from "~/services/db.server";

export async function loader({ request }: { request: Request }) {
  const url = new URL(request.url);
  const shareholderId = url.searchParams.get("shareholder_id");

  if (!shareholderId) {
    return new Response(JSON.stringify({ deposits: [] }), {
      headers: { "Content-Type": "application/json" },
    });
  }

  const deposits = await query(
    `SELECT deposit_date, amount, payment_method, receipt_number, notes
     FROM deposits
     WHERE shareholder_id = ?
     ORDER BY deposit_date DESC`,
    [shareholderId]
  );

  return new Response(JSON.stringify({ deposits }), {
    headers: { "Content-Type": "application/json" },
  });
}