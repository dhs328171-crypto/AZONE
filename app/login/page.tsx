import Link from 'next/link';

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100 p-6">
      <div className="grid w-full max-w-5xl overflow-hidden rounded-3xl bg-white shadow-soft lg:grid-cols-[1.2fr_0.8fr]">
        <div className="bg-gradient-to-br from-brand-500 to-brand-700 p-10 text-white">
          <p className="text-sm font-medium text-brand-100">AZONE</p>
          <h1 className="mt-5 text-3xl font-black">منصة التعليم المتكامل</h1>
          <p className="mt-4 max-w-md text-brand-50">
            سجل الدخول للوصول إلى الدروس، الاختبارات، تقارير التقدم ولوحة متابعة المنصة.
          </p>

          <div className="mt-10 space-y-4">
            {['مدرس', 'مساعد مدرس', 'طالب', 'ولي أمر'].map((role) => (
              <div key={role} className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/5 px-4 py-3">
                <div className="h-2.5 w-2.5 rounded-full bg-white" />
                <span>{role}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="p-8 md:p-10">
          <h2 className="text-2xl font-black text-slate-900">تسجيل الدخول</h2>
          <p className="mt-2 text-sm text-slate-500">يرجى إدخال البيانات الخاصة بك</p>

          <form className="mt-8 space-y-5">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">البريد الإلكتروني</label>
              <input
                type="email"
                defaultValue="teacher@azone.com"
                className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-800 outline-none ring-0 transition focus:border-brand-500 focus:bg-white"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">كلمة المرور</label>
              <input
                type="password"
                defaultValue="123456"
                className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-800 outline-none ring-0 transition focus:border-brand-500 focus:bg-white"
              />
            </div>

            <div className="flex items-center justify-between text-sm text-slate-500">
              <label className="flex items-center gap-2">
                <input type="checkbox" /> تذكرني
              </label>
              <Link href="#" className="text-brand-600">نسيت كلمة المرور؟</Link>
            </div>

            <div className="space-y-3 pt-2">
              <Link href="/teacher" className="block rounded-xl bg-brand-500 px-4 py-3 text-center font-semibold text-white transition hover:bg-brand-600">
                دخول كمدرس
              </Link>
              <Link href="/assistant" className="block rounded-xl border border-slate-300 bg-white px-4 py-3 text-center font-semibold text-slate-700 transition hover:border-slate-400">
                دخول كمساعد مدرس
              </Link>
              <Link href="/student" className="block rounded-xl border border-slate-300 bg-white px-4 py-3 text-center font-semibold text-slate-700 transition hover:border-slate-400">
                دخول كطالب
              </Link>
              <Link href="/parent" className="block rounded-xl border border-slate-300 bg-white px-4 py-3 text-center font-semibold text-slate-700 transition hover:border-slate-400">
                دخول كولي أمر
              </Link>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
