import { useEffect, useState } from "react";

export function useSeccion() {
  const [currentSection, setCurrentSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const scrollPosition = window.scrollY;

      sections.forEach((section) => {
        const windowWidth = window.innerWidth;
        let calculatedSectionTop;

        if (windowWidth >= 1280) {
          calculatedSectionTop = section.offsetTop - 64;
        } else {
          calculatedSectionTop = section.offsetTop - 5;
        }

        if (
          scrollPosition >= calculatedSectionTop &&
          scrollPosition < calculatedSectionTop + section.clientHeight
        ) {
          setCurrentSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return currentSection;
}
