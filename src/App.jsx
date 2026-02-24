import "./App.css";
import { Hero } from "./components/Hero.jsx";
import { Contact } from "./components/Contact.jsx";
import { Header } from "./components/Header.jsx";
import { Footer } from "./components/Footer.jsx";
import { Gallery } from "./components/Gallery.jsx";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Gallery />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
