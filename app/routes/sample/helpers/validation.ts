import { z } from "zod";

export const SampleSchema = z.object({
  id: z.number().optional(),
  name_english: z.string().min(1, "English name is required").max(255),
  name_amharic: z.string().min(1, "Amharic name is required").max(255),
   nationality: z.string().optional(),
  city: z.string().optional(),
  sub_city: z.string().optional(),
  wereda: z.string().optional(),
  house_number: z.string().optional(),
  primary_phone: z.string().optional(),
  secondary_phone: z.string().optional(),
  email: z.string().optional(),

});

export function validateSampleField<T extends keyof typeof SampleSchema.shape>(
  fieldName: T,
  value: unknown
) {
  return SampleSchema.shape[fieldName].safeParse(value);
}

export type Sample = {
  id: number;
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
  created_at: string;
  updated_at: string;
};

export type SampleCreate = Omit<Sample, "id" | "created_at" | "updated_at">;
export type SampleUpdate = Partial<SampleCreate>;
export type SampleDelete = Pick<Sample, "id">;
export type SampleList = Sample[];
export type SampleListResponse = {
  Samples: SampleList;
};
export type SampleCreateResponse = {
  Sample: Sample;
};
export type SampleUpdateResponse = {
  Sample: Sample;
};
export type SampleDeleteResponse = {
  message: string;
};
export type SampleErrorResponse = {
  error: string;
};
export type SampleNotFoundResponse = {
  message: string;
};
export type SampleValidationErrorResponse = {
  message: string;
  errors: {
    [key: string]: string[];
  };
};
export type SampleValidationError = {
  name?: string[];
  description?: string[];
};
export type SampleError = {
  message: string;
  errors?: SampleValidationError;
};