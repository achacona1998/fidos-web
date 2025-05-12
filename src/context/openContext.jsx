import { createContext, useState } from "react";
import { items } from "../components/AboutUs/Trips/const";

export const OpenContext = createContext();

export const OpenContextProvider = ({ children }) => {
  const [open, setOpen] = useState(items[0].id);

  const handleOpen = (id) => {
    setOpen(id);
  };

  const value = {
    open,
    handleOpen,
  };

  return <OpenContext.Provider value={value}>{children}</OpenContext.Provider>;
};
