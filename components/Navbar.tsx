"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white/90 backdrop-blur-md text-stone-800 border-b border-stone-200/80 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" dir="rtl">
        <div className="flex items-center justify-between h-16">
          
          {/* اللوقو */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-xl bg-emerald-900 text-white flex items-center justify-center font-extrabold text-sm shadow-sm">
                ل
              </span>
              <span className="text-xl font-extrabold text-stone-900 tracking-tight">
                لياقة <span className="text-stone-500 text-xs font-normal">| خميس مشيط</span>
              </span>
            </Link>
          </div>

          {/* روابط القائمة للشاشات الكبيرة */}
          <div className="hidden md:flex items-center gap-6">
            <Link href="/" className="hover:text-emerald-900 transition text-sm font-semibold text-stone-700">الرئيسية</Link>
            <Link href="/clubs" className="hover:text-emerald-900 transition text-sm font-semibold text-stone-700">النوادي</Link>
            <Link href="/trainers" className="hover:text-emerald-900 transition text-sm font-semibold text-stone-700">المدربون</Link>
            <Link href="/map" className="hover:text-emerald-900 transition text-sm font-semibold text-stone-700">الخريطة</Link>
            <Link href="/about" className="hover:text-emerald-900 transition text-sm font-semibold text-stone-700">من نحن</Link>
          </div>

          {/* أزرار الحساب (أيقونة الحساب + تسجيل الدخول / إنشاء حساب) */}
          <div className="hidden md:flex items-center gap-3">
            {/* أيقونة الحساب والمفضلة */}
            <Link
              href="/account"
              className="p-2 rounded-xl bg-stone-100 text-emerald-900 border border-stone-200 hover:bg-stone-200 transition flex items-center justify-center shadow-sm"
              title="حسابي والمفضلة"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </Link>
            <Link href="/login" className="text-sm px-3 py-2 rounded-lg hover:bg-stone-100 text-stone-700 font-semibold transition">
              دخول
            </Link>
            <Link href="/register" className="text-sm bg-emerald-900 text-white px-4 py-2 rounded-xl font-semibold hover:bg-emerald-800 transition shadow-sm">
              إنشاء حساب
            </Link>
          </div>

          {/* زر القائمة الجانبية للجوال (ثلاث خطوط) */}
          <div className="md:hidden flex items-center gap-3">
            {/* أيقونة الحساب للجوال */}
            <Link
              href="/account"
              className="p-2 rounded-xl bg-stone-100 text-emerald-900 border border-stone-200 flex items-center justify-center"
              title="حسابي والمفضلة"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-stone-700 hover:text-stone-900 focus:outline-none p-2"
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
        <div className="md:hidden bg-white border-b border-stone-200 px-4 pt-2 pb-4 space-y-2" dir="rtl">
          <Link href="/" className="block py-2 text-sm text-stone-700 hover:bg-stone-100 px-3 rounded-lg font-medium">الرئيسية</Link>
          <Link href="/clubs" className="block py-2 text-sm text-stone-700 hover:bg-stone-100 px-3 rounded-lg font-medium">النوادي</Link>
          <Link href="/trainers" className="block py-2 text-sm text-stone-700 hover:bg-stone-100 px-3 rounded-lg font-medium">المدربون</Link>
          <Link href="/map" className="block py-2 text-sm text-stone-700 hover:bg-stone-100 px-3 rounded-lg font-medium">الخريطة</Link>
          <Link href="/about" className="block py-2 text-sm text-stone-700 hover:bg-stone-100 px-3 rounded-lg font-medium">من نحن</Link>
          <div className="pt-2 border-t border-stone-200 flex flex-col gap-2">
            <Link href="/account" className="text-center py-2 text-sm bg-stone-100 text-emerald-900 rounded-xl font-semibold border border-stone-200">حسابي والمفضلة</Link>
            <Link href="/login" className="text-center py-2 text-sm text-stone-700 hover:bg-stone-100 rounded-xl font-medium">تسجيل الدخول</Link>
            <Link href="/register" className="text-center bg-emerald-900 text-white py-2 text-sm rounded-xl font-semibold">إنشاء حساب</Link>
          </div>
        </div>
      )}
    </nav>
  );
}