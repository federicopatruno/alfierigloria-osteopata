import Link from "next/link";
import { GiBackPain } from "react-icons/gi";

const NotFoundPage = () => {
  return (
    <section className="pt-16 text-gray-400 bg-gray-900 body-font">
      <div className="container flex flex-col items-center justify-center px-5 py-24 mx-auto">
        <GiBackPain className="w-5/6 h-64 mb-10 text-white rounded lg:w-2/6 md:w-3/6" />
        <div className="w-full text-center lg:w-2/3">
          <h1 className="mb-4 text-3xl font-medium text-white title-font sm:text-4xl">
            Ouch! Pagina Non Trovata
          </h1>
          <p className="mb-8 leading-relaxed">
            La pagina che cerchi non è stata trovata, ma non preoccuparti,
            l&apos;importante è trovare il mio studio per risolvere tutti i tuoi
            problemi!
          </p>
          <div className="flex justify-center">
            <button className="inline-flex px-6 py-2 text-lg text-white bg-blue-500 border-0 rounded focus:outline-none hover:bg-blue-600">
              <Link href="/">Torna Alla Home</Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFoundPage;
