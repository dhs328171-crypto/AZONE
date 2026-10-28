import Link from 'next/link';
import type { ReactNode } from 'react';

export function DashboardShell({
  title,
  subtitle,
  userRole,
  children
}: {
  title: string;
  subtitle: string;
  userRole: string;
  children: ReactNode;
}) {
  const menu = [
    { label: 'الرئيسية', href: userRole === 'مدرس/مالك' ? '/teacher' : userRole === 'مساعد مدرس' ? '/assistant' : userRole === 'طالب' ? '/student' : '/parent' },
    { label: 'الطلاب', href: userRole === 'مدرس/مالك' ? '/teacher/students' : userRole === 'مساعد مدرس' ? '/assistant/students' : '/student/courses', href2: '/parent/children' },
    { label: 'الدورات', href: userRole === 'مدرس/مالك' ? '/teacher/courses' : userRole === 'مساعد مدرس' ? '/assistant' : userRole === 'طالب' ? '/student/courses' : '/parent/children' },
    { label: 'الاختبارات', href: userRole === 'مدرس/مالك' ? '/teacher/exams' : userRole === 'مساعد مدرس' ? '/assistant' : userRole === 'طالب' ? '/student' : '/parent' },
    { label: 'تسجيل الخروج', href: '/login' }
  ];

  return (
    <div className="min-h-screen bg-slate-100">
      <aside className="fixed inset-y-0 right-0 w-72 border-l border-slate-200 bg-slate-900 text-white">
        <div className="flex items-center gap-3 border-b border-slate-800 px-6 py-5">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-500 font-black text-white">A</div>
          <div>
            <p className="text-lg font-black">AZONE</p>
            <p className="text-xs text-slate-400">لوحة التحكم</p>
          </div>
        </div>

        <div className="px-5 py-6">
          <div className="mb-6 rounded-2xl bg-slate-800 p-4">
            <p className="text-xs text-slate-400">الدور الحالي</p>
            <p className="mt-1 text-lg font-bold">{userRole}</p>
          </div>

          <nav className="space-y-2">
            {menu.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="flex items-center justify-between rounded-xl px-3 py-3 text-sm font-medium text-slate-200 transition hover:bg-slate-800"
              >
                <span>{item.label}</span>
                <span>›</span>
              </Link>
            ))}
          </nav>
        </div>
      </aside>

      <main className="mr-72 min-h-screen p-8">
        <div className="mb-8 flex items-center justify-between gap-4">
          <div>
            <p className="text-sm font-medium text-slate-500">منصة AZONE</p>
            <h1 className="text-3xl font-black text-slate-900">{title}</h1>
            <p className="mt-1 text-slate-500">{subtitle}</p>
          </div>

          <Link href="/" className="rounded-xl border border-slate-200 bg-white px-4 py-2.5 font-semibold text-slate-700 transition hover:border-slate-300">
            العودة للرئيسية
          </Link>
        </div>

        {children}
      </main>
    </div>
  );
}
