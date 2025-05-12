import { Reveal } from "../../Animations/reveal";
import { Logo } from "../../assets/svg/Logo";

export const Form = () => {
  return (
    <div className="flex flex-col justify-between w-full p-8 shadow-lg rounded-3xl bg-primary-light max-w-96">
      <Reveal delay={0.5} duration={0.5}>
        <h2 className="px-10 mb-6 text-2xl font-bold select-none Tablet:text-4xl Laptop:text-5xl text-primary-content">
          ContactUs
        </h2>
      </Reveal>
      <figure>
        <Logo className="max-w-[300px] w-full h-auto" />
      </figure>
    </div>
  );
};
