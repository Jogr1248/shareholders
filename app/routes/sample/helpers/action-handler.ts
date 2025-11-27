import { deleteData, insertData, updateData } from "./services.server";
import { validateSample } from "./validate-sample";
export async function handleAction({
  actionType,
  shareholder_id,
  name_english,
  name_amharic,
  gender,
  nationality,
  birth_date_amharic,
  birth_date_english,
  national_id_num,
  passport_num,
  tin_num,
  residency_status,
  city,
  sub_city,
  wereda,
  house_number,
  primary_phone,
  secondary_phone,
  email,dividend_bank_name,
  dividend_bank_account,
  subscribed_share,
  receipt_num,
certificate_num,
is_certificate_taken,
medina_comment,
general_comment  ,
}: {
  actionType: string;
  shareholder_id: string;               
  name_amharic: string;
  name_english: string;
  gender: string;
  nationality: string;                
  birth_date_amharic: string;
  birth_date_english: string | null;   
  national_id_num: string;
  passport_num: string;
  tin_num: string;
  residency_status: string;
  city: string;
  sub_city: string;
  wereda: string;
  house_number: string;
  primary_phone: string;
  secondary_phone: string;
  email: string;
  dividend_bank_name: string;
  dividend_bank_account: string;
  subscribed_share: number;
  receipt_num: string;
  certificate_num: string;
  is_certificate_taken: boolean;
  medina_comment: string;
  general_comment: string;
}) {
 const isInvalidId = !/^[A-Za-z0-9_-]+$/.test(shareholder_id);


  switch (actionType) {
    case "delete": {
       if (isInvalidId) return { error: "Invalid ID", status: 400 };
      try{
        await deleteData({ shareholder_id });
        return { success: true };
      } catch (err) {
        console.error("Failed to delete shareholders", err);
        return { success: false, error: "Failed to delete shareholders" };
      }
    }

    case "update": {
      if (isInvalidId) return { error: "Invalid ID", success: false };

     
    
const validation = await validateSample(
  shareholder_id,
  name_english,
  name_amharic,
  gender,
  nationality,
  birth_date_amharic,
  birth_date_english,
  national_id_num,
  passport_num,
  tin_num,
  residency_status,
  city,
  sub_city,
  wereda,
  house_number,
  primary_phone,
  secondary_phone,
  email,
  dividend_bank_name,
  dividend_bank_account,
  subscribed_share,
  receipt_num,
  certificate_num,
  is_certificate_taken,
  medina_comment,
  general_comment
); if (validation.errors) return validation;

      await updateData({
        name_english: validation.data.name_english,
        name_amharic: validation.data.name_amharic,
        gender: validation.data.gender,
        nationality: validation.data.nationality,
        birth_date_amharic:validation.data.birth_date_amharic,
        birth_date_english: validation.data.birth_date_english,
        national_id_num : validation.data.national_id_num,
        passport_num : validation.data.passport_num,
        tin_num : validation.data.tin_num,
        residency_status : validation.data.residency_status,
        city: validation.data.city,
        sub_city: validation.data.sub_city,
        wereda: validation.data.wereda,
        house_number: validation.data.house_number,
        primary_phone: validation.data.primary_phone,
        secondary_phone: validation.data.secondary_phone,
        email: validation.data.email,
        dividend_bank_name : validation.data.dividend_bank_name,
        dividend_bank_account : validation.data.dividend_bank_account,
        subscribed_share : validation.data.subscribed_share,
        receipt_num : validation.data.receipt_num,
        certificate_num : validation.data.certificate_num,
        is_certificate_taken : validation.data.is_certificate_taken,
        medina_comment :validation.data.medina_comment,
        general_comment : validation.data.general_comment,

        shareholder_id: validation.data.shareholder_id,
      });
      return { success: true };
    }

    case "create": {
     const validation = await validateSample(
  shareholder_id,
  name_english,
  name_amharic,
  gender,
  nationality,
  birth_date_amharic,
  birth_date_english,
  national_id_num,
  passport_num,
  tin_num,
  residency_status,
  city,
  sub_city,
  wereda,
  house_number,
  primary_phone,
  secondary_phone,
  email,
  dividend_bank_name,
  dividend_bank_account,
  subscribed_share,
  receipt_num,
  certificate_num,
  is_certificate_taken,
  medina_comment,
  general_comment
);

      if (validation.errors) return validation;

      await insertData({
      name_english: validation.data.name_english,
        name_amharic: validation.data.name_amharic,
        gender: validation.data.gender,
        nationality: validation.data.nationality,
        birth_date_amharic:validation.data.birth_date_amharic,
        birth_date_english: validation.data.birth_date_english,
        national_id_num : validation.data.national_id_num,
        passport_num : validation.data.passport_num,
        tin_num : validation.data.tin_num,
        residency_status : validation.data.residency_status,
        city: validation.data.city,
        sub_city: validation.data.sub_city,
        wereda: validation.data.wereda,
        house_number: validation.data.house_number,
        primary_phone: validation.data.primary_phone,
        secondary_phone: validation.data.secondary_phone,
        email: validation.data.email,
        dividend_bank_name : validation.data.dividend_bank_name,
        dividend_bank_account : validation.data.dividend_bank_account,
        subscribed_share : validation.data.subscribed_share,
        receipt_num : validation.data.receipt_num,
        certificate_num : validation.data.certificate_num,
        is_certificate_taken : validation.data.is_certificate_taken,
        medina_comment :validation.data.medina_comment,
        general_comment : validation.data.general_comment,

        shareholder_id: validation.data.shareholder_id,
      });
      return { success: true };
    }

    default:
      return { success: false, error: "Unknown action" };
  }
}
