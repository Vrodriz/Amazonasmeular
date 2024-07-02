import React from "react";

const navItems = [
  { label: "Inicio", href: "#" },
  { label: "Amazonas Meu Lar", href: "#" },
  { label: "Documentos", href: "#" },
  { label: "Acesso à informação", href: "#" },
  { label: "Soluções de Moradia", href: "#" },
  { label: "Entre em Contato", href: "#" },
];

const Menu: React.FC = () => {
  return (
    <div className="border-b-2 h-12 border-Palm-leaf bg-[#3754af]">
      <div className="h-full flex items-center justify-center mx-auto">
        <div
          className="w-full l-mmd:w-auto flex items-center justify-center"
          id="navbar-dropdown"
        >
          <ul className="flex flex-row items-center font-semiBold p-2 l-mmd:p-0 space-x-4">
            {navItems.map((item, index) => (
              <li key={index} className="hover:bg-Palm-leaf p-1">
                <a
                  className="block py-1 px-3 text-white rounded l-mmd:bg-transparent l-mmd:p-0 font-bold text-lg"
                  aria-current={item.label === "Inicio" ? "page" : undefined}
                  href={item.href}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Menu;
