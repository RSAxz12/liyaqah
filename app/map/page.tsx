"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function InteractiveMapPage() {
  // قائمة مختصرة لنوادي خميس مشيط مع روابط خرائط جوجل حقيقية ومحددات جغرافية
  const mapClubs = [
    { id: 1, name: "فرع السد نادي IN 2 FITNESS", address: "خميس مشيط، حي السد", rating: "4.8", url: "https://maps.google.com/?q=IN+2+FITNESS+Khamis+Mushait" },
    { id: 2, name: "بودي ماسترز بريميوم", address: "خميس مشيط، طريق الملك فهد", rating: "4.9", url: "https://maps.google.com/?q=Body+Masters+Khamis+Mushait" },
    { id: 3, name: "Fitness Time | وقت اللياقة", address: "خميس مشيط، طريق الحزام", rating: "4.9", url: "https://maps.google.com/?q=Fitness+Time+Khamis+Mushait" },
    { id: 4, name: "نادي يورفت النسائي", address: "خميس مشيط، حي الشفاء", rating: "4.7", url: "https://maps.google.com/?q=YourFit+Khamis+Mushait" },
    { id: 5, name: "G4Fit - جي فور فت", address: "خميس مشيط، حي الرصراص", rating: "4.6", url: "https://maps.google.com/?q=G4Fit+Khamis+Mushait" },
    { id: 6, name: "تمرين بلس الرياضي", address: "خميس مشيط، طريق الملك خالد", rating: "4.5", url: "https://maps.google.com/?q=Tamween+Plus+Khamis+Mushait" }
  ];

  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-100 flex flex-col font-sans" dir="rtl">
      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 py-12 space-y-8">
        <div className="text-center space-y-3">
          <h1 className="text-3xl font-extrabold text-white">الخريطة التفاعلية لنوادي خميس مشيط</h1>
          <p className="text-slate-400 text-sm max-w-xl mx-auto">
            تصفح مواقع المراكز والنوادي الرياضية الجغرافية في خميس مشيط وتوجه إليها مباشرة عبر خرائط جوجل.
          </p>
        </div>

        {/* محاكي الخريطة التفاعلية البصري مع خيارات البحث السريع */}
        <div className="bg-[#1e293b] border border-slate-700 rounded-3xl p-6 shadow-2xl grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* قائمة النوادي الجانبية */}
          <div className="lg:col-span-1 space-y-4">
            <h3 className="font-bold text-white text-base border-b border-slate-700 pb-2">النوادي القريبة المتاحة</h3>
            <div className="space-y-3 max-h-[450px] overflow-y-auto pr-1">
              {mapClubs.map((club) => (
                <div key={club.id} className="bg-slate-900/70 border border-slate-800 p-4 rounded-2xl space-y-2 hover:border-slate-600 transition">
                  <div className="flex justify-between items-start">
                    <h4 className="font-bold text-white text-sm">{club.name}</h4>
                    <span className="text-xs bg-slate-800 text-amber-400 px-2 py-0.5 rounded-lg border border-slate-700">★ {club.rating}</span>
                  </div>
                  <p className="text-xs text-slate-400">{club.address}</p>
                  <a
                    href={club.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center bg-slate-100 hover:bg-white text-slate-900 text-xs font-semibold py-2 rounded-xl transition shadow"
                  >
                    فتح الموقع على الخريطة ↗
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* معاينة الخريطة التفاعلية الحقيقية عبر تضمين خريطة خميس مشيط */}
          <div className="lg:col-span-2 bg-slate-900 rounded-2xl overflow-hidden border border-slate-700 relative min-h-[400px] flex flex-col items-center justify-center">
            <iframe
              title="Khamis Mushait Gyms Map"
              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d60505.74797039239!2d42.7291122!3d18.3032588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s gyms in Khamis Mushait!5e0!3m2!1sen!2ssa!4v1650000000000!5m2!1sen!2ssa"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "450px" }}
              allowFullScreen={true}
              loading="lazy"
              className="w-full h-full"
            ></iframe>
          </div>

        </div>

        <div className="text-center pt-4">
          <Link href="/clubs" className="text-xs bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 px-6 py-3 rounded-xl transition inline-block">
            ← العودة إلى قائمة النوادي كاملة
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}