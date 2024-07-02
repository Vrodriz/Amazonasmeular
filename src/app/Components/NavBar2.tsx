import React from 'react';
import { FaHome } from 'react-icons/fa'; 


const Navbar2: React.FC = () => {
  return (
    <div className="border-b-2 h-12 border-Palm-leaf bg-[#3754af]">
      <div className="h-full flex items-center justify-center mx-auto">
        <div className="w-full l-mmd:w-auto flex items-center justify-center" id="navbar-dropdown">
          <ul className="flex flex-row items-center font-semiBold p-2 l-mmd:p-0 space-x-4">
            <li className="hover:bg-Palm-leaf p-1">
              <a className="block py-1 px-3 text-white rounded l-mmd:bg-transparent l-mmd:p-0 font-bold text-lg" aria-current="page" href="#">
                Inicio
              </a>
            </li>
            <li className="hover:bg-Palm-leaf p-1">
              <a className="block py-1 px-3 text-white rounded l-mmd:bg-transparent l-mmd:p-0 font-bold text-lg" href="#">
                Amazonas Meu Lar
              </a>
            </li>
            <li className="hover:bg-Palm-leaf p-1">
              <a className="block py-1 px-3 text-white rounded l-mmd:bg-transparent l-mmd:p-0 font-bold text-lg" href="#">
                Documentos
              </a>
            </li>
            <li className="hover:bg-Palm-leaf p-1">
              <a className="block py-1 px-3 text-white rounded l-mmd:bg-transparent l-mmd:p-0 font-bold text-lg" href="#">
                Acesso à informação
              </a>
            </li>
            <li className="hover:bg-Palm-leaf p-1">
              <a className="block py-1 px-3 text-white rounded l-mmd:bg-transparent l-mmd:p-0 font-bold text-lg" href="#">
                Soluções de Moradia
              </a>
            </li>
            <li className="hover:bg-Palm-leaf p-1">
              <a className="block py-1 px-3 text-white rounded l-mmd:bg-transparent l-mmd:p-0 font-bold text-lg" href="#">
                Entre em Contato
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar2;
