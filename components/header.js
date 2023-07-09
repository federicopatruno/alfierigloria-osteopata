"use client";

import Image from 'next/image'
import React from 'react'
import { motion, useCycle } from 'framer-motion'
import { fadeIn, fadeInStaggered, hamburger, menuVariants, sideMenuVariants } from '@/utils/motion'
import Link from 'next/link';
import { menuItems } from '@/constants';
import { usePathname } from 'next/navigation';
const style = {
    span: `select-none w-[30px] h-[2px] outline-transparent outline-1 bg-gray-400 group-hover:bg-white`
}

const Header = () => {
    const pathname = usePathname();
    const [isOpen, toggleOpen] = useCycle(false, true);
    return (
        <header className="fixed w-full overflow-hidden text-gray-400 bg-gray-900 body-font z-[8]"

        >
            <motion.div className="container flex flex-row items-center justify-between p-5 mx-auto lg:flex-wrap"
                variants={fadeIn("down", "tween", 0, 1)}
                initial="hidden"
                whileInView="show"
            >

                <Link
                    href="/"
                    className="flex items-center mb-4 font-medium text-white transition-all title-font md:mb-0 opacity-60 hover:opacity-100">
                    <Image
                        src="/logo.svg"
                        width={60}
                        height={60}
                        alt="Alfieri Gloria Osteopata"
                        priority
                    />
                </Link>

                <nav className="flex-wrap items-center justify-center hidden text-base lg:flex md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700"

                >
                    {menuItems.map(({ id, title, href }) =>
                        // <Link
                        //     key={id}
                        //     className="mr-5 hover:text-white"
                        //     href={pathname === "/" ? `${pathname}#${href}` : `/#${href}`}
                        //     scroll={false}

                        // >
                        //     {title}
                        // </Link>

                        <a
                            key={id}
                            className="mr-5 hover:text-white"
                            href={pathname === "/" ? `#${href}` : `/#${href}`}
                            scroll={false}
                        >
                            {title}
                        </a>
                    )}
                </nav>
                <button className="items-center hidden px-6 py-1 mt-4 text-base transition-all bg-green-400 border-0 rounded-full lg:inline-flex focus:outline-none hover:bg-green-500 md:mt-0 text-black/75 hover:text-white hover:-translate-y-1 hover:scale-110"
                ><a href="tel:+393345832026" rel="noreferrer" target="_blank">Richiedi Appuntamento</a>
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </button>

                {/* Hamburger */}
                <motion.div
                    variants={fadeIn("down", "tween", 1, 1)}
                    initial="hidden"
                    animate="show"
                    className="z-10 cursor-pointer flex lg:hidden items-center justify-center flex-col self-center gap-[6px] group"
                    onClick={toggleOpen}
                >
                    <motion.span
                        variants={hamburger("top", 8)}
                        animate={isOpen ? "open" : "closed"}
                        className={style.span} />

                    <motion.span
                        className={style.span}
                        animate={{ opacity: isOpen ? 0 : 1, transition: { duration: isOpen ? 0 : .3 } }}
                    />

                    <motion.span
                        variants={hamburger("bottom", 8)}
                        custom={true}
                        animate={isOpen ? "open" : "closed"}
                        className={style.span}

                    />

                </motion.div>
            </motion.div>

            <motion.nav
                variants={menuVariants}
                initial="closed"
                animate={isOpen ? "open" : "closed"}
                exit="closed"
                className="bg-gray-900 fixed w-full h-full bg-primary top-0 flex items-center justify-center transition-all duration-[600] ease-linear z-[9]"
            >

                <motion.ul
                    variants={sideMenuVariants}
                >
                    {menuItems.map(({ title, href }, index) => (
                        <motion.li
                            key={index}
                            variants={fadeInStaggered("up", "tween", 2)}
                            className={`my-[20px] mx-0 text-center`}
                        >
                            {/* <Link
                                className="relative inline-block mb-4 text-4xl font-normal tracking-wide text-gray-400 transition-all duration-300 ease-in-out select-none md:text-4xl hover:text-white lg:mb-6"
                                href={pathname === "/" ? `${pathname}#${href}` : `/#${href}`}
                                scroll={false}
                                onClick={toggleOpen}
                            >
                                {title}
                            </Link> */}
                            <a
                                className="relative inline-block mb-4 text-4xl font-normal tracking-wide text-gray-400 transition-all duration-300 ease-in-out select-none md:text-4xl hover:text-white lg:mb-6"
                                href={pathname === "/" ? `#${href}` : `/#${href}`}
                                scroll={false}
                                onClick={toggleOpen}
                            >
                                {title}
                            </a>
                        </motion.li>
                    ))}
                    <motion.li
                        variants={fadeInStaggered("up", "tween", 2)}
                    >
                        <button className="inline-flex items-center w-full px-6 py-2 text-xl transition-all bg-green-400 border-0 rounded-full focus:outline-none hover:bg-green-500 md:mt-0 text-black/75 hover:text-white hover:-translate-y-1 hover:scale-110"

                        >
                            <a href="tel:+393345832026" rel="noreferrer" target="_blank">Richiedi Appuntamento</a>
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </button>
                    </motion.li>
                </motion.ul>

            </motion.nav>
        </header>
    )
}

export default Header