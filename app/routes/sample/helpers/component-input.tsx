// import { Edit } from "lucide-react";
// import { Button } from "~/components/ui/button";
// import { Input } from "~/components/ui/input";
// import { Label } from "~/components/ui/label";
// import type { Sample } from "./validation";

// export function InputShareholderId({ fetcherData, editSample }: any) {
//   const value =
//     editSample?.shareholder_id ??
//     fetcherData?.fields?.shareholder_id ??
//     "";

//   return (
//     <div className="space-y-2">
//       <Label htmlFor="shareholder_id">Shareholder ID</Label>

//       <Input
//         id="shareholder_id"
//         name="shareholder_id"
//         required
//         defaultValue={value}
//         aria-invalid={Boolean(fetcherData?.errors?.shareholder_id)}
//         aria-describedby="shareholder_id-error"
//         placeholder="e.g. SH-00123"
//       />

//       {fetcherData?.errors?.shareholder_id && (
//         <p id="shareholder_id-error" className="text-sm text-red-500">
//           {fetcherData.errors.shareholder_id[0]}
//         </p>
//       )}
//     </div>
//   );
// }



// export function InputAction({ isEdit }: { isEdit: boolean }) {
//   return (
//     <input type="hidden" name="_action" value={isEdit ? "update" : "create"} />
//   );
// }

// export function InputName_english({
//   fetcherData,
//   editSample,
// }: {
//   fetcherData: any;
//   editSample: Sample | null;
// }) {
//   return (
//     <div className="space-y-2">
//       <Label htmlFor="name_english">English_name</Label>
//       <Input
//         id="name_english"
//         name="name_english"
//         defaultValue={fetcherData?.fields?.name_english ?? editSample?.name_english ?? ""}
//         aria-invalid={Boolean(fetcherData?.errors?.name_english)}
//         aria-describedby="name_english-error"
//         placeholder="e.g. John girma"
//       />
//       {fetcherData?.errors?.name_english && (
//         <p id="name_english-error" className="text-sm text-red-500">
//           {fetcherData.errors.name_english[0]}
//         </p>
//       )}
//     </div>
//   );
// }

// export function InputName_amharic({
//   fetcherData,
//   editSample,
// }: {
//   fetcherData: any;
//   editSample: Sample | null;
// }) {
//   return (
//     <div className="space-y-2">
//       <Label htmlFor="name_amharic">Amharic_name</Label>
//       <Input
//         id="name_amharic"
//         name="name_amharic"
//         defaultValue={fetcherData?.fields?.name_amharic ?? editSample?.name_amharic ?? ""}
//         aria-invalid={Boolean(fetcherData?.errors?.name_amharic)}
//         aria-describedby="name_amharic-error"
//         placeholder="amharic name"
//       />
//       {fetcherData?.errors?.name_amharic && (
//         <p id="name_amharic-error" className="text-sm text-red-500">
//           {fetcherData.errors.name_amharic[0]}
//         </p>
//       )}
//     </div>
//   );
// }
// export function InputGender({ fetcherData, editSample }: any) {
//   return (
//     <div className="space-y-2">
//       <Label htmlFor="gender">Gender</Label>
//       <Input
//         id="gender"
//         name="gender"
//         defaultValue={fetcherData?.fields?.gender ?? editSample?.gender ?? ""}
//         aria-invalid={Boolean(fetcherData?.errors?.gender)}
//         aria-describedby="gender-error"
//         placeholder="e.g. Male"
//       />
//       {fetcherData?.errors?.gender && (
//         <p id="gender-error" className="text-sm text-red-500">
//           {fetcherData.errors.gender[0]}
//         </p>
//       )}
//     </div>
//   );
// }
// export function InputNationality({
//   fetcherData,
//   editSample,
// }: {
//   fetcherData: any;
//   editSample: Sample | null;
// }) {
//   return (
//     <div className="space-y-2">
//       <Label htmlFor="nationality">Nationality</Label>
//       <Input
//         id="nationality"
//         name="nationality"
//         defaultValue={fetcherData?.fields?.nationality ?? editSample?.nationality?? ""}
//         aria-invalid={Boolean(fetcherData?.errors?.nationality)}
//         aria-describedby="nationality-error"
//         placeholder="e.g. Ethiopia"
//       />
//       {fetcherData?.errors?.name_nationality && (
//         <p id="nationality-error" className="text-sm text-red-500">
//           {fetcherData.errors.nationality[0]}
//         </p>
//       )}
//     </div>
//   );
// }

