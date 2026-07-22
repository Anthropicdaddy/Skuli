"use client";

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

type Student = { id: string; name: string; grade: string; feeBalance: number; admissionNo: string };
type Payment = { id: string; amount: number; method: string; reference: string | null; createdAt: Date; student: { name: string; admissionNo: string } };

export function FeesDashboard({
  students, payments, totalCollected, totalOutstanding, outstandingCount, schoolId,
}: {
  students: Student[];
  payments: Payment[];
  totalCollected: number;
  totalOutstanding: number;
  outstandingCount: number;
  schoolId: string;
}) {
  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <p className="text-sm text-gray-500">Total Collected</p>
          <p className="text-2xl font-bold text-green-600">KES {totalCollected.toLocaleString()}</p>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <p className="text-sm text-gray-500">Outstanding</p>
          <p className="text-2xl font-bold text-red-600">KES {totalOutstanding.toLocaleString()}</p>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <p className="text-sm text-gray-500">Students with Balance</p>
          <p className="text-2xl font-bold text-amber-600">{outstandingCount}</p>
        </div>
      </div>

      {/* Outstanding Balances */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div className="p-4 border-b border-gray-200">
          <h3 className="font-semibold">Outstanding Balances</h3>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Adm No.</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Grade</TableHead>
              <TableHead className="text-right">Balance</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {students.filter((s) => s.feeBalance > 0).length === 0 ? (
              <TableRow><TableCell colSpan={5} className="text-center py-8 text-gray-500">All fees paid! 🎉</TableCell></TableRow>
            ) : (
              students.filter((s) => s.feeBalance > 0).map((s) => (
                <TableRow key={s.id}>
                  <TableCell className="font-mono text-sm">{s.admissionNo}</TableCell>
                  <TableCell className="font-medium">{s.name}</TableCell>
                  <TableCell>{s.grade}</TableCell>
                  <TableCell className="text-right font-medium text-red-600">KES {s.feeBalance.toLocaleString()}</TableCell>
                  <TableCell><Badge className="bg-red-100 text-red-700">Outstanding</Badge></TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      {/* Recent Payments */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div className="p-4 border-b border-gray-200">
          <h3 className="font-semibold">Recent Payments</h3>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Student</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Method</TableHead>
              <TableHead>Reference</TableHead>
              <TableHead>Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {payments.length === 0 ? (
              <TableRow><TableCell colSpan={5} className="text-center py-8 text-gray-500">No payments recorded.</TableCell></TableRow>
            ) : (
              payments.map((p) => (
                <TableRow key={p.id}>
                  <TableCell>
                    <p className="font-medium">{p.student.name}</p>
                    <p className="text-xs text-gray-400">{p.student.admissionNo}</p>
                  </TableCell>
                  <TableCell className="font-medium text-green-600">KES {p.amount.toLocaleString()}</TableCell>
                  <TableCell><Badge variant="outline">{p.method.replace("_", " ")}</Badge></TableCell>
                  <TableCell className="font-mono text-sm">{p.reference || "-"}</TableCell>
                  <TableCell className="text-sm">{new Date(p.createdAt).toLocaleDateString()}</TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
