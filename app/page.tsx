import About from "@/components/sections/About";
import Biography from "@/components/sections/Biography";
import Contacts from "@/components/sections/Contacts";
import Efficacy from "@/components/sections/Efficacy";
import FAQ from "@/components/sections/FAQ";
import Fees from "@/components/sections/Fees";
import Osteopathy from "@/components/sections/Osteopathy";
import Treatment from "@/components/sections/Treatment";

export const metadata = {
  description:
    "Osteopata iscritta al ROI con sede ad Ancona nelle Marche. Collaboro con ortopedici, fisioterapisti e psicoterapeuti.",
  keywords: ["Alfieri Gloria", "Osteopata", "Marche"],
};

export default function Home() {
  return (
    <main>
      <About />
      <Osteopathy />
      <Treatment />
      <FAQ />
      <Efficacy />
      <Fees />
      <Biography />
      <Contacts />
    </main>
  );
}
