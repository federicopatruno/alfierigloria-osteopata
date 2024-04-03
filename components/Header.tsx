"use client";
import Link from "next/link";
import { menuItems } from "@/constants";
import CTAButton from "./shared/ui/CTAButton";
import MobileMenu from "./shared/navigation/MobileMenu";
import { cn } from "@/lib/utils";
import { useRef, useState } from "react";
import { useInView, useMotionValueEvent, useScroll } from "framer-motion";
import { usePathname } from "next/navigation";

const Header = () => {
  const ref = useRef(null);
  const headerRef = useRef(null);
  const isInView = useInView(ref, { once: false });
  const isHiddenInView = useInView(headerRef, { once: false });
  const { scrollYProgress } = useScroll();
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const show = !isInView && (scrollYProgress.getPrevious() || 0) > latest;
    setIsVisible(show);
  });

  return (
    <>
      <div ref={headerRef}>
        <header
          className={cn(
            isHiddenInView &&
              "animate-in fill-mode-both fade-in-0 slide-in-from-top-4 duration-1000 delay-300",
            "fixed flex w-full select-none z-50 transition-all duration-700 ease-out font-medium",
            isVisible
              ? "border-b-sky-300 shadow-sm shadow-black/20  text-gray-300 bg-gray-900 border-b-4 opacity-100"
              : "shadow-none shadow-black/0 border-b-0 text-sky-800 bg-gray-0",
            isHome && "text-gray-300",
            !isHiddenInView && !isVisible && "-top-24",
            !isHiddenInView && isVisible && "top-0"
          )}
        >
          <div className="flex items-center justify-between mx-auto sm:container max-sm:w-11/12 py-4">
            <div className="flex items-center flex-1 gap-x-4">
              <Link
                href="/"
                className={cn(
                  isVisible || isHome
                    ? "hover:text-white"
                    : "hover:text-sky-500"
                )}
              >
                <div className="h-12 w-12">
                  <HeaderLogo />
                </div>
              </Link>
              <nav className="hidden text-base lg:flex">
                <ul className="flex flex-wrap items-center justify-center gap-x-4">
                  {menuItems.map(({ id, title, href }) => (
                    <li key={id}>
                      <a
                        className={cn(
                          isVisible || isHome
                            ? "hover:text-white"
                            : "hover:text-sky-500"
                        )}
                        href={isHome ? `#${href}` : `/#${href}`}
                      >
                        {title}
                      </a>
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
      </div>
      <div ref={ref} className="absolute top-0 h-screen left-0 -z-50" />
    </>
  );
};

const HeaderLogo = () => (
  <svg viewBox="0 0 200 200" className="fill-current">
    <g>
      <path d="M100,0A100,100,0,1,0,200,100,100.11,100.11,0,0,0,100,0Zm0,194.17a93.63,93.63,0,0,1-37.28-7.69,100,100,0,0,0,15.42-29c6.18-18.32,9.65-47.07-8.92-80l-5.08,2.85c14,24.9,16.9,50.16,8.56,75.1a94.5,94.5,0,0,1-15.4,28.5A94.15,94.15,0,1,1,100,194.17Zm9.76-153.84c1.85,35.13,1.85,35.13-6.62,78.89l-.28,1.45c-8.63,44.59-2.24,67.22-2.17,67.44l-5.59,1.66c-.28-1-6.9-24,2-70.21l.28-1.45c8.34-43,8.34-43,6.52-77.47l-.15-2.81,5.82-.31ZM141.42,80c-12.5,31.67-11.9,57-9.2,72.69,2.93,17,8.9,26.64,9,26.74l-4.93,3.11c-1.05-1.66-25.31-41.2-.25-104.68ZM83.33,30.28l5.12,2.79A34.83,34.83,0,0,1,75.34,47,33.49,33.49,0,0,1,63,51c-3.08.5-5.52.9-7.7,2.6C51,56.9,49.23,64,50,74.69l-5.81.41C43.28,62.36,45.8,53.57,51.68,49c3.37-2.62,6.92-3.2,10.36-3.76A27.85,27.85,0,0,0,72.43,42,29.1,29.1,0,0,0,83.33,30.28Zm67.48,26.18c4.67,4.82,6.42,12.49,5.2,22.78l-5.78-.69c1-8.47-.21-14.53-3.61-18a15.81,15.81,0,0,0-5.74-3.43,24.61,24.61,0,0,1-8.61-5.32c-4.09-4-6.61-9.59-7.47-16.52l5.77-.73c.71,5.6,2.65,10,5.79,13.1a19.19,19.19,0,0,0,6.77,4.1A20.8,20.8,0,0,1,150.81,56.46Z" />
    </g>
  </svg>
);

export default Header;
