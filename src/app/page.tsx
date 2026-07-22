import Link from "next/link";

const FEATURES = [
  {
    icon: "📊",
    title: "CBC Report Cards",
    description:
      "Generate beautiful, standards-based progress reports with rubric levels (EE, ME, AE, BE) for every student.",
  },
  {
    icon: "👩‍🏫",
    title: "Teacher Dashboard",
    description:
      "Clean, intuitive interface for teachers to enter marks, manage students, and track CBC assessments.",
  },
  {
    icon: "🏫",
    title: "Multi-School Support",
    description:
      "Each school gets its own isolated workspace. Directors manage their school independently.",
  },
  {
    icon: "📱",
    title: "Mobile Friendly",
    description:
      "Works perfectly on phones. Parents can check report cards anywhere, anytime.",
  },
];

const PILLARS = [
  { icon: "⚡", label: "Zero Paperwork" },
  { icon: "🎯", label: "Automated CBC Rubrics" },
  { icon: "📱", label: "Mobile Friendly" },
];

const PRICING = [
  {
    name: "Starter",
    price: "2,500",
    period: "term",
    features: [
      "Up to 100 students",
      "2 teacher accounts",
      "CBC report cards",
      "Attendance tracking",
      "Email support",
    ],
    cta: "Start Free Trial",
    popular: false,
  },
  {
    name: "Growth",
    price: "5,000",
    period: "term",
    features: [
      "Up to 500 students",
      "10 teacher accounts",
      "CBC report cards",
      "Assignment uploads",
      "Priority support",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "10,000",
    period: "term",
    features: [
      "Unlimited students",
      "Unlimited teachers",
      "All features included",
      "Custom branding",
      "Dedicated support",
      "API access",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="border-b border-gray-200 bg-white/80 backdrop-blur-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🎓</span>
              <span className="text-xl font-bold text-indigo-600">Skuli</span>
            </div>
            <div className="flex items-center gap-4">
              <Link
                href="/sign-in"
                className="text-gray-600 hover:text-gray-900 font-medium"
              >
                Teacher Login
              </Link>
              <Link
                href="/sign-up"
                className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors font-medium"
              >
                Book School Demo
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-800 text-white">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Smart ERP for{" "}
              <span className="text-yellow-300">Kenyan CBC</span> Schools
            </h1>
            <p className="text-xl md:text-2xl text-indigo-100 mb-8">
              Manage students, attendance, exams, and generate CBC report cards — all
              in one beautiful platform built for Kenya.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/sign-up"
                className="bg-white text-indigo-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-indigo-50 transition-colors shadow-xl"
              >
                Book School Demo
              </Link>
              <Link
                href="/sign-in"
                className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-colors"
              >
                Teacher Login
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pill Banner */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-wrap justify-center gap-8">
            {PILLARS.map((pillar) => (
              <div key={pillar.label} className="flex items-center gap-3">
                <span className="text-2xl">{pillar.icon}</span>
                <span className="font-semibold text-gray-800">
                  {pillar.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Everything Your School Needs
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Built specifically for the Kenyan CBC curriculum. No generic
              school software — this is made for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FEATURES.map((feature) => (
              <div
                key={feature.title}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-3xl">{feature.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Simple KES Pricing
            </h2>
            <p className="text-lg text-gray-600">
              No hidden costs. Cancel anytime. Pay per term.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {PRICING.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-2xl p-8 border-2 ${
                  plan.popular
                    ? "border-indigo-600 bg-indigo-50 shadow-xl scale-105"
                    : "border-gray-200 bg-white"
                }`}
              >
                {plan.popular && (
                  <div className="text-center mb-4">
                    <span className="bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                      MOST POPULAR
                    </span>
                  </div>
                )}
                <h3 className="text-xl font-bold text-gray-900">{plan.name}</h3>
                <div className="mt-4 mb-6">
                  <span className="text-4xl font-bold text-gray-900">
                    KES {plan.price}
                  </span>
                  <span className="text-gray-500">/{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm">
                      <span className="text-green-500">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/sign-up"
                  className={`block text-center py-3 rounded-lg font-semibold transition-colors ${
                    plan.popular
                      ? "bg-indigo-600 text-white hover:bg-indigo-700"
                      : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-2xl">🎓</span>
            <span className="text-xl font-bold text-white">Skuli</span>
          </div>
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Skuli Kenya. Smart ERP for CBC
            Schools.
          </p>
        </div>
      </footer>
    </div>
  );
}
