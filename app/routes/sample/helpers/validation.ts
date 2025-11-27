import { z } from "zod";

export const SampleSchema = z.object({
  shareholder_id: z.string().min(1, "Shareholder ID is required"),
  name_english: z.string().min(1, "English name is required").max(255),
  name_amharic: z.string().min(1, "Amharic name is required").max(255),
  gender: z.string().optional(),
  nationality: z.string().optional(),
  birth_date_amharic: z.string().optional(),
  birth_date_english: z.string().optional(),              // timestamp
  national_id_num: z.string().optional(),
  passport_num: z.string().optional(),
  tin_num: z.string().optional(),
  residency_status: z.string().optional(),
  city: z.string().optional(),
  sub_city: z.string().optional(),
  wereda: z.string().optional(),
  house_number: z.string().optional(),
  primary_phone: z.string().optional(),
  secondary_phone: z.string().optional(),
  email: z.string().optional(),
  dividend_bank_name: z.string().optional(),
  dividend_bank_account: z.string().optional(),
  subscribed_share: z.number().optional(),
  receipt_num: z.string().optional(),
  certificate_num: z.string().optional(),
  is_certificate_taken: z.boolean().optional(),
  medina_comment: z.string().optional(),
  general_comment: z.string().optional(),
  

});

export function validateSampleField<T extends keyof typeof SampleSchema.shape>(
  fieldName: T,
  value: unknown
) {
  return SampleSchema.shape[fieldName].safeParse(value);
}

export type Sample = {
   shareholder_id: string;               // NOT NULL
  name_amharic?: string;
  name_english: string;
  gender?: string;
  nationality?: string;                 // default: ኢትዮጵያዊ
  birth_date_amharic?: string;
  birth_date_english?: string| null ;   // timestamp
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
  subscribed_share: number;
  receipt_num?: string;
  certificate_num?: string;
  is_certificate_taken?: boolean;
  medina_comment?: string;
  general_comment?: string;
};

export type SampleCreate = Omit<Sample, "shareholder_id" | "created_at" | "updated_at">;
export type SampleUpdate = Partial<SampleCreate>;
export type SampleDelete = Pick<Sample, "shareholder_id">;
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