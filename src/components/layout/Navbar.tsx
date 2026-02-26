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
    name: "Projects",
    route: "projects",
  },
  {
    name: "Contact",
    route: "contact",
  },
];

const socialLinks = [
  { icon: "github" as const, url: "https://github.com/shivamsahni", brand: true },
  { icon: "linkedin" as const, url: "https://linkedin.com/in/shivamsahni", brand: true },
  { icon: "envelope" as const, url: "mailto:shivamsahni507@gmail.com", brand: false },
];

function Navbar() {
  const [isSidebar, setSideBar] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Update active section based on scroll position
      const sections = navItems.map((item) => item.route);
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-4" : "py-6"
      }`}
    >
      <div className="mx-4 md:mx-24 flex justify-between items-center">
        {/* Logo/Name */}
        <a href="#home" className="font-bold text-xl md:text-2xl text-primary-900 hover:text-accent-purple transition-colors">
          Shivam Sahni
        </a>

        {/* Centered Floating Navigation - Desktop */}
        <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2">
          <div
            className={`flex items-center gap-1 px-4 py-2 rounded-full transition-all duration-300 ${
              scrolled
                ? "glass shadow-soft border border-primary-200/50"
                : "bg-white/60 backdrop-blur-sm"
            }`}
          >
            {navItems.map((el) => (
              <a
                key={el.name}
                href={`#${el.route}`}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeSection === el.route
                    ? "bg-accent-purple text-white"
                    : "text-primary-600 hover:text-accent-purple hover:bg-primary-50"
                }`}
              >
                {el.name}
              </a>
            ))}
          </div>
        </div>

        {/* Social Icons - Desktop */}
        <div className="hidden md:flex items-center gap-4">
          {socialLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.url}
              target={link.url.startsWith("http") ? "_blank" : undefined}
              rel={link.url.startsWith("http") ? "noopener noreferrer" : undefined}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-primary-50 text-primary-600 hover:bg-accent-purple hover:text-white transition-all duration-300"
            >
              <FontAwesomeIcon icon={link.brand ? ["fab", link.icon] : link.icon} className="text-lg" />
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg bg-primary-50 text-primary-900 hover:bg-accent-purple hover:text-white transition-all"
          onClick={handleSidebar}
        >
          <FontAwesomeIcon icon="bars" />
        </button>

        {isSidebar && <Sidebar handleSidebar={handleSidebar} activeSection={activeSection} />}
      </div>
    </nav>
  );
}

interface NavbarProps {
  handleSidebar: () => void;
  activeSection: string;
}

const Sidebar = ({ handleSidebar, activeSection }: NavbarProps) => {
  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 animate-fade-in"
        onClick={handleSidebar}
      />
      
      {/* Sidebar */}
      <FlexCol className="fixed top-0 right-0 min-h-screen w-3/4 max-w-xs bg-white shadow-soft-lg z-50 p-6 space-y-6 animate-slide-in">
        {/* Close Button */}
        <div className="flex justify-end">
          <button
            className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary-50 text-primary-900 hover:bg-accent-purple hover:text-white transition-all"
            onClick={handleSidebar}
          >
            <FontAwesomeIcon icon="xmark" className="text-xl" />
          </button>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col space-y-2">
          {navItems.map((el) => (
            <a
              key={el.name}
              href={`#${el.route}`}
              className={`px-4 py-3 rounded-lg text-base font-medium transition-all ${
                activeSection === el.route
                  ? "bg-accent-purple text-white"
                  : "text-primary-700 hover:bg-primary-50"
              }`}
              onClick={handleSidebar}
            >
              {el.name}
            </a>
          ))}
        </div>

        {/* Social Links */}
        <div className="pt-4 border-t border-primary-100">
          <p className="text-sm font-medium text-primary-500 mb-3">Connect</p>
          <div className="flex gap-3">
            {socialLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.url}
                target={link.url.startsWith("http") ? "_blank" : undefined}
                rel={link.url.startsWith("http") ? "noopener noreferrer" : undefined}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-primary-50 text-primary-600 hover:bg-accent-purple hover:text-white transition-all"
              >
                <FontAwesomeIcon icon={link.brand ? ["fab", link.icon] : link.icon} />
              </a>
            ))}
          </div>
        </div>
      </FlexCol>
    </>
  );
};

export default Navbar;
