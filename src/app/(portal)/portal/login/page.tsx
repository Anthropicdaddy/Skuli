"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function ParentLoginPage() {
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    const res = await fetch("/api/parent/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ phone }),
    });

    if (res.ok) {
      const data = await res.json();
      localStorage.setItem("parentId", data.studentId);
      localStorage.setItem("parentName", data.parentName);
      router.push("/portal");
    } else {
      alert("No student found with that parent phone number.");
    }
    setLoading(false);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 max-w-md w-full">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-3xl">🎓</span>
          </div>
          <h1 className="text-2xl font-bold text-gray-900">Parent Portal</h1>
          <p className="text-gray-500 mt-1">Enter your phone number to view your child&apos;s progress</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <Label>Parent Phone Number</Label>
            <Input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+254712345678"
              required
            />
          </div>
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? "Looking up..." : "View My Child's Progress"}
          </Button>
        </form>

        <p className="text-xs text-gray-400 text-center mt-6">
          Powered by Skuli — Smart ERP for Kenyan CBC Schools
        </p>
      </div>
    </div>
  );
}
