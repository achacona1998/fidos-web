import { OpenContextProvider } from "../../context/openContext";
import { Info } from "./Info/Info";
import { NivelesServicios } from "./Servicios/NivelesServicio";
import { Trips } from "./Trips/Trips";
export function AboutUs() {
  return (
    <section id="AboutUs"> 
      <Info />
      <NivelesServicios />
      <OpenContextProvider>
        <Trips />
      </OpenContextProvider>
    </section>
  );
}
