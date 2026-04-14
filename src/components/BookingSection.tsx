import { useState } from "react";
import Icon from "@/components/ui/icon";

export default function BookingSection() {
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

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
  );
}
