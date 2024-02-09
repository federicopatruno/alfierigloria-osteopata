"use client";
import { motion, useCycle } from "framer-motion";
import Link from "next/link";
import CTAButton from "../ui/CTAButton";
import {
  fadeInStaggered,
  menuVariants,
  sideMenuVariants,
} from "@/utils/motion";
import { menuItems } from "@/constants";
import { clsx } from "clsx/lite";

const MobileMenu = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  return (
    <>
      {/* Hamburger Button */}
      <div
        className="z-[999] cursor-pointer flex lg:hidden items-center justify-center flex-col self-center gap-[6px] group"
        onClick={(e: React.MouseEvent<HTMLDivElement>) => toggleOpen()}
      >
        <span
          className={clsx(
            "hamburger-span",
            isOpen && "rotate-45 translate-y-2"
          )}
        />
        <span
          className={clsx(
            "hamburger-span transition-opacity duration-300 ease-out",
            isOpen ? "opacity-0" : "opacity-100"
          )}
        />
        <span
          className={clsx(
            "hamburger-span",
            isOpen && "-rotate-45 -translate-y-2"
          )}
        />
      </div>

      {/* Side Menu */}
      <motion.nav
        variants={menuVariants}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        exit="closed"
        className="bg-blue-900 fixed w-full h-screen top-0 bottom-0 flex items-center justify-center transition-all duration-[600] ease-linear z-[99] flex-col"
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
              <Link
                className="inline-block mb-4 text-4xl font-normal tracking-wide text-gray-400 transition-all duration-300 ease-in-out select-none md:text-4xl hover:text-white lg:mb-6"
                href={`/#${href}`}
                onClick={(e: React.MouseEvent<HTMLAnchorElement>) =>
                  toggleOpen()
                }
              >
                {title}
              </Link>
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
