import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { Reveal } from "../../Animations/reveal";
import { ShuffleGrid } from "./ShuffleGrid";

export function HeroSection() {
  return (
    <section
      id="Home"
      className="grid items-center w-full grid-cols-1 gap-8 p-5 pt-5 pl-20 mx-auto max-w-7xl md:grid-cols-2 Laptop:pl-5 Laptop:pt-40">
      <div>
        <Reveal delay={0.5} duration={0.5}>
          <h3 className="py-3 text-4xl font-semibold md:text-6xl text-primary-content">
            Fastest Innovative Dispatch Organization
          </h3>
        </Reveal>
        <Reveal delay={0.7} duration={0.7}>
          <p className="my-4 text-base font-semibold md:text-lg text-copy-light md:my-6">
            A company that have as primary objective connect transportation
            choices and make the journal a safe experience. Always moving you
            forward.
          </p>
        </Reveal>
        <Reveal delay={0.9} duration={0.5}>
          <motion.button
            style={{
              boxShadow:
                " -2px -2px 5px #b7e2b9,5px 5px 10px rgba(0, 0, 0, 0.25)",
            }}
            className={`px-4 py-2 m-4 rounded-full flex items-center gap-2 text-copy-light transition-all hover:text-primary-content`}
            whileTap={{
              boxShadow:
                "-1px -1px 5px rgba(255, 255, 255, 0.6), 1px 1px 5px rgba(0, 0, 0, 0.3), inset -2px -2px 5px rgba(255, 255, 255, 1), inset 2px 2px 4px rgba(0, 0, 0, 0.3)",
            }}>
            <ScrollLink smooth={true} to="ContactUs">
              <span className="font-bold ">ContactUs</span>
            </ScrollLink>
          </motion.button>
        </Reveal>
      </div>
      <ShuffleGrid />
    </section>
  );
}
