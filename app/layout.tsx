import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'AZONE | منصة تعليمية',
  description: 'منصة تعليمية متكاملة للمرحلة الثانوية، مع متابعة الطلاب وأولياء الأمور.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
