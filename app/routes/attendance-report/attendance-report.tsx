
import { requireRole } from "~/services/auth.server";
import { query } from "~/services/db.server";

export async function loader({ request }: { request: Request }) {
  requireRole(request, ["ADMIN", "MASTER_ENCODER", "AUDITOR"]);

  // Summary by date
  const summary = await query(`
    SELECT 
      attendance_date,
      COUNT(CASE WHEN status = 'present' THEN 1 END) as present_count,
      COUNT(CASE WHEN status = 'absent' THEN 1 END) as absent_count,
      COUNT(CASE WHEN status = 'late' THEN 1 END) as late_count,
      COUNT(*) as total
    FROM attendance
    GROUP BY attendance_date
    ORDER BY attendance_date DESC
  `);

  // Detailed records
  const details = await query(`
    SELECT 
      a.attendance_date,
      s.name_english,
      a.status
    FROM attendance a
    JOIN shareholders s ON a.shareholder_id = s.shareholder_id
    ORDER BY a.attendance_date DESC, s.name_english
  `);

  return { summary, details };
}

export default function AttendanceReport({ loaderData }: { loaderData: { summary: any[]; details: any[] } }) {
  const { summary, details } = loaderData;

  return (
    <div className="container mx-auto p-6 max-w-6xl">
      <div className="flex justify-between items-center mb-10">
        <a href="/" className="text-blue-600 hover:underline text-lg font-medium">
          🏠 Home
        </a>
        <h1 className="text-4xl font-bold text-gray-800">Attendance Report</h1>
      </div>

      <div className="bg-white rounded-2xl shadow-xl p-10 mb-12">
        <h2 className="text-3xl font-semibold mb-8 text-blue-900">Summary by Date</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead className="bg-blue-100">
              <tr>
                <th className="py-5 px-8 text-left font-bold text-lg">Date</th>
                <th className="py-5 px-8 text-center font-bold text-lg text-green-700">Present</th>
                <th className="py-5 px-8 text-center font-bold text-lg text-red-700">Absent</th>
                <th className="py-5 px-8 text-center font-bold text-lg text-orange-700">Late</th>
                <th className="py-5 px-8 text-center font-bold text-lg">Total</th>
              </tr>
            </thead>
            <tbody>
              {summary.length === 0 ? (
                <tr>
                  <td colSpan={5} className="py-12 text-center text-gray-500 text-xl">
                    No attendance records yet
                  </td>
                </tr>
              ) : (
                summary.map((day: any) => (
                  <tr key={day.attendance_date} className="border-b hover:bg-gray-50">
                    <td className="py-6 px-8 font-medium">
                      {new Date(day.attendance_date).toLocaleDateString("en-US", {
                        weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </td>
                    <td className="py-6 px-8 text-center text-green-700 font-bold text-2xl">
                      {day.present_count}
                    </td>
                    <td className="py-6 px-8 text-center text-red-700 font-bold text-2xl">
                      {day.absent_count}
                    </td>
                    <td className="py-6 px-8 text-center text-orange-700 font-bold text-2xl">
                      {day.late_count}
                    </td>
                    <td className="py-6 px-8 text-center font-bold text-2xl">
                      {day.total}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-xl p-10">
        <h2 className="text-3xl font-semibold mb-8 text-blue-900">Detailed Records</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-4 px-6 text-left">Date</th>
                <th className="py-4 px-6 text-left">Name</th>
                <th className="py-4 px-6 text-center">Status</th>
              </tr>
            </thead>
            <tbody>
              {details.length === 0 ? (
                <tr>
                  <td colSpan={3} className="py-12 text-center text-gray-500 text-xl">
                    No detailed records yet
                  </td>
                </tr>
              ) : (
                details.map((record: any, i: number) => (
                  <tr key={i} className="border-b hover:bg-gray-50">
                    <td className="py-4 px-6">
                      {new Date(record.attendance_date).toLocaleDateString()}
                    </td>
                    <td className="py-4 px-6 font-medium">{record.name_english}</td>
                    <td className="py-4 px-6 text-center">
                      <span className={`px-4 py-2 rounded-full font-medium ${
                        record.status === "present" ? "bg-green-100 text-green-800" :
                        record.status === "absent" ? "bg-red-100 text-red-800" :
                        "bg-orange-100 text-orange-800"
                      }`}>
                        {record.status.charAt(0).toUpperCase() + record.status.slice(1)}
                      </span>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}