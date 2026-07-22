import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  const { userId, orgId } = await auth();

  if (!userId || !orgId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await req.json();
  const { studentId, subject, term, year, rubricLevel } = body;

  const result = await prisma.cbcResult.upsert({
    where: {
      studentId_subject_term_year: {
        studentId,
        subject,
        term,
        year,
      },
    },
    update: { rubricLevel },
    create: { studentId, subject, term, year, rubricLevel },
  });

  return NextResponse.json(result);
}
