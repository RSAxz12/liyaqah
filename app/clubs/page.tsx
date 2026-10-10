"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ClubsPage() {
  const [activeFilter, setActiveFilter] = useState<"all" | "men" | "women">("all");

  const [clubs, setClubs] = useState([
    {
      id: 1,
      name: "فرع السد نادي IN 2 FITNESS",
      rating: "4.8",
      price: "250 ر.س / شهرياً",
      gender: "men",
      categoryName: "رجال",
      locationUrl: "https://www.google.com/maps/search/?api=1&query=IN+2+FITNESS+Khamis+Mushait",
      description: "تجهيزات حديثة، مساحات واسعة ومجهزة لأحدث تمارين المقاومة والكارديو.",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80",
      bookmarked: false,
    },
    {
      id: 2,
      name: "بودي ماسترز بريميوم",
      rating: "4.9",
      price: "350 ر.س / شهرياً",
      gender: "men",
      categoryName: "رجال",
      locationUrl: "https://www.google.com/maps/search/?api=1&query=Body+Masters+Khamis+Mushait",
      description: "نادي متكامل يضم مسابح، صالات حديد متطورة، ومدربين معتمدين.",
      image: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=800&q=80",
      bookmarked: false,
    },
    {
      id: 3,
      name: "Fitness Time | وقت اللياقة",
      rating: "4.9",
      price: "400 ر.س / شهرياً",
      gender: "men",
      categoryName: "رجال",
      locationUrl: "https://www.google.com/maps/search/?api=1&query=Fitness+Time+Khamis+Mushait",
      description: "الفرع الرئيسي المجهز بأحدث الأجهزة الرياضية وخدمات الاسترخاء والساونا.",
      image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=800&q=80",
      bookmarked: false,
    },
    {
      id: 4,
      name: "نادي يورفت النسائي",
      rating: "4.7",
      price: "300 ر.س / شهرياً",
      gender: "women",
      categoryName: "سيدات",
      locationUrl: "https://www.google.com/maps/search/?api=1&query=نادي+نسائي+خميس+مشيط",
      description: "نادي نسائي متكامل بخصوصية تامّة وإشراف مدربات محترفات.",
      image: "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?auto=format&fit=crop&w=800&q=80",
      bookmarked: false,
    },
    {
      id: 5,
      name: "G4Fit - جي فور فت",
      rating: "4.6",
      price: "220 ر.س / شهرياً",
      gender: "men",
      categoryName: "رجال",
      locationUrl: "https://www.google.com/maps/search/?api=1&query=G4Fit+Khamis+Mushait",
      description: "متخصص في التدريب الحر، الكروسفت، واللياقة الوظيفية.",
      image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80",
      bookmarked: false,
    },
    {
      id: 6,
      name: "تمرين بلس الرياضي",
      rating: "4.5",
      price: "200 ر.س / شهرياً",
      gender: "men",
      categoryName: "رجال",
      locationUrl: "https://www.google.com/maps/search/?api=1&query=تمرين+بلس+خميس+مشيط",
      description: "أجواء تحفيزية ممتازة ومعدات مناسبة لكافة مستويات المتدربين.",
      image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=800&q=80",
      bookmarked: false,
    },
    {
      id: 7,
      name: "أكاديمية ويمارا للتدريب النسائي",
      rating: "4.8",
      price: "320 ر.س / شهرياً",
      gender: "women",
      categoryName: "سيدات",
      locationUrl: "https://www.google.com/maps/search/?api=1&query=ويمارا+خميس+مشيط",
      description: "برامج تدريبية متخصصة واحترافية لتطوير الأداء البدني والمهاري للنساء.",
      image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=800&q=80",
      bookmarked: false,
    },
  ]);

  const [selectedClub, setSelectedClub] = useState<any>(null);

  const toggleBookmark = (id: number) => {
    setClubs(clubs.map(club => club.id === id ? { ...club, bookmarked: !club.bookmarked } : club));
  };

  const filteredClubs = clubs.filter(club => {
    if (activeFilter === "men") return club.gender === "men";
    if (activeFilter === "women") return club.gender === "women";
    return true;
  });

  return (
    <div className="min-h-screen bg-[#fcfbf9] text-stone-800 flex flex-col font-sans" dir="rtl">
      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 py-12">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold text-stone-900 mb-3">نوادي خميس مشيط الرياضية</h1>
          <p className="text-stone-600 text-sm max-w-xl mx-auto mb-6">
            استعرض أبرز المراكز الرياضية في خميس مشيط، احفظ ناديك المفضل، وتعرف على التفاصيل والمواقع بدقة.
          </p>

          {/* أزرار التصفية فئات النوادي */}
          <div className="flex justify-center items-center gap-3">
            <button
              onClick={() => setActiveFilter("all")}
              className={`px-5 py-2 rounded-xl text-xs font-semibold transition border ${
                activeFilter === "all"
                  ? "bg-emerald-900 text-white border-emerald-900 shadow-sm"
                  : "bg-stone-100 text-stone-700 border-stone-200 hover:bg-stone-200"
              }`}
            >
              جميع النوادي
            </button>
            <button
              onClick={() => setActiveFilter("men")}
              className={`px-5 py-2 rounded-xl text-xs font-semibold transition border ${
                activeFilter === "men"
                  ? "bg-emerald-900 text-white border-emerald-900 shadow-sm"
                  : "bg-stone-100 text-stone-700 border-stone-200 hover:bg-stone-200"
              }`}
            >
              نوادي الرجال
            </button>
            <button
              onClick={() => setActiveFilter("women")}
              className={`px-5 py-2 rounded-xl text-xs font-semibold transition border ${
                activeFilter === "women"
                  ? "bg-emerald-900 text-white border-emerald-900 shadow-sm"
                  : "bg-stone-100 text-stone-700 border-stone-200 hover:bg-stone-200"
              }`}
            >
              نوادي السيدات
            </button>
          </div>
        </div>

        {/* شبكة النوادي */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredClubs.map((club) => (
            <div
              key={club.id}
              className="bg-white border border-stone-200/80 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition flex flex-col justify-between relative group"
            >
              {/* زر الحفظ (Bookmark) */}
              <button
                onClick={() => toggleBookmark(club.id)}
                className={`absolute top-4 left-4 p-2 rounded-full border z-10 transition shadow-sm ${
                  club.bookmarked
                    ? "bg-emerald-900 text-white border-emerald-900"
                    : "bg-white/90 text-stone-600 border-stone-200 hover:bg-stone-100"
                }`}
                title="حفظ النادي"
              >
                <svg className="w-4 h-4" fill={club.bookmarked ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                </svg>
              </button>

              {/* صورة النادي */}
              <div className="h-44 w-full overflow-hidden bg-stone-100 relative">
                <img
                  src={club.image}
                  alt={club.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
                <span className="absolute bottom-3 right-3 bg-white/95 text-emerald-900 border border-stone-200 px-2.5 py-1 rounded-md text-[10px] font-bold">
                  مخصص: {club.categoryName}
                </span>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  {/* التقييم والاسم */}
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-base font-bold text-stone-900">{club.name}</h3>
                    <span className="text-xs bg-emerald-50 text-emerald-900 px-2 py-0.5 rounded-lg border border-emerald-200/60 font-semibold">
                      ★ {club.rating}
                    </span>
                  </div>

                  {/* السعر */}
                  <p className="text-xs font-medium text-stone-600 mb-4">
                    السعر: <span className="text-stone-900 font-bold">{club.price}</span>
                  </p>
                </div>

                {/* زر عرض التفاصيل */}
                <button
                  onClick={() => setSelectedClub(club)}
                  className="w-full bg-stone-100 hover:bg-stone-200 text-stone-800 border border-stone-200 text-xs font-semibold py-2.5 rounded-xl transition"
                >
                  عرض التفاصيل والخريطة
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* نافذة تفاصيل النادي */}
        {selectedClub && (
          <div className="fixed inset-0 bg-stone-900/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
            <div className="bg-white border border-stone-200 rounded-3xl max-w-md w-full p-6 space-y-4 shadow-xl relative">
              <div className="flex items-center justify-between border-b border-stone-100 pb-3">
                <h3 className="text-lg font-bold text-stone-900">{selectedClub.name}</h3>
                <button
                  onClick={() => setSelectedClub(null)}
                  className="text-stone-400 hover:text-stone-700 text-sm px-2 py-1"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-3 text-xs text-stone-600">
                <div className="h-40 rounded-xl overflow-hidden mb-2 border border-stone-100">
                  <img src={selectedClub.image} alt={selectedClub.name} className="w-full h-full object-cover" />
                </div>
                <p><strong className="text-stone-900">الفئة:</strong> {selectedClub.categoryName}</p>
                <p><strong className="text-stone-900">التقييم:</strong> ★ {selectedClub.rating}</p>
                <p><strong className="text-stone-900">تكلفة الاشتراك:</strong> {selectedClub.price}</p>
                <p><strong className="text-stone-900">نبذة عن النادي:</strong> {selectedClub.description}</p>
              </div>

              <div className="pt-2 flex gap-3">
                <a
                  href={selectedClub.locationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-emerald-900 hover:bg-emerald-800 text-white text-center text-xs font-semibold py-2.5 rounded-xl transition shadow-sm"
                >
                  فتح الموقع في Google Maps
                </a>
                <button
                  onClick={() => setSelectedClub(null)}
                  className="bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs px-4 py-2.5 rounded-xl border border-stone-200 transition"
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