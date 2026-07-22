"use client";

import { useEffect, useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

type Attendance = { id: string; date: string; status: string };

const STATUS_COLORS: Record<string, string> = {
  PRESENT: "bg-green-100 text-green-700",
  LATE: "bg-amber-100 text-amber-700",
  ABSENT: "bg-red-100 text-red-700",
  EXCUSED: "bg-blue-100 text-blue-700",
};

export default function PortalAttendancePage() {
  const [records, setRecords] = useState<Attendance[]>([]);
  const [studentName, setStudentName] = useState("");

  useEffect(() => {
    const studentId = localStorage.getItem("parentId");
    if (!studentId) return;

    fetch(`/api/parent/attendance?studentId=${studentId}`)
      .then((r) => r.json())
      .then((data) => {
        setRecords(data.attendance || []);
        setStudentName(data.name || "");
      });
  }, []);

  if (!records.length) {
    return (
      <div className="text-center py-16 text-gray-500">
        <p>Loading attendance...</p>
        <p className="text-sm mt-2">Please log in first from the <a href="/portal/login" className="text-indigo-600">parent login page</a>.</p>
      </div>
    );
  }

  const presentDays = records.filter((r) => r.status === "PRESENT").length;
  const totalDays = records.length;
  const attendanceRate = totalDays > 0 ? Math.round((presentDays / totalDays) * 100) : 0;

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Attendance</h1>
        <p className="text-gray-500 mt-1">{studentName}&apos;s attendance record</p>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-5 mb-6">
        <div className="flex items-center gap-4">
          <div>
            <p className="text-sm text-gray-500">Attendance Rate</p>
            <p className="text-3xl font-bold text-gray-900">{attendanceRate}%</p>
          </div>
          <div className="flex-1">
            <div className="w-full bg-gray-100 rounded-full h-3">
              <div className="bg-green-500 h-3 rounded-full" style={{ width: `${attendanceRate}%` }} />
            </div>
            <p className="text-xs text-gray-400 mt-1">{presentDays} of {totalDays} days present</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead className="text-right">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {records.map((r) => (
              <TableRow key={r.id}>
                <TableCell>{new Date(r.date).toLocaleDateString("en-KE", { weekday: "short", year: "numeric", month: "short", day: "numeric" })}</TableCell>
                <TableCell className="text-right">
                  <Badge className={STATUS_COLORS[r.status] || "bg-gray-100"}>{r.status}</Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
