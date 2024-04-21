import { cn } from "@/lib/utils";
import Image from "next/image";

interface Props {
  iconURL: string;
  title: string;
  content: string;
  classNames?: string;
}

const EfficacyCard = ({ iconURL, title, content, classNames = "" }: Props) => {
  return (
    <div className="flex lg:justify-start lg:gap-4 max-lg:flex-col justify-center max-lg:items-center gap-2">
      <div>
        <Image
          height={48}
          width={48}
          className="object-contain"
          src={iconURL}
          alt={title}
        />
      </div>

      <div>
        <h2 className="text-center lg:text-start text-lg font-semibold text-blue-950">
          {title}
        </h2>
        <div className="prose text-blue-900/80 text-sm tracking-wide text-pretty mt-1 text-center lg:text-start">
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
};

export default EfficacyCard;
