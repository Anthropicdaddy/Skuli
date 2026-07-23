import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export default async function AdminOverviewPage() {
  const [totalSchools, totalStudents, totalStaff, recentSchools] = await Promise.all([
    prisma.school.count(),
    prisma.student.count(),
    prisma.staff.count(),
    prisma.school.findMany({
      take: 5,
      orderBy: { createdAt: "desc" },
      include: {
        _count: { select: { students: true, staff: true } },
      },
    }),
  ]);

  return (
    <div>
      <h1 className="text-xl font-semibold text-black mb-6">Overview</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-white rounded-lg border border-slate-200 p-5">
          <p className="text-sm text-black/40">Schools</p>
          <p className="text-3xl font-bold text-black mt-1">{totalSchools}</p>
        </div>
        <div className="bg-white rounded-lg border border-slate-200 p-5">
          <p className="text-sm text-black/40">Students</p>
          <p className="text-3xl font-bold text-black mt-1">{totalStudents}</p>
        </div>
        <div className="bg-white rounded-lg border border-slate-200 p-5">
          <p className="text-sm text-black/40">Staff</p>
          <p className="text-3xl font-bold text-black mt-1">{totalStaff}</p>
        </div>
      </div>

      <div className="bg-white rounded-lg border border-slate-200">
        <div className="px-5 py-3 border-b border-slate-100">
          <h2 className="text-sm font-semibold text-black">Recent Schools</h2>
        </div>
        {recentSchools.length === 0 ? (
          <div className="p-8 text-center text-sm text-black/30">
            No schools yet. Create your first school to get started.
          </div>
        ) : (
          <div className="divide-y divide-slate-100">
            {recentSchools.map((school) => (
              <div key={school.id} className="px-5 py-3 flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-black">{school.name}</p>
                  <p className="text-xs text-black/40">{school.county || "No county"} · {school._count.students} students · {school._count.staff} staff</p>
                </div>
                <span className="text-xs text-black/30">
                  {school.createdAt.toLocaleDateString()}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
