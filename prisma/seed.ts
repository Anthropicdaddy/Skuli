import { PrismaClient } from "../src/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL! });
const prisma = new PrismaClient({ adapter });

async function main() {
  const existing = await prisma.school.findFirst();
  if (existing) {
    console.log(`School already exists: ${existing.name} (${existing.id})`);
    return;
  }

  const school = await prisma.school.create({
    data: {
      clerkOrgId: "org_setup",
      name: "My School",
      schoolType: "primary",
    },
  });

  console.log(`School created: ${school.name} (${school.id})`);
  console.log("Run the app to add staff, students, and data through the UI.");
}

main()
  .catch((e) => { console.error(e); process.exit(1); })
  .finally(() => prisma.$disconnect());
