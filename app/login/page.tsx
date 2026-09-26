"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    alert("تم تسجيل الدخول بنجاح!");
    router.push("/");
  };

  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-100 flex flex-col font-sans" dir="rtl">
      <Navbar />

      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="bg-[#1e293b] border border-slate-800 rounded-3xl p-8 max-w-md w-full shadow-2xl space-y-6">
          <div className="text-center space-y-2">
            <h1 className="text-2xl font-extrabold text-white">تسجيل الدخول</h1>
            <p className="text-xs text-slate-400">مرحباً بك مجدداً في منصة لياقة</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-slate-300">البريد الإلكتروني</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com"
                className="w-full bg-slate-900 border border-slate-700 px-4 py-3 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-slate-500"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-medium text-slate-300">كلمة المرور</label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-slate-900 border border-slate-700 px-4 py-3 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-slate-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-slate-100 hover:bg-white text-slate-900 font-bold py-3 rounded-xl text-xs transition shadow-lg mt-2"
            >
              تسجيل الدخول
            </button>
          </form>

          <div className="text-center text-xs text-slate-400 pt-2 border-t border-slate-800">
            ليس لديك حساب بعد؟{" "}
            <Link href="/register" className="text-white font-semibold hover:underline">
              إنشاء حساب جديد
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}