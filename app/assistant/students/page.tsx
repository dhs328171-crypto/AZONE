const students = [
  { name: 'آية محمد', progress: 86, grade: '94%', status: 'مستمر' },
  { name: 'يوسف علي', progress: 72, grade: '86%', status: 'جيد' },
  { name: 'سارة ياسر', progress: 91, grade: '96%', status: 'متميز' }
];

export default function AssistantStudentsPage() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <p className="text-sm text-slate-500">الطلاب المعينين</p>
          <h2 className="text-2xl font-black text-slate-900">متابعة الطلاب</h2>
        </div>
        <button className="rounded-xl bg-brand-500 px-4 py-2.5 font-semibold text-white">إرسال إشعار</button>
      </div>

      <div className="space-y-4">
        {students.map((student) => (
          <div key={student.name} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-bold text-slate-900">{student.name}</p>
                <p className="text-sm text-slate-500">{student.status}</p>
              </div>
              <span className="rounded-full bg-brand-50 px-2.5 py-1 text-xs font-semibold text-brand-700">{student.grade}</span>
            </div>

            <div className="mt-4 h-2.5 overflow-hidden rounded-full bg-slate-200">
              <div className="h-full rounded-full bg-brand-500" style={{ width: `${student.progress}%` }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
