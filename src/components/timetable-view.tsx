"use client";

import { useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
const PERIODS = [
  { period: 1, time: "08:00 - 08:40" },
  { period: 2, time: "08:45 - 09:25" },
  { period: 3, time: "09:30 - 10:10" },
  { period: 4, time: "10:15 - 10:55" },
  { period: 5, time: "11:00 - 11:40" },
  { period: 6, time: "11:45 - 12:25" },
  { period: 7, time: "12:30 - 13:10" },
];

export function TimetableView({ grades, schoolId }: { grades: string[]; schoolId: string }) {
  const [selectedGrade, setSelectedGrade] = useState(grades[0] || "");

  return (
    <div className="space-y-4">
      <div className="bg-white rounded-xl border border-gray-200 p-4 flex items-center gap-4">
        <div className="flex-1">
          <label className="text-sm font-medium text-gray-700 mb-1 block">Grade</label>
          <Select value={selectedGrade} onValueChange={(v) => setSelectedGrade(v ?? "")}>
            <SelectTrigger><SelectValue /></SelectTrigger>
            <SelectContent>{grades.map((g) => <SelectItem key={g} value={g}>{g}</SelectItem>)}</SelectContent>
          </Select>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="p-3 text-left font-medium text-gray-500 w-24">Period</th>
                {DAYS.map((day) => (
                  <th key={day} className="p-3 text-left font-medium text-gray-500">{day}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {PERIODS.map((p) => (
                <tr key={p.period} className="border-b border-gray-100">
                  <td className="p-3">
                    <div className="text-xs font-medium text-gray-900">P{p.period}</div>
                    <div className="text-xs text-gray-400">{p.time}</div>
                  </td>
                  {DAYS.map((day, di) => (
                    <td key={day} className="p-2">
                      <div className="bg-indigo-50 rounded-lg p-2 text-xs">
                        <div className="font-medium text-indigo-700">
                          {["Math", "Kiswahili", "English", "Science", "Hygiene", "Religious Ed", "Creative Arts"][(p.period + di) % 7]}
                        </div>
                        <div className="text-indigo-400 mt-0.5">Room {(p.period % 4) + 1}</div>
                      </div>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
