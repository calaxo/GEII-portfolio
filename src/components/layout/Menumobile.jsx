import React from "react";
import github from "@assets/github.png";
import linkedin from "@assets/linkedin.png";

const Menumobile = ({ menuOpen, menu, navigationLinks }) => {
    return (
<ul
  className={`sticky w-full  space-y-2 bg-slate-600 px-8 py-2 lg:hidden ${menuOpen ? "flex-col" : "hidden"} `}
>
  <a
    href="https://github.com/calaxo/geii-portfolio"
    className=" mx-auto block h-8 w-8 text-white hover:text-blue-500"
    onClick={menu}
  >
    <img src={github} alt="github" className="h-8 w-8" />
  </a>

  <a
    href="https://www.linkedin.com/in/calendreau-axel"
    className=" mx-auto block h-8 w-8 text-white hover:text-blue-500"
    onClick={menu}
  >
    <img
      src={linkedin}
      alt="linkedin"
      className="h-8 w-8 rounded-full bg-white"
    />
  </a>

  {navigationLinks.map((link) => (
    <a
      key={link.to}
      href={link.to}
      className=" mx-auto block  w-32 border border-blue-600 bg-clip-text text-center font-black text-white hover:animate-text  hover:bg-gradient-to-r hover:from-blue-500 hover:via-green-500 hover:to-emerald-500 hover:font-black hover:text-transparent"
      onClick={menu}
    >
      {link.text}
    </a>
  ))}
</ul>

)
};

export default Menumobile;