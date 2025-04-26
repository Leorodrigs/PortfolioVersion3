import { RevealOnScroll } from "../RevealOnScroll";
import { FaCss3Alt, FaHtml5, FaAngular, FaReact, FaVuejs, FaNodeJs, FaJava, FaPython   } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5"
import { SiTypescript } from "react-icons/si";
import { AiOutlineDotNet } from "react-icons/ai";
import { FaGolang } from "react-icons/fa6";
import { DiDjango } from "react-icons/di";




export const Skills = () => {
  return (
    <section
      id="skills"
      className="w-full min-h-screen bg-gradient-to-b from-stone-900 to-gray-700 flex items-center justify-center ml-10rem relative"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4 w-full">
          <h2 className="text-5xl md:text-7xl text-center font-bold bg-gradient-to-r from-slate-100 to-sky-200 bg-clip-text text-transparent leading-tight mt-10 mb-10">
            Habilidades
          </h2>

          <div className="flex flex-wrap justify-center gap-8 rounded-xl p-8">
            
            
            <div className="bg-gradient-to-br from-sky-200 to-sky-400 text-stone-900 px-1 py-1 rounded shadow-md border border-sky-600 transition-all duration-300 hover:shadow-lg hover:brightness-190 active:brightness-95">
             <FaCss3Alt size={100}/> 
            </div>
            <div className="bg-gradient-to-br from-sky-200 to-sky-400 text-stone-900 px-1 py-1 rounded shadow-md border border-sky-600 transition-all duration-300 hover:shadow-lg hover:brightness-190 active:brightness-95">
             <FaHtml5 size={100}/> 
            </div>
            <div className="bg-gradient-to-br from-sky-200 to-sky-400 text-stone-900 px-1 py-1 rounded shadow-md border border-sky-600 transition-all duration-300 hover:shadow-lg hover:brightness-190 active:brightness-95">
             <IoLogoJavascript size={100}/> 
            </div>
            <div className="bg-gradient-to-br from-sky-200 to-sky-400 text-stone-900 px-1 py-1 rounded shadow-md border border-sky-600 transition-all duration-300 hover:shadow-lg hover:brightness-190 active:brightness-95">
             <SiTypescript size={100}/> 
            </div>
            <div className="bg-gradient-to-br from-sky-200 to-sky-400 text-stone-900 px-1 py-1 rounded shadow-md border border-sky-600 transition-all duration-300 hover:shadow-lg hover:brightness-190 active:brightness-95">
             <FaAngular size={100}/> 
            </div>
            <div className="bg-gradient-to-br from-sky-200 to-sky-400 text-stone-900 px-1 py-1 rounded shadow-md border border-sky-600 transition-all duration-300 hover:shadow-lg hover:brightness-190 active:brightness-95">
             <FaReact size={100}/> 
            </div>
            <div className="bg-gradient-to-br from-sky-200 to-sky-400 text-stone-900 px-1 py-1 rounded shadow-md border border-sky-600 transition-all duration-300 hover:shadow-lg hover:brightness-190 active:brightness-95">
             <FaVuejs size={100}/> 
            </div>
            <div className="bg-gradient-to-br from-sky-200 to-sky-400 text-stone-900 px-1 py-1 rounded shadow-md border border-sky-600 transition-all duration-300 hover:shadow-lg hover:brightness-190 active:brightness-95">
             <FaNodeJs size={100}/>         
            </div> 
            <div className="bg-gradient-to-br from-sky-200 to-sky-400 text-stone-900 px-1 py-1 rounded shadow-md border border-sky-600 transition-all duration-300 hover:shadow-lg hover:brightness-190 active:brightness-95">
             <img src="/csharp-icon.svg" className="w-24 h-24" />
            </div>  
            <div className="bg-gradient-to-br from-sky-200 to-sky-400 text-stone-900 px-1 py-1 rounded shadow-md border border-sky-600 transition-all duration-300 hover:shadow-lg hover:brightness-190 active:brightness-95">
             <AiOutlineDotNet size={100}/>         
            </div> 
            <div className="bg-gradient-to-br from-sky-200 to-sky-400 text-stone-900 px-1 py-1 rounded shadow-md border border-sky-600 transition-all duration-300 hover:shadow-lg hover:brightness-190 active:brightness-95">
             <FaJava size={100}/>         
            </div> 
            <div className="bg-gradient-to-br from-sky-200 to-sky-400 text-stone-900 px-1 py-1 rounded shadow-md border border-sky-600 transition-all duration-300 hover:shadow-lg hover:brightness-190 active:brightness-95">
             <FaGolang size={100}/>         
            </div> 
            <div className="bg-gradient-to-br from-sky-200 to-sky-400 text-stone-900 px-1 py-1 rounded shadow-md border border-sky-600 transition-all duration-300 hover:shadow-lg hover:brightness-190 active:brightness-95">
             <DiDjango size={100}/>         
            </div> 
            <div className="bg-gradient-to-br from-sky-200 to-sky-400 text-stone-900 px-1 py-1 rounded shadow-md border border-sky-600 transition-all duration-300 hover:shadow-lg hover:brightness-190 active:brightness-95">
             <FaPython size={100}/>         
            </div> 
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
