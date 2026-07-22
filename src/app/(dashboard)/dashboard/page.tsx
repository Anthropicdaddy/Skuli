import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";

export default async function DashboardPage() {
  const { userId, orgId } = await auth();

  if (!userId) {
    redirect("/sign-in");
  }

  let school = null;
  if (orgId) {
    school = await prisma.school.findUnique({
      where: { clerkOrgId: orgId },
      include: {
        _count: { select: { students: true, teachers: true } },
      },
    });
  }

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">
          Welcome to {school?.name || "Skulix"}
        </h1>
        <p className="text-gray-600 mt-1">
          Smart ERP for Kenyan CBC Schools
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
              <span className="text-2xl">🎓</span>
            </div>
            <div>
              <p className="text-sm text-gray-500">Total Students</p>
              <p className="text-2xl font-bold text-gray-900">
                {school?._count.students || 0}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <span className="text-2xl">👩‍🏫</span>
            </div>
            <div>
              <p className="text-sm text-gray-500">Teachers</p>
              <p className="text-2xl font-bold text-gray-900">
                {school?._count.teachers || 0}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
              <span className="text-2xl">💰</span>
            </div>
            <div>
              <p className="text-sm text-gray-500">Fee Collection</p>
              <p className="text-2xl font-bold text-gray-900">KES 0</p>
            </div>
          </div>
        </div>
      </div>

      {!school && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 text-center">
          <h2 className="text-lg font-semibold text-gray-900 mb-2">
            Get Started
          </h2>
          <p className="text-gray-600 mb-4">
            Create or join a school organization to start managing your CBC
            school.
          </p>
          <a
            href="/onboarding"
            className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Set Up Your School
          </a>
        </div>
      )}

      {school && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Quick Actions
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <a
              href="/dashboard/students"
              className="flex flex-col items-center p-4 rounded-lg border border-gray-200 hover:border-indigo-300 hover:bg-indigo-50 transition-colors"
            >
              <span className="text-2xl mb-2">➕</span>
              <span className="text-sm font-medium">Add Student</span>
            </a>
            <a
              href="/dashboard/grading"
              className="flex flex-col items-center p-4 rounded-lg border border-gray-200 hover:border-indigo-300 hover:bg-indigo-50 transition-colors"
            >
              <span className="text-2xl mb-2">📝</span>
              <span className="text-sm font-medium">Enter Marks</span>
            </a>
            <a
              href="/dashboard/assignments"
              className="flex flex-col items-center p-4 rounded-lg border border-gray-200 hover:border-indigo-300 hover:bg-indigo-50 transition-colors"
            >
              <span className="text-2xl mb-2">📚</span>
              <span className="text-sm font-medium">Upload Work</span>
            </a>
            <a
              href="/dashboard"
              className="flex flex-col items-center p-4 rounded-lg border border-gray-200 hover:border-indigo-300 hover:bg-indigo-50 transition-colors"
            >
              <span className="text-2xl mb-2">📊</span>
              <span className="text-sm font-medium">Reports</span>
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
