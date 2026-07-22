"use client";

import { useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";

type Exam = { id: string; name: string; type: string; term: string; year: number; grade: string; weight: number; _count: { results: number } };
type Student = { id: string; name: string; grade: string; admissionNo: string };

const RUBRIC: Record<string, { label: string; color: string }> = {
  EE1: { label: "Exceeding 1", color: "bg-green-100 text-green-700" },
  EE2: { label: "Exceeding 2", color: "bg-green-50 text-green-600" },
  ME1: { label: "Meeting 1", color: "bg-blue-100 text-blue-700" },
  ME2: { label: "Meeting 2", color: "bg-blue-50 text-blue-600" },
  AE1: { label: "Approaching 1", color: "bg-amber-100 text-amber-700" },
  AE2: { label: "Approaching 2", color: "bg-amber-50 text-amber-600" },
  BE1: { label: "Below 1", color: "bg-red-100 text-red-700" },
  BE2: { label: "Below 2", color: "bg-red-50 text-red-600" },
};

const SUBJECTS = ["Mathematics", "Kiswahili", "English", "Science & Technology", "Hygiene & Nutrition", "Social Studies", "Religious Education", "Creative Arts"];

export function ExamsList({ exams, students, grades, schoolId }: { exams: Exam[]; students: Student[]; grades: string[]; schoolId: string }) {
  const [selectedGrade, setSelectedGrade] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("");
  const [marks, setMarks] = useState<Record<string, string>>({});

  const filtered = students.filter((s) => !selectedGrade || s.grade === selectedGrade);

  return (
    <div className="space-y-4">
      {/* Existing Exams */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div className="p-4 border-b border-gray-200">
          <h3 className="font-semibold">Exams</h3>
        </div>
        <div className="divide-y divide-gray-100">
          {exams.length === 0 ? (
            <div className="p-8 text-center text-gray-500">No exams configured yet.</div>
          ) : (
            exams.map((e) => (
              <div key={e.id} className="p-4 flex items-center justify-between hover:bg-gray-50">
                <div>
                  <p className="font-medium">{e.name}</p>
                  <p className="text-sm text-gray-500">{e.grade} · {e.term.replace("_", " ")} {e.year} · Weight: {e.weight}%</p>
                </div>
                <Badge>{e._count.results} results</Badge>
              </div>
            ))
          )}
        </div>
      </div>

      {/* CBC Rubric Entry */}
      <div className="bg-white rounded-xl border border-gray-200 p-4">
        <h3 className="font-semibold mb-4">CBC Rubric Entry (8-Point Scale)</h3>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <Label>Grade</Label>
            <Select value={selectedGrade} onValueChange={(v) => setSelectedGrade(v ?? "")}>
              <SelectTrigger><SelectValue placeholder="Select grade" /></SelectTrigger>
              <SelectContent>{grades.map((g) => <SelectItem key={g} value={g}>{g}</SelectItem>)}</SelectContent>
            </Select>
          </div>
          <div>
            <Label>Subject</Label>
            <Select value={selectedSubject} onValueChange={(v) => setSelectedSubject(v ?? "")}>
              <SelectTrigger><SelectValue placeholder="Select subject" /></SelectTrigger>
              <SelectContent>{SUBJECTS.map((s) => <SelectItem key={s} value={s}>{s}</SelectItem>)}</SelectContent>
            </Select>
          </div>
        </div>

        {selectedGrade && selectedSubject && (
          <div className="divide-y divide-gray-100">
            {filtered.map((student) => (
              <div key={student.id} className="flex items-center justify-between p-3 hover:bg-gray-50">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-gray-400 w-20">{student.admissionNo}</span>
                  <span className="font-medium text-sm">{student.name}</span>
                </div>
                <div className="flex gap-1">
                  {Object.entries(RUBRIC).map(([level, { label, color }]) => (
                    <button
                      key={level}
                      onClick={() => setMarks({ ...marks, [`${student.id}-${selectedSubject}`]: level })}
                      className={`px-2 py-1 rounded text-xs font-medium transition-all ${
                        marks[`${student.id}-${selectedSubject}`] === level
                          ? `${color} ring-1 ring-offset-1 ring-current`
                          : "bg-gray-100 text-gray-400 hover:bg-gray-200"
                      }`}
                      title={label}
                    >
                      {level}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
