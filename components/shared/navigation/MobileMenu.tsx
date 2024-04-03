"use client";
import { motion, useCycle } from "framer-motion";
import CTAButton from "../ui/CTAButton";
import {
  fadeInStaggered,
  menuVariants,
  sideMenuVariants,
} from "@/utils/motion";
import { menuItems } from "@/constants";
import { cn } from "@/lib/utils";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

const MobileMenu = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    if (window) {
      if (isOpen) {
        window.document.body.classList.add("overflow-y-hidden");
      } else {
        window.document.body.classList.remove("overflow-y-hidden");
      }
    }
  }, [isOpen]);

  return (
    <>
      {/* Hamburger Button */}
      <button
        className="z-[999] cursor-pointer flex lg:hidden items-center justify-center flex-col self-center gap-[6px] group"
        onClick={(e: React.MouseEvent<HTMLButtonElement>) => toggleOpen()}
      >
        <span
          className={cn("hamburger-span", isOpen && "rotate-45 translate-y-2")}
        />
        <span
          className={cn(
            "hamburger-span transition-opacity duration-300 ease-out",
            isOpen ? "opacity-0" : "opacity-100"
          )}
        />
        <span
          className={cn(
            "hamburger-span",
            isOpen && "-rotate-45 -translate-y-2"
          )}
        />
      </button>

      {/* Side Menu */}
      <motion.nav
        variants={menuVariants}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        exit="closed"
        className="lg:hidden bg-blue-900 fixed w-full h-screen top-0 bottom-0 flex items-center justify-center transition-all duration-700 ease-linear z-[99] flex-col"
      >
        <motion.ul
          variants={sideMenuVariants}
          className="flex flex-col gap-y-5"
        >
          {menuItems.map(({ title, href }, index) => (
            <motion.li
              key={index}
              variants={fadeInStaggered("up", "tween", 2)}
              className="text-center"
            >
              <a
                className="inline-block mb-4 text-4xl font-normal tracking-wide text-gray-400 transition-all duration-300 ease-in-out select-none md:text-4xl hover:text-white lg:mb-6"
                href={isHome ? `#${href}` : `/#${href}`}
                onClick={(e: React.MouseEvent<HTMLAnchorElement>) =>
                  toggleOpen()
                }
              >
                {title}
              </a>
            </motion.li>
          ))}
          <motion.li variants={fadeInStaggered("up", "tween", 2)}>
            <CTAButton />
          </motion.li>
        </motion.ul>
      </motion.nav>
    </>
  );
};

export default MobileMenu;
