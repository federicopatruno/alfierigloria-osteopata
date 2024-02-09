import Image from "next/image";
import { zoomIn } from "@/utils/motion";
import { MotionDiv } from "../shared/MotionDiv";

const images = [
  "/images/treatment/01.jpg",
  "/images/treatment/02.jpg",
  "/images/treatment/03.jpg",
  "/images/treatment/04.jpg",
];

const Gallery = () => {
  return (
    <section className="pb-24 text-gray-600 bg-blue-950">
      <div className="container mx-auto max-sm:w-11/12">
        <MotionDiv
          className="flex flex-wrap"
          variants={zoomIn(0, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          {images.map((item, index) => (
            <div className="relative w-1/2 h-48 lg:w-1/4" key={index}>
              <Image
                src={item}
                alt="Trattamento | Fig. 1"
                className="object-cover"
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
              />
            </div>
          ))}
        </MotionDiv>
      </div>
    </section>
  );
};

export default Gallery;
