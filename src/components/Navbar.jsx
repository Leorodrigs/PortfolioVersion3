import { useEffect } from "react";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);
  return (
    <nav className="fixed top-0 left-0 w-full z-40 bg-stone-900 backdrop-blur-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="font-mono text-3xl font-bold bg-gradient-to-r from-slate-100 to-sky-200 bg-clip-text text-transparent ml-1">
            
            Léo Rodrigues
          </a>

          <div
            className="w-7 h-5 relative cursor-pointer font-bold z-40 md:hidden text-sky-200"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="bg-gradient-to-br from-sky-200 to-sky-400 font-semibold text-stone-900 px-1 py-1 rounded shadow-md border border-sky-600 transition-all duration-300 hover:shadow-lg hover:brightness-190 active:brightness-95"
            >
              
              Início
            </a>
            <a
              href="#about"
              className="bg-gradient-to-br from-sky-200 to-sky-400 font-semibold text-stone-900 px-1 py-1 rounded shadow-md border border-sky-600 transition-all duration-300 hover:shadow-lg hover:brightness-190 active:brightness-95"
            >
              
              Sobre mim
            </a>
            <a
              href="#skills"
              className="bg-gradient-to-br from-sky-200 to-sky-400 font-semibold text-stone-900 px-1 py-1 rounded shadow-md border border-sky-600 transition-all duration-300 hover:shadow-lg hover:brightness-190 active:brightness-95"
            >
              
              Habilidades
            </a>
            <a
              href="#contact"
              className="bg-gradient-to-br from-sky-200 to-sky-400 font-semibold text-stone-900 px-1 py-1 rounded shadow-md border border-sky-600 transition-all duration-300 hover:shadow-lg hover:brightness-190 active:brightness-95"
            >
              
              Contato
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};