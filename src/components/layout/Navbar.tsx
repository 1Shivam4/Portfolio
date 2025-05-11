import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FlexCol } from "../styles/GlobalStyles";
import { useEffect, useState } from "react";

const navItems = [
  {
    name: "About",
    route: "home",
  },
  {
    name: "Skills",
    route: "skills",
  },
  {
    name: "Experience",
    route: "experience",
  },
  {
    name: "Contact",
    route: "contact",
  },
];

function Navbar() {
  const [isSidebar, setSideBar] = useState(false);

  const handleSidebar = () => {
    setSideBar((prev) => !prev);
  };

  useEffect(() => {
    if (isSidebar) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isSidebar]);

  return (
    <nav className="mx-4 md:mx-24 py-5 flex justify-between align-middle relative">
      <h2 className="font-extrabold text-2xl md:text-3xl">Portfolio</h2>

      <div className="hidden md:flex items-center space-x-8">
        {navItems.map((el) => (
          <a
            key={el.name}
            href={`#${el.route}`}
            className="group relative mx-5 text-xl font-medium text-slate-500"
          >
            {el.name}
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-slate-500 transition-all duration-300 group-hover:w-full"></span>
          </a>
        ))}
      </div>

      <div className="text-2xl block md:hidden" onClick={handleSidebar}>
        <FontAwesomeIcon icon="bars" />
      </div>

      {isSidebar && <Sidebar handleSidebar={handleSidebar} />}
    </nav>
  );
}

interface NavbarProps {
  handleSidebar: () => void;
}

const Sidebar = ({ handleSidebar }: NavbarProps) => {
  return (
    <FlexCol className="fixed top-0 right-0 min-h-screen w-3/4 max-w-xs bg-white shadow-lg z-50 p-6 space-y-5 transition-all duration-500 ease-in-out">
      <div className="text-2xl text-end" onClick={handleSidebar}>
        <FontAwesomeIcon icon="xmark" />
      </div>

      {navItems.map((el) => (
        <a
          key={el.name}
          href={`#${el.route}`}
          className="group relative text-lg font-semibold text-slate-700 hover:text-slate-900 transition-colors duration-200"
          onClick={handleSidebar}
        >
          {el.name}
          <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-slate-700 transition-all duration-300 group-hover:w-full"></span>
        </a>
      ))}
    </FlexCol>
  );
};

export default Navbar;
