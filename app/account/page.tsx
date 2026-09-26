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
    <div className="min-h-screen bg-[#0f172a] text-slate-100 flex flex-col font-sans" dir="rtl">
      <Navbar />

      <main className="flex-1 max-w-5xl mx-auto w-full px-4 py-12 space-y-10">
        
        {/* رأس الصفحة */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between bg-[#1e293b] border border-slate-800 p-6 md:p-8 rounded-3xl shadow-xl gap-4">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-slate-800 border border-slate-700 rounded-full flex items-center justify-center text-amber-400 text-2xl shadow-inner">
              👤
            </div>
            <div>
              <h1 className="text-xl font-extrabold text-white">{profile.name}</h1>
              <p className="text-xs text-slate-400">{profile.email}</p>
            </div>
          </div>
          <div className="bg-slate-900/60 border border-slate-700/60 px-4 py-2 rounded-2xl text-xs text-slate-300">
            حالة الحساب: <span className="text-emerald-400 font-semibold">نشط ومعتمد ⭐</span>
          </div>
        </div>

        {/* شبكة المحتوى (المعلومات الصحية + المفضلة والتقييمات) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* العمود الأول والثاني: المعلومات الصحية والشخصية */}
          <div className="lg:col-span-1 bg-[#1e293b] border border-slate-800 p-6 rounded-3xl shadow-xl space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h2 className="font-bold text-white text-base">المقاييس والبيانات الصحية</h2>
              <button
                onClick={() => setIsEditing(!isEditing)}
                className="text-xs text-amber-400 hover:underline font-medium"
              >
                {isEditing ? "إلغاء" : "تعديل "}
              </button>
            </div>

            {isEditing ? (
              <form onSubmit={handleSaveProfile} className="space-y-3 text-xs">
                <div>
                  <label className="text-slate-400 block mb-1">الاسم:</label>
                  <input
                    type="text"
                    value={profile.name}
                    onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-700 p-2.5 rounded-xl text-white"
                  />
                </div>
                <div>
                  <label className="text-slate-400 block mb-1">العمر:</label>
                  <input
                    type="text"
                    value={profile.age}
                    onChange={(e) => setProfile({ ...profile, age: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-700 p-2.5 rounded-xl text-white"
                  />
                </div>
                <div>
                  <label className="text-slate-400 block mb-1">الطول:</label>
                  <input
                    type="text"
                    value={profile.height}
                    onChange={(e) => setProfile({ ...profile, height: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-700 p-2.5 rounded-xl text-white"
                  />
                </div>
                <div>
                  <label className="text-slate-400 block mb-1">الوزن:</label>
                  <input
                    type="text"
                    value={profile.weight}
                    onChange={(e) => setProfile({ ...profile, weight: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-700 p-2.5 rounded-xl text-white"
                  />
                </div>
                <div>
                  <label className="text-slate-400 block mb-1">الخصر:</label>
                  <input
                    type="text"
                    value={profile.waist}
                    onChange={(e) => setProfile({ ...profile, waist: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-700 p-2.5 rounded-xl text-white"
                  />
                </div>
                <div>
                  <label className="text-slate-400 block mb-1">البطن:</label>
                  <input
                    type="text"
                    value={profile.abdomen}
                    onChange={(e) => setProfile({ ...profile, abdomen: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-700 p-2.5 rounded-xl text-white"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-slate-100 hover:bg-white text-slate-900 font-bold py-2.5 rounded-xl transition mt-3"
                >
                  حفظ التعديلات
                </button>
              </form>
            ) : (
              <div className="space-y-3 text-xs text-slate-300">
                <div className="bg-slate-900/50 p-3 rounded-2xl border border-slate-800 flex justify-between">
                  <span className="text-slate-400">العمر:</span>
                  <span className="font-bold text-white">{profile.age} سنة</span>
                </div>
                <div className="bg-slate-900/50 p-3 rounded-2xl border border-slate-800 flex justify-between">
                  <span className="text-slate-400">الطول:</span>
                  <span className="font-bold text-white">{profile.height}</span>
                </div>
                <div className="bg-slate-900/50 p-3 rounded-2xl border border-slate-800 flex justify-between">
                  <span className="text-slate-400">الوزن:</span>
                  <span className="font-bold text-white">{profile.weight}</span>
                </div>
                <div className="bg-slate-900/50 p-3 rounded-2xl border border-slate-800 flex justify-between">
                  <span className="text-slate-400">مقاس الخصر:</span>
                  <span className="font-bold text-white">{profile.waist}</span>
                </div>
                <div className="bg-slate-900/50 p-3 rounded-2xl border border-slate-800 flex justify-between">
                  <span className="text-slate-400">مقاس البطن:</span>
                  <span className="font-bold text-white">{profile.abdomen}</span>
                </div>
              </div>
            )}
          </div>

          {/* العمود الثالث: المفضلة والتقييمات السابقة */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* النوادي والمدربين المحفوظين (Bookmarks) */}
            <div className="bg-[#1e293b] border border-slate-800 p-6 rounded-3xl shadow-xl space-y-4">
              <h2 className="font-bold text-white text-base border-b border-slate-800 pb-3">
                ⭐ المحفوظات والمفضلات (Bookmarked)
              </h2>
              <div className="space-y-3">
                {savedData.bookmarks.map((item: any, index: number) => (
                  <div key={index} className="bg-slate-900/60 p-4 rounded-2xl border border-slate-800 flex items-center justify-between text-xs">
                    <div>
                      <span className="bg-slate-800 text-amber-400 px-2 py-0.5 rounded text-[10px] ml-2 border border-slate-700">
                        {item.type}
                      </span>
                      <strong className="text-white text-sm">{item.name}</strong>
                      <p className="text-slate-400 mt-1">{item.details}</p>
                    </div>
                    <Link
                      href={item.type === "نادي" ? "/clubs" : "/trainers"}
                      className="bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 px-3 py-1.5 rounded-xl transition"
                    >
                      عرض
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* التقييمات السابقة */}
            <div className="bg-[#1e293b] border border-slate-800 p-6 rounded-3xl shadow-xl space-y-4">
              <h2 className="font-bold text-white text-base border-b border-slate-800 pb-3">
                💬 تقييماتي ومراجعاتي السابقة
              </h2>
              <div className="space-y-3">
                {savedData.reviews.map((rev: any, index: number) => (
                  <div key={index} className="bg-slate-900/60 p-4 rounded-2xl border border-slate-800 space-y-1 text-xs">
                    <div className="flex justify-between items-center">
                      <strong className="text-white font-bold">{rev.target}</strong>
                      <span className="text-amber-400">★★★★★</span>
                    </div>
                    <p className="text-slate-300 pt-1">"{rev.review}"</p>
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