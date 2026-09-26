import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-100 flex flex-col font-sans" dir="rtl">
      <Navbar />

      <main className="flex-1 max-w-5xl mx-auto w-full px-4 py-16 space-y-16">
        
        {/* الترويسة الرئيسية */}
        <div className="text-center space-y-4">
          <div className="inline-block bg-slate-800/80 border border-slate-700 text-slate-300 text-xs px-3.5 py-1.5 rounded-full">
            ✨ منصة لياقة الرياضية
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            من نحن
          </h1>
          <p className="text-slate-300 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            الوجهة الرقمية الأولى المتكاملة في خميس مشيط لاكتشاف واختيار أفضل المراكز الرياضية ونخبة المدربين بكل سهولة وموثوقية.
          </p>
        </div>

        {/* قسم فكرة المنصة */}
        <div className="bg-[#1e293b] border border-slate-800 rounded-3xl p-8 md:p-10 shadow-xl space-y-6">
          <h2 className="text-2xl font-bold text-white border-b border-slate-800 pb-4">
            فكرة المنصة ورؤيتها
          </h2>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed">
            تأسست منصة <strong className="text-white">لياقة</strong> لتكون حلقة الوصل الذكية والمحترفة بين الباحثين عن حياة صحية نشطة وبين أهالي وزوار مدينة <strong className="text-white">خميس مشيط</strong> وبين كافة المراكز الرياضية والمدربين المعتمدين في المنطقة. نحن نؤمن بأن الوصول إلى بيئة رياضية ممتازة يجب أن يكون سلساً، شفافاً، ومنظماً في مكان واحد.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="bg-slate-900/60 p-4 rounded-2xl border border-slate-800 space-y-2">
              <h3 className="font-bold text-white text-sm">🏛️ دليل النوادي الشامل</h3>
              <p className="text-xs text-slate-400 leading-relaxed">رصد دقيق لأبرزالمنشات الرياضية في خميس مشيط مع تفاصيل الأسعار، التقييمات، والمواقع الجغرافية المباشرة.</p>
            </div>
            <div className="bg-slate-900/60 p-4 rounded-2xl border border-slate-800 space-y-2">
              <h3 className="font-bold text-white text-sm">🏋️ نخبة المدربين</h3>
              <p className="text-xs text-slate-400 leading-relaxed">ربط مباشر مع أفضل الكفاءات التدريبية (رجال ونساء) لحجز جلسات التدريب الخاصة والتواصل الفوري عبر واتساب.</p>
            </div>
          </div>
        </div>

        {/* قيمنا ومميزاتنا */}
        <div className="space-y-6">
          <h2 className="text-xl font-bold text-white text-center">ما الذي يميز منصة لياقة؟</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#1e293b]/70 border border-slate-800 p-6 rounded-2xl text-center space-y-3">
              <div className="w-10 h-10 bg-slate-800 text-amber-400 rounded-xl mx-auto flex items-center justify-center font-bold text-sm border border-slate-700">★</div>
              <h3 className="font-bold text-white text-sm">الموثوقية والشفافية</h3>
              <p className="text-xs text-slate-400 leading-relaxed">تقييمات حقيقية وأسعار واضحة لتساعدك على اتخاذ القرار الصحيح بكل ثقة.</p>
            </div>
            <div className="bg-[#1e293b]/70 border border-slate-800 p-6 rounded-2xl text-center space-y-3">
              <div className="w-10 h-10 bg-slate-800 text-white rounded-xl mx-auto flex items-center justify-center font-bold text-sm border border-slate-700">📍</div>
              <h3 className="font-bold text-white text-sm">سهولة الوصول والمواقع</h3>
              <p className="text-xs text-slate-400 leading-relaxed">خرائط تفاعلية متكاملة توصلك إلى أقرب نادي لموقعك الجغرافي في خميس مشيط فوراً.</p>
            </div>
            <div className="bg-[#1e293b]/70 border border-slate-800 p-6 rounded-2xl text-center space-y-3">
              <div className="w-10 h-10 bg-slate-800 text-white rounded-xl mx-auto flex items-center justify-center font-bold text-sm border border-slate-700">💬</div>
              <h3 className="font-bold text-white text-sm">تواصل مباشر وسريع</h3>
              <p className="text-xs text-slate-400 leading-relaxed">إمكانية حجز الجلسات وحفظ المفضلة وتفعيل التواصل السريع مع المدربين بنقرة زر واحدة.</p>
            </div>
          </div>
        </div>

        {/* أزرار الانتقال السريع */}
        <div className="text-center pt-6 space-x-4 space-x-reverse">
          <Link
            href="/clubs"
            className="inline-block bg-slate-100 hover:bg-white text-slate-900 font-semibold px-6 py-3 rounded-xl text-xs transition shadow"
          >
            استعراض النوادي
          </Link>
          <Link
            href="/trainers"
            className="inline-block bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold px-6 py-3 rounded-xl text-xs transition"
          >
            استعراض المدربين
          </Link>
        </div>

      </main>

      <Footer />
    </div>
  );
}