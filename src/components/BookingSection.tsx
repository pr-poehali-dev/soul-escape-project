import Icon from "@/components/ui/icon";

export default function BookingSection() {
  return (
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
              <p className="font-cormorant text-3xl text-[#5C3D2E]">До 8 человек</p>
              <p className="text-[#5C3D2E]/70 text-sm font-light mt-1">Индивидуальный подход к каждому участнику</p>
              <p className="text-[#5C3D2E]/70 text-sm font-light mt-2">Выезд каждый четверг из Ростова-на-Дону</p>
              <div className="mt-4 pt-4 border-t border-[#D9CAAF]">
                <p className="text-[#8B7355] text-xs uppercase tracking-widest mb-3">Ближайшие даты</p>
                <div className="flex flex-wrap gap-2">
                  {["7 мая", "14 мая", "21 мая", "28 мая", "4 июня"].map((date) => (
                    <span key={date} className="bg-[#EDE4D3] text-[#5C3D2E] text-xs font-medium px-3 py-1.5 rounded-full border border-[#D9CAAF]">
                      {date}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#F5EFE4] rounded-2xl p-8 shadow-sm flex flex-col justify-center">
            <p className="font-cormorant text-2xl text-[#5C3D2E] mb-2 font-medium">Для бронирования пишите нам</p>
            <p className="text-[#5C3D2E]/70 font-light text-sm mb-8">Ответим быстро и расскажем все детали</p>
            <div className="flex flex-col gap-4">
              <a
                href="https://wa.me/79085144500"
                className="flex items-center gap-4 bg-[#EDE4D3] hover:bg-[#D9CAAF] transition-colors rounded-xl px-5 py-4"
              >
                <div className="w-10 h-10 rounded-full bg-[#5C3D2E] flex items-center justify-center flex-shrink-0">
                  <Icon name="MessageSquare" size={18} className="text-[#F5EFE4]" />
                </div>
                <div>
                  <p className="text-[#5C3D2E] font-medium text-sm">WhatsApp +7 (908) 514-45-00</p>
                  <p className="text-[#8B7355] text-xs font-light">Написать в WhatsApp</p>
                </div>
                <Icon name="ChevronRight" size={16} className="text-[#C8A882] ml-auto" />
              </a>

              <a
                href="https://t.me/+79085144500"
                className="flex items-center gap-4 bg-[#EDE4D3] hover:bg-[#D9CAAF] transition-colors rounded-xl px-5 py-4"
              >
                <div className="w-10 h-10 rounded-full bg-[#5C3D2E] flex items-center justify-center flex-shrink-0">
                  <Icon name="MessageCircle" size={18} className="text-[#F5EFE4]" />
                </div>
                <div>
                  <p className="text-[#5C3D2E] font-medium text-sm">Telegram +7 (908) 514-45-00</p>
                  <p className="text-[#8B7355] text-xs font-light">Написать в Telegram</p>
                </div>
                <Icon name="ChevronRight" size={16} className="text-[#C8A882] ml-auto" />
              </a>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}