// // ---------------------- BIRTH DATE AMHARIC ----------------------
// export function InputBirthDateAmharic({ fetcherData, editSample }: any) {
//   return (
//     <div className="space-y-2">
//       <Label htmlFor="birth_date_amharic">Birth Date (Amharic)</Label>
//       <Input
//         id="birth_date_amharic"
//         name="birth_date_amharic"
//         defaultValue={fetcherData?.fields?.birth_date_amharic ?? editSample?.birth_date_amharic ?? ""}
//         aria-invalid={Boolean(fetcherData?.errors?.birth_date_amharic)}
//         aria-describedby="birth_date_amharic-error"
//         placeholder="e.g. 1985/10/12"
//       />
//       {fetcherData?.errors?.birth_date_amharic && (
//         <p id="birth_date_amharic-error" className="text-sm text-red-500">
//           {fetcherData.errors.birth_date_amharic[0]}
//         </p>
//       )}
//     </div>
//   );
// }

// // ---------------------- BIRTH DATE ENGLISH ----------------------
// export function InputBirthDateEnglish({ fetcherData, editSample }: any) {
//   return (
//     <div className="space-y-2">
//       <Label htmlFor="birth_date_english">Birth Date (English)</Label>
//       <Input
//         id="birth_date_english"
//         type="date"
//         name="birth_date_english"
//         defaultValue={fetcherData?.fields?.birth_date_english ?? editSample?.birth_date_english ?? ""}
//         aria-invalid={Boolean(fetcherData?.errors?.birth_date_english)}
//         aria-describedby="birth_date_english-error"
//       />
//       {fetcherData?.errors?.birth_date_english && (
//         <p id="birth_date_english-error" className="text-sm text-red-500">
//           {fetcherData.errors.birth_date_english[0]}
//         </p>
//       )}
//     </div>
//   );
// }

// // ---------------------- NATIONAL ID ----------------------
// export function InputNationalIdNum({ fetcherData, editSample }: any) {
//   return (
//     <div className="space-y-2">
//       <Label htmlFor="national_id_num">National ID Number</Label>
//       <Input
//         id="national_id_num"
//         name="national_id_num"
//         defaultValue={fetcherData?.fields?.national_id_num ?? editSample?.national_id_num ?? ""}
//         aria-invalid={Boolean(fetcherData?.errors?.national_id_num)}
//         aria-describedby="national_id_num-error"
//       />
//       {fetcherData?.errors?.national_id_num && (
//         <p id="national_id_num-error" className="text-sm text-red-500">
//           {fetcherData.errors.national_id_num[0]}
//         </p>
//       )}
//     </div>
//   );
// }

// // ---------------------- PASSPORT NUMBER ----------------------
// export function InputPassportNum({ fetcherData, editSample }: any) {
//   return (
//     <div className="space-y-2">
//       <Label htmlFor="passport_num">Passport Number</Label>
//       <Input
//         id="passport_num"
//         name="passport_num"
//         defaultValue={fetcherData?.fields?.passport_num ?? editSample?.passport_num ?? ""}
//         aria-invalid={Boolean(fetcherData?.errors?.passport_num)}
//         aria-describedby="passport_num-error"
//       />
//       {fetcherData?.errors?.passport_num && (
//         <p id="passport_num-error" className="text-sm text-red-500">
//           {fetcherData.errors.passport_num[0]}
//         </p>
//       )}
//     </div>
//   );
// }

