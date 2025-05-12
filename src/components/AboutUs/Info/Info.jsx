import hero from "../../../assets/img/AboutUs/hero.avif";
import { Logo } from "../../../assets/svg/Logo";
import { Reveal } from "../../../Animations/reveal";

export function Info() {
  return (
    <div className="flex flex-col items-center w-full gap-8 p-5 pt-5 pl-20 mx-auto max-w-7xl Laptop:pl-5 Laptop:pt-40 ">
      <Reveal delay={0.5} duration={0.5}>
        <p className="text-xl Laptop:text-3xl text-copy">
          <span className="font-bold text-primary-content">
            F.I.D.O.'s Transportation
          </span>{" "}
          is a nexus between transportation companys and riders that makes easy,
          fastest, and safer the way of looking into the best option to be
          transport. We work with different kinds of companies such as
          Non-Emergency Transport (NEMT), and simple transportation riders.
        </p>
      </Reveal>
      <div className="flex items-center w-full justify-evenly">
        <figure className="flex items-end justify-start ">
          <Logo className="max-w-[374px] w-full h-auto" />
        </figure>
        <figure className="flex items-end justify-end ">
          <img src={hero} alt="Foto del gerente general de la empresa" className="max-h-[320px]" />
        </figure>
      </div>
      <Reveal delay={0.5} duration={0.5}>
        <p className="font-serif text-xl font-bold text-center Laptop:text-3xl text-primary-content">
          &quot;... never have been so easy to find a good ride...&quot;
        </p>
      </Reveal>
    </div>
  );
}
