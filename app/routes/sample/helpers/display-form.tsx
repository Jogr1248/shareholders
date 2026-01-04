import { useEffect, useRef } from "react";
import { useFetcher } from "react-router";
import { useState } from "react";



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
    const [deposits, setDeposits] = useState<any[]>([]);
  const [loadingDeposits, setLoadingDeposits] = useState(false);

  // when modal opens for an existing shareholder, load deposits
  useEffect(() => {
    const id = editSample?.shareholder_id;
    if (!isModalOpen || !id) {
      setDeposits([]);
      return;
    }

    let cancelled = false;
    setLoadingDeposits(true);
    fetch(`/shareholder-deposits?shareholder_id=${encodeURIComponent(id)}`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load deposits");
        return res.json();
      })
      .then((data) => {
        if (!cancelled) setDeposits(Array.isArray(data) ? data : []);
      })
      .catch((err) => {
        console.error("Load deposits error", err);
        if (!cancelled) setDeposits([]);
      })
      .finally(() => {
        if (!cancelled) setLoadingDeposits(false);
      });

    return () => {
      cancelled = true;
    };
  }, [isModalOpen, editSample?.shareholder_id]);

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


// // app/routes/sample/helpers/display-form.tsx
// import { useEffect, useRef, useState } from "react";
// import { useFetcher } from "react-router-dom"; // ← Correct import
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogFooter,
//   DialogHeader,
//   DialogTitle,
// } from "~/components/ui/dialog";
// import {
//   InputAction,
//   InputShareholderId,
//   InputName_english,
//   InputName_amharic,
//   InputGender,
//   InputNationality,
//   InputBirthDateAmharic,
//   InputBirthDateEnglish,
//   InputNationalIdNum,
//   InputPassportNum,
//   InputTinNum,
//   InputResidencyStatus,
//   InputCity,
//   InputSub_city,
//   InputWereda,
//   InputHouse_number,
//   InputPrimary_phone,
//   InputSecondary_phone,
//   InputEmail,
//   InputDividendBankName,
//   InputDividendBankAccount,
//   InputSubscribedShare,
//   InputReceiptNum,
//   InputCertificateNum,
//   InputIsCertificateTaken,
//   InputMedinaComment,
//   InputGeneralComment,
//   InputSubmit,
// } from "./component-input";
// import type { Sample } from "./validation";

// type FormDialogProps = {
//   editSample: Sample | null;
//   isModalOpen: boolean;
//   setEditSample: (sample: Sample | null) => void;
//   setIsModalOpen: (isOpen: boolean) => void;
// };

// export function DisplayForm({
//   editSample,
//   isModalOpen,
//   setEditSample,
//   setIsModalOpen,
// }: FormDialogProps) {
//   const formRef = useRef<HTMLFormElement>(null);
//   const fetcher = useFetcher();
//   const depositFetcher = useFetcher(); // Separate fetcher for deposits
//   const isSubmitting = fetcher.state === "submitting" || depositFetcher.state === "submitting";

//   const [deposits, setDeposits] = useState<any[]>([]);
//   const [loadingDeposits, setLoadingDeposits] = useState(false);

//   const handleOpenChange = (open: boolean) => {
//     if (!open) {
//       setEditSample(null);
//       setDeposits([]);
//     }
//     setIsModalOpen(open);
//   };

//   // Close modal on success
//   useEffect(() => {
//     if (fetcher.data?.success || depositFetcher.data?.success) {
//       setIsModalOpen(false);
//       setEditSample(null);
//       formRef.current?.reset();
//     }
//   }, [fetcher.data, depositFetcher.data]);

//   // Load deposits when editing
//   useEffect(() => {
//     const id = editSample?.shareholder_id;
//     if (!isModalOpen || !id) {
//       setDeposits([]);
//       return;
//     }

