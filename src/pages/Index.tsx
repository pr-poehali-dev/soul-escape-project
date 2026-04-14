import Icon from "@/components/ui/icon";
import NavBar from "@/components/NavBar";
import ExpeditionSection from "@/components/ExpeditionSection";
import GallerySection from "@/components/GallerySection";
import BookingSection from "@/components/BookingSection";

const REVIEWS = [
  {
    name: "Марина",
    text: "После этой экспедиции я будто заново родилась. Энергетика мест просто потрясающая — тело само знало, куда идти.",
    place: "Мыс Меганом",
  },
  {
    name: "Алексей",
    text: "Долина Привидений изменила что-то внутри. Сеанс на вершине — это незабываемо. Рекомендую всем, кто ищет себя.",
    place: "Долина Привидений",
  },
  {
    name: "Светлана",
    text: "Храм Солнца — место, где время останавливается. Я приехала с тяжёлым сердцем, а уехала с лёгкостью и ясностью.",
    place: "Ильяс-Кая",
  },
  {
    name: "Дмитрий",
    text: "Два дня, которые стоят месяцев в городе. Природа Крыма лечит — это не метафора, это правда.",
    place: "Вершина Ильяс-Кая",
  },
];

export default function Index() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#F5EFE4] font-golos text-[#2D1F14]">

      <NavBar onScrollTo={scrollTo} />

      {/* HERO */}
      <section className="relative min-h-screen flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://cdn.poehali.dev/projects/92e1c9f0-0813-467d-a176-af7f0047fd64/bucket/a27d0a0d-3829-4e94-8440-40930e15db95.jpg"
            alt="Крымские горы"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A0F08]/90 via-[#1A0F08]/30 to-transparent" />
          <div className="grain-overlay" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-6 pb-20 pt-32 w-full">
          <div className="max-w-2xl">
            <p className="text-[#C8A882] text-sm tracking-widest uppercase mb-4 animate-fade-up delay-1"></p>
            <h1 className="font-cormorant text-5xl md:text-7xl font-light text-white leading-tight mb-6 animate-fade-up delay-2">
              Твоя душа<br />уже просит
            </h1>
            <p className="text-[#D9C8A8] text-lg font-light leading-relaxed mb-10 animate-fade-up delay-3">
              Места силы Республики Крым.<br />
              Перезагрузка, которую ты откладывал слишком долго.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up delay-4">
              <button
                onClick={() => scrollTo("booking")}
                className="bg-[#C8A882] text-[#2D1F14] px-8 py-4 rounded-full font-medium hover:bg-[#D9BFAA] transition-colors"
              >
                Забронировать место
              </button>
              <button
                onClick={() => scrollTo("expedition")}
                className="border border-[#C8A882] text-[#C8A882] px-8 py-4 rounded-full font-light hover:bg-white/10 transition-colors"
              >
                Программа экспедиции
              </button>
            </div>
          </div>
        </div>
        <a href="#about" className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <Icon name="ChevronDown" size={28} className="text-[#C8A882]" />
        </a>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 px-6 bg-[#F5EFE4]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#C8A882] text-xs tracking-widest uppercase mb-3">О проекте</p>
            <div className="section-divider" />
          </div>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-cormorant text-4xl md:text-5xl font-light text-[#5C3D2E] leading-tight mb-6">
                Знаете, почему трудно решиться выбраться в путешествие?
              </h2>
              <p className="text-[#5C3D2E]/80 leading-relaxed mb-5 font-light">
                Голова забита мыслями, делами, проблемами, работой, семьёй и мыслями о том, что будет дальше. Твоя голова останавливает тебя, чтобы ты был в делах и заботах, не давая тебе взять передышку.
              </p>
              <p className="text-[#5C3D2E]/80 leading-relaxed mb-5 font-light">
                Но твоя душа... Твоя душа уже просит. Просит отдыха и перезагрузки, просит дыхания ветра и тёплых лучей, просит неизведанного, но желанного уже сейчас.
              </p>
              <p className="text-[#8B7355] font-medium text-lg leading-relaxed">
                Самое время помочь своей душе дать то, что она просит. Самое время бронировать места в поездку!
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="photo-card h-48">
                <img
                  src="https://cdn.poehali.dev/projects/92e1c9f0-0813-467d-a176-af7f0047fd64/bucket/7024e3df-a291-491d-8a23-5681b3f56114.jpg"
                  alt="Одинокое дерево, Крым"
                />
              </div>
              <div className="photo-card h-48 mt-6">
                <img
                  src="https://cdn.poehali.dev/projects/92e1c9f0-0813-467d-a176-af7f0047fd64/bucket/54a8209b-c171-47a9-9b6a-c3aea7699907.jpg"
                  alt="Горный путь"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <ExpeditionSection />

      <GallerySection />

      {/* REVIEWS */}
      <section id="reviews" className="py-24 px-6 bg-[#F5EFE4]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#C8A882] text-xs tracking-widest uppercase mb-3">Отзывы</p>
            <h2 className="font-cormorant text-4xl font-light text-[#5C3D2E]">Что говорят участники</h2>
            <div className="section-divider" />
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {REVIEWS.map((r, i) => (
              <div key={i} className="bg-[#EDE4D3] rounded-2xl p-7 relative">
                <div className="text-[#C8A882] font-cormorant text-6xl leading-none absolute top-4 left-6 opacity-40">"</div>
                <p className="text-[#5C3D2E]/80 font-light leading-relaxed mt-4 mb-5 relative z-10">
                  {r.text}
                </p>
                <div className="flex items-center gap-3 border-t border-[#D9CAAF] pt-4">
                  <div className="w-9 h-9 rounded-full bg-[#C8A882] flex items-center justify-center text-[#2D1F14] font-medium text-sm">
                    {r.name[0]}
                  </div>
                  <div>
                    <p className="text-[#5C3D2E] font-medium text-sm">{r.name}</p>
                    <p className="text-[#8B7355] text-xs">{r.place}</p>
                  </div>
                  <div className="ml-auto flex gap-0.5">
                    {[...Array(5)].map((_, j) => (
                      <Icon key={j} name="Star" size={12} className="text-[#C8A882] fill-[#C8A882]" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <BookingSection />

      {/* CONTACTS */}
      <section id="contacts" className="py-16 px-6 bg-[#2D1F14]">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <p className="font-cormorant text-3xl font-light text-white mb-1">Душа · Экспедиции Крым</p>
            <p className="text-[#C8A882]/70 text-sm font-light">Места силы Республики Крым</p>
          </div>
          <div className="flex flex-col gap-3 text-center md:text-right">
            <a href="tel:+79085144500" className="flex items-center gap-2 text-[#D9C8A8] hover:text-[#C8A882] transition-colors font-light">
              <Icon name="Phone" size={15} />
              <span>+7 (908) 514-45-00</span>
            </a>
            <a href="https://t.me/+79085144500" className="flex items-center gap-2 text-[#D9C8A8] hover:text-[#C8A882] transition-colors font-light">
              <Icon name="MessageCircle" size={15} />
              <span>Telegram</span>
            </a>
            <a href="https://wa.me/79085144500" className="flex items-center gap-2 text-[#D9C8A8] hover:text-[#C8A882] transition-colors font-light">
              <Icon name="MessageSquare" size={15} />
              <span>WhatsApp</span>
            </a>
            <a href="https://max.ru/+79085144500" className="flex items-center gap-2 text-[#D9C8A8] hover:text-[#C8A882] transition-colors font-light">
              <Icon name="Send" size={15} />
              <span>Max</span>
            </a>
          </div>
        </div>
        <div className="max-w-5xl mx-auto border-t border-white/10 mt-10 pt-6 text-center">
          <p className="text-[#8B7355] text-xs font-light">© 2025 Экспедиции по местам силы Крыма. Все права защищены.</p>
        </div>
      </section>

    </div>
  );
}