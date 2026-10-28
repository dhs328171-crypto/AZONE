const students = [
  { name: 'آية محمد', stage: 'أولى ثانوي', progress: '86%', score: '94%' },
  { name: 'يوسف علي', stage: 'ثانية ثانوي', progress: '74%', score: '88%' },
  { name: 'سارة ياسر', stage: 'ثالثة ثانوي', progress: '92%', score: '96%' },
  { name: 'عبدالله حسن', stage: 'أولى ثانوي', progress: '69%', score: '81%' }
];

export default function TeacherStudentsPage() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <p className="text-sm text-slate-500">إدارة الطلاب</p>
          <h2 className="text-2xl font-black text-slate-900">الطلاب</h2>
        </div>
        <button className="rounded-xl bg-brand-500 px-4 py-2.5 font-semibold text-white">إضافة طالب</button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full text-right">
          <thead>
            <tr className="border-b border-slate-200 text-sm text-slate-500">
              <th className="pb-3 font-medium">اسم الطالب</th>
              <th className="pb-3 font-medium">المرحلة</th>
              <th className="pb-3 font-medium">التقدم</th>
              <th className="pb-3 font-medium">آخر درجة</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.name} className="border-b border-slate-100 text-sm text-slate-700">
                <td className="py-3 font-semibold">{student.name}</td>
                <td className="py-3">{student.stage}</td>
                <td className="py-3">{student.progress}</td>
                <td className="py-3">{student.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
