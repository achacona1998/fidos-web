import { motion } from "framer-motion";
import { Shuffle } from "./shuffle";
import { SquareData } from "../../constants/imagenes";

export const GenerateSquares = () => {
  return Shuffle(SquareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
      }}></motion.div>
  ));
};