// // ---------------------- TIN NUMBER ----------------------
// export function InputTinNum({ fetcherData, editSample }: any) {
//   return (
//     <div className="space-y-2">
//       <Label htmlFor="tin_num">TIN Number</Label>
//       <Input
//         id="tin_num"
//         name="tin_num"
//         defaultValue={fetcherData?.fields?.tin_num ?? editSample?.tin_num ?? ""}
//         aria-invalid={Boolean(fetcherData?.errors?.tin_num)}
//         aria-describedby="tin_num-error"
//       />
//       {fetcherData?.errors?.tin_num && (
//         <p id="tin_num-error" className="text-sm text-red-500">
//           {fetcherData.errors.tin_num[0]}
//         </p>
//       )}
//     </div>
//   );
// }

// // ---------------------- RESIDENCY STATUS ----------------------
// export function InputResidencyStatus({ fetcherData, editSample }: any) {
//   return (
//     <div className="space-y-2">
//       <Label htmlFor="residency_status">Residency Status</Label>
//       <Input
//         id="residency_status"
//         name="residency_status"
//         defaultValue={fetcherData?.fields?.residency_status ?? editSample?.residency_status ?? ""}
//         aria-invalid={Boolean(fetcherData?.errors?.residency_status)}
//         aria-describedby="residency_status-error"
//       />
//       {fetcherData?.errors?.residency_status && (
//         <p id="residency_status-error" className="text-sm text-red-500">
//           {fetcherData.errors.residency_status[0]}
//         </p>
//       )}
//     </div>
//   );
// }
// export function InputCity({
//   fetcherData,
//   editSample,
// }: {
//   fetcherData: any;
//   editSample: Sample | null;
// }) {
//   return (
//     <div className="space-y-2">
//       <Label htmlFor="city">City</Label>
//       <Input
//         id="city"
//         name="city"
//         defaultValue={fetcherData?.fields?.city ?? editSample?.city?? ""}
//         aria-invalid={Boolean(fetcherData?.errors?.city)}
//         aria-describedby="city-error"
//         placeholder="e.g. Addis Ababa"
//       />
//       {fetcherData?.errors?.city && (
//         <p id="city-error" className="text-sm text-red-500">
//           {fetcherData.errors.city[0]}
//         </p>
//       )}
//     </div>
//   );
// }
// export function InputSub_city({
//   fetcherData,
//   editSample,
// }: {
//   fetcherData: any;
//   editSample: Sample | null;
// }) {
//   return (
//     <div className="space-y-2">
//       <Label htmlFor="sub_city">Sub_city</Label>
//       <Input
//         id="sub_city"
//         name="sub_city"
//         defaultValue={fetcherData?.fields?.sub_city ?? editSample?.sub_city?? ""}
//         aria-invalid={Boolean(fetcherData?.errors?.sub_city)}
//         aria-describedby="city-error"
//         placeholder="e.g. "
//       />
//       {fetcherData?.errors?.sub_city && (
//         <p id="sub_city-error" className="text-sm text-red-500">
//           {fetcherData.errors.sub_city[0]}
//         </p>
//       )}
//     </div>
//   );
// }
// export function InputWereda({
//   fetcherData,
//   editSample,
// }: {
//   fetcherData: any;
//   editSample: Sample | null;
// }) {
//   return (
//     <div className="space-y-2">
//       <Label htmlFor="wereda">Wereda</Label>
//       <Input
//         id="wereda"
//         name="wereda"
//         defaultValue={fetcherData?.fields?.wereda ?? editSample?.wereda?? ""}
//         aria-invalid={Boolean(fetcherData?.errors?.wereda)}
//         aria-describedby="wereda-error"
//         placeholder="e.g. "
//       />
//       {fetcherData?.errors?.wereda && (
//         <p id="wereda-error" className="text-sm text-red-500">
//           {fetcherData.errors.wereda[0]}
//         </p>
//       )}
//     </div>
//   );
// }
// export function InputHouse_number({
//   fetcherData,
//   editSample,
// }: {
//   fetcherData: any;
//   editSample: Sample | null;
// }) {
//   return (
//     <div className="space-y-2">
//       <Label htmlFor="house_number">House_number</Label>
//       <Input
//         id="house_number"
//         name="house_number"
//         defaultValue={fetcherData?.fields?.house_number ?? editSample?.house_number?? ""}
//         aria-invalid={Boolean(fetcherData?.errors?.house_number)}
//         aria-describedby="house_number-error"
//         placeholder="e.g. "
//       />
//       {fetcherData?.errors?.house_number && (
//         <p id="house_number-error" className="text-sm text-red-500">
//           {fetcherData.errors.house_number[0]}
//         </p>
//       )}
//     </div>
//   );
// }
// export function InputPrimary_phone({
//   fetcherData,
//   editSample,
// }: {
//   fetcherData: any;
//   editSample: Sample | null;
// }) {
//   return (
//     <div className="space-y-2">
//       <Label htmlFor="primary_phone">Primary_phone</Label>
//       <Input
//         id="primary_phone"
//         name="primary_phone"
//         defaultValue={fetcherData?.fields?.primary_phone ?? editSample?.primary_phone?? ""}
//         aria-invalid={Boolean(fetcherData?.errors?.primary_phone)}
//         aria-describedby="primary_phone-error"
//         placeholder="e.g. "
//       />
//       {fetcherData?.errors?.primary_phone && (
//         <p id="primary_phone-error" className="text-sm text-red-500">
//           {fetcherData.errors.primary_phone[0]}
//         </p>
//       )}
//     </div>
//   );
// }
// export function InputSecondary_phone({
//   fetcherData,
//   editSample,
// }: {
//   fetcherData: any;
//   editSample: Sample | null;
// }) {
//   return (
//     <div className="space-y-2">
//       <Label htmlFor="secondary_phone">Secondary_phone</Label>
//       <Input
//         id="secondary_phone"
//         name="secondary_phone"
//         defaultValue={fetcherData?.fields?.secondary_phone ?? editSample?.secondary_phone?? ""}
//         aria-invalid={Boolean(fetcherData?.errors?.secondary_phone)}
//         aria-describedby="secondary_phone-error"
//         placeholder="e.g. "
//       />
//       {fetcherData?.errors?.secondary_phone && (
//         <p id="secondary_phone-error" className="text-sm text-red-500">
//           {fetcherData.errors.secondary_phone[0]}
//         </p>
//       )}
//     </div>
//   );
// }

