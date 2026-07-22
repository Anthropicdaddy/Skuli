"use client";

import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";

type Assignment = { id: string; title: string; description: string | null; subject: string; dueDate: string; submittedAt: string | null };

export default function PortalAssignmentsPage() {
  const [assignments, setAssignments] = useState<Assignment[]>([]);
  const [studentName, setStudentName] = useState("");

  useEffect(() => {
    const studentId = localStorage.getItem("parentId");
    if (!studentId) return;

    fetch(`/api/parent/assignments?studentId=${studentId}`)
      .then((r) => r.json())
      .then((data) => {
        setAssignments(data.assignments || []);
        setStudentName(data.name || "");
      });
  }, []);

  if (!assignments.length) {
    return (
      <div className="text-center py-16 text-gray-500">
        <p>Loading assignments...</p>
        <p className="text-sm mt-2">Please log in first from the <a href="/portal/login" className="text-indigo-600">parent login page</a>.</p>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Assignments</h1>
        <p className="text-gray-500 mt-1">{studentName}&apos;s assignments and classwork</p>
      </div>

      <div className="space-y-3">
        {assignments.map((a) => (
          <div key={a.id} className="bg-white rounded-xl border border-gray-200 p-5">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-semibold text-gray-900">{a.title}</h3>
                <p className="text-sm text-gray-500 mt-1">{a.description}</p>
                <div className="flex items-center gap-3 mt-2">
                  <Badge className="bg-indigo-100 text-indigo-700">{a.subject}</Badge>
                  <span className="text-xs text-gray-400">Due: {new Date(a.dueDate).toLocaleDateString("en-KE")}</span>
                </div>
              </div>
              <div>
                {a.submittedAt ? (
                  <Badge className="bg-green-100 text-green-700">Submitted</Badge>
                ) : (
                  <Badge className="bg-amber-100 text-amber-700">Pending</Badge>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
