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

export default function GallerySection() {
  const [activePhoto, setActivePhoto] = useState<string | null>(null);

  return (
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
  );
}
