import Image from "next/image";

const Biography = () => {
  return (
    <section id="biography">
      <div className="max-lg:flex-col flex">
        <div className="relative min-h-[50vh] lg:min-h-lvh bg-black lg:w-1/2">
          <Image
            className="object-cover object-top"
            alt="Dr.ssa Alfieri Gloria Osteopata"
            src="/images/treatment-05.jpg"
            fill
            loading="lazy"
            sizes="(max-width: 768px) 33vw, (max-width: 1600px) 50vw, 100vw"
          />
        </div>
        <div className="bg-blue-950 lg:w-1/2 py-12 lg:py-24 px-8 lg:px-16 lg:justify-center lg:flex lg:flex-col">
          <h2 className="text-2xl sm:text-3xl lg:text-start tracking-wide font-bold text-gray-100 text-center">
            Biografia
          </h2>
          <hr className="flex w-20 mt-6 border border-blue-400 rounded-full max-lg:mx-auto" />
          <div className="mt-12 prose max-w-none font-light tracking-wide text-center lg:text-start text-pretty text-blue-200/80">
            <p>
              Diplomata in Osteopatia nel 2016 al Poliambulatorio Take Care di
              Milano ed iscritta al Registro degli osteopati d&apos;Italia).
            </p>
            <p>
              Ho preso parte ad un studio approfondito, in qualità di
              tirocinante pratico, sulle cure osteopatiche palliative ed il
              rapporto fra operatore e paziente all&apos;interno
              dell&apos;Hospice di Borgonovo val Tidone (PC), trattando pazienti
              affetti da malattie terminali.
            </p>

            <p>
              Ho affinato le mie competenze anatomiche e mediche, effettuando
              tirocinio osservativo all&apos;Ospedale Civile di Piacenza nei
              reparti di chirurgia generale ed ortopedica, cardiologia,
              radiologia ed in pronto soccorso ortopedico pediatrico.
            </p>

            <p>
              Per anni ho eseguito la mia professione a Cinisello Balsamo (MI)
              in uno studio privato in condivisione con una psicoterapeuta, al
              Centro Terapie Integrate di Milano in team con diversi specialisti
              tra cui ortopedici, fisioterapisti e psicoterapeuti e collaborando
              con odontoiatri presso lo studio medico dentistico Bartolacci a
              Milano.
            </p>

            <p>
              Oggi svolgo il mio lavoro in uno studio medico ad Ancona nelle
              Marche.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Biography;
