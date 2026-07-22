import { PrismaClient } from "../src/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const connectionString = process.env.DATABASE_URL!;
const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log("Seeding database...");

  const school = await prisma.school.create({
    data: {
      clerkOrgId: "demo_school_clerk_id",
      name: "St. Jude Primary School",
      phone: "+254 712 345 678",
      email: "info@stjude.sc.ke",
      address: "Nairobi, Kenya",
    },
  });

  console.log(`School created: ${school.name}`);

  const students = [
    { admissionNo: "SJ/2024/001", name: "Wanjiku Kamau", grade: "Grade 3", stream: "North", feeBalance: 0 },
    { admissionNo: "SJ/2024/002", name: "Ochieng Odhiambo", grade: "Grade 3", stream: "North", feeBalance: 0 },
    { admissionNo: "SJ/2024/003", name: "Amina Hassan", grade: "Grade 4", stream: "South", feeBalance: 0 },
    { admissionNo: "SJ/2024/004", name: "Kipchoge Tanui", grade: "Grade 4", stream: "South", feeBalance: 0 },
    { admissionNo: "SJ/2024/005", name: "Faith Wambui", grade: "Grade 5", stream: "East", feeBalance: 0 },
  ];

  const subjects = ["Mathematics", "Kiswahili", "English", "Science & Technology", "Hygiene & Nutrition"];
  const rubricLevels: ("EE" | "ME" | "AE" | "BE")[] = ["EE", "ME", "AE", "BE"];

  for (const s of students) {
    const student = await prisma.student.create({
      data: { schoolId: school.id, ...s },
    });
    console.log(`Student: ${student.name}`);

    for (const subject of subjects) {
      await prisma.cbcResult.create({
        data: {
          studentId: student.id,
          subject,
          term: "TERM_1",
          year: 2024,
          rubricLevel: rubricLevels[Math.floor(Math.random() * 4)],
        },
      });
    }
    console.log(`  Added CBC results`);
  }

  console.log("\nSeed complete! Report card URLs:");
  const allStudents = await prisma.student.findMany({ where: { schoolId: school.id } });
  for (const s of allStudents) {
    console.log(`  ${s.name}: /report/${s.id}`);
  }
}

main()
  .catch((e) => { console.error(e); process.exit(1); })
  .finally(() => prisma.$disconnect());
