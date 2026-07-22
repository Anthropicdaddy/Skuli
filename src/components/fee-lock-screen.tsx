"use client";

import { Button } from "@/components/ui/button";

export function FeeLockScreen({
  studentName,
  admissionNo,
  feeBalance,
  schoolName,
}: {
  studentName: string;
  admissionNo: string;
  feeBalance: number;
  schoolName: string;
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-orange-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl border border-red-100 p-8 max-w-md w-full text-center">
        <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="text-4xl">🔒</span>
        </div>

        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Report Card Locked
        </h1>

        <div className="bg-red-50 border border-red-200 rounded-lg p-4 my-6">
          <p className="text-red-700 font-medium">
            Outstanding Balance: KES {feeBalance.toLocaleString()}
          </p>
        </div>

        <p className="text-gray-600 mb-2">
          The report card for <strong>{studentName}</strong> ({admissionNo}) is
          currently locked.
        </p>

        <p className="text-gray-500 text-sm mb-6">
          Please contact the school bursar at <strong>{schoolName}</strong> to
          clear the outstanding fee balance. Once cleared, the report card will
          be automatically unlocked.
        </p>

        <div className="space-y-3">
          <Button className="w-full" variant="outline" disabled>
            Download Report Card
          </Button>
          <p className="text-xs text-gray-400">
            This is an automated fee enforcement feature by Skulix
          </p>
        </div>
      </div>
    </div>
  );
}
