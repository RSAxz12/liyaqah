import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#fcfbf9] text-stone-800 flex flex-col font-sans" dir="rtl">
      <Navbar />

      <main className="flex-1 max-w-5xl mx-auto w-full px-4 py-16 space-y-16">
        
        {/* الترويسة الرئيسية */}
        <div className="text-center space-y-4">
          <div className="inline-block bg-emerald-50 text-emerald-900 border border-emerald-200/60 text-xs px-3.5 py-1.5 rounded-full font-semibold">
            منصة لياقة الرياضية
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-stone-900 tracking-tight">
            من نحن
          </h1>
          <p className="text-stone-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            الوجهة الرقمية الأولى المتكاملة في خميس مشيط لاكتشاف واختيار أفضل المراكز الرياضية ونخبة المدربين بكل سهولة وموثوقية.
          </p>
        </div>

        {/* قسم فكرة المنصة */}
        <div className="bg-white border border-stone-200/80 rounded-3xl p-8 md:p-10 shadow-sm space-y-6">
          <h2 className="text-2xl font-bold text-stone-900 border-b border-stone-100 pb-4">
            فكرة المنصة ورؤيتها
          </h2>
          <p className="text-stone-600 text-sm md:text-base leading-relaxed">
            تأسست منصة <strong className="text-stone-900">لياقة</strong> لتكون حلقة الوصل الذكية والمحترفة بين الباحثين عن حياة صحية نشطة وبين أهالي وزوار مدينة <strong className="text-stone-900">خميس مشيط</strong> وبين كافة المراكز الرياضية والمدربين المعتمدين في المنطقة. نحن نؤمن بأن الوصول إلى بيئة رياضية ممتازة يجب أن يكون سلساً، شفافاً، ومنظماً في مكان واحد.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="bg-stone-50 p-4 rounded-2xl border border-stone-200/80 space-y-2">
              <h3 className="font-bold text-stone-900 text-sm">دليل النوادي الشامل</h3>
              <p className="text-xs text-stone-600 leading-relaxed">رصد دقيق لأبرز المنشآت الرياضية في خميس مشيط مع تفاصيل الأسعار، التقييمات، والمواقع الجغرافية المباشرة.</p>
            </div>
            <div className="bg-stone-50 p-4 rounded-2xl border border-stone-200/80 space-y-2">
              <h3 className="font-bold text-stone-900 text-sm">نخبة المدربين</h3>
              <p className="text-xs text-stone-600 leading-relaxed">ربط مباشر مع أفضل الكفاءات التدريبية (رجال ونساء) لحجز جلسات التدريب الخاصة والتواصل الفوري عبر واتساب.</p>
            </div>
          </div>
        </div>

        {/* قيمنا ومميزاتنا */}
        <div className="space-y-6">
          <h2 className="text-xl font-bold text-stone-900 text-center">ما الذي يميز منصة لياقة؟</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white border border-stone-200/80 p-6 rounded-2xl text-center space-y-3 shadow-sm">
              <div className="w-10 h-10 bg-emerald-50 text-emerald-900 rounded-xl mx-auto flex items-center justify-center font-bold text-sm border border-emerald-200/60">★</div>
              <h3 className="font-bold text-stone-900 text-sm">الموثوقية والشفافية</h3>
              <p className="text-xs text-stone-600 leading-relaxed">تقييمات حقيقية وأسعار واضحة لتساعدك على اتخاذ القرار الصحيح بكل ثقة.</p>
            </div>
            <div className="bg-white border border-stone-200/80 p-6 rounded-2xl text-center space-y-3 shadow-sm">
              <div className="w-10 h-10 bg-emerald-50 text-emerald-900 rounded-xl mx-auto flex items-center justify-center font-bold text-sm border border-emerald-200/60">📍</div>
              <h3 className="font-bold text-stone-900 text-sm">سهولة الوصول والمواقع</h3>
              <p className="text-xs text-stone-600 leading-relaxed">خرائط تفاعلية متكاملة توصلك إلى أقرب نادي لموقعك الجغرافي في خميس مشيط فوراً.</p>
            </div>
            <div className="bg-white border border-stone-200/80 p-6 rounded-2xl text-center space-y-3 shadow-sm">
              <div className="w-10 h-10 bg-emerald-50 text-emerald-900 rounded-xl mx-auto flex items-center justify-center font-bold text-sm border border-emerald-200/60">💬</div>
              <h3 className="font-bold text-stone-900 text-sm">تواصل مباشر وسريع</h3>
              <p className="text-xs text-stone-600 leading-relaxed">إمكانية حجز الجلسات وحفظ المفضلة وتفعيل التواصل السريع مع المدربين بنقرة زر واحدة.</p>
            </div>
          </div>
        </div>

        {/* أزرار الانتقال السريع */}
        <div className="text-center pt-6 space-x-4 space-x-reverse">
          <Link
            href="/clubs"
            className="inline-block bg-emerald-900 hover:bg-emerald-800 text-white font-semibold px-6 py-3 rounded-xl text-xs transition shadow-sm"
          >
            استعراض النوادي
          </Link>
          <Link
            href="/trainers"
            className="inline-block bg-stone-100 hover:bg-stone-200 text-stone-800 border border-stone-200 font-semibold px-6 py-3 rounded-xl text-xs transition"
          >
            استعراض المدربين
          </Link>
        </div>

      </main>

      <Footer />
    </div>
  );
}