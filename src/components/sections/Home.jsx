import { RevealOnScroll } from "../RevealOnScroll";
import { FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

export const Home = () => {
  return (
    <section
      id="home"
      className="w-full min-h-screen bg-gradient-to-b from-stone-900 to-gray-700 flex items-center justify-center ml-10rem relative"
    >
      <RevealOnScroll>
        <div className="text-left z-10 px-4">
          <h1 className="text-center text-3xl md:text-7xl font-bold bg-gradient-to-r from-slate-100 to-sky-200 bg-clip-text text-transparent leading-tight">
            Leonardo Rodrigues
          </h1>

          <p className="text-center text-slate-100 font-semibold text-2xl md:text-5xl mb-8">
            Desenvolvedor Full-Stack
          </p>
          <div className="flex justify-center space-x-8 mt-6">
            <a
              href="https://github.com/Leorodrigs"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-br from-sky-200 to-sky-400 text-stone-900 px-1 py-1 rounded shadow-md border border-sky-600 transition-all duration-300 hover:shadow-lg hover:brightness-190 active:brightness-95"
            >
              <FaSquareGithub size={100} />
            </a>

            <a
              href="https://www.linkedin.com/in/leonardo-rodrigues-558149248/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-br from-sky-200 to-sky-400 text-stone-900 px-1 py-1 rounded shadow-md border border-sky-600 transition-all duration-300 hover:shadow-lg hover:brightness-190 active:brightness-95"
            >
              <FaLinkedin size={100} />
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};