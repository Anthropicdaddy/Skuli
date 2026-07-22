import { prisma } from "@/lib/prisma";

export default async function ReportsPage() {
  const school = await prisma.school.findFirst();
  if (!school) return <div className="p-8 text-gray-500">No school configured.</div>;

  const students = await prisma.student.findMany({
    where: { schoolId: school.id },
    orderBy: [{ grade: "asc" }, { name: "asc" }],
  });

  const grades = [...new Set(students.map((s) => s.grade))].sort();

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Reports</h1>
        <p className="text-gray-500 mt-1">Generate and view school reports</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {grades.map((grade) => {
          const gradeStudents = students.filter((s) => s.grade === grade);
          const totalBalance = gradeStudents.reduce((sum, s) => sum + s.feeBalance, 0);

          return (
            <div key={grade} className="bg-white rounded-xl border border-gray-200 p-5">
              <h3 className="font-semibold text-gray-900">{grade}</h3>
              <p className="text-sm text-gray-500 mt-1">{gradeStudents.length} students</p>
              <div className="mt-3 space-y-1 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">Fee Balance:</span>
                  <span className={totalBalance > 0 ? "text-red-600 font-medium" : "text-green-600"}>
                    KES {totalBalance.toLocaleString()}
                  </span>
                </div>
              </div>
              <div className="mt-3">
                <a
                  href={`/report/${gradeStudents[0]?.id || ""}`}
                  className="text-xs text-indigo-600 hover:text-indigo-700"
                >
                  View Sample Report →
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
