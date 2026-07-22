# Skulix Kenya

Smart ERP for Kenyan CBC Schools - A multi-tenant school management system built with Next.js 14, Clerk Organizations, and Neon Postgres.

## Features

- **Multi-Tenant Architecture** - Each school gets isolated data via Clerk Organizations
- **CBC Report Cards** - Rubric-based assessment (EE, ME, AE, BE) for Kenyan curriculum
- **Fee Balance Locking** - Automatic report card locking when fees are outstanding
- **Teacher Dashboard** - Clean interface for managing students and entering marks
- **Parent Portal** - Public report card viewing with fee enforcement
- **Mobile Friendly** - Works perfectly on phones

## Tech Stack

- **Framework:** Next.js 16 (App Router) + TypeScript
- **Styling:** Tailwind CSS + shadcn/ui
- **Auth & Tenants:** Clerk Organizations
- **Database:** Neon Postgres + Prisma ORM

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Set up environment variables

```bash
cp .env.example .env
# Edit .env with your actual keys
```

### 3. Set up database

```bash
# Generate Prisma client
npm run db:generate

# Push schema to database
npm run db:push

# Seed demo data
npm run db:seed
```

### 4. Run development server

```bash
npm run dev
```

## Deployment to Vercel

1. Push to GitHub
2. Import in Vercel dashboard
3. Add environment variables:
   - `DATABASE_URL` - Your Neon Postgres connection string
   - `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
   - `CLERK_SECRET_KEY`
   - Other Clerk variables from `.env.example`

## Demo URLs

After seeding, visit:
- **Landing Page:** `/`
- **Sign Up:** `/sign-up`
- **Dashboard:** `/dashboard`
- **Report Card (Unlocked):** `/report/[studentId]` (for students with KES 0 balance)
- **Report Card (Locked):** `/report/[studentId]` (for students with outstanding balance)

## Project Structure

```
src/
├── app/
│   ├── (dashboard)/        # Protected dashboard routes
│   │   ├── dashboard/      # Main dashboard
│   │   ├── students/       # Student roster
│   │   ├── grading/        # CBC mark entry
│   │   └── assignments/    # Classwork uploads
│   ├── api/                # API routes
│   ├── onboarding/         # School setup
│   ├── report/[studentId]/ # Public report cards
│   ├── sign-in/            # Clerk sign in
│   └── sign-up/            # Clerk sign up
├── components/             # React components
├── lib/                    # Utilities & Prisma client
└── generated/              # Prisma generated client
```
