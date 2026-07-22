import { prisma } from "@/lib/prisma";
import { ExamsList } from "@/components/exams-list";

export default async function ExamsPage() {
  const school = await prisma.school.findFirst();
  if (!school) return <div className="p-8 text-gray-500">No school configured.</div>;

  const exams = await prisma.exam.findMany({
    where: { schoolId: school.id },
    include: { _count: { select: { results: true } } },
    orderBy: { createdAt: "desc" },
  });

  const students = await prisma.student.findMany({
    where: { schoolId: school.id },
    orderBy: [{ grade: "asc" }, { name: "asc" }],
  });

  const grades = [...new Set(students.map((s) => s.grade))].sort();

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Exams & Grading</h1>
        <p className="text-gray-500 mt-1">Manage exams and enter marks</p>
      </div>
      <ExamsList exams={exams} students={students} grades={grades} schoolId={school.id} />
    </div>
  );
}
