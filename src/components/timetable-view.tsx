"use client";

import { useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

type TimetableEntry = {
  id: string;
  dayOfWeek: number;
  period: number;
  startTime: string;
  endTime: string;
  subject: string;
  room: string | null;
  staff: { name: string } | null;
};

export function TimetableView({ grades, timetable }: { grades: string[]; timetable: TimetableEntry[] }) {
  const [selectedGrade, setSelectedGrade] = useState(grades[0] || "");

  const filtered = timetable;

  function getEntry(dayIndex: number, period: number) {
    return filtered.find((t) => t.dayOfWeek === dayIndex && t.period === period);
  }

  const maxPeriod = timetable.length > 0 ? Math.max(...timetable.map((t) => t.period)) : 7;

  return (
    <div className="space-y-4">
      <div className="bg-white rounded-xl border border-gray-200 p-4 flex items-center gap-4">
        <div className="flex-1">
          <label className="text-sm font-medium text-gray-700 mb-1 block">Grade</label>
          <Select value={selectedGrade} onValueChange={(v) => setSelectedGrade(v ?? "")}>
            <SelectTrigger><SelectValue placeholder="Select grade" /></SelectTrigger>
            <SelectContent>
              {grades.length === 0 ? (
                <SelectItem value="none" disabled>No grades yet</SelectItem>
              ) : (
                grades.map((g) => <SelectItem key={g} value={g}>{g}</SelectItem>)
              )}
            </SelectContent>
          </Select>
        </div>
        <div className="text-sm text-gray-500">
          {filtered.length} entries
        </div>
      </div>

      {timetable.length === 0 ? (
        <div className="bg-white rounded-xl border border-gray-200 p-12 text-center text-gray-500">
          <span className="text-3xl block mb-2">📅</span>
          No timetable entries yet. Add students and create a timetable.
        </div>
      ) : (
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
                {Array.from({ length: maxPeriod }, (_, i) => i + 1).map((period) => (
                  <tr key={period} className="border-b border-gray-100">
                    <td className="p-3">
                      <div className="text-xs font-medium text-gray-900">P{period}</div>
                    </td>
                    {DAYS.map((day, dayIndex) => {
                      const entry = getEntry(dayIndex, period);
                      return (
                        <td key={day} className="p-2">
                          {entry ? (
                            <div className="bg-indigo-50 rounded-lg p-2 text-xs">
                              <div className="font-medium text-indigo-700">{entry.subject}</div>
                              <div className="text-indigo-400 mt-0.5">{entry.staff?.name || "—"}</div>
                              {entry.room && <div className="text-indigo-300 mt-0.5">{entry.room}</div>}
                            </div>
                          ) : (
                            <div className="bg-gray-50 rounded-lg p-2 text-xs text-gray-300">—</div>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
