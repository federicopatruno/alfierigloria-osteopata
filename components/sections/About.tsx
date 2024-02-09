import Image from "next/image";
import { fadeIn } from "@/utils/motion";
import { MotionDiv } from "../shared/MotionDiv";
import CTAButton from "../shared/ui/CTAButton";

const About = () => {
  return (
    <section id="about" className="py-24">
      <div className="flex flex-col items-center justify-center mx-auto sm:container max-sm:w-11/12">
        <MotionDiv
          className="relative w-4/6 mx-auto mb-10 overflow-hidden bg-red-500 rounded-full aspect-square lg:w-1/4 md:w-3/6"
          variants={fadeIn("", "tween", 0, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <Image
            className="object-cover object-center"
            alt="Dr.ssa Alfieri Gloria Osteopata"
            src="/images/alfieri-gloria-osteopata.jpeg"
            fill
            sizes="(max-width: 768px) 50vw, 33vw"
            loading="lazy"
          />
        </MotionDiv>

        <MotionDiv
          className="flex flex-col w-full mb-8 text-center lg:w-2/3 gap-y-2"
          variants={fadeIn("up", "tween", 0.25, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <h2 className="overhead">
            Osteopata iscritta al ROI con sede ad Ancona nelle Marche
          </h2>
          <h1 className="title">Dr.ssa Alfieri Gloria Osteopata</h1>
          <h3 className="subtitle">
            Collaboro con Ortopedici, Fisioterapisti e Psicoterapeuti
          </h3>
        </MotionDiv>

        <MotionDiv
          className="max-w-4xl prose-lg text-gray-300"
          variants={fadeIn("right", "tween", 0.5, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <p>
            Ho intrapreso il mio percorso di studio dell&apos;osteopatia nel
            2011, presso il poliambulatorio Take Care di Milano.
          </p>

          <p>
            Nel 2016 ho ottenuto il diploma in osteopatia in seguito al
            superamento dell&apos;esame d&apos;ammissione al R.O.I. (Registro
            degli osteopati d&apos;Italia).
          </p>

          <p>
            Durante i cinque anni di corso, ho potuto specializzarmi nella
            medicina osteopatica, in qualità di tirocinante, dapprima
            osservatore ed in seguito operativo in vari ambulatori osteopatici
            privati a Milano.
          </p>

          <p>
            Successivamente ho preso parte ad un studio approfondito, in qualità
            di tirocinante pratico, sulle cure osteopatiche palliative ed il
            rapporto fra operatore e paziente all&apos;interno dell&apos;Hospice
            di Borgonovo val Tidone (PC), trattando pazienti affetti da malattie
            terminali.
          </p>

          <p>
            Ho affinato le mie competenze anatomiche e mediche, effettuando
            tirocinio osservativo all&apos;Ospedale Civile di Piacenza nei
            reparti di chirurgia generale ed ortopedica, cardiologia, radiologia
            ed in pronto soccorso ortopedico pediatrico.
          </p>

          <p>
            Per anni ho eseguito la mia professione a Cinisello Balsamo in uno
            studio privato in condivisione con una psicoterapeuta, al C.T.I.
            (Centro Terapie Integrate) in team con diversi specialisti tra cui
            ortopedici, fisioterapisti e psicoterapeuti e collaborando con
            odontoiatri presso lo studio medico dentistico Bartolacci a Milano.
          </p>

          <p>
            Attualmente svolgo il mio lavoro in uno studio medico ad Ancona,
            nelle Marche.
          </p>
        </MotionDiv>
        <MotionDiv
          className="flex justify-center mt-10"
          variants={fadeIn("up", "tween", 0, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <CTAButton />
        </MotionDiv>
      </div>
    </section>
  );
};

export default About;
