import { useState } from "react";

export function Gallery() {
  const images = [
    { src: "/gallery/baño1.webp", alt: "Baño 1", category: "Baños" },
    { src: "/gallery/baño2.webp", alt: "Baño 2", category: "Baños" },
    { src: "/gallery/baño3.webp", alt: "Baño 3", category: "Baños" },
    {
      src: "/gallery/cocina1.webp",
      alt: "Cocina 1",
      category: "Cocinas",
    },
    {
      src: "/gallery/cocina2.webp",
      alt: "Cocina 2",
      category: "Cocinas",
    },
    {
      src: "/gallery/cocina3.webp",
      alt: "Cocina 3",
      category: "Cocinas",
    },
    {
      src: "/gallery/closet1.webp",
      alt: "Closet 1",
      category: "Closets",
    },
    {
      src: "/gallery/closet2.webp",
      alt: "Closet 2",
      category: "Closets",
    },
    {
      src: "/gallery/closet3.webp",
      alt: "Closet 3",
      category: "Closets",
    },
  ];

  const categories = ["Todos", "Baños", "Cocinas", "Closets"];
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const filteredImages =
    selectedCategory === "Todos"
      ? images
      : images.filter((image) => image.category === selectedCategory);

  return (
    <section className="w-full overflow-hidden bg-background-light py-16">
      <div className="container max-w-9xl mx-auto flex items-center justify-between">
        <div>
          <span className="text-primary font-bold uppercase tracking-wider px-5">
            TRABAJOS SELECCIONADOS
          </span>
          <h2 className="text-2xl md:text-4xl sm:text-3xl font-black leading-[1.1] tracking-tight px-5">
            GALERIA DE TRABAJOS
          </h2>
        </div>
        <nav className="border border-gray-200 rounded-lg mr-5">
          <ul className="flex">
            {categories.map((category) => (
              <li
                key={category}
                className={`text-sm font-medium py-2 px-4 rounded-xl transition-all duration-300 cursor-pointer
                  ${
                    selectedCategory === category
                      ? "bg-white text-charcoal shadow-sm"
                      : "text-gray-500 hover:shadow-sm hover:text-charcoal"
                  }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </li>
            ))}
          </ul>
        </nav>
      </div>
      {/* Gallery Grid */}
      <div className="container max-w-9xl mx-auto px-6 py-10">
        <div
          className={
            selectedCategory === "Todos"
              ? "masonry-grid"
              : "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
          }
        >
          {filteredImages.map((image) => (
            <div
              key={image.src}
              className="group relative overflow-hidden rounded-xl shadow-md"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Label */}
              <div className="absolute bottom-6 left-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p className="text-sm uppercase tracking-widest text-white/80">
                  {image.alt}
                </p>
                <h3 className="text-xl font-semibold mt-1">
                  Proyecto Artesanal
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
