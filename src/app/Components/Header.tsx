import Link from "next/link"
import React from 'react';
import acessibilidadeSVG from './acessibilidade.svg'; 



const Header = () => {  
    return( 
        <div className={"bg-[#EEF1FA] w-full py-3 pl-[25%] contrast:bg-gray-950 max-md:pl-0"}>  
            <div className="grow">     
                <div className="flex items-center max-sm:text-xs gap-4 text-[#6C7993] justify-center font-semibold text-xs max-md:justify-evenly">   
                    <a href="https://www.amazonas.am.gov.br/acessibilidade-digital/"><img className="w-6" src="/ACESSIBILIDADE.svg" alt="image.icon" /></a> 
                    <button>    
                    <img className="w-6" src="" alt="Ícone de Acessibilidade" />
                    </button>
                    <button>    
                        <img className="w-6" src="/RESTAURAR TAMANHO DO  TEXTO.svg" alt="button.logo" />
                    </button>
                    <button>    
                        <img className="w-6" src="/DIMINUIR TEXTO.svg" alt="button.logo" />
                    </button>
                    <button>    
                        <img className="w-4 max-md:w-6" src="/ATIVAR E DESATIVAR CONTRASTE DE CORES.svg" alt="button.logo" />
                    </button>
                    <a href="/mapa">    
                        <img className="w-6" src="/MAP.svg"/>
                    </a>

                    <hr className="h-5 w-[2px] bg-black max-md:hidden" />

                    <a className="text-[#6C7993] contrast:text-white max-md:hidden" href="https://acessoainformacao.am.gov.br/index/">E-SIC</a>
                    <a className="text-[#6C7993] contrast:text-white max-md:hidden" href="https://falabr.cgu.gov.br/web/home">FALA BR</a>
                    <a className="text-[#6C7993] contrast:text-white max-md:hidden" href="https://www.transparencia.am.gov.br">PORTAL DA TRANSPARÊNCIA</a>
                    <a className="text-[#6C7993] contrast:text-white max-md:hidden" href="https://www.amazonas.am.gov.br">GOVERNO DO AMAZONAS</a>


                </div>
            </div>
        </div>

    
    )
}

export default Header