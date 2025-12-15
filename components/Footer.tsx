import Image from "next/image";
import SocialIcons from "./shared/SocialIcons";
import Link from "next/link";
import FooterNavigation from "./shared/navigation/FooterNavigation";

const Footer = () => {
  return (
    <footer className="overflow-hidden text-gray-400 bg-gray-900 body-font">
      <div className="container flex flex-col flex-wrap py-12 lg:py-24 mx-auto md:items-center lg:items-start lg:flex-row md:flex-nowrap">
        <div className="flex justify-center lg:w-1/3">
          <Link
            href="/"
            className="flex items-center font-medium text-white lg:flex-row md:justify-start"
          >
            <Image
              src="/logo.svg"
              width={256}
              height={256}
              alt="Alfieri Gloria Osteopata"
              className="w-16 h-16 p-2"
            />
            <span className="ml-1 text-xl text-start leading-none">
              Alfieri Gloria
              <br /> Osteopata
            </span>
          </Link>
          {/* <p className="mt-2 text-sm text-center text-gray-500 lg:text-start">Air plant banjo lyft occupy retro adaptogen indego</p> */}
        </div>
        <div className="flex flex-wrap w-full mt-8 lg:mt-0 text-center lg:pl-20 lg:text-left">
          <div className="w-full px-4 lg:w-1/3 md:w-1/3">
            <h2 className="mb-3 font-semibold text-gray-100 text-lg tracking-wide">
              Contatti
            </h2>
            <nav className="list-none tracking-wide mb-8">
              <ul className="flex flex-col gap-y-1 text-gray-400 [&>li:hover]:text-gray-200">
                <li>
                  <a href="tel:+393345832026" className="book-appointment">
                    Richiedi Appuntamento
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:alfierigloria.osteopata@gmail.com?subject=Informazioni Visita Osteopatica"
                    className="req-more-info"
                  >
                    Maggiori Informazioni
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="w-full px-4 lg:w-1/3 md:w-1/3">
            <h2 className="mb-3 font-semibold text-gray-100 text-lg tracking-wide">
              Dove Trovarmi
            </h2>
            <nav className="list-none">
              <ul className="mb-2">
                <li>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.google.com/maps/dir//Osteopata+Gloria+Alfieri+Via+Villafranca,+4+60122+Ancona+AN/@43.6172481,13.5123708,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x132d7ffc82fa969f:0x9e5ce1481b050e4b!2m2!1d13.5123708!2d43.6172481?entry=ttu"
                    className="text-gray-400 hover:text-gray-200 tracking-wide"
                  >
                    Via Villafranca, 4<br />
                    60122 - Ancona
                  </a>
                </li>
              </ul>
            </nav>
            <div className="text-gray-400 tracking-wide">
              <h3 className="font-semibold text-gray-200">Orari</h3>

              <p>
                Lunedì - Sabato
                <br />
                <span className="font-semibold">9:00 - 19:00</span>
              </p>
            </div>
          </div>
          <div className="mt-8 lg:mt-0 w-full px-4 lg:w-1/3 md:w-1/3 max-sm:mt-8">
            <h2 className="mb-3 font-semibold text-gray-100 text-lg tracking-wide">
              Menu
            </h2>
            <FooterNavigation />
          </div>
        </div>
      </div>
      <div className="bg-opacity-75 bg-zinc-950/40">
        <div className="container sm:flex sm:justify-between py-5 mx-auto max-sm:flex-col sm:items-end">
          <p className="text-sm text-center text-gray-400 sm:text-left tracking-wide">
            &copy; {new Date().getFullYear()} Alfieri Gloria Osteopata{" "}
            <br className="sm:hidden" />
            <span className="max-sm:hidden">— </span>
            Riproduzione Riservata
          </p>
          <div className="flex max-sm:justify-center max-sm:mt-4">
            <SocialIcons
              facebook="alfierigloria.osteopata"
              instagram="alfierigloria.osteopata"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
