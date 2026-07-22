import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex items-center justify-center p-4">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Skulix</h1>
        <SignIn
          routing="path"
          path="/sign-in"
          signUpUrl="/sign-up"
          forceRedirectUrl="/dashboard"
        />
      </div>
    </div>
  );
}
