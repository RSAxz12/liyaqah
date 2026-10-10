"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    alert("تم إنشاء الحساب بنجاح!");
    router.push("/");
  };

  return (
    <div className="min-h-screen bg-[#fcfbf9] text-stone-800 flex flex-col font-sans" dir="rtl">
      <Navbar />

      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="bg-white border border-stone-200/80 rounded-3xl p-8 max-w-md w-full shadow-sm space-y-6">
          <div className="text-center space-y-2">
            <h1 className="text-2xl font-extrabold text-stone-900">إنشاء حساب جديد</h1>
            <p className="text-xs text-stone-600">انضم إلى مجتمع لياقة في خميس مشيط</p>
          </div>

          <form onSubmit={handleRegister} className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-stone-700">الاسم الكامل</label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="محمد القحطاني"
                className="w-full bg-stone-50 border border-stone-200/80 px-4 py-3 rounded-xl text-xs text-stone-900 placeholder-stone-400 focus:outline-none focus:border-emerald-900 focus:bg-white transition"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-stone-700">البريد الإلكتروني</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com"
                className="w-full bg-stone-50 border border-stone-200/80 px-4 py-3 rounded-xl text-xs text-stone-900 placeholder-stone-400 focus:outline-none focus:border-emerald-900 focus:bg-white transition"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-stone-700">كلمة المرور</label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-stone-50 border border-stone-200/80 px-4 py-3 rounded-xl text-xs text-stone-900 placeholder-stone-400 focus:outline-none focus:border-emerald-900 focus:bg-white transition"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-emerald-900 hover:bg-emerald-800 text-white font-semibold py-3 rounded-xl text-xs transition shadow-sm mt-2"
            >
              إنشاء الحساب
            </button>
          </form>

          <div className="text-center text-xs text-stone-600 pt-2 border-t border-stone-100">
            لديك حساب بالفعل؟{" "}
            <Link href="/login" className="text-emerald-900 font-bold hover:underline">
              تسجيل الدخول
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}