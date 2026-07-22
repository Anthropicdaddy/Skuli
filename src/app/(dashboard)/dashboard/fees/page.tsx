import { prisma } from "@/lib/prisma";
import { FeesDashboard } from "@/components/fees-dashboard";

export default async function FeesPage() {
  const school = await prisma.school.findFirst();
  if (!school) return <div className="p-8 text-gray-500">No school configured.</div>;

  const students = await prisma.student.findMany({
    where: { schoolId: school.id },
    orderBy: [{ grade: "asc" }, { name: "asc" }],
  });

  const payments = await prisma.feePayment.findMany({
    where: { student: { schoolId: school.id } },
    include: { student: true },
    orderBy: { createdAt: "desc" },
    take: 20,
  });

  const totalCollected = await prisma.feePayment.aggregate({
    where: { student: { schoolId: school.id } },
    _sum: { amount: true },
  });

  const totalOutstanding = await prisma.student.aggregate({
    where: { schoolId: school.id, feeBalance: { gt: 0 } },
    _sum: { feeBalance: true },
    _count: true,
  });

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Fees & Finance</h1>
        <p className="text-gray-500 mt-1">Track fee collections and outstanding balances</p>
      </div>
      <FeesDashboard
        students={students}
        payments={payments}
        totalCollected={totalCollected._sum.amount ?? 0}
        totalOutstanding={totalOutstanding._sum.feeBalance ?? 0}
        outstandingCount={totalOutstanding._count}
        schoolId={school.id}
      />
    </div>
  );
}
