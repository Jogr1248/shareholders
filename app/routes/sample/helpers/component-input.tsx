import { Edit } from "lucide-react";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Textarea } from "~/components/ui/textarea";
import type { Sample } from "./validation";

export function InputId({ id }: { id: number }) {
  return <input type="hidden" name="id" value={id} />;
}

export function InputAction({ isEdit }: { isEdit: boolean }) {
  return (
    <input type="hidden" name="_action" value={isEdit ? "update" : "create"} />
  );
}

export function InputName_english({
  fetcherData,
  editSample,
}: {
  fetcherData: any;
  editSample: Sample | null;
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor="name_english">English_name</Label>
      <Input
        id="name_english"
        name="name_english"
        defaultValue={fetcherData?.fields?.name_english ?? editSample?.name_english ?? ""}
        aria-invalid={Boolean(fetcherData?.errors?.name_english)}
        aria-describedby="name_english-error"
        placeholder="e.g. John girma"
      />
      {fetcherData?.errors?.name_english && (
        <p id="name_english-error" className="text-sm text-red-500">
          {fetcherData.errors.name_english[0]}
        </p>
      )}
    </div>
  );
}

export function InputName_amharic({
  fetcherData,
  editSample,
}: {
  fetcherData: any;
  editSample: Sample | null;
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor="name_amharic">Amharic_name</Label>
      <Input
        id="name_amharic"
        name="name_amharic"
        defaultValue={fetcherData?.fields?.name_amharic ?? editSample?.name_amharic ?? ""}
        aria-invalid={Boolean(fetcherData?.errors?.name_amharic)}
        aria-describedby="name_amharic-error"
        placeholder="amharic name"
      />
      {fetcherData?.errors?.name_amharic && (
        <p id="name_amharic-error" className="text-sm text-red-500">
          {fetcherData.errors.name_amharic[0]}
        </p>
      )}
    </div>
  );
}
export function InputNationality({
  fetcherData,
  editSample,
}: {
  fetcherData: any;
  editSample: Sample | null;
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor="nationality">Nationality</Label>
      <Input
        id="nationality"
        name="nationality"
        defaultValue={fetcherData?.fields?.nationality ?? editSample?.nationality?? ""}
        aria-invalid={Boolean(fetcherData?.errors?.nationality)}
        aria-describedby="nationality-error"
        placeholder="e.g. Ethiopia"
      />
      {fetcherData?.errors?.name_nationality && (
        <p id="nationality-error" className="text-sm text-red-500">
          {fetcherData.errors.nationality[0]}
        </p>
      )}
    </div>
  );
}
export function InputCity({
  fetcherData,
  editSample,
}: {
  fetcherData: any;
  editSample: Sample | null;
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor="city">City</Label>
      <Input
        id="city"
        name="city"
        defaultValue={fetcherData?.fields?.city ?? editSample?.city?? ""}
        aria-invalid={Boolean(fetcherData?.errors?.city)}
        aria-describedby="city-error"
        placeholder="e.g. Addis Ababa"
      />
      {fetcherData?.errors?.city && (
        <p id="city-error" className="text-sm text-red-500">
          {fetcherData.errors.city[0]}
        </p>
      )}
    </div>
  );
}
export function InputSub_city({
  fetcherData,
  editSample,
}: {
  fetcherData: any;
  editSample: Sample | null;
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor="sub_city">Sub_city</Label>
      <Input
        id="sub_city"
        name="sub_city"
        defaultValue={fetcherData?.fields?.sub_city ?? editSample?.sub_city?? ""}
        aria-invalid={Boolean(fetcherData?.errors?.sub_city)}
        aria-describedby="city-error"
        placeholder="e.g. "
      />
      {fetcherData?.errors?.sub_city && (
        <p id="sub_city-error" className="text-sm text-red-500">
          {fetcherData.errors.sub_city[0]}
        </p>
      )}
    </div>
  );
}
export function InputWereda({
  fetcherData,
  editSample,
}: {
  fetcherData: any;
  editSample: Sample | null;
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor="wereda">Wereda</Label>
      <Input
        id="wereda"
        name="wereda"
        defaultValue={fetcherData?.fields?.wereda ?? editSample?.wereda?? ""}
        aria-invalid={Boolean(fetcherData?.errors?.wereda)}
        aria-describedby="wereda-error"
        placeholder="e.g. "
      />
      {fetcherData?.errors?.wereda && (
        <p id="wereda-error" className="text-sm text-red-500">
          {fetcherData.errors.wereda[0]}
        </p>
      )}
    </div>
  );
}
export function InputHouse_number({
  fetcherData,
  editSample,
}: {
  fetcherData: any;
  editSample: Sample | null;
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor="house_number">House_number</Label>
      <Input
        id="house_number"
        name="house_number"
        defaultValue={fetcherData?.fields?.house_number ?? editSample?.house_number?? ""}
        aria-invalid={Boolean(fetcherData?.errors?.house_number)}
        aria-describedby="house_number-error"
        placeholder="e.g. "
      />
      {fetcherData?.errors?.house_number && (
        <p id="house_number-error" className="text-sm text-red-500">
          {fetcherData.errors.house_number[0]}
        </p>
      )}
    </div>
  );
}
export function InputPrimary_phone({
  fetcherData,
  editSample,
}: {
  fetcherData: any;
  editSample: Sample | null;
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor="primary_phone">Primary_phone</Label>
      <Input
        id="primary_phone"
        name="primary_phone"
        defaultValue={fetcherData?.fields?.primary_phone ?? editSample?.primary_phone?? ""}
        aria-invalid={Boolean(fetcherData?.errors?.primary_phone)}
        aria-describedby="primary_phone-error"
        placeholder="e.g. "
      />
      {fetcherData?.errors?.primary_phone && (
        <p id="primary_phone-error" className="text-sm text-red-500">
          {fetcherData.errors.primary_phone[0]}
        </p>
      )}
    </div>
  );
}
export function InputSecondary_phone({
  fetcherData,
  editSample,
}: {
  fetcherData: any;
  editSample: Sample | null;
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor="secondary_phone">Secondary_phone</Label>
      <Input
        id="secondary_phone"
        name="secondary_phone"
        defaultValue={fetcherData?.fields?.secondary_phone ?? editSample?.secondary_phone?? ""}
        aria-invalid={Boolean(fetcherData?.errors?.secondary_phone)}
        aria-describedby="secondary_phone-error"
        placeholder="e.g. "
      />
      {fetcherData?.errors?.secondary_phone && (
        <p id="secondary_phone-error" className="text-sm text-red-500">
          {fetcherData.errors.secondary_phone[0]}
        </p>
      )}
    </div>
  );
}

export function InputEmail({
  fetcherData,
  editSample,
}: {
  fetcherData: any;
  editSample: Sample | null;
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor="email">Email</Label>
      <Input
        id="email"
        name="email"
        defaultValue={fetcherData?.fields?.email ?? editSample?.email?? ""}
        aria-invalid={Boolean(fetcherData?.errors?.email)}
        aria-describedby="email-error"
        placeholder="e.g."
      />
      {fetcherData?.errors?.email && (
        <p id="email-error" className="text-sm text-red-500">
          {fetcherData.errors.email[0]}
        </p>
      )}
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
  const submitButtonText = isEdit ? "Update" : "Create";
  return (
    <Button type="submit" disabled={isSubmitting}>
      {isSubmitting ? "Processing..." : submitButtonText}
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
