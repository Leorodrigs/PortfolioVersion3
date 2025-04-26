import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  return (
    <section
      id="about"
      className="w-full min-h-screen bg-gradient-to-b from-gray-700 to-stone-900 flex items-center justify-center ml-10rem relative"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4 w-full">
          <h2 className="text-5xl md:text-7xl text-center font-bold bg-gradient-to-r from-slate-100 to-sky-200 bg-clip-text text-transparent leading-tight mb-10">
            Sobre mim
          </h2>

          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 rounded-xl p-8 border-sky-200 border hover:-translate-y-1 transition-all">
            <img
              src="/src/assets/profile-picture.png"
              alt="Foto de Leonardo Rodrigues"
              className="object-cover rounded-lg shadow-lg"
            />

            <div className="text-gray-300 text-left">
              <p className="mb-6">
                Prazer, me chamo Leonardo Rodrigues e nasci em Porto Alegre no ano de 1996.
              </p>
              <p className="mb-6">
                Cresci na era em que a tecnologia dava seus passos mais empolgantes, então sempre estive rodeado de novidades e esperando ansiosamente o lançamento dos próximos jogos e consoles da época. Essa paixão foi o que me levou a iniciar uma carreira na área. Atualmente estou cursando Análise e Desenvolvimento de Sistemas, onde adquiri uma boa base, porém estou sempre buscando novos conhecimentos além do que a faculdade me oferece.
              </p>
              <p>
                Meu objetivo é ser um engenheiro de software full-stack e construir uma carreira sólida, além de aplicações que farão parte da vida de milhares de pessoas. Desde que iniciei meus estudos, descobri que essa é a minha vocação e me dedico diariamente a me aprofundar cada vez mais, com a visão de como a tecnologia já é o futuro das pessoas e o poder que ela tem de transformar o mundo.
              </p>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
