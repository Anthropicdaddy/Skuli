import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { StudentsTable } from "@/components/students-table";

export default async function StudentsPage() {
  const { userId, orgId } = await auth();

  if (!userId || !orgId) {
    redirect("/sign-in");
  }

  const school = await prisma.school.findUnique({
    where: { clerkOrgId: orgId },
  });

  if (!school) {
    redirect("/onboarding");
  }

  const students = await prisma.student.findMany({
    where: { schoolId: school.id },
    orderBy: [{ grade: "asc" }, { admissionNo: "asc" }],
  });

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Students</h1>
          <p className="text-gray-600 mt-1">
            Manage your student roster
          </p>
        </div>
      </div>

      <StudentsTable students={students} schoolId={school.id} />
    </div>
  );
}
