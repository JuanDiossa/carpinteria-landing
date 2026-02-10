export function Hero() {
  return (
    <section className="relative h-[85vh] w-full flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent z-10"></div>
        <div className="w-full h-full bg-center bg-cover bg-hero-bg"></div>
      </div>
      <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl md:text-5xl font-bold z-10">
        Welcome to Our Website!
      </h1>
      <p className="absolute top-3/4 left-1/2 transform -translate-x-1/2 text-lg md:text-xl z-10">
        Your one-stop destination for all things awesome.
      </p>
    </section>
  );
}
