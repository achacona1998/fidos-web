import { Link as ScrollLink } from "react-scroll";
import { Logo } from "../../assets/svg/Logo";
import { menuItems } from "../../constants/navLinks";
import { useSeccion } from "../../hooks/useSeccion";

export function Navbar() {
  const currentSection = useSeccion();

  return (
    <nav className="fixed left-0 z-20 flex flex-col items-center justify-between w-16 h-full pt-2 pb-10 shadow-sm bg-secondary-light/70 Laptop:w-full Laptop:h-16 Laptop:px-10 Laptop:top-0 Laptop:flex-row Laptop:pb-0 Laptop:pt-0 Laptop:animate-fade-in-down animate-fade-in-right backdrop-blur-sm shadow-black Laptop:shadow-none">
      <Logo className="w-12 h-12 animate-fade-in-up animate-delay-400" />

      <div className="flex flex-col items-center gap-4 font-serif text-xl font-bold text-copy-light animate-fade-in-up animate-delay-400 Laptop:gap-8 Laptop:h-full Laptop:flex-row">
        {menuItems.map((item) => (
          <ScrollLink
            key={item.id}
            smooth={true}
            to={item.name}
            className={` items-center relative  h-full gap-2 rounded-md Laptop:rounded-t-lg cursor-pointer flex  group Laptop:hover:text-primary-content Laptop:py-0 Laptop:px-0 py-1 px-2  hover:bg-transparent/40 Laptop:hover:bg-transparent ${
              currentSection === item.name
                ? ` Laptop:text-primary-content bg-transparent/60 Laptop:bg-transparent scale-125 transition-all duration-500 ease-in-out `
                : ""
            }`}>
            <item.icon
              className={`w-5 h-5  Laptop:hover:text-primary-content transition-colors duration-200 ease-in-out ${
                currentSection === item.name
                  ? "Laptop:text-primary-content text-primary-dark "
                  : ""
              }`}
            />
            <span className="hidden Laptop:inline-flex">{item.name}</span>
          </ScrollLink>
        ))}
      </div>
    </nav>
  );
}
