import { prisma } from "@/lib/prisma";
import { TimetableView } from "@/components/timetable-view";

export default async function TimetablePage() {
  const school = await prisma.school.findFirst();
  if (!school) return <div className="p-8 text-gray-500">No school configured.</div>;

  const students = await prisma.student.findMany({
    where: { schoolId: school.id },
    select: { grade: true },
  });
  const grades = [...new Set(students.map((s) => s.grade))].sort();

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Timetable</h1>
        <p className="text-gray-500 mt-1">View and manage class schedules</p>
      </div>
      <TimetableView grades={grades} />
    </div>
  );
}
