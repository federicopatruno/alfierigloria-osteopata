import Image from "next/image";
import CTAButton from "../shared/ui/CTAButton";
import SocialIcons from "../shared/SocialIcons";

const About = () => {
  return (
    <section id="about">
      <div className="flex max-lg:flex-col">
        <div className="relative lg:w-1/2 lg:min-h-lvh min-h-[75vh] bg-black">
          <Image
            className="object-cover object-top"
            alt="Dr.ssa Alfieri Gloria Osteopata"
            src="/images/alfieri-gloria-osteopata.jpg"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1600px) 50vw, 33vw"
          />
        </div>
        <div className="bg-blue-950 flex flex-col lg:w-1/2 lg:py-24 lg:px-16 py-12 px-8 lg:justify-center lg:flex lg:flex-col">
          <h2 className="text-blue-400 font-light text-lg lg:text-xl tracking-wider text-center lg:text-start mb-2">
            Osteopata
          </h2>
          <h1 className="text-4xl lg:text-6xl text-gray-200 text-center lg:text-start font-bold">
            Dr.ssa Gloria Alfieri
          </h1>

          <div className="mt-8 prose max-w-none font-light tracking-wide text-center lg:text-start text-pretty text-blue-200/80">
            <p>
              Ho intrapreso il mio percorso di studio dell&apos;osteopatia nel
              2011, presso il poliambulatorio Take Care di Milano.
            </p>

            <p>
              Durante i cinque anni di corso, ho potuto specializzarmi nella
              medicina osteopatica, in qualità di tirocinante, dapprima
              osservatore ed in seguito operativo in vari ambulatori osteopatici
              privati a Milano.
            </p>

            <p>
              Nel 2016 ho ottenuto il diploma in osteopatia in seguito al
              superamento dell&apos;esame d&apos;ammissione al R.O.I. (Registro
              degli osteopati d&apos;Italia).
            </p>

            <p>
              Attualmente svolgo il mio lavoro in uno studio medico ad Ancona
              nelle Marche, collaborando con fisioterapisti, ortopedici e
              psicoterapeuti.
            </p>
          </div>
          <div className="mt-8 max-lg:mx-auto lg:ml-4">
            <SocialIcons
              variant="large"
              facebook="alfierigloria.osteopata"
              instagram="alfierigloria.osteopata"
            />
          </div>
          <div className="flex mt-10 max-lg:mx-auto">
            <CTAButton />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
