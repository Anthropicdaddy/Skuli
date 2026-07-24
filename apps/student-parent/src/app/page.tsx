import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-black/5 bg-white/80 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center gap-2.5">
              <svg className="w-6 h-6 text-cyan-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342" />
              </svg>
              <span className="text-lg font-semibold tracking-tight">Skuli</span>
            </Link>
            <div className="flex items-center gap-2">
              <Link
                href="/student-login"
                className="text-sm font-medium text-black/60 hover:text-black px-3 py-2 transition-colors"
              >
                Student Login
              </Link>
              <Link
                href="/portal/login"
                className="text-sm font-medium text-black/60 hover:text-black px-3 py-2 transition-colors"
              >
                Parent Login
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 pt-20 pb-24 md:pt-28 md:pb-32">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-black tracking-tight leading-[1.05]">
              Stay connected to your child&apos;s education
            </h1>
            <p className="text-lg text-black/50 mt-6 max-w-xl leading-relaxed">
              View grades, track attendance, chat with teachers, and get AI-powered study help.
              Built for Kenyan CBC schools.
            </p>
            <div className="flex flex-col sm:flex-row items-start gap-3 mt-8">
              <Link
                href="/student-login"
                className="bg-black text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-black/80 transition inline-flex items-center gap-2"
              >
                Student Portal
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </Link>
              <Link
                href="/portal/login"
                className="border border-black/10 text-black px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-black/5 transition"
              >
                Parent Portal
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features for Students */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <h2 className="text-3xl font-bold text-black tracking-tight">
              Built for students.
            </h2>
            <p className="text-black/50 mt-3 text-lg">
              Everything you need to stay on top of school — in your pocket.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-black/5 rounded-2xl overflow-hidden">
            {[
              {
                title: "Mwalimu AI",
                desc: "Your personal study assistant. Ask questions, get revision help, and generate quizzes.",
                icon: (
                  <svg className="w-5 h-5 text-cyan-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
                  </svg>
                ),
              },
              {
                title: "Class Chat",
                desc: "Real-time chat with classmates and teachers. Ask questions, share notes.",
                icon: (
                  <svg className="w-5 h-5 text-cyan-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
                  </svg>
                ),
              },
              {
                title: "Assignments",
                desc: "View homework, track due dates, and submit your work online.",
                icon: (
                  <svg className="w-5 h-5 text-cyan-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                  </svg>
                ),
              },
              {
                title: "Report Cards",
                desc: "View your CBC report cards and track your progress across terms.",
                icon: (
                  <svg className="w-5 h-5 text-cyan-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                  </svg>
                ),
              },
              {
                title: "Library",
                desc: "Browse available books, request reads, and manage your reading list.",
                icon: (
                  <svg className="w-5 h-5 text-cyan-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25v14.25m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                  </svg>
                ),
              },
              {
                title: "Timetable",
                desc: "Check your class schedule and never miss a lesson.",
                icon: (
                  <svg className="w-5 h-5 text-cyan-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                  </svg>
                ),
              },
            ].map((feature) => (
              <div key={feature.title} className="bg-white p-6">
                <div className="text-black/40 mb-3">{feature.icon}</div>
                <h3 className="text-sm font-semibold text-black">{feature.title}</h3>
                <p className="text-sm text-black/40 mt-1.5 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For Parents */}
      <section className="py-24 bg-white border-t border-black/5">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <h2 className="text-3xl font-bold text-black tracking-tight">
              Built for parents too.
            </h2>
            <p className="text-black/50 mt-3 text-lg">
              Stay in the loop. See what&apos;s happening at school in real time.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-black/5 rounded-2xl overflow-hidden">
            {[
              {
                title: "Attendance Alerts",
                desc: "Get notified when your child is absent or arrives late.",
                icon: (
                  <svg className="w-5 h-5 text-cyan-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                  </svg>
                ),
              },
              {
                title: "Exam Results",
                desc: "View CBC report cards and academic progress from your phone.",
                icon: (
                  <svg className="w-5 h-5 text-cyan-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                  </svg>
                ),
              },
              {
                title: "Message Teachers",
                desc: "Direct line to your child&apos;s teachers. Ask questions, share concerns.",
                icon: (
                  <svg className="w-5 h-5 text-cyan-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                  </svg>
                ),
              },
            ].map((feature) => (
              <div key={feature.title} className="bg-white p-6">
                <div className="text-black/40 mb-3">{feature.icon}</div>
                <h3 className="text-sm font-semibold text-black">{feature.title}</h3>
                <p className="text-sm text-black/40 mt-1.5 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white border-t border-black/5">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black tracking-tight">
            Ready to get started?
          </h2>
          <p className="text-black/40 mt-3 text-lg max-w-md mx-auto">
            Ask your school if they use Skuli, then log in.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-8">
            <Link
              href="/student-login"
              className="bg-black text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-black/80 transition"
            >
              Student Login
            </Link>
            <Link
              href="/portal/login"
              className="border border-black/10 text-black px-6 py-3 rounded-lg text-sm font-medium hover:bg-black/5 transition"
            >
              Parent Login
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-black/5 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-cyan-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342" />
              </svg>
              <span className="text-sm font-semibold">Skuli</span>
            </div>
            <div className="flex items-center gap-6 text-xs text-black/30">
              <a href="mailto:info@skuli.co.ke" className="hover:text-black transition-colors">info@skuli.co.ke</a>
              <span>&copy; {new Date().getFullYear()} Skuli</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
