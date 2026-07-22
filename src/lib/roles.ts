import { SchoolRole } from "@/generated/prisma/client";

const ROLE_HIERARCHY: Record<SchoolRole, number> = {
  SUPER_ADMIN: 100,
  DIRECTOR: 90,
  PRINCIPAL: 80,
  DEPUTY_ACADEMICS: 70,
  DEPUTY_ADMIN: 65,
  BURSAR: 60,
  ACCOUNTANT: 55,
  HOD: 50,
  SENIOR_TEACHER: 45,
  CLASS_TEACHER: 40,
  TEACHER: 30,
  NURSE: 25,
  COUNSELLOR: 25,
  LIBRARIAN: 20,
  LAB_TECH: 20,
  DRIVER: 15,
  SECRETARY: 15,
  IT_MANAGER: 15,
  STUDENT: 10,
  PARENT: 10,
  BOARD_MEMBER: 5,
};

const MODULE_ACCESS: Record<string, SchoolRole[]> = {
  students: ["SUPER_ADMIN", "DIRECTOR", "PRINCIPAL", "DEPUTY_ACADEMICS", "DEPUTY_ADMIN", "SECRETARY", "CLASS_TEACHER", "TEACHER", "HOD", "SENIOR_TEACHER"],
  staff: ["SUPER_ADMIN", "DIRECTOR", "PRINCIPAL", "IT_MANAGER"],
  attendance: ["SUPER_ADMIN", "DIRECTOR", "PRINCIPAL", "DEPUTY_ACADEMICS", "CLASS_TEACHER", "TEACHER", "HOD", "SENIOR_TEACHER"],
  exams: ["SUPER_ADMIN", "DIRECTOR", "PRINCIPAL", "DEPUTY_ACADEMICS", "HOD", "TEACHER", "CLASS_TEACHER", "SENIOR_TEACHER"],
  fees: [],
  timetable: ["SUPER_ADMIN", "DIRECTOR", "PRINCIPAL", "DEPUTY_ACADEMICS", "TEACHER"],
  assignments: ["SUPER_ADMIN", "DIRECTOR", "PRINCIPAL", "DEPUTY_ACADEMICS", "HOD", "TEACHER", "CLASS_TEACHER", "SENIOR_TEACHER"],
  library: ["SUPER_ADMIN", "DIRECTOR", "PRINCIPAL", "LIBRARIAN"],
  notifications: ["SUPER_ADMIN", "DIRECTOR", "PRINCIPAL", "DEPUTY_ACADEMICS", "DEPUTY_ADMIN", "BURSAR", "SECRETARY"],
  reports: ["SUPER_ADMIN", "DIRECTOR", "PRINCIPAL", "DEPUTY_ACADEMICS", "DEPUTY_ADMIN", "BURSAR", "HOD"],
  dashboard: ["SUPER_ADMIN", "DIRECTOR", "PRINCIPAL", "DEPUTY_ACADEMICS", "DEPUTY_ADMIN", "BURSAR", "HOD", "TEACHER", "CLASS_TEACHER", "SENIOR_TEACHER", "STUDENT", "PARENT", "BOARD_MEMBER"],
};

export function getRoleLevel(role: SchoolRole): number {
  return ROLE_HIERARCHY[role] ?? 0;
}

export function canAccessModule(role: SchoolRole, module: string): boolean {
  const allowed = MODULE_ACCESS[module];
  if (!allowed) return false;
  return allowed.includes(role);
}

export function isLeadership(role: SchoolRole): boolean {
  return getRoleLevel(role) >= 65;
}

export function isTeachingStaff(role: SchoolRole): boolean {
  return ["PRINCIPAL", "DEPUTY_ACADEMICS", "DEPUTY_ADMIN", "HOD", "SENIOR_TEACHER", "CLASS_TEACHER", "TEACHER"].includes(role);
}

export function getRoleLabel(role: SchoolRole): string {
  const labels: Record<SchoolRole, string> = {
    SUPER_ADMIN: "Super Admin",
    DIRECTOR: "School Director",
    PRINCIPAL: "Principal",
    DEPUTY_ACADEMICS: "Deputy Principal (Academics)",
    DEPUTY_ADMIN: "Deputy Principal (Administration)",
    BURSAR: "Bursar",
    ACCOUNTANT: "Accountant",
    HOD: "Head of Department",
    SENIOR_TEACHER: "Senior Teacher",
    CLASS_TEACHER: "Class Teacher",
    TEACHER: "Teacher",
    NURSE: "School Nurse",
    COUNSELLOR: "Guidance Counsellor",
    LIBRARIAN: "Librarian",
    LAB_TECH: "Lab Technician",
    DRIVER: "Driver",
    SECRETARY: "Secretary",
    IT_MANAGER: "IT Manager",
    STUDENT: "Student",
    PARENT: "Parent",
    BOARD_MEMBER: "Board Member",
  };
  return labels[role] ?? role;
}

export function getSidebarItems(role: SchoolRole): { label: string; href: string; icon: string }[] {
  const items: { label: string; href: string; icon: string }[] = [];

  items.push({ label: "Dashboard", href: "/dashboard", icon: "M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" });

  if (canAccessModule(role, "students")) {
    items.push({ label: "Students", href: "/dashboard/students", icon: "M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.636 50.636 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0112 13.489a50.702 50.702 0 017.74-3.342" });
  }

  if (canAccessModule(role, "staff")) {
    items.push({ label: "Staff", href: "/dashboard/staff", icon: "M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128H5.228A2 2 0 015 17.119V5a2 2 0 012-2h6" });
  }

  if (canAccessModule(role, "attendance")) {
    items.push({ label: "Attendance", href: "/dashboard/attendance", icon: "M9 12.75L11.25 15L15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" });
  }

  if (canAccessModule(role, "exams")) {
    items.push({ label: "Exams & Grading", href: "/dashboard/exams", icon: "M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" });
  }

  if (canAccessModule(role, "timetable")) {
    items.push({ label: "Timetable", href: "/dashboard/timetable", icon: "M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" });
  }

  if (canAccessModule(role, "assignments")) {
    items.push({ label: "Assignments", href: "/dashboard/assignments", icon: "M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" });
  }

  if (canAccessModule(role, "library")) {
    items.push({ label: "Library", href: "/dashboard/library", icon: "M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" });
  }

  if (canAccessModule(role, "notifications")) {
    items.push({ label: "Notifications", href: "/dashboard/notifications", icon: "M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" });
  }

  if (canAccessModule(role, "reports")) {
    items.push({ label: "Reports", href: "/dashboard/reports", icon: "M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" });
  }

  if (isLeadership(role)) {
    items.push({ label: "Analytics", href: "/dashboard/analytics", icon: "M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" });
  }

  return items;
}
