import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";

export default async function OnboardingPage() {
  const { userId, orgId } = await auth();

  if (!userId) {
    redirect("/sign-in");
  }

  if (orgId) {
    const school = await prisma.school.findUnique({
      where: { clerkOrgId: orgId },
    });
    if (school) {
      redirect("/dashboard");
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 max-w-md w-full text-center">
        <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <span className="text-3xl">🏫</span>
        </div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Welcome to Skulix
        </h1>
        <p className="text-gray-600 mb-6">
          Set up your school organization to get started with CBC management.
        </p>
        <p className="text-sm text-gray-500 mb-6">
          Use the Clerk Organization switcher in the top-right to create your
          school. Your school name will be used as the organization name.
        </p>
        <a
          href="/dashboard"
          className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium"
        >
          Go to Dashboard
        </a>
      </div>
    </div>
  );
}
