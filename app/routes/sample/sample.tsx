import { useState } from "react";
import { Link } from "react-router";
import { Button } from "~/components/ui/button";
import type { Route } from "./+types/sample";
import { handleAction } from "./helpers/action-handler";
import { DisplayData } from "./helpers/display-data";
import { DisplayForm } from "./helpers/display-form";
import { getAll } from "./helpers/services.server";
import { type Sample } from "./helpers/validation";
import { requireRole } from "~/services/auth.server";



// export async function loader() {
//   const samples = await getAll();
//   return { samples };
//   requireRole(request, ["ADMIN", "MASTER_ENCODER", "SHAREHOLDER_ENCODER"]);
// }
export async function loader({ request }: { request: Request }) {
  // Protect the route — throws 401/403 if not allowed
  requireRole(request, ["ADMIN", "MASTER_ENCODER", "SHAREHOLDER_ENCODER"]);

  const samples = await getAll();
  return { samples };
}
export async function action({ request }: Route.ActionArgs) {
  const formData = await request.formData();

  return handleAction({
    actionType: formData.get("_action") as string,

   shareholder_id: formData.get("shareholder_id") as string,
    name_english: formData.get("name_english") as string,
    name_amharic: formData.get("name_amharic") as string,
    gender: formData.get("gender") as string,
    nationality: formData.get("nationality") as string,

    birth_date_amharic: formData.get("birth_date_amharic") as string,
    birth_date_english: formData.get("birth_date_english") as string | null,

    national_id_num: formData.get("national_id_num") as string,
    passport_num: formData.get("passport_num") as string,
    tin_num: formData.get("tin_num") as string,
    residency_status: formData.get("residency_status") as string,

    city: formData.get("city") as string,
    sub_city: formData.get("sub_city") as string,
    wereda: formData.get("wereda") as string,
    house_number: formData.get("house_number") as string,

    primary_phone: formData.get("primary_phone") as string,
    secondary_phone: formData.get("secondary_phone") as string,
    email: formData.get("email") as string,

    dividend_bank_name: formData.get("dividend_bank_name") as string,
    dividend_bank_account: formData.get("dividend_bank_account") as string,

   subscribed_share: Number(formData.get("subscribed_share") || 0),


    receipt_num: formData.get("receipt_num") as string,
    certificate_num: formData.get("certificate_num") as string,

    // is_certificate_taken:
    //   formData.get("is_certificate_taken") === "true" ? true : false,
    is_certificate_taken :
  formData.get("is_certificate_taken") === "true",

    medina_comment: formData.get("medina_comment") as string,
    general_comment: formData.get("general_comment") as string,

  });
}

export default function SamplePage({ loaderData }: Route.ComponentProps) {
  const { samples } = loaderData;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editSample, setEditSample] = useState<Sample | null>(null);

  const handleInsert = () => {
    setEditSample(null);
    setIsModalOpen(true);
  };

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-8">
        <Link to="/">🏠</Link>
        <h1 className="text-xl font-bold">📦 Shareholders</h1>
        <Button onClick={handleInsert}>+ Create New Shareholder</Button>
      </div>

      <DisplayData
        samples={samples}
        setEditSample={setEditSample}
        setIsModalOpen={setIsModalOpen}
      />

      <DisplayForm
        editSample={editSample}
        isModalOpen={isModalOpen}
        setEditSample={setEditSample}
        setIsModalOpen={setIsModalOpen}
      />
    </div>
  );
}
