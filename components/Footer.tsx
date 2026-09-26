export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-slate-400 py-8 border-t border-slate-800 text-xs">
      <div className="max-w-7xl mx-auto px-4 text-center space-y-4">
        <p className="font-medium text-slate-300">منصة لياقة - جميع الحقوق محفوظة</p>
        <div className="flex flex-wrap justify-center gap-4 text-[11px] text-slate-500">
          <span>نواف نايف مسعر الشهراني</span>
          <span>فهد ناصر حسين الشهراني</span>
          <span>راشد دغش جاسي الشمراني</span>
          <span>علي حسن احمد عسيري</span>
          <span>جاسر محمد عبدالله جمعان</span>
        </div>
      </div>
    </footer>
  );
}