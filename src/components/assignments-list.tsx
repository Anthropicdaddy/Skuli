"use client";

import { Badge } from "@/components/ui/badge";

type Assignment = {
  id: string;
  title: string;
  description: string | null;
  grade: string;
  subject: string;
  term: string;
  year: number;
  dueDate: Date | null;
  createdAt: Date;
  _count: { submissions: number };
};

export function AssignmentsList({ assignments }: { assignments: Assignment[] }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
      {assignments.length === 0 ? (
        <div className="text-center py-12 text-gray-500">
          <span className="text-3xl block mb-2">📚</span>
          No assignments yet.
        </div>
      ) : (
        <div className="divide-y divide-gray-100">
          {assignments.map((a) => (
            <div key={a.id} className="p-4 hover:bg-gray-50">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-medium text-gray-900">{a.title}</h4>
                  {a.description && <p className="text-sm text-gray-500 mt-0.5">{a.description}</p>}
                  <div className="flex items-center gap-2 mt-2">
                    <Badge variant="outline">{a.grade}</Badge>
                    <Badge variant="outline">{a.subject}</Badge>
                    <Badge variant="outline">{a.term.replace("_", " ")}</Badge>
                    {a.dueDate && <span className="text-xs text-gray-400">Due: {new Date(a.dueDate).toLocaleDateString()}</span>}
                  </div>
                </div>
                <Badge>{a._count.submissions} submissions</Badge>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
