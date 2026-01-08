// // app/routes/attendance/attendance.tsx
// import { useState } from "react";
// import { requireRole } from "~/services/auth.server";

// export async function loader({ request }: { request: Request }) {
//   requireRole(request, ["ADMIN", "MASTER_ENCODER", "ATTENDANCE_ENCODER"]);

//   // Mock data - replace with real DB query
//   const attendees = [
//     { id: "1", name: "John Girma", status: "present" },
//     { id: "2", name: "Abebe Kebede", status: "absent" },
//     { id: "3", name: "Mulugeta Tadesse", status: "late" },
//   ];

//   return { attendees };
// }

// export default function AttendancePage({ loaderData }: { loaderData: { attendees: any[] } }) {
//   const { attendees } = loaderData;

//   const [records, setRecords] = useState(attendees);

//   const updateStatus = (id: string, status: string) => {
//     setRecords(records.map(r => r.id === id ? { ...r, status } : r));
//   };

//   return (
//     <div className="container mx-auto p-6">
//       <div className="flex justify-between items-center mb-8">
//         <a href="/" className="text-blue-600 hover:underline">🏠 Home</a>
//         <h1 className="text-3xl font-bold">Attendance Encoder</h1>
//       </div>

//       <div className="bg-white rounded-xl shadow-lg p-8">
//         <h2 className="text-2xl font-semibold mb-6">Mark Attendance - January 07, 2026</h2>

//         <table className="w-full border-collapse">
//           <thead>
//             <tr className="bg-blue-100">
//               <th className="py-4 px-6 text-left">Name</th>
//               <th className="py-4 px-6 text-center">Present</th>
//               <th className="py-4 px-6 text-center">Absent</th>
//               <th className="py-4 px-6 text-center">Late</th>
//             </tr>
//           </thead>
//           <tbody>
//             {records.map((person) => (
//               <tr key={person.id} className="border-b hover:bg-gray-50">
//                 <td className="py-4 px-6 font-medium">{person.name}</td>
//                 <td className="py-4 px-6 text-center">
//                   <input
//                     type="radio"
//                     name={`status-${person.id}`}
//                     checked={person.status === "present"}
//                     onChange={() => updateStatus(person.id, "present")}
//                   />
//                 </td>
//                 <td className="py-4 px-6 text-center">
//                   <input
//                     type="radio"
//                     name={`status-${person.id}`}
//                     checked={person.status === "absent"}
//                     onChange={() => updateStatus(person.id, "absent")}
//                   />
//                 </td>
//                 <td className="py-4 px-6 text-center">
//                   <input
//                     type="radio"
//                     name={`status-${person.id}`}
//                     checked={person.status === "late"}
//                     onChange={() => updateStatus(person.id, "late")}
//                   />
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>

//         <button className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-bold">
//           Save Attendance
//         </button>
//       </div>
//     </div>
//   );
// }
// app/routes/attendance/attendance.tsx
import { useState } from "react";
import { requireRole } from "~/services/auth.server";
import { query } from "~/services/db.server";

export async function loader({ request }: { request: Request }) {
  requireRole(request, ["ADMIN", "MASTER_ENCODER", "ATTENDANCE_ENCODER"]);

  // Get today's date in YYYY-MM-DD format
  const today = new Date().toISOString().split("T")[0];

  // Fetch all shareholders and their attendance status for today
  const records = await query(`
    SELECT 
      s.shareholder_id,
      s.name_english,
      COALESCE(a.status, 'absent') as status
    FROM shareholders s
    LEFT JOIN attendance a 
      ON s.shareholder_id = a.shareholder_id 
      AND a.attendance_date = ?
    ORDER BY s.name_english
  `, [today]);

  return { today, records };
}

export async function action({ request }: { request: Request }) {
  const formData = await request.formData();
  const attendance_date = formData.get("attendance_date") as string;

  // Clear today's attendance first (to handle changes)
  await query("DELETE FROM attendance WHERE attendance_date = ?", [attendance_date]);

  // Insert new records
  const entries = [];
  for (const [key, value] of formData.entries()) {
    if (key.startsWith("status-")) {
      const shareholder_id = key.replace("status-", "");
      entries.push([shareholder_id, attendance_date, value as string]);
    }
  }

  if (entries.length > 0) {
    await query(`
      INSERT INTO attendance (shareholder_id, attendance_date, status)
      VALUES ${entries.map(() => "(?, ?, ?)").join(", ")}
    `, entries.flat());
  }

  return { success: true };
}

export default function AttendancePage({ loaderData }: { loaderData: { today: string; records: any[] } }) {
  const { today, records } = loaderData;

  const formattedDate = new Date(today).toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="container mx-auto p-6 max-w-5xl">
      <div className="flex justify-between items-center mb-10">
        <a href="/" className="text-blue-600 hover:underline text-lg font-medium">
          🏠 Home
        </a>
        <h1 className="text-4xl font-bold text-gray-800">Attendance Encoder</h1>
        <div className="w-32"></div> {/* Spacer */}
      </div>

      <div className="bg-white rounded-2xl shadow-xl p-10">
        <h2 className="text-3xl font-semibold text-center text-blue-900 mb-10">
          Mark Attendance — {formattedDate}
        </h2>

        <form method="post">
          <input type="hidden" name="attendance_date" value={today} />

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-blue-100 text-blue-900">
                  <th className="py-5 px-8 text-left font-bold text-lg">Shareholder Name</th>
                  <th className="py-5 px-8 text-center font-bold text-lg">Present</th>
                  <th className="py-5 px-8 text-center font-bold text-lg">Absent</th>
                  <th className="py-5 px-8 text-center font-bold text-lg">Late</th>
                </tr>
              </thead>
              <tbody>
                {records.map((person) => (
                  <tr key={person.shareholder_id} className="border-b hover:bg-gray-50 transition">
                    <td className="py-6 px-8 font-medium text-gray-800">
                      {person.name_english || `ID: ${person.shareholder_id}`}
                    </td>
                    <td className="py-6 px-8 text-center">
                      <input
                        type="radio"
                        name={`status-${person.shareholder_id}`}
                        value="present"
                        defaultChecked={person.status === "present"}
                        className="w-6 h-6 text-green-600 focus:ring-green-500"
                      />
                    </td>
                    <td className="py-6 px-8 text-center">
                      <input
                        type="radio"
                        name={`status-${person.shareholder_id}`}
                        value="absent"
                        defaultChecked={person.status === "absent"}
                        className="w-6 h-6 text-red-600 focus:ring-red-500"
                      />
                    </td>
                    <td className="py-6 px-8 text-center">
                      <input
                        type="radio"
                        name={`status-${person.shareholder_id}`}
                        value="late"
                        defaultChecked={person.status === "late"}
                        className="w-6 h-6 text-orange-600 focus:ring-orange-500"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-12 text-center">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-xl px-12 py-5 rounded-xl shadow-lg hover:shadow-xl transition"
            >
              Save Attendance for {formattedDate}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}