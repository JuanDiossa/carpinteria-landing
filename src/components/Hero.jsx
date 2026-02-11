export function Hero() {
  return (
    <section className="relative h-[85vh] w-full flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent z-10"></div>
        <div className="w-full h-full bg-center bg-cover bg-hero-bg"></div>
      </div>
      <div className="relative container z-20 max-w-9xl mx-auto px-6 ">
        <span className="text-sm uppercase text-white bg-primary px-3 py-1 rounded-lg font-bold tracking-wide mb-3 inline-block">
          Trabajo artesanal
        </span>
        <h2 className=" text-5xl md:text-7xl font-black text-white leading-[1.1] tracking-tight drop-shadow-lg">
          Carpintería moderna <br />a la
          <span className="text-primary italic drop-shadow-lg">
            {" "}
            medida de tus sueños
          </span>
        </h2>
        <p className=" text-xl text-gray-200 font-light max-w-xl leading-relaxed">
          La carpintería tradicional se une a la precisión moderna. Creamos
          piezas de arte funcionales que aportan la calidez de la naturaleza a
          tu hogar urbano.
        </p>
      </div>
    </section>
  );
}
