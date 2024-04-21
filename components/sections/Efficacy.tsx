import Image from "next/image";
import EfficacyCard from "../shared/ui/Cards/EfficacyCard";

const Efficacy = () => {
  return (
    <section id="efficacy">
      <div className="flex max-lg:flex-col">
        <div className="bg-blue-100/30 lg:w-1/2 py-12 lg:py-24 px-8 lg:px-16 lg:justify-center lg:flex lg:flex-col">
          <h2 className="text-2xl sm:text-3xl lg:text-start tracking-wide font-bold text-blue-900 text-center">
            Per quali problematiche è efficace?
          </h2>
          <hr className="flex w-20 mt-6 border border-blue-800 rounded-full max-lg:mx-auto" />
          <div className="flex flex-col gap-y-8 mt-12">
            <EfficacyCard
              title="Affezioni muscolo-schelettriche"
              iconURL="/images/icons/back-pain.png"
              content="Come cervicalgie e dorsalgie."
            />
            <EfficacyCard
              title="Disordini cranio-sacrali"
              iconURL="/images/icons/migraine.png"
              content="Quali cefalee ed emicranie."
            />
            <EfficacyCard
              title="Disordini viscerali"
              iconURL="/images/icons/stomach.png"
              content="Ad esempio colon irritabile e stitichezza."
            />
            <EfficacyCard
              title="Affezioni del sistema stomatognatico"
              iconURL="/images/icons/tooth.png"
              content="Dolori derivanti dalla malocclusione e bruxismo"
            />
            <EfficacyCard
              title="Disordini legati al periodo pre e post gravidanza"
              iconURL="/images/icons/fetus.png"
              content="Che comprendono edema degli arti inferiori, depressione post partum e alterazione dell'umore."
            />
          </div>
        </div>
        <div className="relative lg:w-1/2 lg:min-h-lvh min-h-[50vh] bg-black">
          <Image
            className="object-cover"
            alt="Dr.ssa Alfieri Gloria Osteopata"
            src="/images/treatment-04.jpg"
            fill
            sizes="(max-width: 768px) 33vw, (max-width: 1600px) 50vw, 100vw"
          />
        </div>
      </div>
    </section>
  );
};

export default Efficacy;
