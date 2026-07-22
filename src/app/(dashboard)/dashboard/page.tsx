import { prisma } from "@/lib/prisma";

export default async function DashboardPage() {
  const school = await prisma.school.findFirst({
    include: {
      _count: {
        select: { students: true, staff: true },
      },
    },
  });

  const totalStudents = school?._count.students ?? 0;
  const totalStaff = school?._count.staff ?? 0;

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const todayAttendance = await prisma.attendance.count({ where: { date: today } });
  const presentToday = await prisma.attendance.count({ where: { date: today, status: "PRESENT" } });

  const totalExams = await prisma.exam.count();
  const totalAssignments = await prisma.assignment.count();

  const unreadNotifications = await prisma.notification.count({ where: { read: false } });

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">{school?.name || "Skuli Dashboard"}</h1>
        <p className="text-gray-500 mt-1">School management at a glance</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
              <span className="text-lg">🎓</span>
            </div>
            <div>
              <p className="text-sm text-gray-500">Students</p>
              <p className="text-2xl font-bold text-gray-900">{totalStudents}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
              <span className="text-lg">👩‍🏫</span>
            </div>
            <div>
              <p className="text-sm text-gray-500">Staff</p>
              <p className="text-2xl font-bold text-gray-900">{totalStaff}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
              <span className="text-lg">📋</span>
            </div>
            <div>
              <p className="text-sm text-gray-500">Exams</p>
              <p className="text-2xl font-bold text-gray-900">{totalExams}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
              <span className="text-lg">📝</span>
            </div>
            <div>
              <p className="text-sm text-gray-500">Assignments</p>
              <p className="text-2xl font-bold text-gray-900">{totalAssignments}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <h3 className="text-sm font-medium text-gray-500 mb-2">Today&apos;s Attendance</h3>
          <div className="flex items-end gap-2">
            <span className="text-3xl font-bold text-gray-900">
              {todayAttendance > 0 ? Math.round((presentToday / todayAttendance) * 100) : 0}%
            </span>
            <span className="text-sm text-gray-500 mb-1">
              ({presentToday}/{todayAttendance})
            </span>
          </div>
          <div className="mt-2 w-full bg-gray-100 rounded-full h-2">
            <div
              className="bg-green-500 h-2 rounded-full transition-all"
              style={{
                width: `${todayAttendance > 0 ? (presentToday / todayAttendance) * 100 : 0}%`,
              }}
            />
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <h3 className="text-sm font-medium text-gray-500 mb-2">Notifications</h3>
          <div className="flex items-end gap-2">
            <span className="text-3xl font-bold text-gray-900">{unreadNotifications}</span>
            <span className="text-sm text-gray-500 mb-1">unread</span>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <h3 className="text-sm font-medium text-gray-500 mb-2">Quick Actions</h3>
          <div className="grid grid-cols-2 gap-2">
            <a href="/dashboard/students" className="text-xs font-medium text-indigo-600 hover:text-indigo-700 px-2 py-1 rounded bg-indigo-50 text-center">
              Add Student
            </a>
            <a href="/dashboard/exams" className="text-xs font-medium text-indigo-600 hover:text-indigo-700 px-2 py-1 rounded bg-indigo-50 text-center">
              Enter Marks
            </a>
            <a href="/dashboard/attendance" className="text-xs font-medium text-indigo-600 hover:text-indigo-700 px-2 py-1 rounded bg-indigo-50 text-center">
              Mark Attendance
            </a>
            <a href="/dashboard/library" className="text-xs font-medium text-indigo-600 hover:text-indigo-700 px-2 py-1 rounded bg-indigo-50 text-center">
              Library
            </a>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h2>
        <div className="text-sm text-gray-500 text-center py-8">
          Activity will appear here as you use the system.
        </div>
      </div>
    </div>
  );
}