// export function InputEmail({
//   fetcherData,
//   editSample,
// }: {
//   fetcherData: any;
//   editSample: Sample | null;
// }) {
//   return (
//     <div className="space-y-2">
//       <Label htmlFor="email">Email</Label>
//       <Input
//         id="email"
//         name="email"
//         defaultValue={fetcherData?.fields?.email ?? editSample?.email?? ""}
//         aria-invalid={Boolean(fetcherData?.errors?.email)}
//         aria-describedby="email-error"
//         placeholder="e.g."
//       />
//       {fetcherData?.errors?.email && (
//         <p id="email-error" className="text-sm text-red-500">
//           {fetcherData.errors.email[0]}
//         </p>
//       )}
//     </div>
//   );
// }
// export function InputDividendBankName({ fetcherData, editSample }: any) {
//   return (
//     <div className="space-y-2">
//       <Label htmlFor="dividend_bank_name">Dividend Bank Name</Label>
//       <Input
//         id="dividend_bank_name"
//         name="dividend_bank_name"
//         defaultValue={fetcherData?.fields?.dividend_bank_name ?? editSample?.dividend_bank_name ?? ""}
//         aria-invalid={Boolean(fetcherData?.errors?.dividend_bank_name)}
//         aria-describedby="dividend_bank_name-error"
//       />
//       {fetcherData?.errors?.dividend_bank_name && (
//         <p id="dividend_bank_name-error" className="text-sm text-red-500">
//           {fetcherData.errors.dividend_bank_name[0]}
//         </p>
//       )}
//     </div>
//   );
// }

// // ---------------------- DIVIDEND BANK ACCOUNT ----------------------
// export function InputDividendBankAccount({ fetcherData, editSample }: any) {
//   return (
//     <div className="space-y-2">
//       <Label htmlFor="dividend_bank_account">Dividend Bank Account</Label>
//       <Input
//         id="dividend_bank_account"
//         name="dividend_bank_account"
//         defaultValue={fetcherData?.fields?.dividend_bank_account ?? editSample?.dividend_bank_account ?? ""}
//         aria-invalid={Boolean(fetcherData?.errors?.dividend_bank_account)}
//         aria-describedby="dividend_bank_account-error"
//       />
//       {fetcherData?.errors?.dividend_bank_account && (
//         <p id="dividend_bank_account-error" className="text-sm text-red-500">
//           {fetcherData.errors.dividend_bank_account[0]}
//         </p>
//       )}
//     </div>
//   );
// }

