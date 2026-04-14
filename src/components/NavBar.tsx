import { useState } from "react";
import Icon from "@/components/ui/icon";

const NAV_ITEMS = [
  { label: "О проекте", id: "about" },
  { label: "Экспедиция", id: "expedition" },
  { label: "Галерея", id: "gallery" },
  { label: "Отзывы", id: "reviews" },
  { label: "Бронирование", id: "booking" },
];

interface NavBarProps {
  onScrollTo: (id: string) => void;
}

export default function NavBar({ onScrollTo }: NavBarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScrollTo = (id: string) => {
    onScrollTo(id);
    setMenuOpen(false);
  };

  return (
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
              onClick={() => handleScrollTo(item.id)}
              className="nav-link text-sm font-light tracking-wide text-[#5C3D2E] hover:text-[#C8A882]"
            >
              {item.label}
            </button>
          ))}
        </div>
        <button
          className="hidden md:block bg-[#5C3D2E] text-[#F5EFE4] text-sm px-5 py-2 rounded-full hover:bg-[#8B7355] transition-colors"
          onClick={() => handleScrollTo("booking")}
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
            <button key={item.id} onClick={() => handleScrollTo(item.id)} className="text-left text-[#5C3D2E] font-light">
              {item.label}
            </button>
          ))}
          <button
            className="bg-[#5C3D2E] text-[#F5EFE4] text-sm px-5 py-2 rounded-full w-full"
            onClick={() => handleScrollTo("booking")}
          >
            Забронировать
          </button>
        </div>
      )}
    </nav>
  );
}
