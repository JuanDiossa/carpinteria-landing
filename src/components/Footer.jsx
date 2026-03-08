import headerImage from "../assets/logo-r.webp";

export function Footer() {
  return (
    <footer className="bg-neutral-100 text-black p-3 flex justify-between items-center sticky top-0 z-50 shadow-md w-full border-t border-gray-200 backdrop-blur-md">
      <div className="container max-w-9xl mx-auto flex flex-col items-center justify-between">
        <span className="flex place-items-center gap-3">
          <img
            src={headerImage}
            alt="Logo Carpintería Arte & Diseño"
            className="w-6 h-6 object-cover my-4"
          />
          <p className="sm:text-sm  md:text-lg my-4 text-xs font-black tracking-tight text-charcoal uppercase">
            Arte & Diseño
          </p>
        </span>
        {/* <nav className=" md:flex md:items-center my-2">
          <ul className="flex  gap-4 sm:flex-row sm:items-center sm:gap-4">
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
        </nav> */}
        <p className="sm:text-sm text-xs font-medium tracking-tight mb-3 text-gray-500 text-center">
          © 2026 Carpintería Arte & Diseño. <br />
          Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
