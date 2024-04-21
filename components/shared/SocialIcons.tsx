import { cn } from "@/lib/utils";
import {
  FaXTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";

interface SocialIconsProps {
  variant?: "small" | "large";
  facebook?: string;
  twitterX?: string;
  instagram?: string;
  linkedin?: string;
}

const SocialIcons = ({
  facebook,
  twitterX,
  instagram,
  linkedin,
  variant = "small",
}: SocialIconsProps) => {
  return (
    <div
      className={cn(
        "flex text-lg text-gray-300",
        variant === "small" ? "gap-4" : "gap-8"
      )}
    >
      {facebook && (
        <a
          id="facebook-link"
          target="_blank"
          href={`https://facebook.com/${facebook}`}
          className="hover:text-gray-200"
        >
          <FaFacebookF className="-mt-0.5" />
        </a>
      )}
      {twitterX && (
        <a
          id="twitter-x-link"
          target="_blank"
          href={`https://twitter.com/${twitterX}`}
          className="hover:text-gray-200"
        >
          <FaXTwitter />
        </a>
      )}
      {instagram && (
        <a
          id="instagram-link"
          target="_blank"
          href={`https://instagram.com/${instagram}`}
          className="hover:text-gray-200"
        >
          <FaInstagram />
        </a>
      )}
      {linkedin && (
        <a
          id="linkedin-link"
          target="_blank"
          href={`https://likedin.com/${linkedin}`}
          className="hover:text-gray-200"
        >
          <FaLinkedinIn />
        </a>
      )}
    </div>
  );
};

export default SocialIcons;
