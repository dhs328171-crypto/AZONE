import Link from 'next/link';

const stats = [
  { label: 'الطلاب', value: '1,240' },
  { label: 'الدورات', value: '36' },
  { label: 'الاختبارات', value: '128' },
  { label: 'نسبة التفاعل', value: '92%' }
];

const courses = [
  'اللغة الإنجليزية – أولى ثانوي',
  'اللغة الإنجليزية – ثانية ثانوي',
  'اللغة الإنجليزية – ثالثة ثانوي',
  'القراءة والمفردات',
  'الكتابة والتحليل',
  'اختبارات نهائية'
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <header className="border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-500 text-lg font-bold text-white">A</div>
            <div>
              <p className="text-xl font-black">AZONE</p>
              <p className="text-xs text-slate-500">منصة تعليمية</p>
            </div>
          </div>

          <nav className="hidden items-center gap-6 text-sm font-medium text-slate-700 md:flex">
            <Link href="#features">المميزات</Link>
            <Link href="#courses">الدورات</Link>
            <Link href="#reports">التقارير</Link>
            <Link href="/login">تسجيل الدخول</Link>
          </nav>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <span className="inline-flex rounded-full border border-brand-100 bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
              منصة تعليمية حديثة ومتكاملة
            </span>
            <h1 className="mt-6 text-4xl font-black leading-tight text-slate-900 md:text-5xl">
              منصة تعليمية تركز على الإنجاز والنتائج
            </h1>
            <p className="mt-5 max-w-xl text-lg text-slate-600">
              نظام متكامل للمدرس والطالب وولي الأمر، مصمم لدعم تعليم اللغة الإنجليزية للمرحلة الثانوية بشكل احترافي وسهل الاستخدام.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/login" className="rounded-xl bg-brand-500 px-6 py-3 font-semibold text-white shadow-soft transition hover:bg-brand-600">
                ابدأ الآن
              </Link>
              <Link href="#courses" className="rounded-xl border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-700 transition hover:border-slate-400">
                استعرض الدورات
              </Link>
            </div>
          </div>

          <div className="rounded-3xl bg-gradient-to-br from-brand-500 to-brand-700 p-6 text-white shadow-soft">
            <div className="space-y-5 rounded-2xl bg-white/10 p-5 backdrop-blur-sm">
              <div className="flex items-center justify-between">
                <p className="text-sm text-brand-50">لوحة المتابعة</p>
                <span className="rounded-full bg-white/15 px-2 py-1 text-xs">مباشر</span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat) => (
                  <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-2xl font-black">{stat.value}</p>
                    <p className="mt-1 text-xs text-brand-50">{stat.label}</p>
                  </div>
                ))}
              </div>
              <div className="rounded-2xl bg-white p-4 text-slate-800">
                <div className="flex items-center justify-between">
                  <p className="font-semibold">نسبة إنجاز أولى ثانوي</p>
                  <span className="font-bold text-brand-600">86%</span>
                </div>
                <div className="mt-3 h-2.5 overflow-hidden rounded-full bg-slate-200">
                  <div className="h-full w-[86%] rounded-full bg-brand-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="mx-auto max-w-7xl px-6 py-12">
        <div className="mb-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-600">المميزات</p>
          <h2 className="mt-2 text-3xl font-black text-slate-900">كل ما تحتاجه المنصة في مكان واحد</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            ['لوحة المدرس', 'إدارة الدروس، الاختبارات، الطلاب، التقارير والملفات من شاشة واحدة.'],
            ['مساعد المدرس', 'توزيع المهام ومتابعة الفصول والطلاب بشكل منظم ومرن.'],
            ['ولي الأمر', 'متابعة تقدم الطالب، الدرجات، الإنجاز والإشعارات بسهولة.']
          ].map(([title, text]) => (
            <div key={title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-xl font-black text-brand-600">
                ✓
              </div>
              <h3 className="text-xl font-bold text-slate-900">{title}</h3>
              <p className="mt-3 text-slate-600">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="courses" className="mx-auto max-w-7xl px-6 py-12">
        <div className="mb-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-600">الدورات</p>
          <h2 className="mt-2 text-3xl font-black text-slate-900">مراحل تعليمية واضحة ومباشرة</h2>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {courses.map((course) => (
            <div key={course} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-4 flex items-center justify-between">
                <span className="rounded-full bg-brand-50 px-2.5 py-1 text-xs font-semibold text-brand-700">مستوى</span>
                <span className="text-sm text-slate-500">12 درس</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900">{course}</h3>
              <p className="mt-3 text-slate-600">تعلم مهارات القراءة، الكتابة، الاستماع والاختبارات النهائية بطريقة منظمة.</p>
              <button className="mt-5 w-full rounded-xl bg-slate-900 px-4 py-2.5 font-semibold text-white transition hover:bg-slate-800">
                تفاصيل الدورة
              </button>
            </div>
          ))}
        </div>
      </section>

      <footer id="reports" className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 md:flex-row">
          <p className="text-slate-600">© 2026 AZONE — منصة تعليمية متكاملة</p>
          <Link href="/login" className="font-semibold text-brand-600">الدخول إلى المنصة</Link>
        </div>
      </footer>
    </main>
  );
}
