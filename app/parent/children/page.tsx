const children = [
  { name: 'سارة أحمد', stage: 'أولى ثانوي', progress: 86, avg: 91 },
  { name: 'حسن محمد', stage: 'ثالثة ثانوي', progress: 72, avg: 84 }
];

export default function ParentChildrenPage() {
  return (
    <div className="space-y-6">
      {children.map((child) => (
        <div key={child.name} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xl font-bold text-slate-900">{child.name}</p>
              <p className="text-sm text-slate-500">{child.stage}</p>
            </div>
            <span className="rounded-full bg-brand-50 px-2.5 py-1 text-xs font-semibold text-brand-700">متوسط {child.avg}%</span>
          </div>

          <div className="mt-5">
            <div className="mb-2 flex items-center justify-between text-sm text-slate-700">
              <span>التقدم العام</span>
              <span>{child.progress}%</span>
            </div>
            <div className="h-2.5 overflow-hidden rounded-full bg-slate-200">
              <div className="h-full rounded-full bg-brand-500" style={{ width: `${child.progress}%` }} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
