import headerImage from "../assets/logo-r.webp";
import { Navbar } from "./Navbar";

export function Header() {
  return (
    <header className="bg-background-light/80 text-black p-3 flex justify-between items-center sticky top-0 z-50 shadow-md w-full border-b border-gray-200 backdrop-blur-sm">
      <div className="container max-w-9xl mx-auto flex items-center justify-between">
        <span className="flex place-items-center gap-3">
          <img
            src={headerImage}
            alt="Logo Carpintería Arte & Diseño"
            className="w-12 h-12 object-cover bg-background-light/80 rounded-full shadow-md"
          />
          <h1 className="text-2xl font-black tracking-tight text-charcoal uppercase">
            Arte & Diseño
          </h1>
        </span>
        <Navbar />
      </div>
    </header>
  );
}
