"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");

  // أبرز النوادي من قائمة خميس مشيط الحقيقية
  const featuredClubs = [
    {
      id: 1,
      name: "فرع السد نادي IN 2 FITNESS",
      rating: "4.8",
      price: "250 ر.س / شهرياً",
      description: "تجهيزات حديثة، مساحات واسعة ومجهزة لأحدث تمارين المقاومة والكارديو.",
      image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      name: "بودي ماسترز بريميوم",
      rating: "4.9",
      price: "350 ر.س / شهرياً",
      description: "نادي متكامل يضم مسابح، صالات حديد متطورة، ومدربين معتمدين.",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      name: "Fitness Time | وقت اللياقة",
      rating: "4.9",
      price: "400 ر.س / شهرياً",
      description: "الفرع الرئيسي المجهز بأحدث الأجهزة الرياضية وخدمات الاسترخاء والساونا.",
      image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80",
    },
  ];

  // دالة التعامل مع البحث والانتقال لصفحة النوادي بالكلمة المدخلة
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/clubs?search=${encodeURIComponent(searchQuery)}`);
    } else {
      router.push("/clubs");
    }
  };

  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-100 flex flex-col font-sans" dir="rtl">
      <Navbar />

      <main className="flex-1">
        
        {/* 1. قسم الواجهة الرئيسي مع شريط البحث المُفعل */}
        <section className="relative py-20 px-4 text-center bg-gradient-to-b from-[#1e293b] to-[#0f172a] border-b border-slate-800">
          <div className="max-w-4xl mx-auto space-y-6">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">
              منصة لياقة الرياضية
            </h1>
            <p className="text-slate-300 text-base md:text-lg max-w-2xl mx-auto">
              اكتشف أفضل النوادي والمدربين الرياضيين لتحقيق أهدافك البدنية بكل كفاءة وتنظيم.
            </p>

            {/* شريط البحث الفعّال */}
            <form onSubmit={handleSearch} className="max-w-xl mx-auto mt-8 flex flex-col sm:flex-row gap-2 bg-[#1e293b] p-2 rounded-2xl border border-slate-700 shadow-xl">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="ابحث حسب نوع الرياضة (مثل: كمال أجسام، كروسفت، يوغا...)"
                className="flex-1 bg-transparent px-4 py-3 text-sm text-white placeholder-slate-400 focus:outline-none"
              />
              <button type="submit" className="bg-slate-100 text-slate-900 px-6 py-3 rounded-xl font-medium text-sm hover:bg-white transition shadow">
                بحث
              </button>
            </form>

            {/* أزرار سريعة */}
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Link
                href="/trainers"
                className="bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 px-6 py-3 rounded-xl text-sm font-medium transition"
              >
                استعراض المدربين
              </Link>
              <Link
                href="/clubs"
                className="bg-slate-100 text-slate-900 hover:bg-white px-6 py-3 rounded-xl text-sm font-medium transition"
              >
                استعراض النوادي
              </Link>
            </div>
          </div>
        </section>

        {/* 2. مميزات المنصة السريعة */}
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#1e293b] p-6 rounded-2xl border border-slate-800 text-center space-y-3">
              <h3 className="text-lg font-bold text-white">نوادي معتمدة</h3>
              <p className="text-slate-400 text-xs leading-relaxed">قائمة متكاملة بأبرز المراكز والمنشآت الرياضية المجهزة بأحدث المستلزمات.</p>
            </div>
            <div className="bg-[#1e293b] p-6 rounded-2xl border border-slate-800 text-center space-y-3">
              <h3 className="text-lg font-bold text-white">نخبة المدربين</h3>
              <p className="text-slate-400 text-xs leading-relaxed">إشراف وتوجيه احترافي من كفاءات متخصصة في التدريب والتغذية.</p>
            </div>
            <div className="bg-[#1e293b] p-6 rounded-2xl border border-slate-800 text-center space-y-3">
              <h3 className="text-lg font-bold text-white">متابعة دقيقة</h3>
              <p className="text-slate-400 text-xs leading-relaxed">أدوات مخصصة لتتبع مستوى التقدم والوصول للأهداف بمرونة عالية.</p>
            </div>
          </div>
        </section>

        {/* 3. قسم أبرز النوادي الرياضية الحقيقية (خميس مشيط) */}
        <section className="py-12 border-t border-slate-800/60 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-white">أبرز النوادي الرياضية</h2>
              <p className="text-xs text-slate-400 mt-1">من أفضل المراكز الرياضية في خميس مشيط</p>
            </div>
            <Link href="/clubs" className="flex items-center gap-2 text-sm text-slate-300 hover:text-white transition group font-medium">
              <span>عرض الكل</span>
              <svg className="w-5 h-5 transform rotate-180 group-hover:-translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {featuredClubs.map((club) => (
              <div key={club.id} className="bg-[#1e293b] rounded-2xl overflow-hidden border border-slate-800 flex flex-col justify-between shadow-lg">
                <div className="h-44 w-full overflow-hidden bg-slate-800 relative">
                  <img src={club.image} alt={club.name} className="w-full h-full object-cover hover:scale-105 transition duration-300" />
                  <span className="absolute top-3 left-3 bg-slate-900/80 text-amber-400 text-xs px-2.5 py-1 rounded-lg border border-slate-700 font-medium">
                    ★ {club.rating}
                  </span>
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <h3 className="font-bold text-base text-white mb-1">{club.name}</h3>
                    <p className="text-xs text-slate-300 font-semibold mb-2">السعر: <span className="text-white">{club.price}</span></p>
                    <p className="text-xs text-slate-400 line-clamp-2">{club.description}</p>
                  </div>
                  <Link href="/clubs" className="inline-block text-xs text-center bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 py-2.5 rounded-xl transition font-medium">
                    التفاصيل والموقع ←
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. قسم أبرز المدربين الرياضيين */}
        <section className="py-12 border-t border-slate-800/60 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-white">أبرز المدربين الرياضيين</h2>
            <Link href="/trainers" className="flex items-center gap-2 text-sm text-slate-300 hover:text-white transition group font-medium">
              <span>عرض الكل</span>
              <svg className="w-5 h-5 transform rotate-180 group-hover:-translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            
            <div className="bg-[#1e293b] rounded-2xl p-5 border border-slate-800 space-y-3">
              <div className="w-16 h-16 bg-slate-800 border border-slate-700 rounded-full mx-auto flex items-center justify-center text-slate-400 shadow-inner">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="font-bold text-base text-white text-center">الكابتن أحمد العمري</h3>
              <p className="text-xs text-slate-400 text-center">متخصص في بناء الأجسام وقوة اللياقة البدنية.</p>
              <div className="text-center pt-2">
                <Link href="/trainers" className="text-xs bg-slate-800 hover:bg-slate-700 text-slate-200 px-3 py-1.5 rounded-lg transition inline-block">ملف المدرب</Link>
              </div>
            </div>

            <div className="bg-[#1e293b] rounded-2xl p-5 border border-slate-800 space-y-3">
              <div className="w-16 h-16 bg-slate-800 border border-slate-700 rounded-full mx-auto flex items-center justify-center text-slate-400 shadow-inner">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="font-bold text-base text-white text-center">الكابتن سارة القحطاني</h3>
              <p className="text-xs text-slate-400 text-center">مدربة لياقة بدنية وتغذية رياضية معتمدة.</p>
              <div className="text-center pt-2">
                <Link href="/trainers" className="text-xs bg-slate-800 hover:bg-slate-700 text-slate-200 px-3 py-1.5 rounded-lg transition inline-block">ملف المدرب</Link>
              </div>
            </div>

            <div className="bg-[#1e293b] rounded-2xl p-5 border border-slate-800 space-y-3">
              <div className="w-16 h-16 bg-slate-800 border border-slate-700 rounded-full mx-auto flex items-center justify-center text-slate-400 shadow-inner">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="font-bold text-base text-white text-center">الكابتن محمد الحربي</h3>
              <p className="text-xs text-slate-400 text-center">متخصص في تدريبات الكروسفت واللياقة الوظيفية.</p>
              <div className="text-center pt-2">
                <Link href="/trainers" className="text-xs bg-slate-800 hover:bg-slate-700 text-slate-200 px-3 py-1.5 rounded-lg transition inline-block">ملف المدرب</Link>
              </div>
            </div>

          </div>
        </section>

        {/* 5. قسم الخريطة والنوادي القريبة */}
        <section className="py-16 border-t border-slate-800/60 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="bg-[#1e293b] rounded-3xl p-6 md:p-10 border border-slate-800 flex flex-col md:flex-row items-center gap-8 shadow-2xl">
            <div className="flex-1 space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-white">استعرض الخريطة والنوادي القريبة منك</h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                اعثر على المراكز والنوادي الرياضية الأقرب لموقعك الجغرافي في خميس مشيط بكل سهولة، وتعرف على خدماتها وأوقات عملها وتقييمات الأعضاء مباشرة.
              </p>
              <Link
                href="/map"
                className="inline-block bg-slate-100 text-slate-900 px-6 py-3 rounded-xl font-medium text-sm hover:bg-white transition shadow"
              >
                فتح الخريطة التفاعلية ↗
              </Link>
            </div>
            
            <div className="w-full md:w-1/2 h-64 bg-slate-900 rounded-2xl border border-slate-700 p-6 flex flex-col justify-between shadow-inner relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-slate-800/50 rounded-full blur-2xl pointer-events-none"></div>
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <span className="text-xs font-bold text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  خميس مشيط - النطاق الجغرافي
                </span>
                <span className="text-[11px] text-amber-400 font-medium">16 مركزاً معتمداً</span>
              </div>
              <div className="space-y-2 text-xs text-slate-300">
                <div className="bg-slate-800/60 p-2.5 rounded-xl border border-slate-700/60 flex justify-between items-center">
                  <span>📍 فرع السد نادي IN 2 FITNESS</span>
                  <span className="text-slate-400 text-[11px]">حي السد</span>
                </div>
                <div className="bg-slate-800/60 p-2.5 rounded-xl border border-slate-700/60 flex justify-between items-center">
                  <span>📍 بودي ماسترز بريميوم</span>
                  <span className="text-slate-400 text-[11px]">طريق الملك فهد</span>
                </div>
              </div>
              <Link
                href="/map"
                className="block text-center bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 py-2 rounded-xl text-xs transition font-medium"
              >
                عرض كافة المواقع على الخريطة ←
              </Link>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}