//     setLoadingDeposits(true);
//     fetch(`/api/deposits?shareholder_id=${encodeURIComponent(id)}`)
//       .then((res) => res.json())
//       .then((data) => {
//         setDeposits(data.deposits || []);
//       })
//       .catch((err) => {
//         console.error("Failed to load deposits:", err);
//         setDeposits([]);
//       })
//       .finally(() => setLoadingDeposits(false));
//   }, [isModalOpen, editSample?.shareholder_id]);

//   const isEdit = Boolean(editSample);
//   const title = isEdit ? "Edit Shareholder" : "Create New Shareholder";
//   const description = isEdit
//     ? "Update the shareholder details below."
//     : "Fill in the details for a new shareholder.";

//   return (
//     <Dialog open={isModalOpen} onOpenChange={handleOpenChange}>
//       <DialogContent className="sm:max-w-[700px] max-h-[90vh] overflow-y-auto">
//         <DialogHeader>
//           <DialogTitle>{title}</DialogTitle>
//           <DialogDescription>{description}</DialogDescription>
//         </DialogHeader>

//         <fetcher.Form
//           ref={formRef}
//           method="post"
//           className="space-y-6"
//           noValidate
//         >
//           <InputShareholderId fetcherData={fetcher.data} editSample={editSample} />
//           <InputAction isEdit={isEdit} />

//           <InputName_english fetcherData={fetcher.data} editSample={editSample} />
//           <InputName_amharic fetcherData={fetcher.data} editSample={editSample} />
//           <InputGender fetcherData={fetcher.data} editSample={editSample} />
//           <InputNationality fetcherData={fetcher.data} editSample={editSample} />
//           <InputBirthDateAmharic fetcherData={fetcher.data} editSample={editSample} />
//           <InputBirthDateEnglish fetcherData={fetcher.data} editSample={editSample} />
//           <InputNationalIdNum fetcherData={fetcher.data} editSample={editSample} />
//           <InputPassportNum fetcherData={fetcher.data} editSample={editSample} />
//           <InputTinNum fetcherData={fetcher.data} editSample={editSample} />
//           <InputResidencyStatus fetcherData={fetcher.data} editSample={editSample} />
//           <InputCity fetcherData={fetcher.data} editSample={editSample} />
//           <InputSub_city fetcherData={fetcher.data} editSample={editSample} />
//           <InputWereda fetcherData={fetcher.data} editSample={editSample} />
//           <InputHouse_number fetcherData={fetcher.data} editSample={editSample} />
//           <InputPrimary_phone fetcherData={fetcher.data} editSample={editSample} />
//           <InputSecondary_phone fetcherData={fetcher.data} editSample={editSample} />
//           <InputEmail fetcherData={fetcher.data} editSample={editSample} />
//           <InputDividendBankName fetcherData={fetcher.data} editSample={editSample} />
//           <InputDividendBankAccount fetcherData={fetcher.data} editSample={editSample} />
//           <InputSubscribedShare fetcherData={fetcher.data} editSample={editSample} />
//           <InputReceiptNum fetcherData={fetcher.data} editSample={editSample} />
//           <InputCertificateNum fetcherData={fetcher.data} editSample={editSample} />
//           <InputIsCertificateTaken fetcherData={fetcher.data} editSample={editSample} />
//           <InputMedinaComment fetcherData={fetcher.data} editSample={editSample} />
//           <InputGeneralComment fetcherData={fetcher.data} editSample={editSample} />

