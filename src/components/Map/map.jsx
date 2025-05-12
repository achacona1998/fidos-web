import map from "../../assets/img/Map/map.avif";
import { Reveal } from "../../Animations/reveal";

export function Map() {
  return (
    <section
      id="Map"
      className="grid items-center w-full grid-cols-1 gap-8 p-5 pt-5 pl-20 mx-auto max-w-7xl sm:grid-cols-2 Laptop:pl-5 Laptop:pt-40 ">
      <div className="flex flex-col items-start justify-start gap-8 ">
        <Reveal delay={0.5} duration={0.5}>
          <h2 className="py-2 text-2xl font-bold Tablet:text-4xl Laptop:text-5xl text-primary-content">
            Coverage Area
          </h2>
        </Reveal>
        <Reveal delay={0.5} duration={0.5}>
          <h3 className="mb-4 text-lg font-semibold Tablet:text-2xl Laptop:text-3xl text-primary-content">
            We do have as main coverages area all South Florida
          </h3>
        </Reveal>
        <Reveal delay={0.5} duration={0.5}>
          <h3 className="text-lg font-semibold Tablet:text-2xl Laptop:text-3xl text-primary-content">
            For a different area, go to the ContactUs section
          </h3>
        </Reveal>
      </div>
      <figure className="flex items-center justify-end">
        <img
          src={map}
          alt="Un mapa de la zona que cubre la empresa"
          className="max-w-[450px] w-full  aspect-square"
        />
      </figure>
    </section>
  );
}
