import "../../styles/index.css";
import { motion } from "framer-motion";
import { Reveal } from "../../Animations/reveal";

export function Item({ item }) {
  return (
    <motion.a
      target="_blank"
      rel="noopener"
      className="w-full p-4 transition duration-500 rounded-md shadow-lg bg-primary-light card green max-w-80 selection:scale-110 "
      href={item.link}>
      <Reveal delay={`0.${item.id}`} duration={`0.${item.id}`}>
        <h4 className="text-lg font-semibold text-copy">{item.description}</h4>
        <div className="flex items-center justify-center gap-4 pt-2">
          <span>{item.logo}</span>
          <h6 className="font-semibold text-copy-light">{item.name}</h6>
        </div>
      </Reveal>
    </motion.a>
  );
}
