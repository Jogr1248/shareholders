// app/routes/deposit/helpers/action-handler.ts
import { createDeposit } from "./services.server";

export async function handleDepositAction(request: Request) {
  const formData = await request.formData();
  const intent = formData.get("intent");

  if (intent === "create") {
    const shareholderId = String(formData.get("shareholder_id") ?? "").trim().toUpperCase();
    const depositDate = formData.get("deposit_date") as string;
    const amount = Number(formData.get("amount"));
    const paymentMethod = formData.get("payment_method") as string;
    const receiptNumber = formData.get("receipt_number") as string;
    const notes = (formData.get("notes") as string) || undefined;

    if (!shareholderId || !depositDate || amount <= 0 || !paymentMethod || !receiptNumber) {
      return { success: false, error: "All required fields must be filled" };
    }

    try {
      await createDeposit({
        shareholderId,
        depositDate,
        amount,
        paymentMethod,
        receiptNumber,
        notes,
      });
      return { success: true, message: "Deposit recorded successfully!" };
    } catch (err) {
      console.error("Deposit failed:", err);
      return { success: false, error: "Failed to save deposit" };
    }
  }

  return { success: false, error: "Invalid action" };
}