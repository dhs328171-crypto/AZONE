import { DashboardShell } from '@/components/dashboard-shell';
import { courseStats, recentResults, stageOverview, teacherCards } from '@/lib/mock-data';

export default function TeacherDashboardPage() {
  return (
    <DashboardShell title="لوحة المدرس" subtitle="إدارة المنصة، الطلاب، الدروس والاختبارات" userRole="مدرس/مالك">
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {teacherCards.map((card) => (
          <div key={card.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-500">{card.title}</span>
              <span className="rounded-xl bg-brand-50 px-2.5 py-1 text-xs font-semibold text-brand-700">{card.trend}</span>
            </div>
            <p className="mt-4 text-3xl font-black text-slate-900">{card.value}</p>
            <p className="mt-2 text-sm text-slate-500">{card.note}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-xl font-bold text-slate-900">نظرة عامة على المراحل</h2>
            <button className="rounded-xl bg-brand-500 px-3 py-2 text-sm font-semibold text-white">إدارة المراحل</button>
          </div>

          <div className="space-y-4">
            {stageOverview.map((stage) => (
              <div key={stage.name}>
                <div className="mb-2 flex items-center justify-between text-sm text-slate-700">
                  <span>{stage.name}</span>
                  <span>{stage.percent}%</span>
                </div>
                <div className="h-2.5 overflow-hidden rounded-full bg-slate-200">
                  <div className="h-full rounded-full bg-brand-500" style={{ width: `${stage.percent}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900">آخر النتائج</h2>
          <div className="mt-5 space-y-4">
            {recentResults.map((result) => (
              <div key={result.student} className="flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 px-3 py-3">
                <div>
                  <p className="font-semibold text-slate-800">{result.student}</p>
                  <p className="text-xs text-slate-500">{result.course}</p>
                </div>
                <div className="text-left">
                  <p className="text-lg font-black text-brand-600">{result.score}</p>
                  <p className="text-xs text-slate-500">{result.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900">إحصائيات الدورات</h2>
        <div className="mt-5 grid gap-5 md:grid-cols-3">
          {courseStats.map((item) => (
            <div key={item.title} className="rounded-2xl bg-slate-50 p-4">
              <p className="text-sm text-slate-500">{item.title}</p>
              <p className="mt-3 text-3xl font-black text-slate-900">{item.value}</p>
              <p className="mt-2 text-sm text-slate-500">{item.note}</p>
            </div>
          ))}
        </div>
      </div>
    </DashboardShell>
  );
}
