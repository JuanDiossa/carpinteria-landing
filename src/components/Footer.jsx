import headerImage from "../assets/logo-r.webp";

export function Footer() {
  return (
    <footer className="bg-white text-black p-3 flex justify-between items-center sticky top-0 z-50 shadow-md w-full border-b border-gray-200 backdrop-blur-md">
      <div className="container max-w-9xl mx-auto flex items-center justify-between">
        <span className="flex place-items-center gap-3">
          <img
            src={headerImage}
            alt="Logo Carpintería Arte & Diseño"
            className="w-6 h-6 object-cover"
          />
          <p className="sm:text-sm  md:text-lg text-xs font-black tracking-tight text-charcoal uppercase">
            Arte & Diseño
          </p>
        </span>
        <p className="sm:text-sm text-xs font-medium tracking-tight text-gray-500 text-center">
          © 2026 Carpintería Arte & Diseño. <br />
          Todos los derechos reservados.
        </p>
        <nav className=" md:flex md:items-center ml-1">
          <ul className="flex flex-col gap-[2px] sm:flex-row sm:items-center sm:gap-4">
            <li>
              <a
                className="sm:text-sm text-xs font-semibold hover:text-primary transition-colors"
                href="#services"
              >
                Servicios
              </a>
            </li>
            <li>
              <a
                className="sm:text-sm text-xs font-semibold hover:text-primary transition-colors"
                href="#gallery"
              >
                Galeria
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
