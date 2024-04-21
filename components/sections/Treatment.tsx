import { fadeIn } from "@/utils/motion";
import { MotionDiv } from "../shared/MotionDiv";
import Card from "../shared/ui/Cards/TreatmentCard";

import CTAButton from "../shared/ui/CTAButton";
import { treatmentStages } from "@/constants";
const Treatment = () => {
  return (
    <section id="treatment">
      <div className="bg-blue-100/30 py-12 lg:py-24">
        <div className="container mx-auto">
          <div className="w-1 h-8 rounded-full mb-6 bg-blue-700/50 mx-auto" />
          <h2 className="uppercase tracking-widest text-blue-800 text-base font-bold text-center">
            Il Trattamento Osteopatico
          </h2>

          <div className="flex max-xl:flex-col xl:flex-wrap mx-auto gap-16 lg:gap-16 xl:gap-8 items-center justify-center mt-12">
            {treatmentStages.map(({ iconURL, title, content }, index) => (
              <div key={index} className="lg:w-8/12 xl:w-96">
                <Card title={title} content={content} iconURL={iconURL} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Treatment;

const Rest = () => {
  return (
    <>
      <MotionDiv
        className="flex justify-center mx-auto mt-16"
        variants={fadeIn("up", "tween", 0, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <CTAButton />
      </MotionDiv>
    </>
  );
};
