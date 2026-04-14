import { useState } from "react";
import Icon from "@/components/ui/icon";

const PHOTOS = [
  {
    url: "https://cdn.poehali.dev/projects/92e1c9f0-0813-467d-a176-af7f0047fd64/bucket/54a8209b-c171-47a9-9b6a-c3aea7699907.jpg",
    alt: "Горный путь к морю, Крым",
  },
  {
    url: "https://cdn.poehali.dev/projects/92e1c9f0-0813-467d-a176-af7f0047fd64/bucket/d5f2895b-b40f-4eaf-9d10-b4f849d3bd01.jpg",
    alt: "Каменный лабиринт, Долина Привидений",
  },
  {
    url: "https://cdn.poehali.dev/projects/92e1c9f0-0813-467d-a176-af7f0047fd64/bucket/7024e3df-a291-491d-8a23-5681b3f56114.jpg",
    alt: "Одинокое дерево над морем",
  },
  {
    url: "https://cdn.poehali.dev/projects/92e1c9f0-0813-467d-a176-af7f0047fd64/bucket/a27d0a0d-3829-4e94-8440-40930e15db95.jpg",
    alt: "Панорама Крымских гор",
  },
  {
    url: "https://cdn.poehali.dev/projects/92e1c9f0-0813-467d-a176-af7f0047fd64/bucket/f0e1ffc3-c4d9-45b2-b4f9-9ea738e437b0.jpg",
    alt: "Белые скалы над Чёрным морем",
  },
];

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

