"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ClubsPage() {
  const [clubs, setClubs] = useState([
    {
      id: 1,
      name: "فرع السد نادي IN 2 FITNESS",
      rating: "4.8",
      price: "250 ر.س / شهرياً",
      locationUrl: "https://maps.google.com",
      description: "تجهيزات حديثة، مساحات واسعة ومجهزة لأحدث تمارين المقاومة والكارديو.",
      image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=800&q=80",
      bookmarked: false,
    },
    {
      id: 2,
      name: "بودي ماسترز بريميوم",
      rating: "4.9",
      price: "350 ر.س / شهرياً",
      locationUrl: "https://maps.google.com",
      description: "نادي متكامل يضم مسابح، صالات حديد متطورة، ومدربين معتمدين.",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80",
      bookmarked: false,
    },
    {
      id: 3,
      name: "Fitness Time | وقت اللياقة",
      rating: "4.9",
      price: "400 ر.س / شهرياً",
      locationUrl: "https://maps.google.com",
      description: "الفرع الرئيسي المجهز بأحدث الأجهزة الرياضية وخدمات الاسترخاء والساونا.",
      image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80",
      bookmarked: false,
    },
    {
      id: 4,
      name: "نادي يورفت النسائي",
      rating: "4.7",
      price: "300 ر.س / شهرياً",
      locationUrl: "https://maps.google.com",
      description: "نادي نسائي متكامل بخصوصية تامّة وإشراف مدربات محترفات.",
      image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=800&q=80",
      bookmarked: false,
    },
    {
      id: 5,
      name: "G4Fit - جي فور فت",
      rating: "4.6",
      price: "220 ر.س / شهرياً",
      locationUrl: "https://maps.google.com",
      description: "متخصص في التدريب الحر، الكروسفت، واللياقة الوظيفية.",
      image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80",
      bookmarked: false,
    },
    {
      id: 6,
      name: "تمرين بلس الرياضي",
      rating: "4.5",
      price: "200 ر.س / شهرياً",
      locationUrl: "https://maps.google.com",
      description: "أجواء تحفيزية ممتازة ومعدات مناسبة لكافة مستويات المتدربين.",
      image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=80",
      bookmarked: false,
    },
    {
      id: 7,
      name: "أكاديمية ويمارا للتدريب",
      rating: "4.8",
      price: "320 ر.س / شهرياً",
      locationUrl: "https://maps.google.com",
      description: "برامج تدريبية متخصصة واحترافية لتطوير الأداء البدني والمهاري.",
      image: "https://images.unsplash.com/photo-1534367507873-d2d7e24c797f?auto=format&fit=crop&w=800&q=80",
      bookmarked: false,
    },
  ]);

  const [selectedClub, setSelectedClub] = useState<any>(null);

  const toggleBookmark = (id: number) => {
    setClubs(clubs.map(club => club.id === id ? { ...club, bookmarked: !club.bookmarked } : club));
  };

  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-100 flex flex-col font-sans" dir="rtl">
      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 py-12">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-extrabold text-white mb-3">نوادي خميس مشيط الرياضية</h1>
          <p className="text-slate-400 text-sm max-w-xl mx-auto">
            استعرض أبرز المراكز الرياضية في خميس مشيط، احفظ ناديك المفضل، وتعرف على التفاصيل والمواقع بدقة.
          </p>
        </div>

        {/* شبكة النوادي */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clubs.map((club) => (
            <div
              key={club.id}
              className="bg-[#1e293b] border border-slate-800 rounded-2xl overflow-hidden shadow-lg flex flex-col justify-between relative group"
            >
              {/* زر الحفظ (Bookmark) */}
              <button
                onClick={() => toggleBookmark(club.id)}
                className={`absolute top-4 left-4 p-2 rounded-full border z-10 transition shadow-md ${
                  club.bookmarked
                    ? "bg-slate-100 text-slate-900 border-white"
                    : "bg-slate-900/80 text-slate-300 border-slate-700 hover:bg-slate-800"
                }`}
                title="حفظ النادي"
              >
                <svg className="w-4 h-4" fill={club.bookmarked ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                </svg>
              </button>

              {/* صورة النادي الحقيقية للمنشأة */}
              <div className="h-44 w-full overflow-hidden bg-slate-800 relative">
                <img
                  src={club.image}
                  alt={club.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  {/* التقييم والاسم */}
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-base font-bold text-white">{club.name}</h3>
                    <span className="text-xs bg-slate-800 text-amber-400 px-2 py-0.5 rounded-lg border border-slate-700 font-medium">
                      ★ {club.rating}
                    </span>
                  </div>

                  {/* السعر */}
                  <p className="text-xs font-semibold text-slate-300 mb-4">
                    السعر: <span className="text-white">{club.price}</span>
                  </p>
                </div>

                {/* زر عرض التفاصيل */}
                <button
                  onClick={() => setSelectedClub(club)}
                  className="w-full bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-medium py-2.5 rounded-xl transition"
                >
                  عرض التفاصيل والخريطة
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* نافذة تفاصيل النادي */}
        {selectedClub && (
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-50">
            <div className="bg-[#1e293b] border border-slate-700 rounded-3xl max-w-md w-full p-6 space-y-4 shadow-2xl relative">
              <div className="flex items-center justify-between border-b border-slate-700 pb-3">
                <h3 className="text-lg font-bold text-white">{selectedClub.name}</h3>
                <button
                  onClick={() => setSelectedClub(null)}
                  className="text-slate-400 hover:text-white text-sm px-2 py-1"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-3 text-xs text-slate-300">
                <div className="h-40 rounded-xl overflow-hidden mb-2">
                  <img src={selectedClub.image} alt={selectedClub.name} className="w-full h-full object-cover" />
                </div>
                <p><strong className="text-white">التقييم:</strong> ★ {selectedClub.rating}</p>
                <p><strong className="text-white">تكلفة الاشتراك:</strong> {selectedClub.price}</p>
                <p><strong className="text-white">نبذة عن النادي:</strong> {selectedClub.description}</p>
              </div>

              <div className="pt-2 flex gap-3">
                <a
                  href={selectedClub.locationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-slate-100 hover:bg-white text-slate-900 text-center text-xs font-medium py-2.5 rounded-xl transition shadow"
                >
                  فتح الموقع في Google Maps
                </a>
                <button
                  onClick={() => setSelectedClub(null)}
                  className="bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs px-4 py-2.5 rounded-xl border border-slate-700 transition"
                >
                  إغلاق
                </button>
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}