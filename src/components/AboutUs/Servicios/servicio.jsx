import { motion } from "framer-motion";
import { useState } from "react";
import { Arrow } from "../../../assets/svg/Arrow";

export const Servicio = ({ title, children }) => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div animate={open ? "open" : "closed"} className="">
      <button
        onClick={() => setOpen((pv) => !pv)}
        className="flex items-center justify-between w-full gap-4 py-4">
        <span
          className={`text-xl font-semibold Tablet:text-2xl Laptop:text-3xl text-left  ${
            open ? "text-primary-content" : "text-copy"
          }`}>
          {title}
        </span>
        <span
          className={` ${
            open && "rotate-180 ease-in-out duration-500 text-primary-content"
          }`}>
          <Arrow />
        </span>
      </button>
      <motion.div
        initial={false}
        animate={{
          height: open ? "fit-content" : "0px",
          marginBottom: open ? "24px" : "0px",
        }}
        className="overflow-hidden text-lg font-semibold Laptop:text-xl text-copy-light">
        {children}
      </motion.div>
    </motion.div>
  );
};
