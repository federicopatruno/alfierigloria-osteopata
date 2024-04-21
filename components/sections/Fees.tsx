import CTAButton from "../shared/ui/CTAButton";

const Fees = () => {
  return (
    <section id="fees">
      <div className="py-24 overflow-hidden bg-blue-950">
        <div className="container mx-auto">
          <div className="w-1 h-8 rounded-full mb-6 bg-gray-100/50 mx-auto" />
          <h2 className="uppercase tracking-widest text-gray-100 text-base font-bold text-center">
            Tariffe
          </h2>

          <div className="mx-auto mt-12">
            <div className="flex flex-wrap justify-center">
              <div className="w-full lg:w-4/12 p-4 min-h-96">
                <div className="flex flex-col items-center justify-center h-full p-6 overflow-hidden bg-blue-800 drop-shadow-xl rounded-3xl">
                  <h2 className="text-lg font-semibold text-blue-200 text-center">
                    Prima Visita Osteopatica
                  </h2>
                  <h1 className="mx-auto mt-8 mb-4 text-5xl text-center text-gray-100 tracking-wide font-medium">
                    <span>&euro;</span>
                    <span className="ml-1">70</span>
                  </h1>
                  <hr className="flex w-20 border border-blue-400 rounded-full" />
                  <div className="mt-8 flex flex-col gap-2 text-center">
                    <h6 className="text-blue-200/80 font-light tracking-wide">
                      Anamnesi
                    </h6>
                    <h6 className="text-blue-200/80 font-light tracking-wide">
                      Valutazione
                    </h6>
                    <h6 className="text-blue-200/80 font-light tracking-wide">
                      Trattamento
                    </h6>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-4/12 p-4 min-h-96">
                <div className="flex flex-col items-center justify-center h-full p-6 overflow-hidden bg-blue-800 drop-shadow-xl rounded-3xl">
                  <h2 className="text-lg font-semibold text-blue-200 text-center">
                    Visita Osteopatica
                  </h2>
                  <h1 className="mx-auto mt-8 mb-4 text-5xl text-center text-gray-100 tracking-wide font-medium">
                    <span>&euro;</span>
                    <span className="ml-1">60</span>
                  </h1>
                  <hr className="flex w-20 border border-blue-400 rounded-full" />
                  <div className="mt-8 flex flex-col gap-2 text-center">
                    <h6 className="text-blue-200/80 font-light tracking-wide">
                      Trattamento
                    </h6>
                    <h6 className="text-blue-200/80 font-light tracking-wide invisible">
                      Trattamento
                    </h6>
                    <h6 className="text-blue-200/80 font-light tracking-wide invisible">
                      Trattamento
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex mx-auto justify-center mt-12">
              <CTAButton title="Prenota Una Visita" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fees;
