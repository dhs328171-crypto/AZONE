import Link from 'next/link';

const courses = [
  { title: 'اللغة الإنجليزية – أولى ثانوي', level: 'أولى', lessons: 12, price: 'مجانًا' },
  { title: 'اللغة الإنجليزية – ثانية ثانوي', level: 'ثانية', lessons: 14, price: 'مجانًا' },
  { title: 'اللغة الإنجليزية – ثالثة ثانوي', level: 'ثالثة', lessons: 16, price: 'مجانًا' },
  { title: 'القراءة والتحليل', level: 'مميز', lessons: 10, price: 'مجانًا' }
];

export default function CoursesPage() {
  return (
    <main className="min-h-screen bg-slate-100 p-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-brand-600">AZONE</p>
            <h1 className="text-3xl font-black text-slate-900">الدورات</h1>
          </div>
          <Link href="/login" className="rounded-xl bg-brand-500 px-4 py-2.5 font-semibold text-white shadow-soft">
            تسجيل الدخول
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {courses.map((course) => (
            <div key={course.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="mb-4 flex items-center justify-between">
                <span className="rounded-full bg-brand-50 px-2.5 py-1 text-xs font-semibold text-brand-700">{course.level}</span>
                <span className="text-sm text-slate-500">{course.price}</span>
              </div>
              <h2 className="text-xl font-bold text-slate-900">{course.title}</h2>
              <p className="mt-3 text-sm text-slate-600">محتوى تدريبي منظم يشمل القراءة، الكتابة، القواعد، الاستماع والتحليل.</p>
              <div className="mt-5 flex items-center justify-between border-t border-slate-200 pt-4 text-sm text-slate-500">
                <span>{course.lessons} دروس</span>
                <button className="rounded-xl bg-slate-900 px-3 py-2 font-medium text-white">عرض</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
