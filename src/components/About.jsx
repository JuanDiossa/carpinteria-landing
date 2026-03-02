export function About() {
  return (
    <section className="bg-white py-24" id="about">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl relative z-10">
            <div
              className="w-full h-full bg-center bg-cover"
              data-alt="Carpenter working on a wooden joint in a workshop"
            ></div>
          </div>
          <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary/10 rounded-2xl -z-0"></div>
          <div className="absolute top-1/2 -left-8 bg-primary p-8 rounded-xl shadow-xl z-20 hidden md:block">
            <p className="text-white font-black text-4xl">10+</p>
            <p className="text-white/80 text-xs font-bold uppercase tracking-widest mt-1">
              Años de experiencia
            </p>
          </div>
        </div>
        <div className="space-y-8">
          <div className="space-y-4">
            <h3 className="text-primary font-bold tracking-widest text-sm uppercase">
              El Estudio
            </h3>
            <h2 className="text-4xl md:text-5xl font-black leading-tight">
              DONDE LA TRADICION CONOCE A LA{" "}
              <span className="italic font-light">INNOVACIÓN.</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              En Arte &amp; Diseño, creemos que la madera es una historia viva.
              Nuestra misión es continuar esa narrativa transformando madera
              cruda y sostenible en obras maestras funcionales para tus espacios
              vitales.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <span className="material-symbols-outlined text-primary text-3xl">
                eco
              </span>
              <h4 className="font-bold text-lg">Sostenible</h4>
              <p className="text-sm text-gray-500">
                Usamos exclusivamente maderas duras certificadas FSC de bosques
                locales sostenibles.
              </p>
            </div>
            <div className="space-y-3">
              <span className="material-symbols-outlined text-primary text-3xl">
                precision_manufacturing
              </span>
              <h4 className="font-bold text-lg">Precision Digital</h4>
              <p className="text-sm text-gray-500">
                Usamos tecnología CNC avanzada junto con acabados artesanales
                para lograr ajustes perfectos.
              </p>
            </div>
            <div className="space-y-3">
              <span className="material-symbols-outlined text-primary text-3xl">
                history_edu
              </span>
              <h4 className="font-bold text-lg">Carpintería Tradicional</h4>
              <p className="text-sm text-gray-500">
                Uniones de mortise y tenon tradicionales que garantizan que tu
                mobiliario dure generaciones.
              </p>
            </div>
            <div className="space-y-3">
              <span className="material-symbols-outlined text-primary text-3xl">
                palette
              </span>
              <h4 className="font-bold text-lg">Acabados Artísticos</h4>
              <p className="text-sm text-gray-500">
                Acabados a mano con aceites naturales y ceras para realzar la
                belleza de la madera.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
