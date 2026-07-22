"use client";

import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";

const RUBRIC_INFO: Record<string, { pts: number; desc: string; color: string }> = {
  EE1: { pts: 8, desc: "Exceeding Expectations", color: "bg-green-100 text-green-800" },
  EE2: { pts: 7, desc: "Exceeding Expectations", color: "bg-green-50 text-green-700" },
  ME1: { pts: 6, desc: "Meeting Expectations", color: "bg-blue-100 text-blue-800" },
  ME2: { pts: 5, desc: "Meeting Expectations", color: "bg-blue-50 text-blue-700" },
  AE1: { pts: 4, desc: "Approaching Expectations", color: "bg-amber-100 text-amber-800" },
  AE2: { pts: 3, desc: "Approaching Expectations", color: "bg-amber-50 text-amber-700" },
  BE1: { pts: 2, desc: "Below Expectations", color: "bg-red-100 text-red-800" },
  BE2: { pts: 1, desc: "Below Expectations", color: "bg-red-50 text-red-700" },
};

type Result = { id: string; subject: string; rubricLevel: string; term: string; year: number };

export default function PortalReportPage() {
  const [results, setResults] = useState<Result[]>([]);
  const [studentName, setStudentName] = useState("");

  useEffect(() => {
    const studentId = localStorage.getItem("parentId");
    if (!studentId) return;

    fetch(`/api/parent/student?studentId=${studentId}`)
      .then((r) => r.json())
      .then((data) => {
        setResults(data.results || []);
        setStudentName(data.name || "");
      });
  }, []);

  if (!results.length) {
    return (
      <div className="text-center py-16 text-gray-500">
        <p>Loading report card...</p>
        <p className="text-sm mt-2">Please log in first from the <a href="/portal/login" className="text-indigo-600">parent login page</a>.</p>
      </div>
    );
  }

  const totalPoints = results.reduce((sum, r) => sum + (RUBRIC_INFO[r.rubricLevel]?.pts || 0), 0);
  const avgPoints = (totalPoints / results.length).toFixed(1);

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Report Card</h1>
        <p className="text-gray-500 mt-1">{studentName} — CBC Assessment Results</p>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">Average Score</span>
          <span className="text-2xl font-bold text-indigo-700">{avgPoints} / 8</span>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div className="divide-y divide-gray-100">
          {results.map((r) => {
            const info = RUBRIC_INFO[r.rubricLevel];
            return (
              <div key={r.id} className="flex items-center justify-between p-4">
                <span className="font-medium">{r.subject}</span>
                <div className="flex items-center gap-3">
                  <Badge className={info?.color || "bg-gray-100"}>{r.rubricLevel}</Badge>
                  <span className="text-xs text-gray-500">{info?.desc}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
