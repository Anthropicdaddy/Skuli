import Link from "next/link";

export default async function PortalHomePage() {
  // In production, get phone from session/cookie. For MVP, show login prompt.
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">My Child&apos;s Dashboard</h1>
        <p className="text-gray-500 mt-1">Overview of your child&apos;s school progress</p>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-8 text-center">
        <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-3xl">🎓</span>
        </div>
        <h2 className="text-lg font-semibold text-gray-900 mb-2">Welcome, Parent!</h2>
        <p className="text-gray-500 mb-6">
          To view your child&apos;s progress, report cards, and attendance, please log in with your phone number.
        </p>
        <Link
          href="/portal/login"
          className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors"
        >
          Login with Phone Number
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
              <span className="text-lg">📋</span>
            </div>
            <div>
              <p className="text-sm text-gray-500">Report Cards</p>
              <p className="text-xs text-gray-400">View CBC assessment results</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
              <span className="text-lg">✅</span>
            </div>
            <div>
              <p className="text-sm text-gray-500">Attendance</p>
              <p className="text-xs text-gray-400">Track daily attendance</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
              <span className="text-lg">📚</span>
            </div>
            <div>
              <p className="text-sm text-gray-500">Assignments</p>
              <p className="text-xs text-gray-400">View homework and classwork</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
