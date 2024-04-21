"use client";
import { AnimatePresence, motion } from "framer-motion";
import CTAButton from "../ui/CTAButton";
import {
  fadeInStaggered,
  menuVariants,
  sideMenuVariants,
} from "@/utils/motion";
import { menuItems } from "@/constants";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import Link from "next/link";

const MobileMenu = ({ isHiddenInView }: { isHiddenInView: boolean }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleOpen = (
    e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>
  ) => {
    setIsOpen(!isOpen);
  };

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
        onClick={toggleOpen}
      >
        <span
          className={cn(
            "hamburger-span",
            isOpen && "rotate-45 translate-y-2",
            isHiddenInView && !isOpen
              ? "bg-blue-950 hover:bg-blue-800"
              : " bg-gray-200 group-hover:bg-white"
          )}
        />
        <span
          className={cn(
            "hamburger-span transition-opacity duration-300 ease-out",
            isOpen ? "opacity-0" : "opacity-100",
            isHiddenInView && !isOpen
              ? "bg-blue-950 hover:bg-blue-800"
              : " bg-gray-200 group-hover:bg-white"
          )}
        />
        <span
          className={cn(
            "hamburger-span",
            isOpen && "-rotate-45 -translate-y-2",
            isHiddenInView && !isOpen
              ? "bg-blue-950 hover:bg-blue-800"
              : " bg-gray-200 group-hover:bg-white"
          )}
        />
      </button>

      {/* Side Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed top-0 h-lvh w-full bg-blue-950 z-50 flex items-center justify-center"
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <nav>
              <motion.ul
                variants={sideMenuVariants}
                className="flex flex-col gap-y-12"
              >
                {menuItems.map(({ title, id }, index) => (
                  <motion.li
                    key={index}
                    variants={fadeInStaggered("up", "tween", 1)}
                    className="text-center"
                  >
                    <Link
                      className="text-4xl font-normal tracking-wide text-gray-300 transition-all duration-300 ease-in-out hover:text-white"
                      href={`/#${id}`}
                      onClick={() => {
                        setIsOpen(false);
                      }}
                    >
                      {title}
                    </Link>
                  </motion.li>
                ))}
                <motion.li variants={fadeInStaggered("up", "tween", 2)}>
                  <CTAButton />
                </motion.li>
              </motion.ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileMenu;
