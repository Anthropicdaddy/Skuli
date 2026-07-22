import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-slate-100 bg-white/80 backdrop-blur-lg sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342" />
                </svg>
              </div>
              <span className="text-xl font-bold text-slate-900">Skuli</span>
            </Link>
            <div className="flex items-center gap-3">
              <Link
                href="/sign-in"
                className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
              >
                Sign In
              </Link>
              <Link
                href="https://calendly.com/petermakau"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-purple-700 transition-colors"
              >
                Onboard Your School
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-purple-500 to-pink-500"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-pink-400/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-yellow-400/20 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-1/4 w-48 h-48 bg-green-400/20 rounded-full blur-2xl"></div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/20 text-white text-xs font-medium px-3 py-1 rounded-full mb-6 backdrop-blur-sm">
                <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span>
                Smart ERP System
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight tracking-tight">
                Skuli — Smart ERP for
                <br />
                <span className="text-yellow-300">Smarter Schools</span>
              </h1>
              <p className="text-lg text-purple-100 mb-8 max-w-lg leading-relaxed">
                Streamline your school management with a powerful all-in-one platform. Track students,
                attendance, grades, and communicate with parents — all in one place.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="https://calendly.com/petermakau"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-purple-700 px-6 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors text-center"
                >
                  Onboard Your School
                </Link>
                <Link
                  href="/sign-in"
                  className="border border-white/30 text-white px-6 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors text-center"
                >
                  Sign In to Portal
                </Link>
              </div>
              <div className="flex items-center gap-6 mt-8">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-pink-400 border-2 border-purple-600"></div>
                    <div className="w-8 h-8 rounded-full bg-green-400 border-2 border-purple-600"></div>
                    <div className="w-8 h-8 rounded-full bg-yellow-400 border-2 border-purple-600"></div>
                  </div>
                  <span className="text-purple-200 text-sm">1300+ Schools</span>
                </div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="text-purple-200 text-sm ml-1">App Version 2.0</span>
                </div>
              </div>
            </div>

            {/* Phone mockup */}
            <div className="hidden lg:flex justify-center">
              <div className="relative">
                <div className="w-64 h-[500px] bg-white rounded-[2.5rem] shadow-2xl border-4 border-slate-800 overflow-hidden">
                  <div className="bg-purple-600 h-20 flex items-end px-4 pb-2">
                    <span className="text-white text-xs font-medium">Skuli Dashboard</span>
                  </div>
                  <div className="p-3 space-y-2">
                    <div className="bg-purple-50 rounded-xl p-3">
                      <div className="text-[10px] text-purple-600 font-medium">Total Students</div>
                      <div className="text-lg font-bold text-slate-900">1,247</div>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="bg-pink-50 rounded-xl p-2">
                        <div className="text-[10px] text-pink-600 font-medium">Attendance</div>
                        <div className="text-sm font-bold text-slate-900">94%</div>
                      </div>
                      <div className="bg-green-50 rounded-xl p-2">
                        <div className="text-[10px] text-green-600 font-medium">Teachers</div>
                        <div className="text-sm font-bold text-slate-900">48</div>
                      </div>
                    </div>
                    <div className="bg-yellow-50 rounded-xl p-2">
                      <div className="text-[10px] text-yellow-600 font-medium">Upcoming Events</div>
                      <div className="text-xs text-slate-700 mt-1">Sports Day - Fri</div>
                    </div>
                  </div>
                </div>
                {/* Floating badges */}
                <div className="absolute -top-4 -right-8 bg-white rounded-xl shadow-lg p-2 flex items-center gap-2">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-500">Present Today</div>
                    <div className="text-xs font-bold text-slate-900">1,172</div>
                  </div>
                </div>
                <div className="absolute -bottom-4 -left-8 bg-white rounded-xl shadow-lg p-2 flex items-center gap-2">
                  <div className="w-8 h-8 bg-pink-100 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-pink-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-500">Report Cards</div>
                    <div className="text-xs font-bold text-slate-900">Ready</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-purple-600 text-sm font-semibold uppercase tracking-wider">How it works</span>
            <h2 className="text-3xl font-bold text-slate-900 mt-2 mb-3">
              Three Steps to Smarter School Management
            </h2>
            <p className="text-slate-600 max-w-xl mx-auto">
              Get started in minutes. Our streamlined process makes school setup effortless.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: "1", title: "Download The App", desc: "Access Skuli from any device. Our responsive platform works seamlessly across desktop, tablet, and mobile.", color: "bg-purple-100 text-purple-600" },
              { step: "2", title: "Profile Account", desc: "Create your school profile, add teachers, students, and configure your CBC grading system.", color: "bg-pink-100 text-pink-600" },
              { step: "3", title: "Enjoy Application", desc: "Start managing your school effortlessly. Track attendance, enter grades, and communicate with parents.", color: "bg-green-100 text-green-600" },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className={`w-14 h-14 ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-4 text-xl font-bold`}>
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Schools", value: "1,300+", color: "text-purple-600" },
              { label: "Students", value: "50K+", color: "text-pink-600" },
              { label: "Teachers", value: "2,500+", color: "text-green-600" },
              { label: "Reports Generated", value: "100K+", color: "text-orange-500" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className={`text-3xl font-bold ${stat.color}`}>{stat.value}</div>
                <div className="text-sm text-slate-600 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-purple-600 text-sm font-semibold uppercase tracking-wider">Why 1300+ Schools Choose Skuli</span>
            <h2 className="text-3xl font-bold text-slate-900 mt-2 mb-3">
              Comprehensive Solutions To Simplify School Management
            </h2>
            <p className="text-slate-600 max-w-xl mx-auto">
              From student enrollment to report cards, Skuli handles every aspect of school administration.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Student Information Management", desc: "Maintain comprehensive student profiles including personal details, academic history, and guardian contacts.", icon: "🎓", color: "bg-purple-100 text-purple-600", border: "border-purple-200" },
              { title: "Attendance Management", desc: "Track daily attendance, generate reports, and notify parents of absences in real-time.", icon: "📋", color: "bg-pink-100 text-pink-600", border: "border-pink-200" },
              { title: "Fees & Finance Management", desc: "Simplified billing and payment tracking with integration for mobile money payments.", icon: "💰", color: "bg-green-100 text-green-600", border: "border-green-200" },
              { title: "Communication & Collaboration", desc: "Seamless communication between teachers, parents, and school administration.", icon: "💬", color: "bg-yellow-100 text-yellow-600", border: "border-yellow-200" },
            ].map((feature) => (
              <div key={feature.title} className={`bg-white rounded-2xl p-6 border ${feature.border} hover:shadow-lg transition-shadow`}>
                <div className={`w-12 h-12 ${feature.color} rounded-xl flex items-center justify-center mb-4 text-xl`}>
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security & Config */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Factory Reset Protection", desc: "Enhanced security with device verification that protects against unauthorized factory resets.", icon: "🔒", color: "bg-purple-100 text-purple-600" },
              { title: "Remote Profile Removal", desc: "Administrators can remotely remove lost or stolen devices to prevent unauthorized access.", icon: "🗑️", color: "bg-pink-100 text-pink-600" },
              { title: "Configure Wi-Fi Settings", desc: "Easily configure network settings to ensure reliable and consistent connectivity.", icon: "📶", color: "bg-green-100 text-green-600" },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-6 border border-slate-200">
                <div className={`w-10 h-10 ${item.color} rounded-lg flex items-center justify-center mb-3 text-lg`}>
                  {item.icon}
                </div>
                <h3 className="text-base font-semibold text-slate-900 mb-1">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Powerful Features */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-purple-600 text-sm font-semibold uppercase tracking-wider">Powerful Features</span>
              <h2 className="text-3xl font-bold text-slate-900 mt-2 mb-4">
                Powerful Features To Boost School Efficiency
              </h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Enable and manage powerful features designed to streamline your operations.
                From student profiles to CBC report cards, everything you need is here.
              </p>
              <ul className="space-y-3">
                {["Student Profiles", "Automated Attendance", "Fee Tracking", "Real-Time Communication"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-slate-700">
                    <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-200 to-pink-200 rounded-3xl transform rotate-3"></div>
              <div className="relative bg-white rounded-3xl shadow-xl p-8 border border-slate-100">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
                      <svg className="w-5 h-5 text-purple-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-medium text-slate-900">Student Enrollment</div>
                      <div className="text-xs text-slate-500">Grade 4A — 32 students</div>
                    </div>
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-pink-100 rounded-xl flex items-center justify-center">
                      <svg className="w-5 h-5 text-pink-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-medium text-slate-900">Attendance Marked</div>
                      <div className="text-xs text-slate-500">94% present today</div>
                    </div>
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                      <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-medium text-slate-900">CBC Reports</div>
                      <div className="text-xs text-slate-500">Term 1 complete</div>
                    </div>
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portal Cards */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-3">
              Access Your Portal
            </h2>
            <p className="text-slate-600 max-w-xl mx-auto">
              Choose your portal to sign in and access your school dashboard.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Parent Portal",
                description: "View your child's progress, report cards, attendance, and school announcements.",
                href: "/portal/login",
                color: "from-pink-500 to-rose-500",
                iconBg: "bg-pink-100 text-pink-600",
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                  </svg>
                ),
              },
              {
                title: "Student Portal",
                description: "Access assignments, class materials, school library, and upcoming events.",
                href: "/student-login",
                color: "from-green-500 to-emerald-500",
                iconBg: "bg-green-100 text-green-600",
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342" />
                  </svg>
                ),
              },
              {
                title: "Teacher Portal",
                description: "Manage your classes, enter marks, create assignments, and communicate with students.",
                href: "/sign-in",
                color: "from-purple-500 to-violet-500",
                iconBg: "bg-purple-100 text-purple-600",
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                  </svg>
                ),
              },
            ].map((portal) => (
              <Link
                key={portal.title}
                href={portal.href}
                className="group bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 relative overflow-hidden"
              >
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${portal.color}`}></div>
                <div className={`w-14 h-14 ${portal.iconBg} rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                  {portal.icon}
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {portal.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {portal.description}
                </p>
                <div className="mt-5 text-sm font-medium text-purple-600 flex items-center gap-1">
                  Sign In
                  <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-gradient-to-br from-purple-600 via-purple-500 to-pink-500 rounded-3xl p-10 md:p-14 text-center overflow-hidden">
            <div className="absolute top-0 left-0 w-40 h-40 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-60 h-60 bg-white/10 rounded-full translate-x-1/3 translate-y-1/3"></div>
            <div className="relative">
              <h2 className="text-3xl font-bold text-white mb-4">
                Manage Your School With Ease, Download The App Now
              </h2>
              <p className="text-purple-100 max-w-xl mx-auto mb-8">
                Stay connected with your school community, access real-time updates, and manage operations on the go.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="https://calendly.com/petermakau"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-purple-700 px-6 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                  </svg>
                  Book Onboarding Call
                </a>
              </div>
              <p className="text-purple-200 text-sm mt-4">
                Free setup for all schools. No credit card required.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-purple-600 text-sm font-semibold uppercase tracking-wider">Our Process</span>
            <h2 className="text-3xl font-bold text-slate-900 mt-2 mb-3">
              Our Streamlined Process For Smarter School Management
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Increase Productivity", desc: "Maximize efficiency and streamline all your School Operations.", color: "bg-purple-100 text-purple-600", num: "01" },
              { title: "Increase Actions", desc: "Enhance Parent Engagement and swift Responses.", color: "bg-pink-100 text-pink-600", num: "02" },
              { title: "Seamless Sync", desc: "Seamless Cloud Sync so you Connected at All Times.", color: "bg-green-100 text-green-600", num: "03" },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-6 border border-slate-200">
                <div className={`w-10 h-10 ${item.color} rounded-lg flex items-center justify-center mb-3 text-sm font-bold`}>
                  {item.num}
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Object Performance */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-purple-600 text-sm font-semibold uppercase tracking-wider">Our Object Performance</span>
              <h2 className="text-3xl font-bold text-slate-900 mt-2 mb-4">
                Manage Your School Operations From One Powerful Platform
              </h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Skuli brings together all the essential tools needed for effective school management in one powerful platform,
                empowering administrators and teachers to work with confidence.
              </p>
              <ul className="space-y-3">
                {["Real-Time Attendance Monitoring", "Automated Fee Management"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-slate-700">
                    <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-green-200 to-yellow-200 rounded-3xl transform -rotate-3"></div>
              <div className="relative bg-white rounded-3xl shadow-xl p-8 border border-slate-100">
                <div className="space-y-4">
                  <div className="bg-purple-50 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-slate-900">Device Analytics</span>
                      <span className="text-xs bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full">Active</span>
                    </div>
                    <div className="w-full bg-purple-200 rounded-full h-2">
                      <div className="bg-purple-600 h-2 rounded-full" style={{ width: "78%" }}></div>
                    </div>
                    <div className="text-xs text-slate-500 mt-1">78% of devices online</div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-pink-50 rounded-xl p-3 text-center">
                      <div className="text-lg font-bold text-pink-600">24</div>
                      <div className="text-[10px] text-slate-500">Active Teachers</div>
                    </div>
                    <div className="bg-green-50 rounded-xl p-3 text-center">
                      <div className="text-lg font-bold text-green-600">320</div>
                      <div className="text-[10px] text-slate-500">Students Today</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                      <span className="text-xs font-bold text-yellow-600">A+</span>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-slate-900">Custom Branding</div>
                      <div className="text-xs text-slate-500">School logo & colors</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342" />
                  </svg>
                </div>
                <span className="text-lg font-bold">Skuli</span>
              </div>
              <p className="text-sm text-slate-400">
                Smart ERP for Kenyan CBC Schools. Streamline your school management.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Product</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Demo</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Support</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Get in Touch</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>info@skuli.co.ke</li>
                <li>+254 700 000 000</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-sm text-slate-500">
            &copy; {new Date().getFullYear()} Skuli. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
