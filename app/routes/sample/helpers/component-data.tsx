import type { Sample } from "./validation";

export function DisplayName_english({ name_english }: Pick<Sample, "name_english">) {
  return <h2 className="text-sm font-semibold text-gray-900">{name_english}</h2>;
}
export function DisplayName_amharic({ name_amharic }: Pick<Sample, "name_amharic">) {
  return <h2 className="text-sm font-semibold text-gray-900">{name_amharic}</h2>;
}
export function DisplayNationality({ nationality }: Pick<Sample, "nationality">) {
  return <h2 className="text-sm font-semibold text-gray-900">{nationality}</h2>;
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

