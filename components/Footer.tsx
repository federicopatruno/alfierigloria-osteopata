import { gdprMenuItems, menuItems } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import SocialIcons from "./shared/SocialIcons";
const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="overflow-hidden text-gray-400 bg-gray-900 body-font">
      <div className="container flex flex-col flex-wrap px-5 py-24 mx-auto md:items-center lg:items-start lg:flex-row md:flex-nowrap">
        <div className="flex-shrink-0 w-64 mx-auto text-center md:mx-0 sm:text-left md:flex-row">
          <a className="flex flex-col items-center justify-center font-medium text-white lg:flex-row title-font md:justify-start">
            <Image
              src="/logo.svg"
              width={256}
              height={256}
              alt="Alfieri Gloria Osteopata"
              className="w-16 h-16 p-2"
            />
            <span className="ml-3 text-xl text-center lg:text-start">
              Alfieri Gloria Osteopata
            </span>
          </a>
          {/* <p className="mt-2 text-sm text-center text-gray-500 lg:text-start">Air plant banjo lyft occupy retro adaptogen indego</p> */}
        </div>
        <div className="flex flex-wrap flex-grow w-full mt-10 -mb-10 text-center lg:pl-20 lg:mt-0 lg:text-left">
          <div className="w-full px-4 lg:w-1/3 md:w-1/3">
            <h2 className="mb-3 text-sm font-medium tracking-widest text-white title-font">
              CONTATTI
            </h2>
            <nav className="mb-10 list-none">
              <li className="mb-1">
                <a
                  href="tel:+393345832026"
                  className="text-gray-400 book-appointment hover:text-white"
                >
                  Richiedi Appuntamento
                </a>
              </li>
              <li>
                <a
                  href="mailto:alfierigloria.osteopata@gmail.com?subject=Informazioni Visita Osteopatica"
                  className="text-gray-400 req-more-info hover:text-white"
                >
                  Maggiori Informazioni
                </a>
              </li>
            </nav>
          </div>
          <div className="w-full px-4 lg:w-1/3 md:w-1/3">
            <h2 className="mb-3 text-sm font-medium tracking-widest text-white title-font">
              DOVE SONO
            </h2>
            <nav className="mb-10 list-none">
              <li className="mb-2">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.google.com/maps/dir//Osteopata+Gloria+Alfieri+Via+Villafranca,+4+60122+Ancona+AN/@43.6172481,13.5123708,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x132d7ffc82fa969f:0x9e5ce1481b050e4b!2m2!1d13.5123708!2d43.6172481?entry=ttu"
                  className="text-gray-400 hover:text-white"
                >
                  Via Villafranca 4<br />
                  60122 - Ancona
                </a>
              </li>
              <li>
                <p className="font-medium text-gray-300 hover:text-white">
                  Orari
                </p>
              </li>
              <li>
                <a className="text-gray-400 hover:text-white">
                  Lun - Sab: 9 - 19
                </a>
              </li>
            </nav>
          </div>
          <div className="w-full px-4 lg:w-1/3 md:w-1/3">
            <h2 className="mb-3 text-sm font-medium tracking-widest text-white title-font">
              MAPPA DEL SITO
            </h2>
            <nav className="mb-10 list-none">
              {menuItems.map(({ id, title, href }) => (
                <li key={id} className="mb-1">
                  <Link
                    className="text-gray-400 hover:text-white"
                    href={`/#${href}`}
                  >
                    {title}
                  </Link>
                </li>
              ))}
              {gdprMenuItems.map(({ id, title, href }) => (
                <li key={id} className="mb-1">
                  <a
                    className="text-gray-400 hover:text-white"
                    href={href}
                    target="_blank"
                  >
                    {title}
                  </a>
                </li>
              ))}
              <li>
                <button
                  type="button"
                  data-cc="show-preferencesModal"
                  className="text-gray-400 hover:text-white"
                >
                  Gestisci Preferenze Consensi
                </button>
              </li>
            </nav>
          </div>
        </div>
      </div>
      <div className="bg-opacity-75 bg-zinc-950/40">
        <div className="container flex justify-between py-5 mx-auto max-sm:flex-col">
          <p className="text-sm text-center text-gray-400 sm:text-left">
            &copy; {currentYear} Alfieri Gloria Osteopata — Riproduzione
            Riservata
          </p>

          <SocialIcons
            facebook="alfierigloria.osteopata"
            instagram="alfierigloria.osteopata"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
