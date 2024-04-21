import { fadeIn } from "@/utils/motion";
import { MotionDiv } from "../shared/MotionDiv";
import { GrMapLocation } from "react-icons/gr";
import { BsClock, BsEnvelopeAt, BsPhone, BsMap } from "react-icons/bs";
import { FiPhone } from "react-icons/fi";
const Contacts = () => {
  return (
    <section id="contacts">
      <div className="max-lg:flex-col flex">
        <div className="bg-blue-800 lg:w-1/2 py-12 lg:py-24 px-8 lg:px-16 lg:justify-center lg:flex lg:flex-col">
          <h2 className="text-2xl sm:text-3xl lg:text-start tracking-wide font-bold text-gray-100 text-center">
            Contatti
          </h2>
          <hr className="flex w-20 mt-6 border border-blue-400 rounded-full max-lg:mx-auto" />

          <h2 className="text-xl sm:text-2xl text-gray-200 font-medium mt-12 tracking-wide lg:text-start text-center">
            Studio Medico
          </h2>

          <div className="mt-4 flex items-center text-blue-200/80 tracking-wide font-light max-lg:justify-center">
            <BsMap className="text-xl" />
            <p className="ml-3 text-lg">Via Villafranca, 4 - 60122 Ancona</p>
          </div>
          <div className="mt-3 flex items-center text-blue-200/80 tracking-wide font-light max-lg:justify-center">
            <FiPhone className="text-xl" />
            <a
              className="ml-3 text-lg hover:text-blue-200"
              href="tel:+393345832026"
            >
              +39 334 5832026
            </a>
          </div>
          <div className="mt-3 flex items-center text-blue-200/80 tracking-wide font-light max-lg:justify-center">
            <BsEnvelopeAt className="text-xl" />
            <a
              className="ml-3 text-lg hover:text-blue-200"
              href="mailto:alfierigloria.osteopata@gmail.com?subject=Informazioni Visita Osteopatica"
            >
              alfierigloriaosteopata@gmail.com
            </a>
          </div>
          <div className="mt-3 flex items-center text-blue-200/80 tracking-wide font-light max-lg:justify-center">
            <BsClock className="text-xl" />
            <p className="ml-3 text-lg">
              Lunedì - Sabato{" "}
              <span className="ml-4 lg:ml-20 font-semibold">09:00 - 19:00</span>
            </p>
          </div>
          <div className="mt-2 prose max-w-none tracking-wide text-sm text-center lg:text-start text-pretty text-blue-200/80 font-medium">
            <p>*Si riceve solo su appuntamento</p>
          </div>
        </div>

        <div className="min-h-[50vh] lg:min-h-lvh bg-black lg:w-1/2 relative">
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0"
            // frameBorder="0" marginHeight={0} marginWidth={0} scrolling="no"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2888.4855558757517!2d13.50979587626855!3d43.61725195475499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132d7ffc82fa969f%3A0x9e5ce1481b050e4b!2sOsteopata%20Gloria%20Alfieri!5e0!3m2!1sen!2sit!4v1688632870919!5m2!1sen!2sit"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default Contacts;
