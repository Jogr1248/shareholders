import { query } from "~/services/db.server";
import type { Sample } from "./validation";

export async function getAll() {
  return query<Sample>("SELECT * FROM shareholders ORDER BY created_at DESC");
}

type InsertParams = {
  shareholder_id: string;               // NOT NULL
  name_amharic?: string;
  name_english: string;
  gender?: string;
  nationality?: string;                 // default: ኢትዮጵያዊ
  birth_date_amharic?: string;
  birth_date_english?: string | null;   // timestamp
  national_id_num?: string;
  passport_num?: string;
  tin_num?: string;
  residency_status?: string;
  city?: string;
  sub_city?: string;
  wereda?: string;
  house_number?: string;
  primary_phone?: string;
  secondary_phone?: string;
  email?: string;
  dividend_bank_name?: string;
  dividend_bank_account?: string;
  subscribed_share?: number;
  receipt_num?: string;
  certificate_num?: string;
  is_certificate_taken?: boolean;
  medina_comment?: string;
  general_comment?: string;
};


export async function insertData({  shareholder_id,name_english, name_amharic,gender,nationality,
  birth_date_amharic,birth_date_english,national_id_num,passport_num,tin_num,residency_status,
  city,sub_city,wereda,house_number,primary_phone,secondary_phone,email,dividend_bank_name,dividend_bank_account,subscribed_share,receipt_num,
certificate_num,is_certificate_taken,medina_comment,general_comment  }: InsertParams) {
  query("INSERT INTO shareholders ( shareholder_id,name_english, name_amharic,gender,nationality,birth_date_amharic,birth_date_english,national_id_num,passport_num,tin_num,residency_status,city,sub_city,wereda,house_number,primary_phone,secondary_phone,email,dividend_bank_name,dividend_bank_account,subscribed_share,receipt_num,certificate_num,is_certificate_taken,medina_comment,general_comment  ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?,?, ?, ?, ?, ?, ?, ?, ?, ?, ?,?, ?, ?, ?, ?, ?)", [
  
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
  ]);
}

type UpdateParams = {
    shareholder_id: string;               // NOT NULL
  name_amharic?: string;
  name_english: string;
  gender?: string;
  nationality?: string;                 // default: ኢትዮጵያዊ
  birth_date_amharic?: string;
  birth_date_english?: string | null;   // timestamp
  national_id_num?: string;
  passport_num?: string;
  tin_num?: string;
  residency_status?: string;
  city?: string;
  sub_city?: string;
  wereda?: string;
  house_number?: string;
  primary_phone?: string;
  secondary_phone?: string;
  email?: string;
  dividend_bank_name?: string;
  dividend_bank_account?: string;
  subscribed_share?: number;
  receipt_num?: string;
  certificate_num?: string;
  is_certificate_taken?: boolean;
  medina_comment?: string;
  general_comment?: string;
};

export async function updateData({ shareholder_id,name_english, name_amharic,gender,nationality,
  birth_date_amharic,birth_date_english,national_id_num,passport_num,tin_num,residency_status,
  city,sub_city,wereda,house_number,primary_phone,secondary_phone,email,dividend_bank_name,dividend_bank_account,subscribed_share,receipt_num,
certificate_num,is_certificate_taken,medina_comment,general_comment }: UpdateParams) {
  return query("UPDATE shareholders SET name_english = ?, name_amharic = ?,gender = ?,nationality = ?,birth_date_amharic = ?,birth_date_english = ?,national_id_num = ?,passport_num = ?,tin_num =?,residency_status = ?,city = ?,sub_city = ?,wereda = ?,house_number = ?,primary_phone = ?,secondary_phone = ?,email = ? ,dividend_bank_name = ?,dividend_bank_account = ?,subscribed_share = ?,receipt_num = ?,certificate_num = ?,is_certificate_taken = ?,medina_comment = ?,general_comment = ? WHERE shareholder_id = ?", [
    
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
general_comment,
shareholder_id,
  ]);
}

export async function deleteData({ shareholder_id }: { shareholder_id: string }) {
  return await query("DELETE FROM shareholders WHERE shareholder_id = ?", [shareholder_id]);
}

export async function insertDeposit(data: {
  shareholder_id: string;
  deposit_date: string;
  amount: number;
  payment_method: string;
  receipt_number: string;
  notes: string | null;
}) {
  await query(
    `UPDATE shareholders SET receipt_num = ? WHERE shareholder_id = ?`,
    [data.receipt_number, data.shareholder_id]
  );

  await query(
    `INSERT INTO deposits (shareholder_id, deposit_date, amount, payment_method, receipt_number, notes)
     VALUES (?, ?, ?, ?, ?, ?)`,
    [data.shareholder_id, data.deposit_date, data.amount, data.payment_method, data.receipt_number, data.notes]
  );
}