// // ---------------------- SUBSCRIBED SHARE ----------------------
// export function InputSubscribedShare({ fetcherData, editSample }: any) {
//   return (
//     <div className="space-y-2">
//       <Label htmlFor="subscribed_share">Subscribed Share</Label>
//       <Input
//         id="subscribed_share"
//         type="number"
//         name="subscribed_share"
//         defaultValue={fetcherData?.fields?.subscribed_share ?? editSample?.subscribed_share ?? ""}
//         aria-invalid={Boolean(fetcherData?.errors?.subscribed_share)}
//         aria-describedby="subscribed_share-error"
//       />
//       {fetcherData?.errors?.subscribed_share && (
//         <p id="subscribed_share-error" className="text-sm text-red-500">
//           {fetcherData.errors.subscribed_share[0]}
//         </p>
//       )}
//     </div>
//   );
// }

// // ---------------------- RECEIPT NUMBER ----------------------
// export function InputReceiptNum({ fetcherData, editSample }: any) {
//   return (
//     <div className="space-y-2">
//       <Label htmlFor="receipt_num">Receipt Number</Label>
//       <Input
//         id="receipt_num"
//         name="receipt_num"
//         defaultValue={fetcherData?.fields?.receipt_num ?? editSample?.receipt_num ?? ""}
//         aria-invalid={Boolean(fetcherData?.errors?.receipt_num)}
//         aria-describedby="receipt_num-error"
//       />
//       {fetcherData?.errors?.receipt_num && (
//         <p id="receipt_num-error" className="text-sm text-red-500">
//           {fetcherData.errors.receipt_num[0]}
//         </p>
//       )}
//     </div>
//   );
// }

// // ---------------------- CERTIFICATE NUMBER ----------------------
// export function InputCertificateNum({ fetcherData, editSample }: any) {
//   return (
//     <div className="space-y-2">
//       <Label htmlFor="certificate_num">Certificate Number</Label>
//       <Input
//         id="certificate_num"
//         name="certificate_num"
//         defaultValue={fetcherData?.fields?.certificate_num ?? editSample?.certificate_num ?? ""}
//         aria-invalid={Boolean(fetcherData?.errors?.certificate_num)}
//         aria-describedby="certificate_num-error"
//       />
//       {fetcherData?.errors?.certificate_num && (
//         <p id="certificate_num-error" className="text-sm text-red-500">
//           {fetcherData.errors.certificate_num[0]}
//         </p>
//       )}
//     </div>
//   );
// }

// // ---------------------- IS CERTIFICATE TAKEN ----------------------
// export function InputIsCertificateTaken({ fetcherData, editSample }: any) {
//   return (
//     <div className="space-y-2">
//       <Label htmlFor="is_certificate_taken">Certificate Taken?</Label>
//       <Input
//         id="is_certificate_taken"
//         type="checkbox"
//         name="is_certificate_taken"
//         defaultChecked={fetcherData?.fields?.is_certificate_taken ?? editSample?.is_certificate_taken ?? false}
//         aria-invalid={Boolean(fetcherData?.errors?.is_certificate_taken)}
//         aria-describedby="is_certificate_taken-error"
//       />
//       {fetcherData?.errors?.is_certificate_taken && (
//         <p id="is_certificate_taken-error" className="text-sm text-red-500">
//           {fetcherData.errors.is_certificate_taken[0]}
//         </p>
//       )}

//     </div>
//   );
// }

