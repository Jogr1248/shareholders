import { query } from "~/services/db.server";
import type { Sample } from "./validation";

export async function getAll() {
  return query<Sample>("SELECT * FROM samples ORDER BY created_at DESC");
}

type InsertParams = {
   name_english: string;
  name_amharic?: string;
  nationality?: string;
  city?: string;
  sub_city?: string;
  wereda?: string;
  house_number?: string;
  primary_phone?: string;
  secondary_phone?: string;
  email?: string;
 
};

export async function insertData({  name_english, name_amharic,nationality,city,sub_city,wereda,house_number,primary_phone,secondary_phone,email  }: InsertParams) {
  query("INSERT INTO samples ( name_english, name_amharic,nationality,city,sub_city,wereda,house_number,primary_phone,secondary_phone,email ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", [
  
     name_english, 
     name_amharic,
     nationality,
     city,
     sub_city,
     wereda,
     house_number,
     primary_phone,
     secondary_phone,
     email ,
  ]);
}

type UpdateParams = {
   name_english?: string;
  name_amharic?: string;
  nationality?: string;
  city?: string;
  sub_city?: string;
  wereda?: string;
  house_number?: string;
  primary_phone?: string;
  secondary_phone?: string;
  email?: string;
  id: string;
};

export async function updateData({ name_english, name_amharic,nationality,city,sub_city,wereda,house_number,primary_phone,secondary_phone,email , id }: UpdateParams) {
  return query("UPDATE samples SET name_english = ?, name_amharic = ?,nationality = ?,city = ?,sub_city = ?,wereda = ?,house_number = ?,primary_phone = ?,secondary_phone = ?,email = ? WHERE id = ?", [
    name_english,
     name_amharic,
     nationality,
     city,
     sub_city,
     wereda,
     house_number,
     primary_phone,
     secondary_phone,
     email,
    id,
  ]);
}

export async function deleteData({ id }: { id: string }) {
  return await query("DELETE FROM samples WHERE id = ?", [id]);
}


