"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#1e293b] text-white border-b border-slate-700 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" dir="rtl">
        <div className="flex items-center justify-between h-16">
          
          {/* اللوقو */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold tracking-wider text-slate-100">
              لياقة | <span className="text-slate-400 text-xs font-normal">خميس مشيط</span>
            </Link>
          </div>

          {/* روابط القائمة للشاشات الكبيرة */}
          <div className="hidden md:flex items-center gap-6">
            <Link href="/" className="hover:text-slate-300 transition text-sm font-medium">الرئيسية</Link>
            <Link href="/clubs" className="hover:text-slate-300 transition text-sm font-medium">النوادي</Link>
            <Link href="/trainers" className="hover:text-slate-300 transition text-sm font-medium">المدربون</Link>
            <Link href="/map" className="hover:text-slate-300 transition text-sm font-medium">الخريطة</Link>
            <Link href="/about" className="hover:text-slate-300 transition text-sm font-medium">من نحن</Link>
          </div>

          {/* أزرار الحساب (أيقونة الحساب + تسجيل الدخول / إنشاء حساب) */}
          <div className="hidden md:flex items-center gap-3">
            {/* أيقونة الحساب والمفضلة */}
            <Link
              href="/account"
              className="p-2 rounded-xl bg-slate-800 text-amber-400 border border-slate-700 hover:bg-slate-700 transition flex items-center justify-center shadow-sm"
              title="حسابي والمفضلة"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </Link>
            <Link href="/login" className="text-sm px-3 py-2 rounded-lg hover:bg-slate-800 transition">
              دخول
            </Link>
            <Link href="/register" className="text-sm bg-slate-100 text-slate-900 px-4 py-2 rounded-lg font-medium hover:bg-white transition">
              إنشاء حساب
            </Link>
          </div>

          {/* زر القائمة الجانبية للجوال (ثلاث خطوط) */}
          <div className="md:hidden flex items-center gap-3">
            {/* أيقونة الحساب للجوال أيضاً */}
            <Link
              href="/account"
              className="p-2 rounded-xl bg-slate-800 text-amber-400 border border-slate-700 flex items-center justify-center"
              title="حسابي والمفضلة"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-white focus:outline-none p-2"
              aria-label="القائمة"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* القائمة المنسدلة للجوال */}
      {isOpen && (
        <div className="md:hidden bg-[#1e293b] border-b border-slate-700 px-4 pt-2 pb-4 space-y-2" dir="rtl">
          <Link href="/" className="block py-2 text-sm hover:bg-slate-800 px-3 rounded">الرئيسية</Link>
          <Link href="/clubs" className="block py-2 text-sm hover:bg-slate-800 px-3 rounded">النوادي</Link>
          <Link href="/trainers" className="block py-2 text-sm hover:bg-slate-800 px-3 rounded">المدربون</Link>
          <Link href="/map" className="block py-2 text-sm hover:bg-slate-800 px-3 rounded">الخريطة</Link>
          <Link href="/about" className="block py-2 text-sm hover:bg-slate-800 px-3 rounded">من نحن</Link>
          <div className="pt-2 border-t border-slate-700 flex flex-col gap-2">
            <Link href="/account" className="text-center py-2 text-sm bg-slate-800 text-amber-400 rounded font-medium">حسابي والمفضلة ⭐</Link>
            <Link href="/login" className="text-center py-2 text-sm hover:bg-slate-800 rounded">تسجيل الدخول</Link>
            <Link href="/register" className="text-center bg-slate-100 text-slate-900 py-2 text-sm rounded font-medium">إنشاء حساب</Link>
          </div>
        </div>
      )}
    </nav>
  );
}