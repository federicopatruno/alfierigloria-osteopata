import { fadeIn } from "@/utils/motion";
import { MotionDiv } from "../shared/MotionDiv";
import Divider from "../shared/ui/Divider";
import Card from "../shared/ui/Card";
import { faqsCards, treatmentCards } from "@/constants/treatment";
import CTAButton from "../shared/ui/CTAButton";
const Treatment = () => {
  return (
    <section id="treatment" className="py-24 bg-blue-950">
      <div className="container mx-auto text-gray-300 max-sm:w-11/12">
        <MotionDiv
          className="flex flex-col w-full mx-auto mb-8 text-center lg:w-2/3 gap-y-2"
          variants={fadeIn("up", "tween", 0, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <h2 className="overhead">
            È molto utile per ridurre il dolore e ripristinare e migliorare la
            salute
          </h2>
          <h1 className="title">Il Trattamento Osteopatico</h1>
          <h3 className="subtitle">
            Il trattamento è rivolto a persone di qualunque età
          </h3>
        </MotionDiv>

        <div className="flex flex-col items-center justify-center max-w-4xl mx-auto mb-6 gap-y-8">
          <MotionDiv
            variants={fadeIn("right", "tween", 0.25, 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            <h2 className="section-title">Cos&apos;è l&apos;Osteopatia?</h2>
          </MotionDiv>
          <MotionDiv
            className="prose-lg text-justify text-gray-400"
            variants={fadeIn("left", "tween", 0.5, 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            <p>
              L&apos;osteopatia è una professione sanitaria (individuata
              ufficialmente nella legge 3/2018) basata su un approccio integrato
              e complementare alla medicina tradizionale.
            </p>
            <p>
              Attraverso una valutazione osteopatica, individua la “disfunzione
              somatica”, espressione dell&apos;alterazione dello stato di salute
              causato da eventi stressanti esterni o interni all&apos;organismo,
              come traumi e/o patologie. Solitamente si manifestano
              principalmente sul sistema muscolo scheletrico con dolore o
              riduzione di mobilità.
            </p>
            <p>
              L&apos;osteopata, attraverso tecniche specifiche, stimola il
              ripristino della mobilità fisiologica a livello dei diversi
              sistemi (circolatorio, respiratorio, fasciale, nervoso,
              muscolo-scheletrico) che attraverso un&apos;attività sinergica e
              coordinata, regolano il normale funzionamento dell&apos;organismo.
            </p>
          </MotionDiv>
          <Divider />

          <MotionDiv
            variants={fadeIn("up", "tween", 0.25, 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            <h2 className="section-title">In cosa consiste il Trattamento?</h2>
          </MotionDiv>

          <div className="flex flex-col max-w-3xl mx-auto">
            {treatmentCards.map(({ icon, title, content }, index) => (
              <Card
                key={index}
                title={title}
                content={content}
                icon={icon}
                inverted={index % 2 !== 0}
              />
            ))}
          </div>

          <MotionDiv
            variants={fadeIn("right", "tween", 0.25, 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            <h2 className="section-title"> È Doloroso il Trattamento?</h2>
          </MotionDiv>

          <MotionDiv
            className="prose-lg text-gray-400 text-justify prose-strong:text-gray-300 prose-strong:font-semibold"
            variants={fadeIn("left", "tween", 0.5, 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            <p>
              Il trattamento osteopatico <strong>non è doloroso</strong> ed è
              risolutivo solo nel caso in cui le disfunzioni non derivino da
              processi cronici o degenerativi irreversibili.
            </p>
            <p>
              In quest&apos;ultimo caso, contribuisce molto ad alleviare il
              dolore e costituisce un valido alleato per il paziente nella
              convivenza con la malattia.
            </p>
            <p>
              Il numero delle sedute necessarie dipende dalla risposta
              individuale del paziente al trattamento.
            </p>
          </MotionDiv>

          <Divider />

          <MotionDiv
            variants={fadeIn("right", "tween", 0.25, 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            <h2 className="section-title">
              Per quali problematiche risulta efficace?
            </h2>
          </MotionDiv>

          <div className="flex flex-col mx-auto">
            {faqsCards.map(({ icon, title, content }, index) => (
              <Card
                key={index}
                title={title}
                content={content}
                icon={icon}
                inverted={index % 2 !== 0}
              />
            ))}
          </div>

          <MotionDiv
            className="flex justify-center mx-auto mt-16"
            variants={fadeIn("up", "tween", 0, 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            <CTAButton />
          </MotionDiv>
        </div>
      </div>
    </section>
  );
};

export default Treatment;
