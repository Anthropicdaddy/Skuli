"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type School = {
  name: string;
  logoUrl: string | null;
  phone: string | null;
  address: string | null;
};

type Student = {
  id: string;
  name: string;
  admissionNo: string;
  grade: string;
};

type CbcResult = {
  id: string;
  subject: string;
  rubricLevel: string;
  term: string;
  year: number;
  remark: string | null;
};

const RUBRIC_COLORS: Record<string, string> = {
  EE: "bg-green-100 text-green-700",
  ME: "bg-blue-100 text-blue-700",
  AE: "bg-amber-100 text-amber-700",
  BE: "bg-red-100 text-red-700",
};

const RUBRIC_LABELS: Record<string, string> = {
  EE: "Exceeding Expectations",
  ME: "Meeting Expectations",
  AE: "Approaching Expectations",
  BE: "Below Expectations",
};

const TERM_LABELS: Record<string, string> = {
  TERM_1: "Term 1",
  TERM_2: "Term 2",
  TERM_3: "Term 3",
};

export function ReportCard({
  student,
  school,
  results,
}: {
  student: Student;
  school: School;
  results: CbcResult[];
}) {
  const latestYear = results.length > 0 ? results[0].year : new Date().getFullYear();
  const latestTerm = results.length > 0 ? results[0].term : "TERM_1";
  const yearResults = results.filter(
    (r) => r.year === latestYear && r.term === latestTerm
  );

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-2xl mx-auto">
        {/* Report Card */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-8 text-center">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-4xl">🏫</span>
            </div>
            <h1 className="text-2xl font-bold">{school.name}</h1>
            {school.address && (
              <p className="text-indigo-100 mt-1">{school.address}</p>
            )}
            <p className="text-indigo-200 text-sm mt-2">
              CBC Progress Report Card
            </p>
          </div>

          {/* Student Info */}
          <div className="p-6 border-b border-gray-200 bg-gray-50">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500">Student Name</p>
                <p className="font-semibold">{student.name}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Admission No.</p>
                <p className="font-semibold font-mono">
                  {student.admissionNo}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Grade</p>
                <p className="font-semibold">{student.grade}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">
                  Term / Year
                </p>
                <p className="font-semibold">
                  {TERM_LABELS[latestTerm]} {latestYear}
                </p>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="p-6">
            <h2 className="text-lg font-semibold mb-4">CBC Assessment Results</h2>

            {yearResults.length === 0 ? (
              <p className="text-gray-500 text-center py-8">
                No assessment results available for this term.
              </p>
            ) : (
              <div className="space-y-3">
                {yearResults.map((result) => (
                  <div
                    key={result.id}
                    className="flex items-center justify-between p-3 rounded-lg border border-gray-100 hover:bg-gray-50"
                  >
                    <span className="font-medium">{result.subject}</span>
                    <div className="flex items-center gap-3">
                      <Badge className={RUBRIC_COLORS[result.rubricLevel]}>
                        {result.rubricLevel}
                      </Badge>
                      <span className="text-xs text-gray-500 w-48">
                        {RUBRIC_LABELS[result.rubricLevel]}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="p-6 border-t border-gray-200 bg-gray-50">
            <div className="flex justify-between items-center">
              <p className="text-xs text-gray-400">
                Powered by Skulix - Smart ERP for Kenyan CBC Schools
              </p>
              <Button variant="outline" size="sm" onClick={() => window.print()}>
                🖨️ Print Report
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
