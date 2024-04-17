import  { useState } from "react";
import Burgerbutton from "@layout/Burgerbutton";
import Menumobile from "@layout/Menumobile";
import Menupc from "@layout/Menupc";

const Header = () => {
  const navigationLinks = [
    { to: "/", text: "Accueil" },
    { to: "/geii/but1", text: "BUT1" },
    { to: "/geii/But2", text: "BUT2" },
    { to: "/geii/But3", text: "BUT3" },
    { to: "/travail/Cyber", text: "Cyber" },
    { to: "/travail/Helico", text: "Helico" },
    { to: "/travail/Reseaux", text: "Reseaux" },
    { to: "/travail/Serveur", text: "Serveur" },
    { to: "/perso/web", text: "WEB" },
  ];
  const [menuOpen, setMenuOpen] = useState(false);
  const menu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <>
      <div className="sticky z-50  h-24 w-full items-center justify-between bg-slate-800 px-6">
        <a
          href="#/"
          className="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-5xl font-black text-transparent hover:from-blue-500 hover:via-green-500 hover:to-emerald-500"
        >
          Calendreau Axel
        </a>

        <Burgerbutton menu={menu} menuOpen={menuOpen} />

        <Menupc navigationLinks={navigationLinks} />
      </div>

      <Menumobile
        menuOpen={menuOpen}
        menu={menu}
        navigationLinks={navigationLinks}
      />
    </>
  );
};

export default Header;