//           {/* Deposit Section - Only in Edit Mode */}
//           {isEdit && (
//             <>
//               {/* Deposit History */}
//               <div className="mt-10 pt-8 border-t-4 border-gray-200">
//                 <h3 className="text-xl font-bold mb-4 text-blue-700">
//                   Deposit History ({deposits.length})
//                 </h3>
//                 {loadingDeposits ? (
//                   <p className="text-gray-500">Loading deposits...</p>
//                 ) : deposits.length === 0 ? (
//                   <p className="text-gray-500 italic">No deposits recorded yet.</p>
//                 ) : (
//                   <div className="overflow-x-auto">
//                     <table className="w-full border border-gray-300">
//                       <thead className="bg-gray-100">
//                         <tr>
//                           <th className="border px-4 py-2 text-left">Date</th>
//                           <th className="border px-4 py-2 text-left">Amount</th>
//                           <th className="border px-4 py-2 text-left">Method</th>
//                           <th className="border px-4 py-2 text-left">Receipt</th>
//                           <th className="border px-4 py-2 text-left">Notes</th>
//                         </tr>
//                       </thead>
//                       <tbody>
//                         {deposits.map((d: any) => (
//                           <tr key={d.id}>
//                             <td className="border px-4 py-2">{d.deposit_date}</td>
//                             <td className="border px-4 py-2 text-right">
//                               {Number(d.amount).toLocaleString()}
//                             </td>
//                             <td className="border px-4 py-2">{d.payment_method}</td>
//                             <td className="border px-4 py-2">{d.receipt_number}</td>
//                             <td className="border px-4 py-2">{d.notes || "-"}</td>
//                           </tr>
//                         ))}
//                       </tbody>
//                     </table>
//                   </div>
//                 )}
//               </div>

//               {/* New Deposit Form */}
//               <depositFetcher.Form
//                 method="post"
//                 action="/api/deposits"
//                 className="mt-10 pt-8 border-t-4 border-green-200"
//               >
//                 <h3 className="text-xl font-bold mb-6 text-green-700">
//                   + Record New Deposit
//                 </h3>
//                 <input type="hidden" name="intent" value="create" />
//                 <input type="hidden" name="shareholder_id" value={editSample.shareholder_id} />

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   <div>
//                     <label className="block font-medium mb-1">Deposit Date</label>
//                     <input
//                       type="date"
//                       name="deposit_date"
//                       required
//                       defaultValue={new Date().toISOString().split("T")[0]}
//                       className="w-full border rounded px-4 py-2"
//                     />
//                   </div>
//                   <div>
//                     <label className="block font-medium mb-1">Amount</label>
//                     <input
//                       type="number"
//                       name="amount"
//                       step="0.01"
//                       min="0"
//                       required
//                       className="w-full border rounded px-4 py-2"
//                       placeholder="0.00"
//                     />
//                   </div>
//                   <div>
//                     <label className="block font-medium mb-1">Payment Method</label>
//                     <select name="payment_method" required className="w-full border rounded px-4 py-2">
//                       <option value="Cash">Cash</option>
//                       <option value="Check">Check</option>
//                       <option value="Bank Transfer">Bank Transfer</option>
//                       <option value="Mobile Banking">Mobile Banking</option>
//                       <option value="Other">Other</option>
//                     </select>
//                   </div>
//                   <div>
//                     <label className="block font-medium mb-1">Receipt Number</label>
//                     <input
//                       type="text"
//                       name="receipt_number"
//                       required
//                       className="w-full border rounded px-4 py-2"
//                     />
//                   </div>
//                   <div className="md:col-span-2">
//                     <label className="block font-medium mb-1">Notes (optional)</label>
//                     <textarea
//                       name="notes"
//                       rows={3}
//                       className="w-full border rounded px-4 py-2"
//                     />
//                   </div>
//                 </div>

//                 <button
//                   type="submit"
//                   disabled={depositFetcher.state !== "idle"}
//                   className="mt-6 bg-green-600 text-white px-8 py-3 rounded font-bold hover:bg-green-700 disabled:opacity-50"
//                 >
//                   {depositFetcher.state !== "idle" ? "Saving..." : "Save Deposit"}
//                 </button>

//                 {depositFetcher.data?.success && (
//                   <p className="mt-4 text-green-600 font-medium">Deposit saved successfully!</p>
//                 )}
//                 {depositFetcher.data?.error && (
//                   <p className="mt-4 text-red-600">{depositFetcher.data.error}</p>
//                 )}
//               </depositFetcher.Form>
//             </>
//           )}

//           <DialogFooter>
//             <InputSubmit isEdit={isEdit} isSubmitting={isSubmitting} />
//           </DialogFooter>
//         </fetcher.Form>
//       </DialogContent>
//     </Dialog>
//   );
// }