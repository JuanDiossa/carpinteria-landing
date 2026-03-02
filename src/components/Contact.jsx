export function Contact() {
  return (
    <section className="bg-gray-900 text-white py-16 overflow-hidden">
      <div className="container max-w-9xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row gap-10 md:gap-20 justify-between">
          <div>
            <span className="text-sm uppercase text-white bg-primary px-3 py-1 rounded-lg font-bold tracking-wide mb-3 inline-block">
              Get in touch
            </span>
            <h2 className=" text-3xl md:text-5xl sm:text-4xl font-black text-white leading-[1.1] tracking-tight">
              Contacta con nosotros
            </h2>
            <p className=" text-xl text-gray-400 font-light max-w-xl leading-relaxed w-auto">
              Estamos aquí para ayudarte a dar vida a tus proyectos de
              carpintería. Ya sea que tengas una idea específica o necesites
              asesoramiento, no dudes en contactarnos. Nuestro equipo de
              expertos está listo para escucharte y ofrecerte soluciones
              personalizadas que se ajusten a tus necesidades y presupuesto.
            </p>
            <div className="space-y-6 mt-10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-gray-800 flex items-center justify-center border border-gray-700">
                  <span className="material-symbols-outlined text-primary">
                    mail
                  </span>
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-500 uppercase">
                    Envianos un correo
                  </p>
                  <p className="text-lg font-bold">contacto@artediseno.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-gray-800 flex items-center justify-center border border-gray-700">
                  <span className="material-symbols-outlined text-primary">
                    location_on
                  </span>
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-500 uppercase">
                    Ubicación
                  </p>
                  <p className="text-lg font-bold">Medellín - Colombia</p>
                </div>
              </div>
            </div>
          </div>
          <form
            action="#"
            className="bg-white/5 backdrop-blur-md p-8 md:p-12 rounded-2xl border border-white/10 space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label
                  className="text-xs font-bold uppercase tracking-widest text-gray-400"
                  htmlFor="name"
                >
                  Nombre completo
                </label>
                <input
                  className="w-full bg-white/5 border border-white/10 rounded-lg p-4 focus:outline-none focus:border-primary transition-colors text-white placeholder-gray-500"
                  id="name"
                  type="text"
                  placeholder="Juan Diossa"
                />
              </div>
              <div className="space-y-2">
                <label
                  className="text-xs font-bold uppercase tracking-widest text-gray-400"
                  htmlFor="email"
                >
                  Correo electrónico
                </label>
                <input
                  className="w-full bg-white/5 border border-white/10 rounded-lg p-4 focus:outline-none focus:border-primary transition-colors text-white placeholder-gray-500"
                  id="email"
                  type="email"
                  placeholder="juandiossa@example.com"
                />
              </div>
            </div>
            <div>
              <label
                className="text-xs font-bold uppercase tracking-widest text-gray-400"
                htmlFor="service"
              >
                Tipo de proyecto
              </label>
              <select
                className="w-full bg-white/5 border border-white/10 rounded-lg p-4 focus:outline-none focus:border-primary transition-colors text-gray-400 placeholder-gray-500"
                name="service"
                id="service"
              >
                <option className="bg-gray-800" value="custom-furniture">
                  Muebles personalizados
                </option>
                <option className="bg-gray-800" value="home-renovation">
                  Renovación de interiores
                </option>
                <option className="bg-gray-800" value="outdoor-projects">
                  Proyectos al aire libre
                </option>
              </select>
            </div>
            <div>
              <label
                className="text-xs font-bold uppercase tracking-widest text-gray-400"
                htmlFor="message"
              >
                Mensaje
              </label>
              <textarea
                className="text-gray-400 placeholder-gray-500 w-full bg-white/5 border border-white/10 rounded-lg p-4 focus:outline-none focus:border-primary transition-colors h-32 resize-none"
                id="message"
                placeholder="Escribe tu mensaje aquí..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-primary hover:bg-blue-700 text-white font-black py-4 rounded-lg tracking-widest uppercase transition-all shadow-xl shadow-primary/20"
            >
              Enviar mensaje
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
