import React from "react";

const Header = () => {
  return (
    <div
      className={
        "bg-[#EEF1FA] w-full py-3 pl-[25%] contrast:bg-gray-950 max-md:pl-0"
      }
    >
      <div className="grow">
        <div className="flex items-center max-sm:text-xs gap-4 text-[#6C7993] justify-center font-semibold text-xs max-md:justify-evenly">
          <a href="https://www.amazonas.am.gov.br/acessibilidade-digital/">
            <img className="w-8" src="/acessibilidade2.svg" alt="image.icon" />
          </a>
          <button
            onClick={() => {
              document.body.style.zoom = "120%";
            }}
          >
            <img
              className="w-8"
              src="/AUMENTARTEXTO.svg"
              alt="Ícone de Acessibilidade"
            />
          </button>
          <button
            onClick={() => {
              document.body.style.zoom = "100%";
            }}
          >
            <img
              className="w-8"
              src="/RESTAURARTAMANHODOTEXTO.svg"
              alt="button.logo"
            />
          </button>
          <button
            onClick={() => {
              document.body.style.zoom = "80%";
            }}
          >
            <img className="w-8" src="/diminuirtexto.svg" alt="button.logo" />
          </button>
          <button>
            <img
              className="w-8"
              src="/ativaredesativarcores.svg"
              alt="button.logo"
            />
          </button>
          <a href="/mapa">
            <img className="w-8" src="/map.svg" />
          </a>

          <hr className="h-5 w-[2px] bg-black max-md:hidden" />

          <a
            className="text-[#6C7993] contrast:text-white max-md:hidden"
            href="https://acessoainformacao.am.gov.br/index/"
          >
            E-SIC
          </a>
          <a
            className="text-[#6C7993] contrast:text-white max-md:hidden"
            href="https://falabr.cgu.gov.br/web/home"
          >
            FALA BR
          </a>
          <a
            className="text-[#6C7993] contrast:text-white max-md:hidden"
            href="https://www.transparencia.am.gov.br"
          >
            PORTAL DA TRANSPARÊNCIA
          </a>
          <a
            className="text-[#6C7993] contrast:text-white max-md:hidden"
            href="https://www.amazonas.am.gov.br"
          >
            GOVERNO DO AMAZONAS
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
