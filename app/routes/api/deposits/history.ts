// app/routes/api/deposits/history.ts
import { query } from "~/services/db.server";

export async function loader({ request }: { request: Request }) {
  const url = new URL(request.url);
  const shareholderId = url.searchParams.get("shareholder_id");

  if (!shareholderId) {
    return new Response(JSON.stringify({ deposits: [] }), { status: 400 });
  }

  const deposits = await query(
    `SELECT * FROM deposits WHERE shareholder_id = ? ORDER BY deposit_date DESC`,
    [shareholderId]
  );

  return new Response(JSON.stringify({ deposits }), {
    headers: { "Content-Type": "application/json" },
  });
}