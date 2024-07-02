import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="bg-[#323c67] flex flex-wrap justify-around mx-auto h-32 contrast:bg-gray-950">
        <a className="flex items-center" href="#">
          <img
            className="h-24 mr-3"
            src="/AMAZONAS-MEU-LAR.png"
            alt="Amazonas Meu Lar Logo"
          />
        </a>

        <a href="https://www.amazonasmeular.am.gov.br/ajuda#chat">
          <div className="hidden md:flex mx-2 mt-5 p-2 bg-slate-100 h-20 rounded-2xl shadow-lg">
            <img className="h-24 -mt-3" src="/melbot.svg" alt="robô mel" />

            <div className="grid grid-cols-1 gap-1">
              <h2 className="text-orange-300 font-bold text-xl">Duvidas?</h2>
              <h2 className="text-green-500">Fale com a Mel</h2>
            </div>

            <div className="flex">
              <input
                className="text-sm outline-none bg-transparent border-b-2 border-green-700 h-8 my-3 p-2 ml-4"
                type="text"
                placeholder="Digite sua pergunta..."
              />
              <button className="w-5 ml-2 fill-green-700 mr-auto">
                <img src="/search.svg" alt="search" />
              </button>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
