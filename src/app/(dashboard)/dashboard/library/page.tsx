import { prisma } from "@/lib/prisma";
import { LibraryDashboard } from "@/components/library-dashboard";

export default async function LibraryPage() {
  const school = await prisma.school.findFirst();
  if (!school) return <div className="p-8 text-gray-500">No school configured.</div>;

  const books = await prisma.libraryBook.findMany({
    where: { schoolId: school.id },
    orderBy: { title: "asc" },
  });

  const activeTransactions = await prisma.libraryTransaction.findMany({
    where: { returnDate: null, book: { schoolId: school.id } },
    include: { book: true },
  });

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Library</h1>
        <p className="text-gray-500 mt-1">Manage books, issues, and returns</p>
      </div>
      <LibraryDashboard books={books} transactions={activeTransactions} schoolId={school.id} />
    </div>
  );
}
