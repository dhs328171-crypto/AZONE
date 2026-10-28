import { DashboardShell } from '@/components/dashboard-shell';
import { studentCourses, studentMetrics } from '@/lib/mock-data';

export default function StudentDashboardPage() {
  return (
    <DashboardShell title="لوحة الطالب" subtitle="متابعة الدروس والاختبارات والتقدم" userRole="طالب">
      <div className="grid gap-5 md:grid-cols-3">
        {studentMetrics.map((stat) => (
          <div key={stat.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">{stat.title}</p>
            <p className="mt-4 text-3xl font-black text-slate-900">{stat.value}</p>
            <p className="mt-2 text-sm text-slate-500">{stat.note}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900">دوراتي الحالية</h2>
          <div className="mt-5 space-y-4">
            {studentCourses.map((course) => (
              <div key={course.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="font-semibold text-slate-800">{course.title}</p>
                    <p className="text-sm text-slate-500">{course.lessons} دروس • {course.exams} اختبارات</p>
                  </div>
                  <span className="rounded-full bg-brand-50 px-2.5 py-1 text-xs font-semibold text-brand-700">{course.progress}%</span>
                </div>
                <div className="mt-3 h-2.5 overflow-hidden rounded-full bg-slate-200">
                  <div className="h-full rounded-full bg-brand-500" style={{ width: `${course.progress}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900">آخر النتائج</h2>
          <div className="mt-5 space-y-4">
            {[
              ['اختبار القراءة', '92%'],
              ['اختبار المفردات', '88%'],
              ['اختبار الكتابة', '95%']
            ].map(([title, score]) => (
              <div key={title} className="flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 px-3 py-3">
                <span className="font-medium text-slate-700">{title}</span>
                <span className="text-lg font-black text-brand-600">{score}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardShell>
  );
}
