"use client";

import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";

type Student = {
  id: string;
  admissionNo: string;
  name: string;
  grade: string;
  stream: string | null;
  feeBalance: number;
};

export function StudentsTable({
  students,
  schoolId,
}: {
  students: Student[];
  schoolId: string;
}) {
  const [search, setSearch] = useState("");
  const [showAdd, setShowAdd] = useState(false);
  const [newStudent, setNewStudent] = useState({
    admissionNo: "",
    name: "",
    grade: "",
    stream: "",
    feeBalance: 0,
  });

  const filtered = students.filter(
    (s) =>
      s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.admissionNo.toLowerCase().includes(search.toLowerCase()) ||
      s.grade.toLowerCase().includes(search.toLowerCase())
  );

  async function addStudent() {
    const res = await fetch("/api/students", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...newStudent, schoolId }),
    });

    if (res.ok) {
      setShowAdd(false);
      setNewStudent({
        admissionNo: "",
        name: "",
        grade: "",
        stream: "",
        feeBalance: 0,
      });
      window.location.reload();
    }
  }

  return (
    <div>
      <div className="flex items-center gap-4 mb-6">
        <Input
          placeholder="Search students..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="max-w-sm"
        />
        <Dialog open={showAdd} onOpenChange={setShowAdd}>
          <DialogTrigger render={<Button>Add Student</Button>} />
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Student</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 mt-4">
              <div>
                <Label>Admission Number</Label>
                <Input
                  value={newStudent.admissionNo}
                  onChange={(e) =>
                    setNewStudent({
                      ...newStudent,
                      admissionNo: e.target.value,
                    })
                  }
                  placeholder="e.g. SJ/2024/001"
                />
              </div>
              <div>
                <Label>Full Name</Label>
                <Input
                  value={newStudent.name}
                  onChange={(e) =>
                    setNewStudent({ ...newStudent, name: e.target.value })
                  }
                  placeholder="e.g. Wanjiku Kamau"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Grade</Label>
                  <Input
                    value={newStudent.grade}
                    onChange={(e) =>
                      setNewStudent({ ...newStudent, grade: e.target.value })
                    }
                    placeholder="e.g. Grade 3"
                  />
                </div>
                <div>
                  <Label>Stream</Label>
                  <Input
                    value={newStudent.stream}
                    onChange={(e) =>
                      setNewStudent({ ...newStudent, stream: e.target.value })
                    }
                    placeholder="e.g. North"
                  />
                </div>
              </div>
              <div>
                <Label>Fee Balance (KES)</Label>
                <Input
                  type="number"
                  value={newStudent.feeBalance}
                  onChange={(e) =>
                    setNewStudent({
                      ...newStudent,
                      feeBalance: Number(e.target.value),
                    })
                  }
                />
              </div>
              <Button onClick={addStudent} className="w-full">
                Add Student
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Admission No.</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Grade</TableHead>
              <TableHead>Stream</TableHead>
              <TableHead className="text-right">Fee Balance</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filtered.length === 0 ? (
              <TableRow>
                <TableCell
                  colSpan={6}
                  className="text-center py-8 text-gray-500"
                >
                  {students.length === 0
                    ? "No students yet. Add your first student!"
                    : "No students match your search."}
                </TableCell>
              </TableRow>
            ) : (
              filtered.map((student) => (
                <TableRow key={student.id}>
                  <TableCell className="font-mono">
                    {student.admissionNo}
                  </TableCell>
                  <TableCell className="font-medium">
                    {student.name}
                  </TableCell>
                  <TableCell>{student.grade}</TableCell>
                  <TableCell>{student.stream || "-"}</TableCell>
                  <TableCell className="text-right">
                    KES {student.feeBalance.toLocaleString()}
                  </TableCell>
                  <TableCell>
                    {student.feeBalance === 0 ? (
                      <Badge className="bg-green-100 text-green-700">
                        Paid
                      </Badge>
                    ) : (
                      <Badge className="bg-red-100 text-red-700">
                        Outstanding
                      </Badge>
                    )}
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
