import { PrismaClient, SchoolRole, CbcRubricLevel, Term, ExamType } from "../src/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL! });
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log("Seeding Skuli MVP...\n");

  // 1. Create school
  const school = await prisma.school.create({
    data: {
      clerkOrgId: "org_demo_st_jude",
      name: "St. Jude Primary School",
      motto: "Excellence in Service",
      phone: "+254 712 345 678",
      email: "info@stjude.sc.ke",
      address: "Kangemi, Nairobi",
      county: "Nairobi",
      subCounty: "Westlands",
      schoolType: "primary",
    },
  });
  console.log(`School: ${school.name}`);

  // 2. Create departments
  const departments = await Promise.all(
    ["Mathematics", "Languages", "Sciences", "Humanities", "Creative Arts"].map((name) =>
      prisma.department.create({ data: { schoolId: school.id, name } })
    )
  );
  console.log(`Departments: ${departments.length}`);

  // 3. Create staff (all roles)
  const staffData = [
    { name: "Peter Makau", role: SchoolRole.PRINCIPAL, tscGrade: "D3", tscNumber: "TSC/2015/001", qualification: "M.Ed Administration", departmentId: null },
    { name: "Grace Wanjiru", role: SchoolRole.DEPUTY_ACADEMICS, tscGrade: "D1", tscNumber: "TSC/2016/002", qualification: "B.Ed Mathematics", departmentId: departments[0].id },
    { name: "James Odhiambo", role: SchoolRole.DEPUTY_ADMIN, tscGrade: "C5", tscNumber: "TSC/2017/003", qualification: "B.Ed Sciences", departmentId: departments[2].id },
    { name: "Mary Njeri", role: SchoolRole.BURSAR, tscGrade: null, tscNumber: null, qualification: "CPA(K)", departmentId: null },
    { name: "David Kiprop", role: SchoolRole.HOD, tscGrade: "C3", tscNumber: "TSC/2018/004", qualification: "B.Ed Mathematics", departmentId: departments[0].id },
    { name: "Sarah Akinyi", role: SchoolRole.HOD, tscGrade: "C3", tscNumber: "TSC/2018/005", qualification: "B.Ed Languages", departmentId: departments[1].id },
    { name: "Joseph Mwangi", role: SchoolRole.CLASS_TEACHER, tscGrade: "C2", tscNumber: "TSC/2019/006", qualification: "Diploma Education", departmentId: departments[0].id, classTeacherOf: "Grade 3-North" },
    { name: "Alice Wambui", role: SchoolRole.CLASS_TEACHER, tscGrade: "C2", tscNumber: "TSC/2019/007", qualification: "Diploma Education", departmentId: departments[1].id, classTeacherOf: "Grade 4-South" },
    { name: "Brian Kiptoo", role: SchoolRole.TEACHER, tscGrade: "C1", tscNumber: "TSC/2020/008", qualification: "B.Ed Sciences", departmentId: departments[2].id },
    { name: "Fatuma Ali", role: SchoolRole.TEACHER, tscGrade: "C1", tscNumber: "TSC/2021/009", qualification: "B.Ed Humanities", departmentId: departments[3].id },
    { name: "Nurse Elizabeth", role: SchoolRole.NURSE, tscGrade: null, tscNumber: null, qualification: "B.Sc Nursing", departmentId: null },
    { name: "Counsellor Ochieng", role: SchoolRole.COUNSELLOR, tscGrade: null, tscNumber: null, qualification: "MA Counselling Psychology", departmentId: null },
    { name: "Librarian Faith", role: SchoolRole.LIBRARIAN, tscGrade: null, tscNumber: null, qualification: "B.Sc Information Science", departmentId: null },
    { name: "Secretary Ann", role: SchoolRole.SECRETARY, tscGrade: null, tscNumber: null, qualification: "Diploma Secretarial", departmentId: null },
    { name: "Driver Samuel", role: SchoolRole.DRIVER, tscGrade: null, tscNumber: null, qualification: "Valid DL", departmentId: null },
  ];

  const createdStaff = [];
  for (const s of staffData) {
    const staff = await prisma.staff.create({
      data: { schoolId: school.id, ...s },
    });
    createdStaff.push(staff);
  }
  console.log(`Staff: ${createdStaff.length}`);

  // 4. Create students (5 demo)
  const studentsData = [
    { admissionNo: "SJ/2024/001", name: "Wanjiku Kamau", grade: "Grade 3", stream: "North", gender: "F", parentName: "Joseph Kamau", parentPhone: "+254712345001" },
    { admissionNo: "SJ/2024/002", name: "Ochieng Odhiambo", grade: "Grade 3", stream: "North", gender: "M", parentName: "Mary Odhiambo", parentPhone: "+254712345002" },
    { admissionNo: "SJ/2024/003", name: "Amina Hassan", grade: "Grade 4", stream: "South", gender: "F", parentName: "Ali Hassan", parentPhone: "+254712345003" },
    { admissionNo: "SJ/2024/004", name: "Kipchoge Tanui", grade: "Grade 4", stream: "South", gender: "M", parentName: "Grace Tanui", parentPhone: "+254712345004" },
    { admissionNo: "SJ/2024/005", name: "Faith Wambui", grade: "Grade 5", stream: "East", gender: "F", parentName: "Peter Wambui", parentPhone: "+254712345005" },
  ];

  const createdStudents = [];
  for (const s of studentsData) {
    const student = await prisma.student.create({
      data: { schoolId: school.id, ...s },
    });
    createdStudents.push(student);
  }
  console.log(`Students: ${createdStudents.length}`);

  // 5. Create exams
  const examTypes = [
    { name: "CAT 1", type: ExamType.CAT, weight: 20 },
    { name: "Mid-Term Exam", type: ExamType.MID_TERM, weight: 30 },
    { name: "End-Term Exam", type: ExamType.END_TERM, weight: 50 },
  ];

  for (const et of examTypes) {
    for (const grade of ["Grade 3", "Grade 4", "Grade 5"]) {
      await prisma.exam.create({
        data: {
          schoolId: school.id,
          ...et,
          term: Term.TERM_1,
          year: 2024,
          grade,
        },
      });
    }
  }
  console.log("Exams created");

  // 7. Create CBC results for all students
  const subjects = ["Mathematics", "Kiswahili", "English", "Science & Technology", "Hygiene & Nutrition"];
  const rubricLevels: CbcRubricLevel[] = ["EE1", "EE2", "ME1", "ME2", "AE1", "AE2", "BE1", "BE2"];

  for (const student of createdStudents) {
    for (const subject of subjects) {
      await prisma.cbcResult.create({
        data: {
          studentId: student.id,
          subject,
          term: Term.TERM_1,
          year: 2024,
          rubricLevel: rubricLevels[Math.floor(Math.random() * 4)], // bias towards better results
        },
      });
    }

    // Create competencies
    const competencies = [
      "COMMUNICATION", "CRITICAL_THINKING", "CREATIVITY",
      "CITIZENSHIP", "DIGITAL_LITERACY", "LEARNING_TO_LEARN", "SELF_EFFICACY",
    ] as const;

    for (const competency of competencies) {
      await prisma.studentCompetency.create({
        data: {
          studentId: student.id,
          competency,
          term: Term.TERM_1,
          year: 2024,
          score: rubricLevels[Math.floor(Math.random() * 4)],
        },
      });
    }
  }
  console.log("CBC results & competencies created");

  // 8. Create attendance records
  const today = new Date();
  for (let i = 0; i < 5; i++) {
    const date = new Date(today);
    date.setDate(date.getDate() - i);
    date.setHours(0, 0, 0, 0);

    for (const student of createdStudents) {
      await prisma.attendance.create({
        data: {
          studentId: student.id,
          date,
          status: i === 0 ? "PRESENT" : Math.random() > 0.1 ? "PRESENT" : Math.random() > 0.5 ? "LATE" : "ABSENT",
          markedBy: createdStaff[6].id, // class teacher
        },
      });
    }
  }
  console.log("Attendance records created");

  // 9. Create library books
  const books = [
    { title: "Mathematics Grade 3", author: "KNEC", category: "Textbook", copies: 45, available: 40 },
    { title: "Kiswahili Kitabu cha Mwanafunzi", author: "Oxford", category: "Textbook", copies: 40, available: 38 },
    { title: "English in Action Grade 3", author: "Longhorn", category: "Textbook", copies: 40, available: 35 },
    { title: "Environmental Activities", author: "Moran", category: "Textbook", copies: 35, available: 33 },
    { title: "The Ugandan Scholar", author: "Ngugi wa Thiong'o", category: "Fiction", copies: 10, available: 8 },
  ];

  for (const book of books) {
    await prisma.libraryBook.create({
      data: { schoolId: school.id, ...book },
    });
  }
  console.log("Library books created");

  // 10. Create timetable entries
  const days = [0, 1, 2, 3, 4]; // Mon-Fri
  const periods = [
    { start: "08:00", end: "08:40", subject: "Mathematics" },
    { start: "08:45", end: "09:25", subject: "Kiswahili" },
    { start: "09:30", end: "10:10", subject: "English" },
    { start: "10:15", end: "10:55", subject: "Science & Technology" },
    { start: "11:00", end: "11:40", subject: "Hygiene & Nutrition" },
    { start: "11:45", end: "12:25", subject: "Religious Education" },
    { start: "12:30", end: "13:10", subject: "Creative Arts" },
  ];

  for (const day of days) {
    for (let p = 0; p < periods.length; p++) {
      const period = periods[p];
      await prisma.timetable.create({
        data: {
          schoolId: school.id,
          grade: "Grade 3",
          stream: "North",
          dayOfWeek: day,
          period: p + 1,
          startTime: period.start,
          endTime: period.end,
          subject: period.subject,
          staffId: createdStaff[p % createdStaff.length].id,
          room: `Room ${p + 1}`,
        },
      });
    }
  }
  console.log("Timetable created");

  // 11. Create assignments
  await prisma.assignment.create({
    data: {
      schoolId: school.id,
      title: "Mathematics Term 1 Exercise",
      description: "Complete exercises 1-10 on page 45",
      grade: "Grade 3",
      subject: "Mathematics",
      term: Term.TERM_1,
      year: 2024,
      dueDate: new Date("2024-03-15"),
      createdBy: createdStaff[6].id,
    },
  });
  console.log("Assignments created");

  console.log(`\nSeed complete!`);
  console.log(`School: ${school.name} (${school.id})`);
  console.log(`Staff: ${createdStaff.length} users`);
  console.log(`Students: ${createdStudents.length}`);
  console.log(`Report URLs: /report/${createdStudents[0].id}`);
}

main()
  .catch((e) => { console.error(e); process.exit(1); })
  .finally(() => prisma.$disconnect());
