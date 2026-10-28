import Link from 'next/link';

const teacherCourses = [
  { title: 'أولى ثانوي – اللغة الإنجليزية', students: 120, lessons: 12, status: 'نشط' },
  { title: 'ثانية ثانوي – القراءة والتحليل', students: 97, lessons: 10, status: 'نشط' },
  { title: 'ثالثة ثانوي – الاختبارات النهائية', students: 84, lessons: 14, status: 'قيد الإعداد' }
];

export default function TeacherCoursesPage() {
  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-slate-500">إدارة المحتوى</p>
            <h2 className="text-2xl font-black text-slate-900">الدورات</h2>
          </div>
          <button className="rounded-xl bg-brand-500 px-4 py-2.5 font-semibold text-white">إضافة دورة جديدة</button>
        </div>
      </div>

      <div className="grid gap-5">
        {teacherCourses.map((course) => (
          <div key={course.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-xl font-bold text-slate-900">{course.title}</h3>
                <p className="mt-1 text-sm text-slate-500">{course.students} طالب • {course.lessons} دروس</p>
              </div>

              <div className="flex items-center gap-3">
                <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-semibold text-emerald-700">{course.status}</span>
                <Link href="/teacher" className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-semibold text-slate-700">
                  إدارة
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
