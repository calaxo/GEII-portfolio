interface PropsBurgerButton {
  menu: () => void;
  menuOpen: boolean;
}




const Burgerbutton = ({ menu, menuOpen }:PropsBurgerButton) => {
  return (
    <>
      <section className="MOBILE-MENU z-50 flex lg:hidden">
        <div
          className={`HAMBURGER-ICON absolute right-0 top-0 space-y-2 px-8 py-8 ${menuOpen ? "hidden" : "flex-row"} `}
          onClick={menu}
        >
          <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
        </div>

        <div>
          <div
            className={`absolute right-0 top-0 cursor-pointer px-8 py-8 ${menuOpen ? "flex" : "hidden"}`}
            onClick={menu}
          >
            <svg
              className="h-8 w-8 text-red-600"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </div>
        </div>
      </section>
    </>
  );
};

export default Burgerbutton;