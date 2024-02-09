import { fadeIn } from "@/utils/motion";
import { MotionDiv } from "../shared/MotionDiv";

const Contacts = () => {
  return (
    <section id="contacts" className="relative py-24 bg-blue-950">
      <div className="container flex flex-col items-center mx-auto max-sm:w-11/12 gap-y-8">
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
          <h1 className="title">Contatti</h1>
          <h3 className="subtitle">Si Riceve Solo Su Appuntamento</h3>
        </MotionDiv>

        <MotionDiv
          className="relative flex items-end justify-start p-10 overflow-hidden bg-gray-900 rounded-lg w-full min-h-[600px]"
          variants={fadeIn("up", "tween", 0.25, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0"
            // frameBorder="0" marginHeight={0} marginWidth={0} scrolling="no"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2888.4855558757517!2d13.50979587626855!3d43.61725195475499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132d7ffc82fa969f%3A0x9e5ce1481b050e4b!2sOsteopata%20Gloria%20Alfieri!5e0!3m2!1sen!2sit!4v1688632870919!5m2!1sen!2sit"
            loading="lazy"
          />
          <MotionDiv
            className="relative flex flex-wrap py-6 text-gray-300 bg-gray-900 rounded shadow-md"
            variants={fadeIn("left", "tween", 0, 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
          >
            <div className="flex flex-col px-6 lg:w-1/2 gap-y-2">
              <h2 className="contact-card-title">STUDIO MEDICO</h2>
              <p>Via Villafranca 4 - 60122, Ancona</p>
              <h2 className="lg:mt-4 contact-card-title">ORARI</h2>
              <p>da Lunedì a Sabato: 09:00 - 19:00</p>
            </div>
            <div className="flex flex-col px-6 mt-4 lg:w-1/2 lg:mt-0 gap-y-2">
              <h2 className="contact-card-title">EMAIL</h2>
              <a
                className="text-blue-400 "
                href="mailto:alfierigloria.osteopata@gmail.com?subject=Informazioni Visita Osteopatica"
              >
                alfierigloriaosteopata@gmail.com
              </a>
              <h2 className="lg:mt-4 contact-card-title">PRENOTAZIONI</h2>
              <a className="text-blue-400 " href="tel:+393345832026">
                +39 334 5832026
              </a>
            </div>
          </MotionDiv>
        </MotionDiv>
      </div>
    </section>
  );
};

export default Contacts;
