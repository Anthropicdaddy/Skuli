import { prisma } from "@/lib/prisma";
import { StaffTable } from "@/components/staff-table";

export default async function StaffPage() {
  const school = await prisma.school.findFirst();
  if (!school) return <div className="p-8 text-gray-500">No school configured.</div>;

  const staff = await prisma.staff.findMany({
    where: { schoolId: school.id },
    include: { department: true },
    orderBy: [{ role: "asc" }, { name: "asc" }],
  });

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Staff</h1>
        <p className="text-gray-500 mt-1">Manage staff members and roles</p>
      </div>
      <StaffTable staff={staff} schoolId={school.id} />
    </div>
  );
}
