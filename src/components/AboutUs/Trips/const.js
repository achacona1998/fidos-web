export const panelVariants = {
  open: {
    width: "100%",
    height: "450px",
  },
  closed: {
    width: "100%",
    height: "0px",
  },
};
export const panelVariantsSm = {
  open: {
    width: "100%",
    height: "200px",
  },
  closed: {
    width: "100%",
    height: "0px",
  },
};
export const descriptionVariants = {
  open: {
    opacity: 1,
    y: "0%",
    transition: {
      delay: 0.125,
    },
  },
  closed: { opacity: 0, y: "100%" },
};

import { Trip } from "../../../assets/svg/Trip";
import IMG3 from "../../../assets/img/square/IMG3.avif";
import IMG6 from "../../../assets/img/square/IMG6.avif";
import IMG9 from "../../../assets/img/square/IMG9.avif";
import IMG11 from "../../../assets/img/square/IMG11.avif";

export const items = [
  {
    id: 1,
    title: "Round Trip With Wait Time",
    Icon: Trip,
    imgSrc: IMG6,
    description: "Round Trip whit waiting or the patient at the place",
  },
  {
    id: 2,
    title: "Multi Trip",
    Icon: Trip,
    imgSrc: IMG9,
    description: "Several Legs in the trip, more than 2 and consecutive",
  },
  {
    id: 3,
    title: "Regular Round Trip",
    Icon: Trip,
    imgSrc: IMG11,
    description:
      "Regular Round trip with scheduled return time /**/ Regular Round trip with the return trip as will call",
  },
  {
    id: 4,
    title: "One Way",
    Icon: Trip,
    imgSrc: IMG3,
    description: "One way discharge /**/ One way transfer",
  },
];
