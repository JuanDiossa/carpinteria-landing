export function Header() {
  return (
    <header className="bg-white text-black p-4 flex justify-between items-center">
      <img src="../assets/logo-r.webp" />
      <h1>Carpintería Arte & Diseño</h1>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
