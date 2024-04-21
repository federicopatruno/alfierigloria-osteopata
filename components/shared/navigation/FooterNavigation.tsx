"use client";
import { menuItems } from "@/constants";
import ScrollLink from "../ui/ScrollLInk";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as CookieConsent from "vanilla-cookieconsent";

const FooterNavigation = () => {
  const pathname = usePathname();

  const handleConsent = (event: React.MouseEvent<HTMLButtonElement>) => {
    event?.preventDefault();
    CookieConsent.showPreferences();
  };

  return (
    <nav className="sm:mb-10 list-none tracking-wide">
      <ul className="flex flex-col gap-y-1 text-gray-400 [&>li:hover]:text-gray-200">
        {menuItems.map(({ id, title }, index) => (
          <li key={index}>
            {pathname === "/" ? (
              <ScrollLink href={`#${id}`}>{title}</ScrollLink>
            ) : (
              <Link href={`/#${id}`}>{title}</Link>
            )}
          </li>
        ))}

        <li className="mt-2 text-sm">
          <a href="/privacy-policy" target="_blank" rel="noreferrer">
            Informativa Sulla Privacy
          </a>
        </li>
        <li className="text-sm">
          <a href="/cookie-policy" target="_blank" rel="noreferrer">
            Politica dei Cookies
          </a>
        </li>

        <li>
          <button
            type="button"
            data-cc="show-preferencesModal"
            onClick={handleConsent}
            className="text-gray-400 hover:text-white text-sm"
          >
            Rivedi Consensi
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default FooterNavigation;
