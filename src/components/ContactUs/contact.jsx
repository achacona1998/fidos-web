import "../../styles/index.css";
import { Info } from "../../constants/info";
import { Form } from "./contactForm";
import { Item } from "./item";

export function Contacto() {
  return (
    <section
      id="ContactUs"
      className="flex flex-wrap w-full gap-8 p-5 pt-10 pl-20 mx-auto mb-20 max-w-7xl md:flex-nowrap Laptop:pl-5 Laptop:pt-40 justify-evenly">
      <Form />
      <div className="flex flex-col items-center justify-center w-full gap-4 max-w-80 cards">
        {Info.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
