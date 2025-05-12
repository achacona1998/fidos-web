import { Reveal } from "../../../Animations/reveal";
import { Servicio } from "./servicio";
import { Servicios } from "../../../constants/servicios";

export function NivelesServicios() {
  const arrow = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
      />
    </svg>
  );
  return (
    <div className="grid w-full grid-cols-1 gap-10 p-5 pl-20 mx-auto mt-20 Laptop:gap-40 place-items-center Laptop:grid-cols-2 max-w-7xl Laptop:pl-5">
      <div className="flex flex-col items-start justify-start gap-5 ">
        <Reveal delay={0.5} duration={0.5}>
          <h2 className="text-xl font-bold Tablet:text-3xl Laptop:text-4xl text-primary-content">
            We do have some different types of transport vehicles like:
          </h2>
        </Reveal>
        <Reveal delay={0.5} duration={0.5}>
          <ul className="pl-10 text-lg font-semibold Tablet:text-2xl Laptop:text-3xl text-copy-light">
            <li className="flex items-center gap-2">
              {arrow}
              Regular Cars
            </li>
            <li className="flex items-center gap-2">
              {arrow}
              Medical Vans
            </li>
            <li className="flex items-center gap-2">
              {arrow}
              Ambulances of NEMT
            </li>
            <li className="flex items-center gap-2">
              {arrow}
              Transport Bus
            </li>
          </ul>
        </Reveal>
        <Reveal delay={0.5} duration={0.5}>
          <h3 className="text-lg font-semibold Tablet:text-2xl Laptop:text-3xl text-primary-content">
            We also provide you several kinds of Levels of Services{" "}
            <span className="font-bold">(LOS)</span>
          </h3>
        </Reveal>
      </div>
      <div className="flex flex-col max-w-3xl mx-auto">
        <h3 className="mb-4 text-2xl font-bold text-center Tablet:text-3xl Laptop:text-4xl text-primary-content">
          Principal LOS :
        </h3>
        <div className="max-w-3xl px-2 mx-auto divide-y shadow-xl bg-primary-light rounded-xl divide-copy">
          {Servicios.map((item) => (
            <Servicio key={item.id} title={item.name}>
              <p>{item.description}</p>
            </Servicio>
          ))}
        </div>
      </div>
    </div>
  );
}
