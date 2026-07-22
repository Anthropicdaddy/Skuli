import { SignUp } from "@clerk/nextjs";
import Link from "next/link";

export default function SignUpPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 mb-6">
            <div className="w-7 h-7 bg-cyan-600 rounded-md flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.636 50.636 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0112 13.489a50.702 50.702 0 017.74-3.342" />
              </svg>
            </div>
            <span className="text-lg font-bold text-slate-900 tracking-tight">Skuli</span>
          </Link>
          <h1 className="text-xl font-bold text-slate-900">Create account</h1>
          <p className="text-sm text-slate-500 mt-1">
            Sign up to manage your school on Skuli.
          </p>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-6">
          <SignUp
            routing="path"
            path="/sign-up"
            signInUrl="/sign-in"
            forceRedirectUrl="/onboarding"
          />
        </div>
        <p className="text-center text-sm text-slate-500 mt-6">
          Not a teacher?{" "}
          <Link href="/" className="text-slate-900 hover:underline font-medium">
            Go back
          </Link>
        </p>
      </div>
    </div>
  );
}
