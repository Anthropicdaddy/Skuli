import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";

export default async function AssignmentsPage() {
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

  const assignments = await prisma.assignment.findMany({
    where: { schoolId: school.id },
    orderBy: { createdAt: "desc" },
  });

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Assignments</h1>
          <p className="text-gray-600 mt-1">
            Upload and manage classwork for your students
          </p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-6">
          {assignments.length === 0 ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">📚</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                No Assignments Yet
              </h3>
              <p className="text-gray-500">
                Upload classwork and assignments for your students to download.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {assignments.map((a) => (
                <div
                  key={a.id}
                  className="flex items-center justify-between p-4 border border-gray-100 rounded-lg hover:bg-gray-50"
                >
                  <div>
                    <h4 className="font-semibold">{a.title}</h4>
                    <p className="text-sm text-gray-500">
                      {a.grade} - {a.subject} | {a.term.replace("_", " ")}{" "}
                      {a.year}
                    </p>
                  </div>
                  {a.fileUrl && (
                    <a
                      href={a.fileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-600 hover:text-indigo-700 font-medium text-sm"
                    >
                      Download →
                    </a>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
