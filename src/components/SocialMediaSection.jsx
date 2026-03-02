export function SocialMediaSection() {
  return (
    <section
      className="py-24 max-w-7xl mx-auto px-6 overflow-hidden"
      id="social"
    >
      <div className="text-center mb-16 space-y-4">
        <h3 className="text-primary font-bold tracking-widest text-sm uppercase">
          Follow the Process
        </h3>
        <h2 className="text-4xl font-black">LATEST FROM INSTAGRAM</h2>
        <p className="text-gray-500">
          Peek inside our workshop and see the evolution of our latest projects.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="aspect-square rounded-xl overflow-hidden relative group">
          <div
            className="w-full h-full bg-center bg-cover group-hover:scale-110 transition-transform duration-500"
            data-alt="Close up of wood grain shavings in workshop"
          ></div>
          <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </div>
        <div className="aspect-square rounded-xl overflow-hidden relative group">
          <div
            className="w-full h-full bg-center bg-cover group-hover:scale-110 transition-transform duration-500"
            data-alt="Finished wooden coffee table in sunlit studio"
          ></div>
          <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </div>
        <div className="aspect-square rounded-xl overflow-hidden relative group">
          <div
            className="w-full h-full bg-center bg-cover group-hover:scale-110 transition-transform duration-500"
            data-alt="Carpenter measuring a large oak plank"
          ></div>
          <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </div>
        <div className="aspect-square rounded-xl overflow-hidden relative group">
          <div
            className="w-full h-full bg-center bg-cover group-hover:scale-110 transition-transform duration-500"
            data-alt="Set of custom wooden cabinet doors leaning against wall"
          ></div>
          <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </div>
      </div>
      <div className="mt-12 text-center">
        <a
          className="inline-flex items-center gap-2 font-bold text-primary hover:underline"
          href="#"
        >
          FOLLOW @VETA_AND_ARTE{" "}
          <span className="material-symbols-outlined text-sm">open_in_new</span>
        </a>
      </div>
    </section>
  );
}
