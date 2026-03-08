import { useState } from "react";
export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const shownavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className=" md:flex items-center gap-10">
      <ul className="flex items-center space-x-4">
        <li className="hidden md:block" id="mobile-nav">
          <a
            className="text-sm font-semibold hover:text-primary transition-colors"
            href="#services"
          >
            Servicios
          </a>
        </li>
        <li className="hidden md:block" id="mobile-nav">
          <a
            className="text-sm font-semibold hover:text-primary transition-colors"
            href="#gallery"
          >
            Galeria
          </a>
        </li>
        <li className="hidden md:block" id="mobile-nav">
          <button className="bg-primary text-white px-6 py-2.5 rounded-lg text-sm font-bold tracking-wide hover:bg-blue-700 transition-all shadow-lg shadow-primary/20">
            Contacto
          </button>
        </li>
      </ul>
      <button
        className="md:hidden focus:outline-none mr-8"
        onClick={shownavbar}
      >
        {isOpen ? (
          <span className="material-symbols-outlined text-3xl">close</span>
        ) : (
          <span className="material-symbols-outlined text-3xl">menu</span>
        )}
      </button>
      {isOpen && (
        <ul className="md:hidden absolute top-15 right-5 w-28 bg-background-light shadow-lg z-50 rounded-lg">
          <li className="p-4 border-b border-gray-200 text-center">
            <a
              className="text-sm font-semibold hover:text-primary transition-colors"
              href="#services"
            >
              Servicios
            </a>
          </li>
          <li className="p-4 border-b border-gray-200 text-center">
            <a
              className="text-sm font-semibold hover:text-primary transition-colors"
              href="#gallery"
            >
              Galería
            </a>
          </li>
          <li className="p-4">
            <button className="bg-primary text-white px-2 py-1.5 rounded-lg text-sm font-bold tracking-wide hover:bg-lightBrown transition-all shadow-lg shadow-primary/20 w-full">
              Contacto
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
}