// // ---------------------- MEDINA COMMENT ----------------------
// export function InputMedinaComment({ fetcherData, editSample }: any) {
//   return (
//     <div className="space-y-2">
//       <Label htmlFor="medina_comment">Medina Comment</Label>
//       <Input
//         id="medina_comment"
//         name="medina_comment"
//         defaultValue={fetcherData?.fields?.medina_comment ?? editSample?.medina_comment ?? ""}
//         aria-invalid={Boolean(fetcherData?.errors?.medina_comment)}
//         aria-describedby="medina_comment-error"
//       />
//       {fetcherData?.errors?.medina_comment && (
//         <p id="medina_comment-error" className="text-sm text-red-500">
//           {fetcherData.errors.medina_comment[0]}
//         </p>
//       )}
//     </div>
//   );
// }

// // ---------------------- GENERAL COMMENT ----------------------
// export function InputGeneralComment({ fetcherData, editSample }: any) {
//   return (
//     <div className="space-y-2">
//       <Label htmlFor="general_comment">General Comment</Label>
//       <Input
//         id="general_comment"
//         name="general_comment"
//         defaultValue={fetcherData?.fields?.general_comment ?? editSample?.general_comment ?? ""}
//         aria-invalid={Boolean(fetcherData?.errors?.general_comment)}
//         aria-describedby="general_comment-error"
//       />
//       {fetcherData?.errors?.general_comment && (
//         <p id="general_comment-error" className="text-sm text-red-500">
//           {fetcherData.errors.general_comment[0]}
//         </p>
//       )}
//     </div>
//   );
// }

// export function InputSubmit({
//   isEdit,
//   isSubmitting,
// }: {
//   isEdit: boolean;
//   isSubmitting: boolean;
// }) {
//   const submitButtonText = isEdit ? "Update" : "Create";
//   return (
//     <Button type="submit" disabled={isSubmitting}>
//       {isSubmitting ? "Processing..." : submitButtonText}
//     </Button>
//   );
// }

// export function EditButton({
//   sample,
//   handleEdit,
// }: {
//   sample: Sample;
//   handleEdit: (sample: Sample) => void;
// }) {
//   return (
//     <Button variant="outline" size="icon" onClick={() => handleEdit(sample)}>
//       <Edit className="h-4 w-4" />
//     </Button>
//   );
// }
// app/routes/sample/helpers/component-input.tsx
import { Edit } from "lucide-react";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import type { Sample } from "./validation";

export function InputShareholderId({ editSample }: { editSample?: Sample | null }) {
  return (
    <div className="space-y-2">
      <Label htmlFor="shareholder_id">Shareholder ID</Label>

      <Input
        id="shareholder_id"
        name="shareholder_id"
        required
        defaultValue={editSample?.shareholder_id ?? ""}
        placeholder="e.g. SH-00123"
      />
    </div>
  );
}

export function InputAction({ isEdit }: { isEdit: boolean }) {
  return (
    <input type="hidden" name="_action" value={isEdit ? "update" : "create"} />
  );
}

export function InputName_english({ editSample }: { editSample?: Sample | null }) {
  return (
    <div className="space-y-2">
      <Label htmlFor="name_english">English Name</Label>
      <Input
        id="name_english"
        name="name_english"
        defaultValue={editSample?.name_english ?? ""}
        placeholder="e.g. John Girma"
      />
    </div>
  );
}

export function InputName_amharic({ editSample }: { editSample?: Sample | null }) {
  return (
    <div className="space-y-2">
      <Label htmlFor="name_amharic">Amharic Name</Label>
      <Input
        id="name_amharic"
        name="name_amharic"
        defaultValue={editSample?.name_amharic ?? ""}
        placeholder="የአማርኛ ስም"
      />
    </div>
  );
}

export function InputGender({ editSample }: { editSample?: Sample | null }) {
  return (
    <div className="space-y-2">
      <Label htmlFor="gender">Gender</Label>
      <Input
        id="gender"
        name="gender"
        defaultValue={editSample?.gender ?? ""}
        placeholder="e.g. Male"
      />
    </div>
  );
}

export function InputNationality({ editSample }: { editSample?: Sample | null }) {
  return (
    <div className="space-y-2">
      <Label htmlFor="nationality">Nationality</Label>
      <Input
        id="nationality"
        name="nationality"
        defaultValue={editSample?.nationality ?? ""}
        placeholder="e.g. Ethiopia"
      />
    </div>
  );
}

