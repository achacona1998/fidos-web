import { AnimatePresence, motion } from "framer-motion";
import { useWindowSize } from "../../../hooks/useWindowSize";
import { descriptionVariants, panelVariants, panelVariantsSm } from "./const";
import { useContext } from "react";
import { OpenContext } from "../../../context/openContext";

export function Panel({ Item }) {
  const { open, handleOpen } = useContext(OpenContext);
  const { id, title, Icon, imgSrc, description } = Item;
  const { width } = useWindowSize();
  const isOpen = open === id;

  return (
    <>
      <button
        className="bg-primary-light hover:bg-primary transition-colors duration-300 p-3 border-r-[1px] border-b-[1px] border-copy-lighter flex flex-row-reverse  justify-end items-center gap-5 relative group text-primary-content  h-16 "
        onClick={() => handleOpen(id)}>
        <span className="block text-xl font-semibold Tablet:text-2xl">{title}</span>
        <span className="grid aspect-square place-items-center ">
          <Icon className="w-8 h-8" />
        </span>
        <span className="w-4 h-4 bg-primary-light group-hover:bg-primary transition-colors duration-300 border-r-[1px] border-b-[1px]  border-copy-lighter rotate-45 absolute bottom-0  right-[50%]  translate-y-[50%] translate-x-[50%] z-20" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key={`panel-${id}`}
            variants={width && width > 1024 ? panelVariants : panelVariantsSm}
            initial="closed"
            animate="open"
            exit="closed"
            style={{
              backgroundImage: `url(${imgSrc})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
            className="relative flex items-end w-full h-full overflow-hidden bg-black">
            <motion.div
              variants={descriptionVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="px-4 text-center py-2 text-[16px] font-semibold Laptop:text-xl text-copy bg-primary/70 backdrop-blur-sm w-full">
              <p>{description}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
