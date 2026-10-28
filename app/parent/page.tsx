import { DashboardShell } from '@/components/dashboard-shell';
import { parentChildren } from '@/lib/mock-data';

export default function ParentDashboardPage() {
  return (
    <DashboardShell title="لوحة ولي الأمر" subtitle="متابعة تقدم الطالب والنتائج" userRole="ولي أمر">
      <div className="grid gap-5 md:grid-cols-2">
        {parentChildren.map((child) => (
          <div key={child.name} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-lg font-bold text-slate-900">{child.name}</p>
                <p className="text-sm text-slate-500">{child.stage}</p>
              </div>
              <span className="rounded-full bg-brand-50 px-2.5 py-1 text-xs font-semibold text-brand-700">{child.avg}%</span>
            </div>

            <div className="mt-5 space-y-4">
              <div>
                <div className="mb-2 flex items-center justify-between text-sm text-slate-700">
                  <span>نسبة الإنجاز</span>
                  <span>{child.progress}%</span>
                </div>
                <div className="h-2.5 overflow-hidden rounded-full bg-slate-200">
                  <div className="h-full rounded-full bg-brand-500" style={{ width: `${child.progress}%` }} />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 text-sm text-slate-600">
                <div className="rounded-xl bg-slate-50 p-3">
                  <p>الدروس</p>
                  <p className="mt-1 text-lg font-black text-slate-900">{child.lessons}</p>
                </div>
                <div className="rounded-xl bg-slate-50 p-3">
                  <p>الاختبارات</p>
                  <p className="mt-1 text-lg font-black text-slate-900">{child.exams}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </DashboardShell>
  );
}