export function InputBirthDateAmharic({ editSample }: { editSample?: Sample | null }) {
  return (
    <div className="space-y-2">
      <Label htmlFor="birth_date_amharic">Birth Date (Amharic)</Label>
      <Input
        id="birth_date_amharic"
        name="birth_date_amharic"
        defaultValue={editSample?.birth_date_amharic ?? ""}
        placeholder="e.g. 1985/10/12"
      />
    </div>
  );
}

export function InputBirthDateEnglish({ editSample }: { editSample?: Sample | null }) {
  return (
    <div className="space-y-2">
      <Label htmlFor="birth_date_english">Birth Date (English)</Label>
      <Input
        id="birth_date_english"
        type="date"
        name="birth_date_english"
        defaultValue={editSample?.birth_date_english ?? ""}
      />
    </div>
  );
}

export function InputNationalIdNum({ editSample }: { editSample?: Sample | null }) {
  return (
    <div className="space-y-2">
      <Label htmlFor="national_id_num">National ID Number</Label>
      <Input
        id="national_id_num"
        name="national_id_num"
        defaultValue={editSample?.national_id_num ?? ""}
      />
    </div>
  );
}

export function InputPassportNum({ editSample }: { editSample?: Sample | null }) {
  return (
    <div className="space-y-2">
      <Label htmlFor="passport_num">Passport Number</Label>
      <Input
        id="passport_num"
        name="passport_num"
        defaultValue={editSample?.passport_num ?? ""}
      />
    </div>
  );
}

export function InputTinNum({ editSample }: { editSample?: Sample | null }) {
  return (
    <div className="space-y-2">
      <Label htmlFor="tin_num">TIN Number</Label>
      <Input
        id="tin_num"
        name="tin_num"
        defaultValue={editSample?.tin_num ?? ""}
      />
    </div>
  );
}

export function InputResidencyStatus({ editSample }: { editSample?: Sample | null }) {
  return (
    <div className="space-y-2">
      <Label htmlFor="residency_status">Residency Status</Label>
      <Input
        id="residency_status"
        name="residency_status"
        defaultValue={editSample?.residency_status ?? ""}
      />
    </div>
  );
}

export function InputCity({ editSample }: { editSample?: Sample | null }) {
  return (
    <div className="space-y-2">
      <Label htmlFor="city">City</Label>
      <Input
        id="city"
        name="city"
        defaultValue={editSample?.city ?? ""}
        placeholder="e.g. Addis Ababa"
      />
    </div>
  );
}

export function InputSub_city({ editSample }: { editSample?: Sample | null }) {
  return (
    <div className="space-y-2">
      <Label htmlFor="sub_city">Sub City</Label>
      <Input
        id="sub_city"
        name="sub_city"
        defaultValue={editSample?.sub_city ?? ""}
      />
    </div>
  );
}

export function InputWereda({ editSample }: { editSample?: Sample | null }) {
  return (
    <div className="space-y-2">
      <Label htmlFor="wereda">Wereda</Label>
      <Input
        id="wereda"
        name="wereda"
        defaultValue={editSample?.wereda ?? ""}
      />
    </div>
  );
}

export function InputHouse_number({ editSample }: { editSample?: Sample | null }) {
  return (
    <div className="space-y-2">
      <Label htmlFor="house_number">House Number</Label>
      <Input
        id="house_number"
        name="house_number"
        defaultValue={editSample?.house_number ?? ""}
      />
    </div>
  );
}

export function InputPrimary_phone({ editSample }: { editSample?: Sample | null }) {
  return (
    <div className="space-y-2">
      <Label htmlFor="primary_phone">Primary Phone</Label>
      <Input
        id="primary_phone"
        name="primary_phone"
        defaultValue={editSample?.primary_phone ?? ""}
      />
    </div>
  );
}

export function InputSecondary_phone({ editSample }: { editSample?: Sample | null }) {
  return (
    <div className="space-y-2">
      <Label htmlFor="secondary_phone">Secondary Phone</Label>
      <Input
        id="secondary_phone"
        name="secondary_phone"
        defaultValue={editSample?.secondary_phone ?? ""}
      />
    </div>
  );
}

