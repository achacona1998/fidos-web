import { items } from "./const";
import { Panel } from "./Panel";
import { Reveal } from "../../../Animations/reveal";

export function Trips() {
  return (
    <div className="grid w-full grid-cols-1 gap-8 p-5 pl-20 mx-auto mt-20 mb-20 place-items-center max-w-7xl Laptop:pl-5 ">
      <div className="flex flex-col items-center justify-center mb-5">
        <Reveal delay={0.5} duration={0.5}>
          <h2 className="p-1 text-xl font-bold Tablet:text-3xl Laptop:text-4xl text-primary-content">
            Different Types Of Trips
          </h2>
        </Reveal>
        <Reveal delay={0.5} duration={0.5}>
        <h3 className="text-lg font-semibold Tablet:text-2xl Laptop:text-3xl text-primary-content">
            The different types of trips are made to focus in the specific needs
            of each rider
          </h3>
        </Reveal>
      </div>
      <div className="flex flex-col w-full max-w-6xl mx-auto overflow-hidden rounded-lg shadow h-fit">
        {items.map((item) => {
          return <Panel key={item.id} Item={item} />;
        })}
      </div>
    </div>
  );
}
