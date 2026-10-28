import { DashboardShell } from '@/components/dashboard-shell';
import { assistantStats, assignedStudents } from '@/lib/mock-data';

export default function AssistantDashboardPage() {
  return (
    <DashboardShell title="لوحة مساعد المدرس" subtitle="متابعة الطلاب والفصول المخصصة" userRole="مساعد مدرس">
      <div className="grid gap-5 md:grid-cols-3">
        {assistantStats.map((stat) => (
          <div key={stat.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">{stat.title}</p>
            <p className="mt-4 text-3xl font-black text-slate-900">{stat.value}</p>
            <p className="mt-2 text-sm text-slate-500">{stat.note}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-xl font-bold text-slate-900">الطلاب المعينين</h2>
          <button className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-semibold text-slate-700">إرسال تنبيه</button>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full text-right">
            <thead>
              <tr className="border-b border-slate-200 text-sm text-slate-500">
                <th className="pb-3 font-medium">الطالب</th>
                <th className="pb-3 font-medium">المرحلة</th>
                <th className="pb-3 font-medium">التقدم</th>
                <th className="pb-3 font-medium">أحدث درجة</th>
                <th className="pb-3 font-medium">الحالة</th>
              </tr>
            </thead>
            <tbody>
              {assignedStudents.map((student) => (
                <tr key={student.name} className="border-b border-slate-100 text-sm text-slate-700">
                  <td className="py-3 font-semibold">{student.name}</td>
                  <td className="py-3">{student.stage}</td>
                  <td className="py-3">{student.progress}%</td>
                  <td className="py-3">{student.score}</td>
                  <td className="py-3">
                    <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-semibold text-emerald-700">
                      {student.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </DashboardShell>
  );
}