export function InputEmail({ editSample }: { editSample?: Sample | null }) {
  return (
    <div className="space-y-2">
      <Label htmlFor="email">Email</Label>
      <Input
        id="email"
        name="email"
        type="email"
        defaultValue={editSample?.email ?? ""}
      />
    </div>
  );
}

export function InputDividendBankName({ editSample }: { editSample?: Sample | null }) {
  return (
    <div className="space-y-2">
      <Label htmlFor="dividend_bank_name">Dividend Bank Name</Label>
      <Input
        id="dividend_bank_name"
        name="dividend_bank_name"
        defaultValue={editSample?.dividend_bank_name ?? ""}
      />
    </div>
  );
}

export function InputDividendBankAccount({ editSample }: { editSample?: Sample | null }) {
  return (
    <div className="space-y-2">
      <Label htmlFor="dividend_bank_account">Dividend Bank Account</Label>
      <Input
        id="dividend_bank_account"
        name="dividend_bank_account"
        defaultValue={editSample?.dividend_bank_account ?? ""}
      />
    </div>
  );
}

export function InputSubscribedShare({ editSample }: { editSample?: Sample | null }) {
  return (
    <div className="space-y-2">
      <Label htmlFor="subscribed_share">Subscribed Share</Label>
      <Input
        id="subscribed_share"
        name="subscribed_share"
        type="number"
        min="0"
        defaultValue={editSample?.subscribed_share ?? ""}
      />
    </div>
  );
}

export function InputReceiptNum({ editSample }: { editSample?: Sample | null }) {
  return (
    <div className="space-y-2">
      <Label htmlFor="receipt_num">Receipt Number</Label>
      <Input
        id="receipt_num"
        name="receipt_num"
        defaultValue={editSample?.receipt_num ?? ""}
      />
    </div>
  );
}

export function InputCertificateNum({ editSample }: { editSample?: Sample | null }) {
  return (
    <div className="space-y-2">
      <Label htmlFor="certificate_num">Certificate Number</Label>
      <Input
        id="certificate_num"
        name="certificate_num"
        defaultValue={editSample?.certificate_num ?? ""}
      />
    </div>
  );
}

export function InputIsCertificateTaken({ editSample }: { editSample?: Sample | null }) {
  return (
    <div className="space-y-2 flex items-center">
      <input
        id="is_certificate_taken"
        name="is_certificate_taken"
        type="checkbox"
        defaultChecked={editSample?.is_certificate_taken ?? false}
        className="h-5 w-5 rounded border-gray-300"
      />
      <Label htmlFor="is_certificate_taken" className="ml-3">
        Certificate Taken?
      </Label>
    </div>
  );
}

export function InputMedinaComment({ editSample }: { editSample?: Sample | null }) {
  return (
    <div className="space-y-2">
      <Label htmlFor="medina_comment">Medina Comment</Label>
      <Input
        id="medina_comment"
        name="medina_comment"
        defaultValue={editSample?.medina_comment ?? ""}
      />
    </div>
  );
}

export function InputGeneralComment({ editSample }: { editSample?: Sample | null }) {
  return (
    <div className="space-y-2">
      <Label htmlFor="general_comment">General Comment</Label>
      <Input
        id="general_comment"
        name="general_comment"
        defaultValue={editSample?.general_comment ?? ""}
      />
    </div>
  );
}

export function InputSubmit({
  isEdit,
  isSubmitting,
}: {
  isEdit: boolean;
  isSubmitting: boolean;
}) {
  return (
    <Button type="submit" disabled={isSubmitting}>
      {isSubmitting ? "Processing..." : isEdit ? "Update" : "Create"}
    </Button>
  );
}

export function EditButton({
  sample,
  handleEdit,
}: {
  sample: Sample;
  handleEdit: (sample: Sample) => void;
}) {
  return (
    <Button variant="outline" size="icon" onClick={() => handleEdit(sample)}>
      <Edit className="h-4 w-4" />
    </Button>
  );
}