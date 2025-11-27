import type { Sample } from "./validation";
export function DisplayShareholder_id({ shareholder_id }: Pick<Sample, "shareholder_id">) {
  return <h2 className="text-sm font-semibold text-gray-900">{shareholder_id}</h2>;
}

export function DisplayName_english({ name_english }: Pick<Sample, "name_english">) {
  return <h2 className="text-sm font-semibold text-gray-900">{name_english}</h2>;
}

export function DisplayName_amharic({ name_amharic }: Pick<Sample, "name_amharic">) {
  return <h2 className="text-sm font-semibold text-gray-900">{name_amharic}</h2>;
}

export function DisplayGender({ gender }: Pick<Sample, "gender">) {
  return <h2 className="text-sm font-semibold text-gray-900">{gender}</h2>;
}

export function DisplayNationality({ nationality }: Pick<Sample, "nationality">) {
  return <h2 className="text-sm font-semibold text-gray-900">{nationality}</h2>;
}

export function DisplayBirth_date_amharic({ birth_date_amharic }: Pick<Sample, "birth_date_amharic">) {
  return <h2 className="text-sm font-semibold text-gray-900">{birth_date_amharic}</h2>;
}

export function DisplayBirth_date_english({ birth_date_english }: Pick<Sample, "birth_date_english">) {
  return <h2 className="text-sm font-semibold text-gray-900">{birth_date_english}</h2>;
}

export function DisplayNational_id_num({ national_id_num }: Pick<Sample, "national_id_num">) {
  return <h2 className="text-sm font-semibold text-gray-900">{national_id_num}</h2>;
}

export function DisplayPassport_num({ passport_num }: Pick<Sample, "passport_num">) {
  return <h2 className="text-sm font-semibold text-gray-900">{passport_num}</h2>;
}

export function DisplayTin_num({ tin_num }: Pick<Sample, "tin_num">) {
  return <h2 className="text-sm font-semibold text-gray-900">{tin_num}</h2>;
}

export function DisplayResidency_status({ residency_status }: Pick<Sample, "residency_status">) {
  return <h2 className="text-sm font-semibold text-gray-900">{residency_status}</h2>;
}

export function DisplayCity({ city }: Pick<Sample, "city">) {
  return <h2 className="text-sm font-semibold text-gray-900">{city}</h2>;
}

export function DisplaySub_city({ sub_city }: Pick<Sample, "sub_city">) {
  return <h2 className="text-sm font-semibold text-gray-900">{sub_city}</h2>;
}

export function DisplayWereda({ wereda }: Pick<Sample, "wereda">) {
  return <h2 className="text-sm font-semibold text-gray-900">{wereda}</h2>;
}

export function DisplayHouse_number({ house_number }: Pick<Sample, "house_number">) {
  return <h2 className="text-sm font-semibold text-gray-900">{house_number}</h2>;
}

export function DisplayPrimary_phone({ primary_phone }: Pick<Sample, "primary_phone">) {
  return <h2 className="text-sm font-semibold text-gray-900">{primary_phone}</h2>;
}

export function DisplaySecondary_phone({ secondary_phone }: Pick<Sample, "secondary_phone">) {
  return <h2 className="text-sm font-semibold text-gray-900">{secondary_phone}</h2>;
}

export function DisplayEmail({ email }: Pick<Sample, "email">) {
  return <h2 className="text-sm font-semibold text-gray-900">{email}</h2>;
}

export function DisplayDividend_bank_name({ dividend_bank_name }: Pick<Sample, "dividend_bank_name">) {
  return <h2 className="text-sm font-semibold text-gray-900">{dividend_bank_name}</h2>;
}

export function DisplayDividend_bank_account({ dividend_bank_account }: Pick<Sample, "dividend_bank_account">) {
  return <h2 className="text-sm font-semibold text-gray-900">{dividend_bank_account}</h2>;
}

export function DisplaySubscribed_share({ subscribed_share }: Pick<Sample, "subscribed_share">) {
  return <h2 className="text-sm font-semibold text-gray-900">{subscribed_share}</h2>;
}

export function DisplayReceipt_num({ receipt_num }: Pick<Sample, "receipt_num">) {
  return <h2 className="text-sm font-semibold text-gray-900">{receipt_num}</h2>;
}

export function DisplayCertificate_num({ certificate_num }: Pick<Sample, "certificate_num">) {
  return <h2 className="text-sm font-semibold text-gray-900">{certificate_num}</h2>;
}

export function DisplayIs_certificate_taken({ is_certificate_taken }: Pick<Sample, "is_certificate_taken">) {
  return <h2 className="text-sm font-semibold text-gray-900">
    {is_certificate_taken ? "Yes" : "No"}
  </h2>;
}

export function DisplayMedina_comment({ medina_comment }: Pick<Sample, "medina_comment">) {
  return <h2 className="text-sm font-semibold text-gray-900">{medina_comment}</h2>;
}

export function DisplayGeneral_comment({ general_comment }: Pick<Sample, "general_comment">) {
  return <h2 className="text-sm font-semibold text-gray-900">{general_comment}</h2>;
}