const NAV_ITEMS = [
  { label: "О проекте", id: "about" },
  { label: "Экспедиция", id: "expedition" },
  { label: "Галерея", id: "gallery" },
  { label: "Отзывы", id: "reviews" },
  { label: "Бронирование", id: "booking" },
];

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activePhoto, setActivePhoto] = useState<string | null>(null);
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#F5EFE4] font-golos text-[#2D1F14]">

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#F5EFE4]/90 backdrop-blur-sm border-b border-[#D9CAAF]">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="font-cormorant text-2xl font-semibold text-[#5C3D2E] leading-none">
            Душа<br />
            <span className="text-sm font-light tracking-widest text-[#8B7355] uppercase">Экспедиции Крым</span>
          </div>
          <div className="hidden md:flex gap-8">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="nav-link text-sm font-light tracking-wide text-[#5C3D2E] hover:text-[#C8A882]"
              >
                {item.label}
              </button>
            ))}
          </div>
          <button
            className="hidden md:block bg-[#5C3D2E] text-[#F5EFE4] text-sm px-5 py-2 rounded-full hover:bg-[#8B7355] transition-colors"
            onClick={() => scrollTo("booking")}
          >
            Забронировать
          </button>
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? "X" : "Menu"} size={22} />
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden px-6 pb-4 flex flex-col gap-4">
            {NAV_ITEMS.map((item) => (
              <button key={item.id} onClick={() => scrollTo(item.id)} className="text-left text-[#5C3D2E] font-light">
                {item.label}
              </button>
            ))}
            <button
              className="bg-[#5C3D2E] text-[#F5EFE4] text-sm px-5 py-2 rounded-full w-full"
              onClick={() => scrollTo("booking")}
            >
              Забронировать
            </button>
          </div>
        )}
      </nav>

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
            <p className="text-[#C8A882] text-sm tracking-widest uppercase mb-4 animate-fade-up delay-1">
              Двухдневная экспедиция
            </p>
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

      {/* EXPEDITION */}
      <section id="expedition" className="py-24 px-6 bg-[#EDE4D3]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#C8A882] text-xs tracking-widest uppercase mb-3">Маршрут</p>
            <h2 className="font-cormorant text-4xl md:text-5xl font-light text-[#5C3D2E]">
              Двухдневная экспедиция<br />по местам силы Крыма
            </h2>
            <div className="section-divider" />
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* День 1 */}
            <div className="bg-[#F5EFE4] rounded-2xl overflow-hidden shadow-sm">
              <div className="h-52 overflow-hidden">
                <img
                  src="https://cdn.poehali.dev/projects/92e1c9f0-0813-467d-a176-af7f0047fd64/bucket/f0e1ffc3-c4d9-45b2-b4f9-9ea738e437b0.jpg"
                  alt="Белые скалы Крыма"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-7">
                <div className="flex items-center gap-3 mb-5">
                  <span className="bg-[#C8A882] text-[#2D1F14] text-xs font-medium px-3 py-1 rounded-full">День 1</span>
                  <span className="text-[#8B7355] text-sm">Мыс Меганом — Долина Привидений</span>
                </div>
                <div className="space-y-4">
                  {[
                    { time: "6:00–7:00", text: "Прибытие на Мыс Меганом. Посещение маяка, спуск к морю" },
                    { time: "7:00–9:00", text: "Очистительный энергетический сеанс у моря" },
                    { time: "10:00", text: "Отъезд. Обеденная остановка — храм-маяк Святителя Николая Чудотворца" },
                    { time: "13:00–14:00", text: "Прибытие в Долину Привидений. Подъём в долину" },
                    { time: "14:00–19:00", text: "Энергетический сеанс на наполнение и гармонию энергий" },
                    { time: "20:00–21:00", text: "Заселение в гостиницу" },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className="timeline-dot" />
                        {i < 5 && <div className="w-px flex-1 bg-[#D9CAAF] mt-1" />}
                      </div>
                      <div className="pb-4">
                        <span className="text-[#C8A882] text-xs font-medium tracking-wide">{item.time}</span>
                        <p className="text-[#5C3D2E]/80 text-sm font-light mt-1">{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* День 2 */}
            <div className="bg-[#F5EFE4] rounded-2xl overflow-hidden shadow-sm">
              <div className="h-52 overflow-hidden">
                <img
                  src="https://cdn.poehali.dev/projects/92e1c9f0-0813-467d-a176-af7f0047fd64/bucket/d5f2895b-b40f-4eaf-9d10-b4f849d3bd01.jpg"
                  alt="Каменный лабиринт — Храм Солнца"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-7">
                <div className="flex items-center gap-3 mb-5">
                  <span className="bg-[#5C3D2E] text-[#F5EFE4] text-xs font-medium px-3 py-1 rounded-full">День 2</span>
                  <span className="text-[#8B7355] text-sm">Храм Солнца — Вершина Ильяс-Кая</span>
                </div>
                <div className="space-y-4">
                  {[
                    { time: "8:30–9:00", text: "Выезд из гостиницы" },
                    { time: "9:00–11:00", text: "Посещение Храма Солнца. Работа с энергетическими полями, чакрами и меридианами" },
                    { time: "11:00–13:00", text: "Проработка центрального канала с энергоцентрами" },
                    { time: "13:00–15:00", text: "Восхождение на Вершину Ильяс-Кая" },
                    { time: "15:00–17:00", text: "Энергетический сеанс на повышение энергетической частотности и оздоровление" },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className="timeline-dot" />
                        {i < 4 && <div className="w-px flex-1 bg-[#D9CAAF] mt-1" />}
                      </div>
                      <div className="pb-4">
                        <span className="text-[#C8A882] text-xs font-medium tracking-wide">{item.time}</span>
                        <p className="text-[#5C3D2E]/80 text-sm font-light mt-1">{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="py-24 px-6 bg-[#2D1F14]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#C8A882] text-xs tracking-widest uppercase mb-3">Галерея</p>
            <h2 className="font-cormorant text-4xl font-light text-white">Это — Крым</h2>
            <div className="section-divider" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {PHOTOS.map((photo, i) => (
              <div
                key={i}
                className={`photo-card cursor-pointer ${i === 0 ? "md:col-span-2 h-72 md:h-80" : "h-48 md:h-64"}`}
                onClick={() => setActivePhoto(photo.url)}
              >
                <img src={photo.url} alt={photo.alt} />
              </div>
            ))}
          </div>
        </div>

        {activePhoto && (
          <div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setActivePhoto(null)}
          >
            <button className="absolute top-6 right-6 text-white" onClick={() => setActivePhoto(null)}>
              <Icon name="X" size={28} />
            </button>
            <img src={activePhoto} alt="Фото" className="max-w-full max-h-[90vh] object-contain rounded-xl" />
          </div>
        )}
      </section>

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

      {/* BOOKING */}
      <section id="booking" className="py-24 px-6 bg-[#EDE4D3]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#C8A882] text-xs tracking-widest uppercase mb-3">Бронирование</p>
            <h2 className="font-cormorant text-4xl font-light text-[#5C3D2E]">
              Самое время дать душе то,<br />что она просит
            </h2>
            <div className="section-divider" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h3 className="font-cormorant text-2xl text-[#5C3D2E] mb-6">Что включено</h3>
              <div className="space-y-4">
                {[
                  "Транспорт на всё время экспедиции",
                  "Проживание в гостинице (1 ночь)",
                  "Все энергетические сеансы",
                  "Сопровождение опытного проводника",
                  "Посещение всех мест силы",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#C8A882] flex items-center justify-center flex-shrink-0">
                      <Icon name="Check" size={11} className="text-[#2D1F14]" />
                    </div>
                    <span className="text-[#5C3D2E]/80 font-light">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-5 bg-[#F5EFE4] rounded-xl border border-[#D9CAAF]">
                <p className="text-[#8B7355] text-sm mb-1">Места ограничены</p>
                <p className="font-cormorant text-3xl text-[#5C3D2E]">Малая группа</p>
                <p className="text-[#5C3D2E]/70 text-sm font-light mt-1">Индивидуальный подход к каждому участнику</p>
              </div>
            </div>

            <div className="bg-[#F5EFE4] rounded-2xl p-8 shadow-sm">
              {submitted ? (
                <div className="text-center py-8">
                  <div className="w-14 h-14 rounded-full bg-[#C8A882] flex items-center justify-center mx-auto mb-4">
                    <Icon name="Check" size={24} className="text-[#2D1F14]" />
                  </div>
                  <h3 className="font-cormorant text-2xl text-[#5C3D2E] mb-2">Заявка отправлена!</h3>
                  <p className="text-[#5C3D2E]/70 font-light">Мы свяжемся с вами в ближайшее время и расскажем все детали.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="text-[#5C3D2E] text-sm font-medium block mb-2">Ваше имя</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Как вас зовут?"
                      className="w-full bg-[#EDE4D3] border border-[#D9CAAF] rounded-xl px-4 py-3 text-[#2D1F14] placeholder-[#8B7355]/60 outline-none focus:border-[#C8A882] transition-colors font-light"
                    />
                  </div>
                  <div>
                    <label className="text-[#5C3D2E] text-sm font-medium block mb-2">Телефон</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+7 (___) ___-__-__"
                      className="w-full bg-[#EDE4D3] border border-[#D9CAAF] rounded-xl px-4 py-3 text-[#2D1F14] placeholder-[#8B7355]/60 outline-none focus:border-[#C8A882] transition-colors font-light"
                    />
                  </div>
                  <div>
                    <label className="text-[#5C3D2E] text-sm font-medium block mb-2">Сообщение (необязательно)</label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Вопросы, пожелания..."
                      rows={3}
                      className="w-full bg-[#EDE4D3] border border-[#D9CAAF] rounded-xl px-4 py-3 text-[#2D1F14] placeholder-[#8B7355]/60 outline-none focus:border-[#C8A882] transition-colors font-light resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#5C3D2E] text-[#F5EFE4] py-4 rounded-xl font-medium hover:bg-[#8B7355] transition-colors"
                  >
                    Отправить заявку
                  </button>
                  <p className="text-[#8B7355] text-xs text-center font-light">
                    Нажимая кнопку, вы соглашаетесь на обработку персональных данных
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

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