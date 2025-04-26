import { useEffect } from "react";

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full bg-[rgba(10,10,10,0.9)] z-40 flex flex-col items-center justify-center
                     transition-all duration-300 ease-in-out

                     ${
                       menuOpen
                         ? "h-screen opacity-100 pointer-events-auto"
                         : "h-0 opacity-0 pointer-events-none"
                     }
                   `}
    >
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-6 right-6 text-sky-200 text-3xl focus:outline-none cursor-pointer"
        aria-label="Close Menu"
      >
        &times;
      </button>

      <a
        href="#home"
        onClick={() => setMenuOpen(false)}
        className={`text-4xl font-bold my-4 bg-gradient-to-r from-slate-100 to-sky-200 bg-clip-text text-transparent leading-tight
                    ${
                      menuOpen
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-5"
                    }        
            `}
      >
        Início
      </a>
      <a
        href="#about"
        onClick={() => setMenuOpen(false)}
        className={`text-4xl font-bold my-4 bg-gradient-to-r from-slate-100 to-sky-200 bg-clip-text text-transparent leading-tight
            ${
              menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }        
    `}
      >
        Sobre mim
      </a>
      <a
        href="#projects"
        onClick={() => setMenuOpen(false)}
        className={`text-4xl font-bold my-4 bg-gradient-to-r from-slate-100 to-sky-200 bg-clip-text text-transparent leading-tight
            ${
              menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }        
    `}
      >
        Habilidades
      </a>
      <a
        href="#contact"
        onClick={() => setMenuOpen(false)}
        className={`text-4xl font-bold my-4 bg-gradient-to-r from-slate-100 to-sky-200 bg-clip-text text-transparent leading-tight
            ${
              menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }        
    `}
      >
        Contato
      </a>
    </div>
  );
};