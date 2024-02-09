import { FaBaby } from "react-icons/fa6";
import { GiSkeletonInside, GiStomach } from "react-icons/gi";
import { PiBrain, PiTooth } from "react-icons/pi";
import { TfiEye, TfiHandOpen, TfiWrite } from "react-icons/tfi";

interface CardProps {
  title: string;
  icon: React.ReactNode;
  content: React.ReactNode;
}

export const treatmentCards: CardProps[] = [
  {
    title: "Anamnesi",
    icon: <TfiWrite />,
    content: (
      <>
        <p>La raccolta di dati relativi alla storia di salute del paziente.</p>
        <p>
          Le domande vengono poste per avere un quadro generale dello stato
          clinico e per escludere controindicazioni al trattamento.
        </p>
      </>
    ),
  },
  {
    title: "Esame Visivo",
    icon: <TfiEye />,
    content: (
      <p>
        Il paziente viene esaminato attraverso la valutazione della postura,
        delle curve della colonna vertebrale e delle eventuali asimmetrie.
      </p>
    ),
  },
  {
    title: "Palpazione e trattamento",
    icon: <TfiHandOpen />,
    content: (
      <p>
        Vengono individuate delle strutture disfunzionali e l&apos;applicazione
        delle tecniche manipolative in funzione delle necessità terapeutiche
        riscontrate.
      </p>
    ),
  },
];

export const faqsCards = [
  {
    title: "Affezioni muscolo-schelettriche",
    icon: <GiSkeletonInside />,
    content: <p>Come cervicalgie e dorsalgie.</p>,
  },
  {
    title: "Disordini cranio-sacrali",
    icon: <PiBrain />,
    content: <p>Quali cefalee ed emicranie.</p>,
  },
  {
    title: "Disordini viscerali",
    icon: <GiStomach />,
    content: <p>Ad esempio colon irritabile e stitichezza.</p>,
  },
  {
    title: "Disordini legati al periodo pre e post gravidanza",
    icon: <FaBaby />,
    content: (
      <p>
        Che comprendono edema degli arti inferiori, depressione post partum e
        alterazione dell&apos;umore.
      </p>
    ),
  },
  {
    title: "Affezioni del sistema stomatognatico",
    icon: <PiTooth />,
    content: <p>Dolori derivanti dalla malocclusione e bruxismo.</p>,
  },
];
