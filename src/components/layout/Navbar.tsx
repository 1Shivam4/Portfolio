import { Link } from "react-router-dom";
import { FlexDiv } from "../styles/GlobalStyles";

const navItems = [
  {
    name: "Home",
    route: "/",
  },
  {
    name: "About",
    route: "/about",
  },
  {
    name: "Services",
    route: "/services",
  },
  {
    name: "Portfolio",
    route: "/portfolio",
  },
  {
    name: "Contact",
    route: "/contact",
  },
];

function Navbar() {
  return (
    <nav className="mx-4 md:mx-24 py-5 flex justify-between align-middle sticky">
      <h2 className="font-extrabold text-3xl">Portfolio</h2>

      <FlexDiv>
        {navItems.map((el) => (
          <Link
            to={el.route}
            key={el.name}
            className="group relative mx-5 text-xl font-medium text-slate-500"
          >
            {el.name}
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-slate-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        ))}
      </FlexDiv>
    </nav>
  );
}

export default Navbar;
