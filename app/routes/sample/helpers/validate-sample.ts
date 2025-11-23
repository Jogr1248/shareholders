import { SampleSchema } from "./validation";

export async function validateSample(name_english: string, name_amharic: string,nationality: string, city: string,sub_city: string, wereda: string,house_number: string, primary_phone: string,secondary_phone: string, email: string) {
  const result = SampleSchema.safeParse({ name_english,name_amharic,nationality,city,sub_city,wereda,house_number,primary_phone,secondary_phone,email  });
  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
      fields: { name_english, name_amharic,nationality,city,sub_city,wereda,house_number,primary_phone,secondary_phone,email  },
      success: false,
    };
  }
  return { data: result.data };
}