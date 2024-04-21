import Image from "next/image";

const Osteopathy = () => {
  return (
    <section id="osteopathy">
      <div className="max-lg:flex-col flex">
        <div className="bg-blue-800 lg:w-1/2 py-12 lg:py-24 px-8 lg:px-16 lg:justify-center lg:flex lg:flex-col">
          <h2 className="text-2xl sm:text-3xl text-center lg:text-start tracking-wide font-bold text-gray-100">
            Cos&apos;è l&apos;Osteopatia?
          </h2>
          <hr className="flex w-20 mt-6 border border-blue-400 rounded-full max-lg:mx-auto" />
          <div className="mt-12 prose max-w-none font-light tracking-wide text-center lg:text-start text-pretty text-blue-200/80">
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
          </div>
        </div>

        <div className="min-h-[50vh] lg:min-h-lvh bg-black lg:w-1/2 relative">
          <Image
            className="object-cover lg:object-left-top object-center"
            alt="Dr.ssa Alfieri Gloria Osteopata"
            src="/images/treatment-02.jpg"
            fill
            loading="lazy"
            sizes="(max-width: 768px) 33vw, (max-width: 1600px) 50vw, 100vw"
          />
        </div>
      </div>
    </section>
  );
};

export default Osteopathy;
