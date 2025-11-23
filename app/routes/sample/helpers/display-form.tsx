import { useEffect, useRef } from "react";
import { useFetcher } from "react-router";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "~/components/ui/dialog";
import {
  InputAction,
  InputName_english,
  InputId,
  InputName_amharic,
  InputNationality,
  InputCity,
  InputSub_city,
  InputWereda,
  InputHouse_number,
  InputPrimary_phone,
  InputSecondary_phone,
  InputEmail
  ,InputSubmit,
} from "./component-input";
import type { Sample } from "./validation";

type FormDialogProps = {
  editSample: Sample | null;
  isModalOpen: boolean;
  setEditSample: (sample: Sample | null) => void;
  setIsModalOpen: (isOpen: boolean) => void;
};

export function DisplayForm({
  editSample,
  isModalOpen,
  setEditSample,
  setIsModalOpen,
}: FormDialogProps) {
  const formRef = useRef<HTMLFormElement>(null);
  const fetcher = useFetcher();
  const isSubmitting = fetcher.state === "submitting";

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      setEditSample(null);
      formRef.current?.reset();
    }
    setIsModalOpen(open);
  };

  useEffect(() => {
    if (fetcher.data?.success) {
      setIsModalOpen(false);
      setEditSample(null);
      formRef.current?.reset();
    }
  }, [fetcher.data]);

  const isEdit = Boolean(editSample);
  const title = isEdit ? "Edit Sample" : "Create New Sample";
  const description = isEdit
    ? "Update the sample details. You cannot change the image."
    : "Fill in the details for a new sample.";

  return (
    <Dialog open={isModalOpen} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>

        <fetcher.Form
          ref={formRef}
          method="post"
          className="space-y-6"
          noValidate
        >
          {editSample && <InputId id={editSample.id} />}
          <InputAction isEdit={isEdit} />
          <InputName_english fetcherData={fetcher.data} editSample={editSample} />
          <InputName_amharic fetcherData={fetcher.data} editSample={editSample}  />
          <InputNationality fetcherData={fetcher.data} editSample={editSample} />
          <InputCity fetcherData={fetcher.data} editSample={editSample}  />
          <InputSub_city fetcherData={fetcher.data} editSample={editSample} />
          <InputWereda fetcherData={fetcher.data} editSample={editSample}  />
          <InputHouse_number fetcherData={fetcher.data} editSample={editSample} />
          <InputPrimary_phone fetcherData={fetcher.data} editSample={editSample}  />
          <InputSecondary_phone fetcherData={fetcher.data} editSample={editSample} />
          <InputEmail fetcherData={fetcher.data} editSample={editSample}  />
        
          <DialogFooter>
            <InputSubmit isEdit={isEdit} isSubmitting={isSubmitting} />
          </DialogFooter>
        </fetcher.Form>
      </DialogContent>
    </Dialog>
  );
}
