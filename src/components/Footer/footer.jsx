import { Redes } from "../../constants/redes";

export function Footer() {
  return (
    <footer className="w-full pl-16 mt-10 text-center Laptop:pl-0 ">
      <div className="flex items-center justify-center gap-4 py-3 border-t text-primary-content border-copy">
        {Redes.map((item) => (
          <a
            key={item.id}
            target="_blank"
            rel="noopener"
            className="inline-block transition-all duration-300 ease-in-out hover:scale-150 hover:opacity-80"
            href={item.link}>
            <item.icono className="w-12 h-12" />
          </a>
        ))}
      </div>
      {/* <!--Copyright section--> */}
      <div className="p-4 text-center border-t border-copy">
        <p className="font-semibold text-center text-copy-light">
          &copy; {new Date().getFullYear()} All rights reserved | Designed and
          implemented by:&nbsp;{" "}
          <a
            href="https://sierraesperanzac.com/"
            target="_blank"
            rel="noopener"
            className="inline-block text-xl font-bold text-primary-content">
            Sierra-Esperanza Creations
          </a>
        </p>
      </div>
    </footer>
  );
}
