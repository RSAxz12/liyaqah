"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function AccountPage() {
  // بيانات المستخدم الافتراضية أو المسترجعة من الذاكرة المحلية (localStorage)
  const [profile, setProfile] = useState({
    name: "مستخدم منصة لياقة",
    email: "user@liyaqah.com",
    age: "21",
    height: "157 سم",
    weight: "62.7 كجم",
    waist: "28 إنش",
    abdomen: "33 إنش",
  });

  const [isEditing, setIsEditing] = useState(false);
  const [savedData, setSavedData] = useState<any>({
    bookmarks: [
      { id: 1, type: "نادي", name: "فرع السد نادي IN 2 FITNESS", details: "خميس مشيط، حي السد" },
      { id: 2, name: "الكابتن فيصل القحطاني", type: "مدرب", details: "كمال أجسام وقوة ضخمة" },
    ],
    reviews: [
      { target: "فرع السد نادي IN 2 FITNESS", review: "نادي ممتاز جداً وتجهيزات حديثة ومريحة." },
      { target: "الكابتن أمل الشهراني", review: "أسلوبها تحفيزي جداً وبرامجها الغذائية رائعة." },
    ]
  });

  // تحميل البيانات المحفوظة إن وجدت
  useEffect(() => {
    const localProfile = localStorage.getItem("liyaqah_user_profile");
    if (localProfile) {
      setProfile(JSON.parse(localProfile));
    }
  }, []);

  // حفظ التعديلات
  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem("liyaqah_user_profile", JSON.stringify(profile));
    setIsEditing(false);
    alert("تم حفظ المقاييس والمعلومات الشخصية بنجاح!");
  };

  return (
    <div className="min-h-screen bg-[#fcfbf9] text-stone-800 flex flex-col font-sans" dir="rtl">
      <Navbar />

      <main className="flex-1 max-w-5xl mx-auto w-full px-4 py-12 space-y-10">
        
        {/* رأس الصفحة */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between bg-white border border-stone-200/80 p-6 md:p-8 rounded-3xl shadow-sm gap-4">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-stone-100 border border-stone-200 rounded-full flex items-center justify-center text-emerald-900 shadow-inner">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <div>
              <h1 className="text-xl font-extrabold text-stone-900">{profile.name}</h1>
              <p className="text-xs text-stone-500">{profile.email}</p>
            </div>
          </div>
          <div className="bg-emerald-50 border border-emerald-200/60 px-4 py-2 rounded-2xl text-xs text-emerald-900 font-semibold">
            حالة الحساب: نشط ومعتمد
          </div>
        </div>

        {/* شبكة المحتوى (المعلومات الصحية + المفضلة والتقييمات) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* العمود الأول: المعلومات الصحية والشخصية */}
          <div className="lg:col-span-1 bg-white border border-stone-200/80 p-6 rounded-3xl shadow-sm space-y-6">
            <div className="flex items-center justify-between border-b border-stone-100 pb-3">
              <h2 className="font-bold text-stone-900 text-base">المقاييس والبيانات الصحية</h2>
              <button
                onClick={() => setIsEditing(!isEditing)}
                className="text-xs text-emerald-900 hover:underline font-semibold"
              >
                {isEditing ? "إلغاء" : "تعديل"}
              </button>
            </div>

            {isEditing ? (
              <form onSubmit={handleSaveProfile} className="space-y-3 text-xs">
                <div>
                  <label className="text-stone-600 block mb-1 font-semibold">الاسم:</label>
                  <input
                    type="text"
                    value={profile.name}
                    onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                    className="w-full bg-stone-50 border border-stone-200 p-2.5 rounded-xl text-stone-900 focus:outline-none focus:border-emerald-900"
                  />
                </div>
                <div>
                  <label className="text-stone-600 block mb-1 font-semibold">العمر:</label>
                  <input
                    type="text"
                    value={profile.age}
                    onChange={(e) => setProfile({ ...profile, age: e.target.value })}
                    className="w-full bg-stone-50 border border-stone-200 p-2.5 rounded-xl text-stone-900 focus:outline-none focus:border-emerald-900"
                  />
                </div>
                <div>
                  <label className="text-stone-600 block mb-1 font-semibold">الطول:</label>
                  <input
                    type="text"
                    value={profile.height}
                    onChange={(e) => setProfile({ ...profile, height: e.target.value })}
                    className="w-full bg-stone-50 border border-stone-200 p-2.5 rounded-xl text-stone-900 focus:outline-none focus:border-emerald-900"
                  />
                </div>
                <div>
                  <label className="text-stone-600 block mb-1 font-semibold">الوزن:</label>
                  <input
                    type="text"
                    value={profile.weight}
                    onChange={(e) => setProfile({ ...profile, weight: e.target.value })}
                    className="w-full bg-stone-50 border border-stone-200 p-2.5 rounded-xl text-stone-900 focus:outline-none focus:border-emerald-900"
                  />
                </div>
                <div>
                  <label className="text-stone-600 block mb-1 font-semibold">الخصر:</label>
                  <input
                    type="text"
                    value={profile.waist}
                    onChange={(e) => setProfile({ ...profile, waist: e.target.value })}
                    className="w-full bg-stone-50 border border-stone-200 p-2.5 rounded-xl text-stone-900 focus:outline-none focus:border-emerald-900"
                  />
                </div>
                <div>
                  <label className="text-stone-600 block mb-1 font-semibold">البطن:</label>
                  <input
                    type="text"
                    value={profile.abdomen}
                    onChange={(e) => setProfile({ ...profile, abdomen: e.target.value })}
                    className="w-full bg-stone-50 border border-stone-200 p-2.5 rounded-xl text-stone-900 focus:outline-none focus:border-emerald-900"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-emerald-900 hover:bg-emerald-800 text-white font-semibold py-2.5 rounded-xl transition shadow-sm mt-3"
                >
                  حفظ التعديلات
                </button>
              </form>
            ) : (
              <div className="space-y-3 text-xs text-stone-700">
                <div className="bg-stone-50 p-3 rounded-2xl border border-stone-200/80 flex justify-between">
                  <span className="text-stone-500 font-medium">العمر:</span>
                  <span className="font-bold text-stone-900">{profile.age} سنة</span>
                </div>
                <div className="bg-stone-50 p-3 rounded-2xl border border-stone-200/80 flex justify-between">
                  <span className="text-stone-500 font-medium">الطول:</span>
                  <span className="font-bold text-stone-900">{profile.height}</span>
                </div>
                <div className="bg-stone-50 p-3 rounded-2xl border border-stone-200/80 flex justify-between">
                  <span className="text-stone-500 font-medium">الوزن:</span>
                  <span className="font-bold text-stone-900">{profile.weight}</span>
                </div>
                <div className="bg-stone-50 p-3 rounded-2xl border border-stone-200/80 flex justify-between">
                  <span className="text-stone-500 font-medium">مقاس الخصر:</span>
                  <span className="font-bold text-stone-900">{profile.waist}</span>
                </div>
                <div className="bg-stone-50 p-3 rounded-2xl border border-stone-200/80 flex justify-between">
                  <span className="text-stone-500 font-medium">مقاس البطن:</span>
                  <span className="font-bold text-stone-900">{profile.abdomen}</span>
                </div>
              </div>
            )}
          </div>

          {/* العمود الثاني والثالث: المفضلة والتقييمات السابقة */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* المحفوظات والمفضلات */}
            <div className="bg-white border border-stone-200/80 p-6 rounded-3xl shadow-sm space-y-4">
              <h2 className="font-bold text-stone-900 text-base border-b border-stone-100 pb-3">
                المحفوظات والمفضلات
              </h2>
              <div className="space-y-3">
                {savedData.bookmarks.map((item: any, index: number) => (
                  <div key={index} className="bg-stone-50 p-4 rounded-2xl border border-stone-200/80 flex items-center justify-between text-xs">
                    <div>
                      <span className="bg-emerald-50 text-emerald-900 px-2 py-0.5 rounded text-[10px] ml-2 border border-emerald-200/60 font-semibold">
                        {item.type}
                      </span>
                      <strong className="text-stone-900 text-sm font-bold">{item.name}</strong>
                      <p className="text-stone-500 mt-1">{item.details}</p>
                    </div>
                    <Link
                      href={item.type === "نادي" ? "/clubs" : "/trainers"}
                      className="bg-white hover:bg-stone-100 text-stone-800 border border-stone-200 px-3 py-1.5 rounded-xl font-semibold transition shadow-sm"
                    >
                      عرض
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* التقييمات السابقة */}
            <div className="bg-white border border-stone-200/80 p-6 rounded-3xl shadow-sm space-y-4">
              <h2 className="font-bold text-stone-900 text-base border-b border-stone-100 pb-3">
                تقييماتي ومراجعاتي السابقة
              </h2>
              <div className="space-y-3">
                {savedData.reviews.map((rev: any, index: number) => (
                  <div key={index} className="bg-stone-50 p-4 rounded-2xl border border-stone-200/80 space-y-1 text-xs">
                    <div className="flex justify-between items-center">
                      <strong className="text-stone-900 font-bold">{rev.target}</strong>
                      <span className="text-emerald-900 font-bold">★★★★★</span>
                    </div>
                    <p className="text-stone-600 pt-1">"{rev.review}"</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </main>

      <Footer />
    </div>
  );
}