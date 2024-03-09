import { cn } from "@/lib/utils";
import { MotionDiv } from "../MotionDiv";
import { fadeIn } from "@/utils/motion";

interface CardProps {
  icon: React.ReactNode;
  title: string;
  inverted?: boolean;
  content: React.ReactNode;
}

const Card = ({ icon, title, content, inverted = false }: CardProps) => {
  return (
    <div
      className={cn(
        "flex flex-col items-center w-full gap-10 py-8 mx-auto",
        inverted ? "sm:flex-row-reverse" : "sm:flex-row"
      )}
    >
      <MotionDiv
        className="flex items-center justify-center w-20 h-20 text-4xl text-blue-200 bg-blue-800 rounded-full sm:text-6xl sm:w-32 sm:h-32 aspect-square"
        variants={fadeIn(inverted ? "left" : "right", "tween", 0, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        {icon}
      </MotionDiv>

      <MotionDiv
        className={cn(
          "flex flex-col text-center gap-y-2",
          inverted ? "sm:text-end" : "sm:text-start"
        )}
        variants={fadeIn(inverted ? "right" : "left", "tween", 0, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <h2 className="text-lg font-medium text-white title-font">{title}</h2>
        <div className="prose-lg text-gray-400 prose-p:text-base prose-p:mt-0 prose-p:mb-0">
          {content}
        </div>
      </MotionDiv>
    </div>
  );
};

export default Card;
