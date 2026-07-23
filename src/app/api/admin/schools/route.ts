import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const { userId } = await auth();
  if (!userId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const staff = await prisma.staff.findFirst({ where: { clerkUserId: userId } });
  if (!staff || staff.role !== "SUPER_ADMIN") {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  const schools = await prisma.school.findMany({
    orderBy: { createdAt: "desc" },
    include: {
      _count: { select: { students: true, staff: true } },
    },
  });

  return NextResponse.json(schools);
}

export async function POST(req: Request) {
  const { userId } = await auth();
  if (!userId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const adminStaff = await prisma.staff.findFirst({ where: { clerkUserId: userId } });
  if (!adminStaff || adminStaff.role !== "SUPER_ADMIN") {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  const body = await req.json();
  const {
    name, county, subCounty, schoolType, phone, email, motto,
    principalName, principalEmail, principalPhone,
  } = body;

  if (!name || !principalName || !principalEmail) {
    return NextResponse.json({ error: "name, principalName, and principalEmail are required" }, { status: 400 });
  }

  const school = await prisma.school.create({
    data: {
      clerkOrgId: `pending_${Date.now()}`,
      name,
      county: county || null,
      subCounty: subCounty || null,
      schoolType: schoolType || "primary",
      phone: phone || null,
      email: email || null,
      motto: motto || null,
      staff: {
        create: {
          name: principalName,
          email: principalEmail,
          phone: principalPhone || null,
          role: "PRINCIPAL",
        },
      },
    },
    include: {
      staff: true,
    },
  });

  return NextResponse.json(school, { status: 201 });
}
