import { cn } from "@/lib/utils";

interface CTAButtonProps {
  variant?: "small" | "default";
}

const CTAButton = ({ variant = "default" }: CTAButtonProps) => {
  return (
    <a
      className={cn(
        "book-appointment flex gap-x items-center py-2 transition-all bg-green-400 border-0 rounded-full text-black/75 focus:outline-none hover:bg-blue-700 hover:text-white hover:-translate-y-1 hover:scale-110 duration-500",
        variant === "small" ? "px-4 max-lg:hidden" : "px-6 text-lg"
      )}
      href="tel:+393345832026"
      rel="noreferrer"
      target="_blank"
    >
      <span>Richiedi Appuntamento</span>
      <svg
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        className="w-4 h-4 ml-1"
        viewBox="0 0 24 24"
      >
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </a>
  );
};

export default CTAButton;
