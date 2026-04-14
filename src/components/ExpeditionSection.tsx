import { useState } from "react";

export default function ExpeditionSection() {
  const [activeTour, setActiveTour] = useState<"2days" | "3days">("2days");

  return (
    <section id="expedition" className="py-24 px-6 bg-[#EDE4D3]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-[#C8A882] text-xs tracking-widest uppercase mb-3">Маршрут</p>
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-[#5C3D2E]">
            Экспедиция по местам силы Крыма
          </h2>
          <div className="section-divider" />
        </div>

        {/* Переключатель */}
        <div className="flex justify-center mb-12">
          <div className="bg-[#F5EFE4] p-1 rounded-full flex gap-1 shadow-sm">
            <button
              onClick={() => setActiveTour("2days")}
              className={`px-7 py-2.5 rounded-full text-sm font-medium transition-all ${activeTour === "2days" ? "bg-[#5C3D2E] text-[#F5EFE4]" : "text-[#5C3D2E] hover:bg-[#EDE4D3]"}`}
            >
              2 дня
            </button>
            <button
              onClick={() => setActiveTour("3days")}
              className={`px-7 py-2.5 rounded-full text-sm font-medium transition-all ${activeTour === "3days" ? "bg-[#5C3D2E] text-[#F5EFE4]" : "text-[#5C3D2E] hover:bg-[#EDE4D3]"}`}
            >
              3 дня
            </button>
          </div>
        </div>

        {/* 2 дня */}
        {activeTour === "2days" && (
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-[#F5EFE4] rounded-2xl overflow-hidden shadow-sm">
              <div className="h-52 overflow-hidden">
                <img src="https://cdn.poehali.dev/projects/92e1c9f0-0813-467d-a176-af7f0047fd64/bucket/f0e1ffc3-c4d9-45b2-b4f9-9ea738e437b0.jpg" alt="Белые скалы Крыма" className="w-full h-full object-cover" />
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

            <div className="bg-[#F5EFE4] rounded-2xl overflow-hidden shadow-sm">
              <div className="h-52 overflow-hidden">
                <img src="https://cdn.poehali.dev/projects/92e1c9f0-0813-467d-a176-af7f0047fd64/bucket/d5f2895b-b40f-4eaf-9d10-b4f849d3bd01.jpg" alt="Храм Солнца" className="w-full h-full object-cover" />
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
        )}

        {/* 3 дня */}
        {activeTour === "3days" && (
          <div>
            <p className="text-center text-[#8B7355] text-sm mb-8 font-light">Выезд в 20:00 накануне первого дня</p>
            <div className="grid md:grid-cols-3 gap-8">
              {/* День 1 */}
              <div className="bg-[#F5EFE4] rounded-2xl overflow-hidden shadow-sm">
                <div className="h-44 overflow-hidden">
                  <img src="https://cdn.poehali.dev/projects/92e1c9f0-0813-467d-a176-af7f0047fd64/bucket/f0e1ffc3-c4d9-45b2-b4f9-9ea738e437b0.jpg" alt="Мыс Меганом" className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-5">
                    <span className="bg-[#C8A882] text-[#2D1F14] text-xs font-medium px-3 py-1 rounded-full">День 1</span>
                  </div>
                  <p className="text-[#8B7355] text-xs font-medium mb-4 uppercase tracking-wide">Мыс Меганом — Долина Привидений</p>
                  <div className="space-y-4">
                    {[
                      { time: "6:00–7:00", text: "Прибытие на Мыс Меганом. Посещение маяка, спуск к морю" },
                      { time: "7:00–9:00", text: "Очистительный энергетический сеанс у моря" },
                      { time: "10:00", text: "Отъезд. Обеденная остановка — храм-маяк Святителя Николая Чудотворца" },
                      { time: "13:00–14:00", text: "Прибытие в Долину Привидений. Подъём в долину" },
                      { time: "14:00–19:00", text: "Энергетический сеанс на наполнение и гармонию энергий" },
                      { time: "20:00–21:00", text: "Заселение в гостиницу" },
                    ].map((item, i) => (
                      <div key={i} className="flex gap-3">
                        <div className="flex flex-col items-center">
                          <div className="timeline-dot" />
                          {i < 5 && <div className="w-px flex-1 bg-[#D9CAAF] mt-1" />}
                        </div>
                        <div className="pb-3">
                          <span className="text-[#C8A882] text-xs font-medium tracking-wide">{item.time}</span>
                          <p className="text-[#5C3D2E]/80 text-xs font-light mt-1">{item.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* День 2 */}
              <div className="bg-[#F5EFE4] rounded-2xl overflow-hidden shadow-sm">
                <div className="h-44 overflow-hidden">
                  <img src="https://cdn.poehali.dev/projects/92e1c9f0-0813-467d-a176-af7f0047fd64/bucket/d5f2895b-b40f-4eaf-9d10-b4f849d3bd01.jpg" alt="Храм Солнца" className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-5">
                    <span className="bg-[#5C3D2E] text-[#F5EFE4] text-xs font-medium px-3 py-1 rounded-full">День 2</span>
                  </div>
                  <p className="text-[#8B7355] text-xs font-medium mb-4 uppercase tracking-wide">Храм Солнца — Вершина Ильяс-Кая</p>
                  <div className="space-y-4">
                    {[
                      { time: "8:30–9:00", text: "Выезд из гостиницы" },
                      { time: "9:00–11:00", text: "Посещение Храма Солнца. Работа с энергетическими полями, чакрами и меридианами" },
                      { time: "11:00–13:00", text: "Проработка центрального канала с энергоцентрами" },
                      { time: "13:00–15:00", text: "Восхождение на Вершину Ильяс-Кая" },
                      { time: "15:00–17:00", text: "Энергетический сеанс на повышение энергетической частотности и оздоровление" },
                      { time: "Вечер", text: "Заселение в гостиницу (Севастополь или Бахчисарай)" },
                    ].map((item, i) => (
                      <div key={i} className="flex gap-3">
                        <div className="flex flex-col items-center">
                          <div className="timeline-dot" />
                          {i < 5 && <div className="w-px flex-1 bg-[#D9CAAF] mt-1" />}
                        </div>
                        <div className="pb-3">
                          <span className="text-[#C8A882] text-xs font-medium tracking-wide">{item.time}</span>
                          <p className="text-[#5C3D2E]/80 text-xs font-light mt-1">{item.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* День 3 */}
              <div className="bg-[#F5EFE4] rounded-2xl overflow-hidden shadow-sm">
                <div className="h-44 overflow-hidden">
                  <img src="https://cdn.poehali.dev/projects/92e1c9f0-0813-467d-a176-af7f0047fd64/bucket/a27d0a0d-3829-4e94-8440-40930e15db95.jpg" alt="Бахчисарай" className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-5">
                    <span className="bg-[#8B7355] text-[#F5EFE4] text-xs font-medium px-3 py-1 rounded-full">День 3</span>
                  </div>
                  <p className="text-[#8B7355] text-xs font-medium mb-4 uppercase tracking-wide">Монастырь — Долина реки Чурук-Су</p>
                  <div className="space-y-4">
                    {[
                      { time: "9:00–10:00", text: "Посещение Свято-Успенского скального монастыря" },
                      { time: "12:00", text: "Выезд в долину реки Чурук-Су" },
                      { time: "12:00–16:00", text: "Энергетическая практика в долине перед отъездом" },
                      { time: "16:00", text: "Выезд домой" },
                    ].map((item, i) => (
                      <div key={i} className="flex gap-3">
                        <div className="flex flex-col items-center">
                          <div className="timeline-dot" />
                          {i < 3 && <div className="w-px flex-1 bg-[#D9CAAF] mt-1" />}
                        </div>
                        <div className="pb-3">
                          <span className="text-[#C8A882] text-xs font-medium tracking-wide">{item.time}</span>
                          <p className="text-[#5C3D2E]/80 text-xs font-light mt-1">{item.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
