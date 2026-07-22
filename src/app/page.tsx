import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-neutral-100 bg-white/80 backdrop-blur-lg sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-7 h-7 bg-neutral-900 rounded-md flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342" />
                </svg>
              </div>
              <span className="text-lg font-bold text-neutral-900 tracking-tight">Skuli</span>
            </Link>
            <div className="flex items-center gap-1">
              <Link
                href="/sign-in"
                className="text-sm font-medium text-neutral-600 hover:text-neutral-900 px-3 py-1.5 rounded-md hover:bg-neutral-50 transition-all"
              >
                Sign in
              </Link>
              <Link
                href="https://cal.com/petermakau"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-neutral-900 text-white text-sm font-medium px-4 py-1.5 rounded-md hover:bg-neutral-800 transition-all active:scale-[0.98]"
              >
                Get started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 md:pt-32 md:pb-28">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 bg-neutral-100 text-neutral-600 text-xs font-medium px-2.5 py-1 rounded-full mb-6">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
              Built for Kenyan CBC schools
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 tracking-tight leading-[1.1]">
              School management
              <br />
              that actually works.
            </h1>
            <p className="text-lg text-neutral-500 mt-5 max-w-lg leading-relaxed">
              Attendance, grades, timetables, and parent communication — one platform for your entire school.
            </p>
            <div className="flex items-center gap-3 mt-8">
              <Link
                href="https://cal.com/petermakau"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-neutral-900 text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-neutral-800 transition-all active:scale-[0.98]"
              >
                Book a demo
              </Link>
              <Link
                href="/sign-in"
                className="border border-neutral-200 text-neutral-700 px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-neutral-50 transition-all active:scale-[0.98]"
              >
                Sign in
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Powerful Features */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-bold text-neutral-900 tracking-tight">
                Everything your school needs.
              </h2>
              <p className="text-neutral-500 mt-3 leading-relaxed">
                One login. Every tool. From enrollment to report cards, Skuli handles the
                heavy lifting so your team can focus on what matters.
              </p>
              <ul className="mt-6 space-y-2.5">
                {["Student profiles & enrollment", "Daily attendance tracking", "CBC-aligned grading", "Timetable management", "Parent & student portals"].map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-neutral-600">
                    <svg className="w-4 h-4 text-emerald-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-100 to-sky-100 rounded-3xl transform rotate-1 scale-105"></div>
              <div className="relative bg-white rounded-2xl shadow-sm border border-neutral-200 p-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-neutral-50">
                    <div className="w-9 h-9 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-emerald-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium text-neutral-900">Student Enrollment</div>
                      <div className="text-xs text-neutral-500">Grade 4A — 32 students</div>
                    </div>
                    <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"></div>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-neutral-50">
                    <div className="w-9 h-9 bg-sky-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-sky-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium text-neutral-900">Attendance Marked</div>
                      <div className="text-xs text-neutral-500">94% present today</div>
                    </div>
                    <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"></div>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-neutral-50">
                    <div className="w-9 h-9 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-amber-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium text-neutral-900">CBC Report Cards</div>
                      <div className="text-xs text-neutral-500">Term 1 complete</div>
                    </div>
                    <div className="w-2 h-2 bg-amber-500 rounded-full flex-shrink-0"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portals */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-neutral-900 tracking-tight">
              Everyone gets their own portal.
            </h2>
            <p className="text-neutral-500 mt-2">
              Teachers, parents, and students — each with the right view.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                title: "Teacher Portal",
                desc: "Manage classes, enter marks, and communicate with parents.",
                href: "/sign-in",
                accent: "bg-neutral-900",
              },
              {
                title: "Parent Portal",
                desc: "View your child's progress, attendance, and report cards.",
                href: "/portal/login",
                accent: "bg-emerald-600",
              },
              {
                title: "Student Portal",
                desc: "Access assignments, class materials, and your timetable.",
                href: "/student-login",
                accent: "bg-sky-600",
              },
            ].map((portal) => (
              <Link
                key={portal.title}
                href={portal.href}
                className="group block border border-neutral-200 rounded-xl p-5 hover:border-neutral-300 hover:shadow-sm transition-all"
              >
                <div className={`w-8 h-8 ${portal.accent} rounded-lg flex items-center justify-center mb-3`}>
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </div>
                <h3 className="text-sm font-semibold text-neutral-900">{portal.title}</h3>
                <p className="text-xs text-neutral-500 mt-1 leading-relaxed">{portal.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-neutral-900 rounded-2xl p-10 md:p-14 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
              Ready to streamline your school?
            </h2>
            <p className="text-neutral-400 mt-3 max-w-md mx-auto">
              Book a free onboarding call. We&apos;ll set everything up for you — no tech skills needed.
            </p>
            <Link
              href="https://cal.com/petermakau"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-neutral-900 px-6 py-3 rounded-lg text-sm font-medium hover:bg-neutral-100 transition-all active:scale-[0.98] mt-8"
            >
              Book a demo
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-100 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-neutral-900 rounded flex items-center justify-center">
                <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342" />
                </svg>
              </div>
              <span className="text-sm font-semibold text-neutral-900">Skuli</span>
            </div>
            <div className="flex items-center gap-6 text-xs text-neutral-500">
              <a href="mailto:info@skuli.co.ke" className="hover:text-neutral-900 transition-colors">info@skuli.co.ke</a>
              <span>&copy; {new Date().getFullYear()} Skuli</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
