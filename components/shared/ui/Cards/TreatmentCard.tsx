import Image from "next/image";

interface Props {
  iconURL: string;
  title: string;
  content: string;
}

const TreatmentCard = ({ iconURL, title, content }: Props) => {
  return (
    <div className="drop-shadow-xl bg-white rounded-3xl overflow-hidden">
      <div className="bg-blue-100/5 min-h-96">
        <div className="h-48 bg-blue-950 flex justify-center items-center">
          <div>
            <Image
              width={128}
              height={128}
              src={iconURL}
              alt={title}
              className="object-contain"
            />
          </div>
        </div>

        <h2 className="text-lg font-semibold text-zinc-800 title-font text-center mt-8">
          {title}
        </h2>
        <div className="prose max-w-none text-zinc-800/80 text-sm tracking-wide text-center text-pretty mt-2 px-8">
          {content}
        </div>
      </div>
    </div>
  );
};

export default TreatmentCard;
