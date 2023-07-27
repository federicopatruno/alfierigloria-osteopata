"use client";

import { fees } from '@/constants'
import React from 'react'

import { motion } from "framer-motion"
import { fadeIn } from '@/utils/motion';

const Fees = () => {
    return (
        <section id="fees" className="pt-20 overflow-hidden text-gray-400 bg-gray-900 body-font">
            <div className="container px-5 pt-10 mx-auto">
                <div className="flex flex-col w-full mb-10 text-center">
                    <motion.h1 className="mb-2 text-3xl font-medium text-white sm:text-4xl title-font"
                        variants={fadeIn("down", "tween", 0, 1)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false, amount: 0.25 }}
                    >
                        Tariffe
                    </motion.h1>
                    {/* <p className="mx-auto text-base leading-relaxed lg:w-2/3">Si riceve solo su appuntamento.</p> */}

                </div>
                <div className="flex flex-wrap justify-center -m-4">

                    <motion.div className="w-full p-4 xl:w-1/3 md:w-1/2"
                        variants={fadeIn("right", "tween", 0, 1)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false, amount: 0.25 }}
                    >
                        <div className="relative flex flex-col h-full p-6 overflow-hidden border-2 border-blue-500 rounded-lg">
                            {/* <span className="absolute top-0 right-0 px-3 py-1 text-xs tracking-widest text-white bg-blue-500 rounded-bl">PRIMA</span> */}
                            <h2 className="mb-2 text-sm font-medium tracking-widest text-gray-400 uppercase title-font">Valutazione Osteopatica</h2>
                            <h1 className="flex items-center pb-4 mb-6 text-5xl leading-none text-center text-white border-b border-gray-800">
                                <span>&euro;70</span>
                                <span className="ml-1 text-lg font-normal text-gray-400"></span>
                            </h1>
                            {fees[0].services.map((item, index) =>
                                <p key={index} className="flex items-center mb-2 text-gray-400">
                                    <span className="inline-flex items-center justify-center flex-shrink-0 w-4 h-4 mr-2 text-gray-500 bg-gray-800 rounded-full">
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                            <path d="M20 6L9 17l-5-5"></path>
                                        </svg>
                                    </span>{item}
                                </p>
                            )}


                            <button className="flex items-center w-full px-4 py-2 mt-auto text-white bg-blue-500 border-0 rounded focus:outline-none hover:bg-blue-600"><a href="tel:+393345832026">Prenota Visita</a>
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </button>
                            <p className="mt-3 text-xs text-gray-400"></p>
                        </div>
                    </motion.div>

                    <motion.div className="p-4 xl:w-1/3 md:w-1/2 w-full min-h-[400px]"
                        variants={fadeIn("left", "tween", 0, 1)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false, amount: 0.25 }}
                    >
                        <div className="relative flex flex-col h-full p-6 overflow-hidden border-2 border-gray-700 rounded-lg">
                            <h2 className="mb-2 text-sm font-medium tracking-widest text-gray-400 uppercase title-font">Trattamento di Osteopatia</h2>
                            <h1 className="flex items-center pb-4 mb-6 text-5xl leading-none text-white border-b border-gray-800">
                                <span>&euro;60</span>
                                <span className="ml-1 text-lg font-normal text-gray-400"></span>
                            </h1>
                            <p className="flex items-center mb-2 text-gray-400">
                                <span className="inline-flex items-center justify-center flex-shrink-0 w-4 h-4 mr-2 text-gray-500 bg-gray-800 rounded-full">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                </span>Trattamento
                            </p>

                            <button className="flex items-center w-full px-4 py-2 mt-auto text-white bg-gray-800 border-0 rounded focus:outline-none hover:bg-gray-700"><a href="tel:+393345832026">Prenota Visita</a>
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </button>
                            <p className="mt-3 text-xs text-gray-400"></p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Fees