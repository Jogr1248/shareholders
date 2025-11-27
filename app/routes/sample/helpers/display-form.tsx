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
  InputShareholderId,
InputName_english,
InputName_amharic,
InputGender,
InputNationality,
InputBirthDateAmharic,
InputBirthDateEnglish,
InputNationalIdNum,
InputPassportNum,
InputTinNum,
InputResidencyStatus,
InputCity,
InputSub_city,
InputWereda,
InputHouse_number,
InputPrimary_phone,
InputSecondary_phone,
InputEmail,
InputDividendBankName,
InputDividendBankAccount,
InputSubscribedShare,
InputReceiptNum,
InputCertificateNum,
InputIsCertificateTaken,
InputMedinaComment,
InputGeneralComment,
InputSubmit,
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
  const title = isEdit ? "Edit shareholder" : "Create New shareholder";
  const description = isEdit
    ? "Update the shareholder details. "
    : "Fill in the details for a new shareholder.";

  return (
    <Dialog open={isModalOpen} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>

        <fetcher.Form
          ref={formRef}
          method="post"
          className="space-y-6 max-h-[70vh] overflow-y-auto pr-2"
          noValidate
        >
          {/* <InputShareholderId shareholder_id={editSample?.shareholder_id}/> */}
          <InputShareholderId fetcherData={fetcher.data} editSample={editSample}/>
          <InputAction isEdit={isEdit} />
          <InputName_english fetcherData={fetcher.data} editSample={editSample} />
          <InputName_amharic fetcherData={fetcher.data} editSample={editSample}  />
          <InputGender fetcherData={fetcher.data} editSample={editSample}  />
          <InputNationality fetcherData={fetcher.data} editSample={editSample} />
           <InputBirthDateAmharic fetcherData={fetcher.data} editSample={editSample} />
           <InputBirthDateEnglish fetcherData={fetcher.data} editSample={editSample}/>
            <InputNationalIdNum fetcherData={fetcher.data} editSample={editSample}/>
            <InputPassportNum fetcherData={fetcher.data} editSample={editSample}/>
            <InputTinNum fetcherData={fetcher.data} editSample={editSample}/>
            <InputResidencyStatus fetcherData={fetcher.data} editSample={editSample}/>
          <InputCity fetcherData={fetcher.data} editSample={editSample}  />
          <InputSub_city fetcherData={fetcher.data} editSample={editSample} />
          <InputWereda fetcherData={fetcher.data} editSample={editSample}  />
          <InputHouse_number fetcherData={fetcher.data} editSample={editSample} />
          <InputPrimary_phone fetcherData={fetcher.data} editSample={editSample}  />
          <InputSecondary_phone fetcherData={fetcher.data} editSample={editSample} />
          <InputEmail fetcherData={fetcher.data} editSample={editSample}  />
          <InputDividendBankName fetcherData={fetcher.data} editSample={editSample}  />
          <InputDividendBankAccount fetcherData={fetcher.data} editSample={editSample} />
          <InputSubscribedShare fetcherData={fetcher.data} editSample={editSample}  />
          <InputReceiptNum fetcherData={fetcher.data} editSample={editSample} />
          <InputCertificateNum fetcherData={fetcher.data} editSample={editSample}  />
          <InputIsCertificateTaken fetcherData={fetcher.data} editSample={editSample} />
          <InputMedinaComment fetcherData={fetcher.data} editSample={editSample}  />
          <InputGeneralComment fetcherData={fetcher.data} editSample={editSample}  />
          <DialogFooter>
            <InputSubmit isEdit={isEdit} isSubmitting={isSubmitting} />
          </DialogFooter>
        </fetcher.Form>
      </DialogContent>
    </Dialog>
  );
}
