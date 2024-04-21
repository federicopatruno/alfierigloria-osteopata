import Image from "next/image";

const FAQ = () => {
  return (
    <section id="faq">
      <div className="flex max-lg:flex-col">
        <div className="relative lg:w-1/2 lg:min-h-lvh min-h-[50vh] bg-black">
          <Image
            className="object-cover"
            alt="Dr.ssa Alfieri Gloria Osteopata"
            src="/images/treatment-03.jpg"
            fill
            sizes="100vw"
          />
        </div>
        <div className="bg-blue-100/30 lg:w-1/2 py-12 lg:py-24 px-8 lg:px-16 lg:justify-center lg:flex lg:flex-col">
          <h2 className="text-2xl sm:text-3xl lg:text-start tracking-wide font-bold text-blue-900 text-center">
            È Doloroso il Trattamento?
          </h2>
          <hr className="flex w-20 mt-6 border border-blue-800 rounded-full max-lg:mx-auto" />
          <div className="mt-12 prose max-w-none font-light tracking-wide text-center lg:text-start text-pretty text-blue-950 prose-strong:font-regular">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
