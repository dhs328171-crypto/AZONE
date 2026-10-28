const courses = [
  { title: 'اللغة الإنجليزية – أولى', progress: 78, lessons: 12 },
  { title: 'اللغة الإنجليزية – ثانية', progress: 65, lessons: 10 },
  { title: 'اللغة الإنجليزية – ثالثة', progress: 89, lessons: 14 }
];

export default function StudentCoursesPage() {
  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <h2 className="text-2xl font-black text-slate-900">دوراتي</h2>
      </div>

      {courses.map((course) => (
        <div key={course.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xl font-bold text-slate-900">{course.title}</p>
              <p className="text-sm text-slate-500">{course.lessons} دروس</p>
            </div>
            <span className="rounded-full bg-brand-50 px-2.5 py-1 text-xs font-semibold text-brand-700">{course.progress}%</span>
          </div>

          <div className="mt-4 h-2.5 overflow-hidden rounded-full bg-slate-200">
            <div className="h-full rounded-full bg-brand-500" style={{ width: `${course.progress}%` }} />
          </div>
        </div>
      ))}
    </div>
  );
}
