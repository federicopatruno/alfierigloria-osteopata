import {
  FaXTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";

interface SocialIconsProps {
  facebook: string | undefined;
  twitterX: string | undefined;
  instagram: string | undefined;
  linkedin: string | undefined;
}

const SocialIcons = ({
  facebook,
  twitterX,
  instagram,
  linkedin,
}: SocialIconsProps) => {
  return (
    <span className="inline-flex justify-center mt-2 sm:ml-auto sm:mt-0 sm:justify-start">
      {facebook && (
        <a
          className="text-gray-400"
          id="facebook-link"
          target="_blank"
          href={`https://facebook.com/${facebook}`}
        >
          <FaFacebookF />
        </a>
      )}
      {twitterX && (
        <a
          className="ml-3 text-gray-400"
          id="twitter-x-link"
          target="_blank"
          href={`https://twitter.com/${twitterX}`}
        >
          <FaXTwitter className="mt-[1px]" />
        </a>
      )}
      {instagram && (
        <a
          className="ml-3 text-gray-400"
          id="instagram-link"
          target="_blank"
          href={`https://instagram.com/${instagram}`}
        >
          <FaInstagram className="text-lg" />
        </a>
      )}
      {linkedin && (
        <a
          className="ml-3 text-gray-400"
          id="linkedin-link"
          target="_blank"
          href={`https://likedin.com/${linkedin}`}
        >
          <FaLinkedinIn className="text-lg" />
        </a>
      )}
    </span>
  );
};

export default SocialIcons;
