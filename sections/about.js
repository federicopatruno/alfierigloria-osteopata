"use client";

import { about } from '@/constants'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion';
import { fadeIn } from '@/utils/motion';

const About = () => {
    return (
        <section id="about" className="pt-20 text-gray-400 bg-gray-900 body-font">
            <div className="container flex flex-col items-center justify-center px-5 pt-10 mx-auto">
                <motion.div className="container flex flex-col items-center justify-center mx-auto"
                    variants={fadeIn("down", "tween", 0, 1)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.25 }}
                >

                    <Image
                        className="object-cover object-center w-4/6 mb-10 rounded-full aspect-square lg:w-1/4 md:w-3/6" alt="D.sa Alfieri Gloria Osteopata" src="/images/alfieri-gloria-osteopata.jpeg" width={192} height={192} priority />
                </motion.div>
                <div className="w-full text-center lg:w-2/3">
                    <motion.h1 className="mb-2 text-3xl font-medium text-white title-font sm:text-4xl"
                        variants={fadeIn("down", "tween", 0.125, 1)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false, amount: 0.25 }}
                    >Dr.sa Alfieri Gloria Osteopata</motion.h1>

                    <motion.h2 className="mb-2 font-medium tracking-wider text-blue-400 uppercase text-md title-font sm:text-md"
                        variants={fadeIn("right", "tween", 0.25, 1)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false, amount: 0.25 }}
                    >Osteopata iscritta al ROI con sede ad Ancona nelle Marche</motion.h2>

                    <motion.h3 className="mb-8 font-light title-font sm:text-lg text-md text-white/50"
                        variants={fadeIn("right", "tween", 0.375, 1)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false, amount: 0.25 }}
                    >Collaboro con Ortopedici, Fisioterapisti e Psicoterapeuti</motion.h3>

                    {about.map((item, index) => (<motion.p
                        variants={fadeIn("right", "tween", 0, 1)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false, amount: 0.25 }}
                        key={index} className="mb-4 leading-relaxed text-justify">{item}</motion.p>))}
                    <motion.div className="flex justify-center mt-10"
                        variants={fadeIn("up", "tween", 0, 1)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false, amount: 0.25 }}
                    >
                        <button className="inline-flex items-center px-6 py-2 text-lg transition-all bg-green-400 border-0 rounded-full text-black/75 focus:outline-none hover:bg-green-500 hover:text-white hover:-translate-y-1 hover:scale-110"

                        ><a href="tel:+393345832026" rel="noreferrer" target="_blank">Richiedi Appuntamento</a>
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default About