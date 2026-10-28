const exams = [
  { title: 'اختبار الوحدة الأولى', course: 'لغة إنجليزية', date: '22 أكتوبر' },
  { title: 'اختبار القراءة', course: 'القراءة والتحليل', date: '25 أكتوبر' },
  { title: 'اختبار نهائي', course: 'اللغة الإنجليزية', date: '30 أكتوبر' }
];

export default function TeacherExamsPage() {
  return (
    <div className="grid gap-6">
      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-slate-500">الاختبارات</p>
            <h2 className="text-2xl font-black text-slate-900">إدارة الاختبارات</h2>
          </div>
          <button className="rounded-xl bg-brand-500 px-4 py-2.5 font-semibold text-white">إنشاء اختبار</button>
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {exams.map((exam) => (
          <div key={exam.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-xs text-slate-500">{exam.course}</p>
            <h3 className="mt-3 text-xl font-bold text-slate-900">{exam.title}</h3>
            <p className="mt-2 text-sm text-slate-500">التاريخ: {exam.date}</p>
            <button className="mt-5 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 font-semibold text-slate-700">عرض التفاصيل</button>
          </div>
        ))}
      </div>
    </div>
  );
}
