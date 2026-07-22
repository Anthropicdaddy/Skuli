import { prisma } from "@/lib/prisma";
import { StudentsTable } from "@/components/students-table";

export default async function StudentsPage() {
  const school = await prisma.school.findFirst();
  if (!school) return <div className="p-8 text-gray-500">No school configured.</div>;

  const students = await prisma.student.findMany({
    where: { schoolId: school.id },
    orderBy: [{ grade: "asc" }, { admissionNo: "asc" }],
  });

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Students</h1>
        <p className="text-gray-500 mt-1">Manage your student roster</p>
      </div>
      <StudentsTable students={students} schoolId={school.id} />
    </div>
  );
}
