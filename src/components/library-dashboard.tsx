"use client";

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

type Book = { id: string; title: string; author: string | null; category: string | null; copies: number; available: number; isbn: string | null };
type Transaction = { id: string; book: { title: string }; studentId: string; issueDate: Date; dueDate: Date; returnDate: Date | null; fine: number };

export function LibraryDashboard({ books, transactions, schoolId }: { books: Book[]; transactions: Transaction[]; schoolId: string }) {
  const totalBooks = books.reduce((sum, b) => sum + b.copies, 0);
  const totalAvailable = books.reduce((sum, b) => sum + b.available, 0);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <p className="text-sm text-gray-500">Total Titles</p>
          <p className="text-2xl font-bold text-gray-900">{books.length}</p>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <p className="text-sm text-gray-500">Total Copies</p>
          <p className="text-2xl font-bold text-gray-900">{totalBooks}</p>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <p className="text-sm text-gray-500">Available</p>
          <p className="text-2xl font-bold text-green-600">{totalAvailable}</p>
        </div>
      </div>

      {/* Book Catalog */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div className="p-4 border-b border-gray-200">
          <h3 className="font-semibold">Book Catalog</h3>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Author</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Copies</TableHead>
              <TableHead>Available</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {books.map((b) => (
              <TableRow key={b.id}>
                <TableCell className="font-medium">{b.title}</TableCell>
                <TableCell className="text-sm">{b.author || "-"}</TableCell>
                <TableCell><Badge variant="outline">{b.category || "General"}</Badge></TableCell>
                <TableCell>{b.copies}</TableCell>
                <TableCell>
                  <span className={b.available > 0 ? "text-green-600" : "text-red-600"}>{b.available}</span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Active Issues */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div className="p-4 border-b border-gray-200">
          <h3 className="font-semibold">Active Issues ({transactions.length})</h3>
        </div>
        {transactions.length === 0 ? (
          <div className="text-center py-8 text-gray-500">No active issues.</div>
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Book</TableHead>
                <TableHead>Issued</TableHead>
                <TableHead>Due</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {transactions.map((t) => {
                const isOverdue = new Date(t.dueDate) < new Date();
                return (
                  <TableRow key={t.id}>
                    <TableCell className="font-medium">{t.book.title}</TableCell>
                    <TableCell className="text-sm">{new Date(t.issueDate).toLocaleDateString()}</TableCell>
                    <TableCell className="text-sm">{new Date(t.dueDate).toLocaleDateString()}</TableCell>
                    <TableCell>
                      {isOverdue ? <Badge className="bg-red-100 text-red-700">Overdue</Badge> : <Badge className="bg-green-100 text-green-700">Active</Badge>}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        )}
      </div>
    </div>
  );
}
