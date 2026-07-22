import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  const { userId, orgId } = await auth();

  if (!userId || !orgId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const school = await prisma.school.findUnique({
    where: { clerkOrgId: orgId },
  });

  if (!school) {
    return NextResponse.json({ error: "School not found" }, { status: 404 });
  }

  const body = await req.json();
  const { admissionNo, name, grade, stream, feeBalance } = body;

  const student = await prisma.student.create({
    data: {
      schoolId: school.id,
      admissionNo,
      name,
      grade,
      stream: stream || null,
      feeBalance: feeBalance || 0,
    },
  });

  return NextResponse.json(student);
}

export async function GET(req: Request) {
  const { userId, orgId } = await auth();

  if (!userId || !orgId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const school = await prisma.school.findUnique({
    where: { clerkOrgId: orgId },
  });

  if (!school) {
    return NextResponse.json({ error: "School not found" }, { status: 404 });
  }

  const students = await prisma.student.findMany({
    where: { schoolId: school.id },
    orderBy: [{ grade: "asc" }, { admissionNo: "asc" }],
  });

  return NextResponse.json(students);
}
