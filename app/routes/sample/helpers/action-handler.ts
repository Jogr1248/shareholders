import { unlink } from "fs/promises";
import path from "path";
import { deleteData, insertData, updateData } from "./services.server";
import { validateSample } from "./validate-sample";
// import { saveImage } from "./save-image";

/**
 * Handles create, update, and delete operations for samples.
 * This is extracted for readability and testability.
 */
export async function handleAction({
  actionType,
  id,
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
}: {
  actionType: string;
  id: string;
   name_english: string;
  name_amharic: string;
  nationality: string;
  city: string;
  sub_city: string;
  wereda: string;
  house_number: string;
  primary_phone: string;
  secondary_phone: string;
  email: string;
}) {
  const isInvalidId = !/^\d+$/.test(id);

  switch (actionType) {
    case "delete": {
      if (isInvalidId) return { error: "Invalid ID", status: 400 };
      try{
        await deleteData({ id });
        return { success: true };
      } catch (err) {
        console.error("Failed to delete sample", err);
        return { success: false, error: "Failed to delete sample" };
      }
    }

    case "update": {
      if (isInvalidId) return { error: "Invalid ID", success: false };

      const validation = await validateSample(name_english, name_amharic,nationality,city,sub_city,wereda,house_number,primary_phone,secondary_phone,email );
      if (validation.errors) return validation;

      await updateData({
        name_english: validation.data.name_english,
        name_amharic: validation.data.name_amharic,
        nationality: validation.data.nationality,
        city: validation.data.city,
        sub_city: validation.data.sub_city,
        wereda: validation.data.wereda,
        house_number: validation.data.house_number,
        primary_phone: validation.data.primary_phone,
        secondary_phone: validation.data.secondary_phone,
        email: validation.data.email,
        id,
      });
      return { success: true };
    }

    case "create": {
      const validation = await validateSample(name_english, name_amharic,nationality,city,sub_city,wereda,house_number,primary_phone,secondary_phone,email);
      if (validation.errors) return validation;

      await insertData({
        name_english: validation.data.name_english,
        name_amharic: validation.data.name_amharic,
        nationality: validation.data.nationality,
        city: validation.data.city,
        sub_city: validation.data.sub_city,
        wereda: validation.data.wereda,
        house_number: validation.data.house_number,
        primary_phone: validation.data.primary_phone,
        secondary_phone: validation.data.secondary_phone,
        email: validation.data.email,
      });
      return { success: true };
    }

    default:
      return { success: false, error: "Unknown action" };
  }
}
