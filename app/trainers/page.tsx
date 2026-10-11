"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TrainersPage() {
  const [activeGenderFilter, setActiveGenderFilter] = useState<"all" | "male" | "female">("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTrainer, setSelectedTrainer] = useState<any>(null);

  const [trainers, setTrainers] = useState([
    {
      id: 1,
      name: "الكابتن فيصل القحطاني",
      gender: "male",
      genderLabel: "رجال",
      specialty: "كمال أجسام وقوة ضخمة",
      club: "فرع السد نادي IN 2 FITNESS",
      rating: "4.9",
      reviewsCount: 38,
      price: "300 ر.س / شهرياً",
      whatsapp: "https://wa.me/966500000001",
      description: "متخصص في بناء الأجسام، تضخيم العضلات، وزيادة القوة البدنية ببرامج علمية دقيقة.",
      bookmarked: false,
      userReviews: ["مدرب ممتاز جداً ومتابع دقيق للتفاصيل.", "استفدت معه كثيراً في زيادة الكتلة العضلية."],
      newReviewText: "",
    },
    {
      id: 2,
      name: "الكابتن أمل الشهراني",
      gender: "female",
      genderLabel: "سيدات",
      specialty: "لياقة نسائية وتخفيف الوزن",
      club: "نادي يورفت النسائي",
      rating: "4.8",
      reviewsCount: 45,
      price: "280 ر.س / شهرياً",
      whatsapp: "https://wa.me/966500000002",
      description: "متخصصة في نحت القوام، تمارين المقاومة النسائية، وبرامج حرق الدهون الآمنة.",
      bookmarked: false,
      userReviews: ["أسلوبها تحفيزي جداً وبرامجها الغذائية رائعة."],
      newReviewText: "",
    },
    {
      id: 3,
      name: "الكابتن عبدالعزيز العمري",
      gender: "male",
      genderLabel: "رجال",
      specialty: "كروسفت ولياقة وظيفية",
      club: "G4Fit - جي فور فت",
      rating: "4.9",
      reviewsCount: 52,
      price: "350 ر.س / شهرياً",
      whatsapp: "https://wa.me/966500000003",
      description: "خبير في تدريبات الكروسفت، التحمل العالي، وتطوير اللياقة الوظيفية الشاملة.",
      bookmarked: false,
      userReviews: ["أفضل مدرب كروسفت، طاقته إيجابية ومرتفع الأداء."],
      newReviewText: "",
    },
    {
      id: 4,
      name: "الكابتن ريم الدوسري",
      gender: "female",
      genderLabel: "سيدات",
      specialty: "تغذية رياضية ورشاقة",
      club: "بودي ماسترز بريميوم",
      rating: "4.7",
      reviewsCount: 30,
      price: "320 ر.س / شهرياً",
      whatsapp: "https://wa.me/966500000004",
      description: "أخصائية تغذية ومدربة معتمدة، تساعدكِ على بناء نمط حياة صحي ومستدام.",
      bookmarked: false,
      userReviews: ["خططها الغذائية مريحة جداً ومتنوعة."],
      newReviewText: "",
    },
    {
      id: 5,
      name: "الكابتن تركي الشمري",
      gender: "male",
      genderLabel: "رجال",
      specialty: "إعادة التأهيل والإصابات الرياضية",
      club: "Fitness Time | وقت اللياقة",
      rating: "4.8",
      reviewsCount: 29,
      price: "400 ر.س / شهرياً",
      whatsapp: "https://wa.me/966500000005",
      description: "متخصص في تأهيل الإصابات الرياضية، تقوية المفاصل، وتصحيح القوام الحركي.",
      bookmarked: false,
      userReviews: ["فادني كثيراً في آلام الظهر وتصحيح التمارين."],
      newReviewText: "",
    },
    {
      id: 6,
      name: "الكابتن نوف العتيبي",
      gender: "female",
      genderLabel: "سيدات",
      specialty: "بناء الأجسام والحديد للسيدات",
      club: "نادي يورفت النسائي",
      rating: "4.9",
      reviewsCount: 41,
      price: "300 ر.س / شهرياً",
      whatsapp: "https://wa.me/966500000006",
      description: "تدريب حديد احترافي للنساء، التركيز على الأوراك، الأرجل، وشد الجسم.",
      bookmarked: false,
      userReviews: ["مدربة قوية وفاهمة لكل تفاصيل التمرين."],
      newReviewText: "",
    },
    {
      id: 7,
      name: "الكابتن سلطان الغامدي",
      gender: "male",
      genderLabel: "رجال",
      specialty: "اللياقة البدنية العامة",
      club: "تمرين بلس الرياضي",
      rating: "4.6",
      reviewsCount: 20,
      price: "250 ر.س / شهرياً",
      whatsapp: "https://wa.me/966500000007",
      description: "برامج لياقة متوازنة تناسب المبتدئين والمتوسطين لتحسين الصحة العامة.",
      bookmarked: false,
      userReviews: ["صبور جداً ويشرح التمارين بطريقة سهلة."],
      newReviewText: "",
    },
    {
      id: 8,
      name: "الكابتن مها البلوي",
      gender: "female",
      genderLabel: "سيدات",
      specialty: "يوغا وإطالة واسترخاء",
      club: "أكاديمية ويمارا للتدريب",
      rating: "4.8",
      reviewsCount: 34,
      price: "260 ر.س / شهرياً",
      whatsapp: "https://wa.me/966500000008",
      description: "متخصصة في جلسات اليغا، الإطالة العميقة، وتخفيف ضغوط التوتر العضلي.",
      bookmarked: false,
      userReviews: ["الحصص معها مريحة نفسياً وجسدياً."],
      newReviewText: "",
    },
    {
      id: 9,
      name: "الكابتن نايف المطيري",
      gender: "male",
      genderLabel: "رجال",
      specialty: "تخفيف الوزن وحرق الدهون",
      club: "بودي ماسترز بريميوم",
      rating: "4.7",
      reviewsCount: 39,
      price: "320 ر.س / شهرياً",
      whatsapp: "https://wa.me/966500000009",
      description: "مختص ببرامج الكارديو المكثف وخسارة الوزن الزائد خلال معدل قياسي.",
      bookmarked: false,
      userReviews: ["نزلت معه 10 كيلو بطريقة صحية."],
      newReviewText: "",
    },
    {
      id: 10,
      name: "الكابتن سارة القحطاني",
      gender: "female",
      genderLabel: "سيدات",
      specialty: "تدريب شخصي مكثف",
      club: "Fitness Time | وقت اللياقة",
      rating: "4.9",
      reviewsCount: 50,
      price: "380 ر.س / شهرياً",
      whatsapp: "https://wa.me/966500000010",
      description: "تدريب شخصي احترافي مصمم خصيصاً ليناسب أهدافك البدنية والغذائية.",
      bookmarked: false,
      userReviews: ["النتائج ظهرت معي بسرعة قياسية بفضل توجيهاتها."],
      newReviewText: "",
    },
    {
      id: 11,
      name: "الكابتن ماجد الحربي",
      gender: "male",
      genderLabel: "رجال",
      specialty: "قوة التحمل وفنون الدفاع عن النفس",
      club: "فرع السد نادي IN 2 FITNESS",
      rating: "4.6",
      reviewsCount: 25,
      price: "290 ر.س / شهرياً",
      whatsapp: "https://wa.me/966500000011",
      description: "تطوير سرعة الاستجابة، قوة التحمل، والدفاع عن النفس بأساليب تدريبية ممتعة.",
      bookmarked: false,
      userReviews: ["تدريب ممتع وحماسي جداً."],
      newReviewText: "",
    },
    {
      id: 12,
      name: "الكابتن أهود الزهراني",
      gender: "female",
      genderLabel: "سيدات",
      specialty: "تمرين السكوات وبناء الجزء السفلي",
      club: "نادي يورفت النسائي",
      rating: "4.8",
      reviewsCount: 37,
      price: "310 ر.س / شهرياً",
      whatsapp: "https://wa.me/966500000012",
      description: "خبيرة في تمارين الجزء السفلي، الأوزان الحرة، وتقوية عضلات الجذع.",
      bookmarked: false,
      userReviews: ["معلومات جبارة وتكنيك تمرين صحيح 100%."],
      newReviewText: "",
    },
    {
      id: 13,
      name: "الكابتن رائد المالكي",
      gender: "male",
      genderLabel: "رجال",
      specialty: "تنشيط وعضلات البطن",
      club: "G4Fit - جي فور فت",
      rating: "4.7",
      reviewsCount: 28,
      price: "270 ر.س / شهرياً",
      whatsapp: "https://wa.me/966500000013",
      description: "التركيز على عضلات الكور، التوازن، وتقليل نسبة الدهون في البطن.",
      bookmarked: false,
      userReviews: ["تمارين البطن عنده مبتكرة ومؤثرة."],
      newReviewText: "",
    },
    {
      id: 14,
      name: "الكابتن الهام الرشيدي",
      gender: "female",
      genderLabel: "سيدات",
      specialty: "اللياقة المرنة والتنحيف",
      club: "تمرين بلس الرياضي",
      rating: "4.7",
      reviewsCount: 22,
      price: "250 ر.س / شهرياً",
      whatsapp: "https://wa.me/966500000014",
      description: "برامج مرنة ومناسبة لربات البيوت والموظفات لتحافظي على لياقتك.",
      bookmarked: false,
      userReviews: ["جدولها مرن ويتناسب مع وقتي المزدحم."],
      newReviewText: "",
    },
    {
      id: 15,
      name: "الكابتن طارق البقمي",
      gender: "male",
      genderLabel: "رجال",
      specialty: "بناء الأجسام والضخامة العضلية",
      club: "بودي ماسترز بريميوم",
      rating: "4.9",
      reviewsCount: 60,
      price: "360 ر.س / شهرياً",
      whatsapp: "https://wa.me/966500000015",
      description: "خبرة طويلة في البطولات المحلية وتدريب الشباب على الأوزان الثقيلة.",
      bookmarked: false,
      userReviews: ["كابتن طارق مدرسة في الحديد والأخلاق."],
      newReviewText: "",
    },
    {
      id: 16,
      name: "الكابتن منال العمري",
      gender: "female",
      genderLabel: "سيدات",
      specialty: "التغذية الرياضية والصحة العامة",
      club: "أكاديمية ويمارا للتدريب",
      rating: "4.8",
      reviewsCount: 33,
      price: "290 ر.س / شهرياً",
      whatsapp: "https://wa.me/966500000016",
      description: "متابعة شاملة للدايت، حساب السعرات، وتعديل العادات الغذائية الخاطئة.",
      bookmarked: false,
      userReviews: ["ساعدتني أتخلص من ثبات الوزن بكل سهولة."],
      newReviewText: "",
    },
  ]);

  const toggleBookmark = (id: number) => {
    setTrainers(trainers.map(t => t.id === id ? { ...t, bookmarked: !t.bookmarked } : t));
  };

  const handleAddReview = (trainerId: number) => {
    setTrainers(trainers.map(t => {
      if (t.id === trainerId && t.newReviewText.trim() !== "") {
        const updatedReviews = [t.newReviewText, ...t.userReviews];
        const updated = {
          ...t,
          userReviews: updatedReviews,
          reviewsCount: t.reviewsCount + 1,
          newReviewText: ""
        };
        if (selectedTrainer && selectedTrainer.id === trainerId) {
          setSelectedTrainer(updated);
        }
        return updated;
      }
      return t;
    }));
  };

  // تصفية المدربين حسب الجنس والبحث
  const filteredTrainers = trainers.filter(trainer => {
    const matchesGender = activeGenderFilter === "all" || trainer.gender === activeGenderFilter;
    const matchesSearch =
      trainer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      trainer.specialty.toLowerCase().includes(searchQuery.toLowerCase()) ||
      trainer.club.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesGender && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#fcfbf9] text-stone-800 flex flex-col font-sans" dir="rtl">
      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 py-12">
        <div className="text-center mb-8 space-y-3">
          <h1 className="text-3xl font-extrabold text-stone-900">نخبة المدربين الرياضيين</h1>
          <p className="text-stone-600 text-sm max-w-xl mx-auto">
            تصفح قائمة المدربين والمدربات المعتمدين، تعرف على أنديتهم، تواصل معهم مباشرة، واحفظ مفضلتك.
          </p>

          {/* أزرار التصفية حسب الجنس */}
          <div className="flex justify-center items-center gap-3 pt-2">
            <button
              onClick={() => setActiveGenderFilter("all")}
              className={`px-5 py-2 rounded-xl text-xs font-semibold transition border ${
                activeGenderFilter === "all"
                  ? "bg-emerald-900 text-white border-emerald-900 shadow-sm"
                  : "bg-stone-100 text-stone-700 border-stone-200 hover:bg-stone-200"
              }`}
            >
              جميع المدربين
            </button>
            <button
              onClick={() => setActiveGenderFilter("male")}
              className={`px-5 py-2 rounded-xl text-xs font-semibold transition border ${
                activeGenderFilter === "male"
                  ? "bg-emerald-900 text-white border-emerald-900 shadow-sm"
                  : "bg-stone-100 text-stone-700 border-stone-200 hover:bg-stone-200"
              }`}
            >
              مدربين رجال
            </button>
            <button
              onClick={() => setActiveGenderFilter("female")}
              className={`px-5 py-2 rounded-xl text-xs font-semibold transition border ${
                activeGenderFilter === "female"
                  ? "bg-emerald-900 text-white border-emerald-900 shadow-sm"
                  : "bg-stone-100 text-stone-700 border-stone-200 hover:bg-stone-200"
              }`}
            >
              مدربات سيدات
            </button>
          </div>

          <div className="max-w-xl mx-auto mt-4">
            <input
              type="text"
              placeholder="ابحث باسم المدرب أو التخصص (مثل: فيصل، كمال أجسام، تغذية...)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-stone-200 px-4 py-3 rounded-2xl text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:border-emerald-900 shadow-sm transition"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredTrainers.map((trainer) => (
            <div
              key={trainer.id}
              className="bg-white border border-stone-200/80 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition flex flex-col justify-between relative group p-5"
            >
              <button
                onClick={() => toggleBookmark(trainer.id)}
                className={`absolute top-4 left-4 p-2 rounded-full border z-10 transition shadow-sm ${
                  trainer.bookmarked
                    ? "bg-emerald-900 text-white border-emerald-900"
                    : "bg-white/90 text-stone-600 border-stone-200 hover:bg-stone-100"
                }`}
                title="حفظ المدرب"
              >
                <svg className="w-4 h-4" fill={trainer.bookmarked ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                </svg>
              </button>

              <div className="w-20 h-20 mx-auto my-4 bg-stone-100 border border-stone-200 rounded-full flex items-center justify-center text-stone-600 shadow-inner group-hover:scale-105 transition duration-300">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>

              <div className="flex-1 flex flex-col justify-between space-y-3 text-center">
                <div>
                  <h3 className="text-sm font-bold text-stone-900 mb-1">{trainer.name}</h3>
                  <div className="flex justify-center items-center gap-1.5 mb-2">
                    <span className="text-[10px] bg-stone-100 text-stone-700 px-2 py-0.5 rounded-md border border-stone-200 font-semibold">
                      {trainer.genderLabel}
                    </span>
                    <span className="text-[11px] bg-emerald-50 text-emerald-900 px-2 py-0.5 rounded-lg border border-emerald-200/60 font-semibold">
                      ★ {trainer.rating} ({trainer.reviewsCount})
                    </span>
                  </div>
                  <p className="text-xs text-stone-700 font-medium mb-1">{trainer.specialty}</p>
                  <p className="text-[11px] text-stone-500 mb-2 truncate">{trainer.club}</p>
                  <p className="text-xs font-semibold text-stone-800">الاشتراك: <span className="text-emerald-900">{trainer.price}</span></p>
                </div>

                <button
                  onClick={() => setSelectedTrainer(trainer)}
                  className="w-full bg-stone-100 hover:bg-stone-200 text-stone-800 border border-stone-200 text-xs font-semibold py-2 rounded-xl transition mt-2"
                >
                  تفاصيل وحجز جلسة تدريب
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredTrainers.length === 0 && (
          <div className="text-center py-16 text-stone-500 text-sm">
            لا توجد نتائج مطابقة لبحثك والتصفية المختارة.
          </div>
        )}

        {selectedTrainer && (
          <div className="fixed inset-0 bg-stone-900/50 backdrop-blur-sm flex items-center justify-center p-4 z-50 overflow-y-auto">
            <div className="bg-white border border-stone-200 rounded-3xl max-w-lg w-full p-6 space-y-4 shadow-xl relative my-8 max-h-[90vh] overflow-y-auto">
              <div className="flex items-center justify-between border-b border-stone-100 pb-3">
                <h3 className="text-lg font-bold text-stone-900">{selectedTrainer.name}</h3>
                <button
                  onClick={() => setSelectedTrainer(null)}
                  className="text-stone-400 hover:text-stone-700 text-sm px-2 py-1"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-4 text-xs text-stone-700">
                <div className="w-24 h-24 mx-auto bg-stone-100 border border-stone-200 rounded-full flex items-center justify-center text-stone-600 shadow-sm">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>

                <div className="grid grid-cols-2 gap-2 bg-stone-50 p-3 rounded-2xl border border-stone-200">
                  <p><strong className="text-stone-900">الفئة:</strong> {selectedTrainer.genderLabel}</p>
                  <p><strong className="text-stone-900">التقييم:</strong> ★ {selectedTrainer.rating}</p>
                  <p><strong className="text-stone-900">التكلفة:</strong> {selectedTrainer.price}</p>
                  <p className="col-span-2"><strong className="text-stone-900">النادي التابع له:</strong> {selectedTrainer.club}</p>
                  <p className="col-span-2"><strong className="text-stone-900">التخصص الدقيق:</strong> {selectedTrainer.specialty}</p>
                </div>

                <p><strong className="text-stone-900 block mb-1">نبذة عن المدرب:</strong> {selectedTrainer.description}</p>

                <div className="border-t border-stone-200 pt-3 space-y-2">
                  <h4 className="font-bold text-stone-900 text-xs">تقييمات المتدربين السابقة:</h4>
                  <div className="space-y-1.5 max-h-28 overflow-y-auto pr-1">
                    {selectedTrainer.userReviews.map((rev: string, idx: number) => (
                      <div key={idx} className="bg-stone-50 p-2.5 rounded-xl text-stone-700 text-xs border border-stone-200">
                        {rev}
                      </div>
                    ))}
                  </div>

                  <div className="pt-2 text-stone-500">
                    أضف تقييمك الخاص (سيحفظ في ملفك الشخصي):
                  </div>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="اكتب تقييمك للمدرب..."
                      value={selectedTrainer.newReviewText || ""}
                      onChange={(e) => {
                        const val = e.target.value;
                        setSelectedTrainer({ ...selectedTrainer, newReviewText: val });
                      }}
                      className="flex-1 bg-stone-50 border border-stone-200 px-3 py-2 rounded-xl text-xs text-stone-900 placeholder-stone-400 focus:outline-none focus:border-emerald-900"
                    />
                    <button
                      onClick={() => handleAddReview(selectedTrainer.id)}
                      className="bg-emerald-900 hover:bg-emerald-800 text-white font-semibold px-4 py-2 rounded-xl text-xs transition"
                    >
                      حفظ التقييم
                    </button>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex gap-3">
                <a
                  href={selectedTrainer.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-emerald-900 hover:bg-emerald-800 text-white text-center text-xs font-semibold py-3 rounded-xl transition shadow-sm flex items-center justify-center gap-2"
                >
                  <span>حجز جلسة وتواصل واتساب</span>
                </a>
                <button
                  onClick={() => setSelectedTrainer(null)}
                  className="bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs px-4 py-3 rounded-xl border border-stone-200 transition"
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