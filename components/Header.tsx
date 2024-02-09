import Image from "next/image";
import Link from "next/link";
import { menuItems } from "@/constants";
import CTAButton from "./shared/ui/CTAButton";
import MobileMenu from "./shared/navigation/MobileMenu";

const Header = () => {
  return (
    <header className="fixed z-50 flex w-full py-2 bg-blue-900/40 backdrop-blur-lg">
      <div className="flex items-center justify-between mx-auto sm:container max-sm:w-11/12">
        <div className="flex items-center flex-1 gap-x-4">
          <Link
            href="/"
            className="flex items-center transition-opacity title-font opacity-60 hover:opacity-100"
          >
            <Image
              src="/logo.svg"
              width={48}
              height={48}
              alt="Alfieri Gloria Osteopata"
              loading="lazy"
            />
          </Link>

          <nav className="hidden text-base lg:flex">
            <ul className="flex flex-wrap items-center justify-center text-gray-300 gap-x-4">
              {menuItems.map(({ id, title, href }) => (
                <li key={id}>
                  <Link className="hover:text-white" href={`/#${href}`}>
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <CTAButton variant="small" />

        {/* Mobile Menu */}
        <MobileMenu />
      </div>
    </header>
  );
};

export default Header;
