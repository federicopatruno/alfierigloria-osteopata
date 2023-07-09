"use client";

import React from 'react'
import { TfiWrite, TfiEye, TfiHandOpen } from "react-icons/tfi"
import { GiStomach, GiSkeletonInside } from "react-icons/gi"
import { PiBrain, PiTooth } from "react-icons/pi"
import { FaBaby } from "react-icons/fa"
import { motion } from 'framer-motion';
import { fadeIn, zoomOut } from '@/utils/motion';
const Treatment = () => {
    return (
        <section id="treatment" className="pt-10 text-gray-400 bg-gray-900 body-font">
            <div className="container px-5 py-24 mx-auto">



                <div className="flex flex-col w-full mb-10 text-center">
                    <motion.h1 className="mb-2 text-3xl font-medium text-white sm:text-4xl title-font"
                        variants={fadeIn("down", "tween", 0, 1)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false, amount: 0.25 }}
                    >Il Trattamento Osteopatico</motion.h1>

                    <motion.h2 className="mb-2 font-medium tracking-wider text-blue-400 uppercase text-md title-font sm:text-md"
                        variants={fadeIn("right", "tween", 0.25, 1)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false, amount: 0.25 }}
                    >È molto utile per ridurre il dolore e ripristinare e migliorare la salute</motion.h2>

                    <motion.h3 className="mb-8 font-light title-font sm:text-lg text-md text-white/50"
                        variants={fadeIn("right", "tween", 0.375, 1)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false, amount: 0.25 }}
                    >Il trattamento è rivolto a persone di qualunque età</motion.h3>

                </div>

                <div className="mb-20 text-center">
                    <motion.h1 className="mb-4 text-2xl font-medium text-white sm:text-3xl title-font"
                        variants={fadeIn("down", "tween", 0, 1)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false, amount: 0.25 }}
                    >Cos&apos;è l&apos;Osteopatia</motion.h1>
                    <motion.p className="mx-auto mb-4 text-base leading-relaxed text-justify text-gray-400 lg:w-2/3 text-opacity-80"
                        variants={fadeIn("right", "tween", 0.125, 1)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false, amount: 0.25 }}
                    >L’osteopatia è una professione sanitaria (individuata ufficialmente nella legge 3/2018) basata su un approccio integrato e complementare alla medicina tradizionale.</motion.p>
                    <motion.p className="mx-auto mb-4 text-base leading-relaxed text-justify text-gray-400 lg:w-2/3 text-opacity-80"
                        variants={fadeIn("right", "tween", 0.125, 1)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false, amount: 0.25 }}
                    >Attraverso una valutazione osteopatica, individua la “disfunzione somatica”, espressione dell’alterazione dello stato di salute causato da eventi stressanti esterni o interni all’organismo, come traumi e/o patologie. Solitamente si manifestano principalmente sul sistema muscolo scheletrico con dolore o riduzione di mobilità.</motion.p>
                    <motion.p className="mx-auto mb-4 text-base leading-relaxed text-justify text-gray-400 lg:w-2/3 text-opacity-80"
                        variants={fadeIn("right", "tween", 0.125, 1)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false, amount: 0.25 }}
                    >L’osteopata, attraverso tecniche specifiche, stimola il ripristino della mobilità fisiologica a livello dei diversi sistemi (circolatorio, respiratorio, fasciale, nervoso, muscolo-scheletrico) che attraverso un’attività sinergica e coordinata, regolano il normale funzionamento dell’organismo.</motion.p>
                    <motion.div className="flex justify-center mt-6"
                        variants={zoomOut(0, 1)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false, amount: 0.25 }}
                    >
                        <div className="inline-flex w-16 h-1 bg-blue-500 rounded-full"></div>
                    </motion.div>
                </div>

                <div className="mb-20 text-center">
                    <motion.h1 className="text-2xl font-medium text-white sm:text-3xl title-font"
                        variants={fadeIn("down", "tween", 0, 1)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false, amount: 0.25 }}
                    >In cosa consiste il Trattamento</motion.h1>
                </div>

                <motion.div className="flex flex-col items-center pb-10 mx-auto mb-10 border-b border-gray-800 lg:w-3/5 sm:flex-row"
                    variants={fadeIn("right", "tween", 0, 1)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.25 }}
                >
                    <div className="inline-flex items-center justify-center flex-shrink-0 w-20 h-20 text-blue-400 bg-gray-800 rounded-full sm:w-32 sm:h-32 sm:mr-10">

                        <TfiWrite className="w-10 h-10 sm:w-16 sm:h-16" />


                        {/* <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 sm:w-16 sm:h-16" viewBox="0 0 24 24">
                            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                            <circle cx="12" cy="7" r="4"></circle>
                        </svg> */}
                    </div>

                    <div className="flex-grow mt-6 text-center sm:text-left sm:mt-0">
                        <h2 className="mb-2 text-lg font-medium text-white title-font">Anamnesi</h2>
                        <p className="text-base leading-relaxed">La raccolta di dati relativi alla storia di salute del paziente.<br />Le domande vengono poste per avere un quadro generale dello stato clinico e per escludere controindicazioni al trattamento.</p>
                        {/* <a className="inline-flex items-center mt-3 text-blue-400">Learn More
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </a> */}
                    </div>
                </motion.div>


                <motion.div className="flex flex-col items-center pb-10 mx-auto mb-10 border-b border-gray-800 lg:w-3/5 sm:flex-row"
                    variants={fadeIn("left", "tween", 0, 1)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.25 }}
                >
                    <div className="flex-grow mt-6 text-center sm:text-left sm:mt-0">
                        <h2 className="mb-2 text-lg font-medium text-white title-font">Esame Visivo</h2>
                        <p className="text-base leading-relaxed">Il paziente viene esaminato attraverso la valutazione della postura, delle curve della colonna vertebrale e delle eventuali asimmetrie.</p>
                        {/* <a className="inline-flex items-center mt-3 text-blue-400">Learn More
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </a> */}
                    </div>
                    <div className="inline-flex items-center justify-center flex-shrink-0 order-first w-20 h-20 text-blue-400 bg-gray-800 rounded-full sm:w-32 sm:order-none sm:h-32 sm:ml-10">
                        <TfiEye className="w-10 h-10 sm:w-16 sm:h-16" />
                        {/* <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 sm:w-16 sm:h-16" viewBox="0 0 24 24">
                            <circle cx="6" cy="6" r="3"></circle>
                            <circle cx="6" cy="18" r="3"></circle>
                            <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                        </svg> */}
                    </div>
                </motion.div>

                <motion.div className="flex flex-col items-center mx-auto lg:w-3/5 sm:flex-row"
                    variants={fadeIn("right", "tween", 0, 1)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.25 }}
                >
                    <div className="inline-flex items-center justify-center flex-shrink-0 w-20 h-20 text-blue-400 bg-gray-800 rounded-full sm:w-32 sm:h-32 sm:mr-10">
                        <TfiHandOpen className="w-10 h-10 sm:w-16 sm:h-16" />
                        {/* <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 sm:w-16 sm:h-16" viewBox="0 0 24 24">
                            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                            <circle cx="12" cy="7" r="4"></circle>
                        </svg> */}
                    </div>
                    <div className="flex-grow mt-6 text-center sm:text-left sm:mt-0">
                        <h2 className="mb-2 text-lg font-medium text-white title-font">Palpazione e trattamento</h2>
                        <p className="text-base leading-relaxed">Vengono individuate delle strutture disfunzionali e l’applicazione delle tecniche manipolative in funzione delle necessità terapeutiche riscontrate.</p>
                        {/* <a className="inline-flex items-center mt-3 text-blue-400">Learn More
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </a> */}
                    </div>
                </motion.div>

                <div className="my-20 text-center">
                    <motion.h1 className="mb-4 text-2xl font-medium text-white sm:text-3xl title-font"
                        variants={fadeIn("down", "tween", 0, 1)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false, amount: 0.25 }}
                    >È Doloroso il Trattamento?</motion.h1>
                    <motion.p className="mx-auto mb-4 text-base leading-relaxed text-justify text-gray-400 lg:w-2/3 text-opacity-80"
                        variants={fadeIn("right", "tween", 0.125, 1)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false, amount: 0.25 }}
                    >Il trattamento osteopatico <span className="font-semibold text-white/75">non è doloroso</span> ed è risolutivo solo nel caso in cui le disfunzioni non derivino da processi cronici o degenerativi irreversibili.</motion.p>
                    <motion.p className="mx-auto mb-4 text-base leading-relaxed text-justify text-gray-400 lg:w-2/3 text-opacity-80"
                        variants={fadeIn("right", "tween", 0.125, 1)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false, amount: 0.25 }}
                    >In quest’ultimo caso, contribuisce molto ad alleviare il dolore e costituisce un valido alleato per il paziente nella convivenza con la malattia.</motion.p>
                    <motion.p className="mx-auto mb-4 text-base leading-relaxed text-justify text-gray-400 lg:w-2/3 text-opacity-80"
                        variants={fadeIn("right", "tween", 0.125, 1)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false, amount: 0.25 }}
                    >Il numero delle sedute necessarie dipende dalla risposta individuale del paziente al trattamento.</motion.p>
                    <motion.div className="flex justify-center mt-6"
                        variants={zoomOut(0, 1)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false, amount: 0.25 }}
                    >
                        <div className="inline-flex w-16 h-1 bg-blue-500 rounded-full"></div>
                    </motion.div>
                </div>

                <div className="mb-20 text-center">
                    <motion.h1 className="text-2xl font-medium text-white sm:text-3xl title-font"
                        variants={fadeIn("down", "tween", 0, 1)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false, amount: 0.25 }}
                    >Per quali problematiche risulta efficace?
                    </motion.h1>
                </div>

                <motion.div className="flex flex-col items-center pb-10 mx-auto mb-10 border-b border-gray-800 lg:w-3/5 sm:flex-row"
                    variants={fadeIn("right", "tween", 0, 1)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.25 }}
                >
                    <div className="inline-flex items-center justify-center flex-shrink-0 w-20 h-20 text-blue-400 bg-gray-800 rounded-full sm:w-32 sm:h-32 sm:mr-10">
                        <GiSkeletonInside className="w-10 h-10 sm:w-16 sm:h-16" />
                        {/* <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 sm:w-16 sm:h-16" viewBox="0 0 24 24">
                            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                            <circle cx="12" cy="7" r="4"></circle>
                        </svg> */}
                    </div>

                    <div className="flex-grow mt-6 text-center sm:text-left sm:mt-0">
                        <h2 className="mb-2 text-lg font-medium text-white title-font">Affezioni muscolo-schelettriche</h2>
                        <p className="text-base leading-relaxed">Come cervicalgie e dorsalgie.</p>
                        {/* <a className="inline-flex items-center mt-3 text-blue-400">Learn More
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </a> */}
                    </div>
                </motion.div>


                <motion.div className="flex flex-col items-center pb-10 mx-auto mb-10 border-b border-gray-800 lg:w-3/5 sm:flex-row"
                    variants={fadeIn("left", "tween", 0, 1)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.25 }}
                >
                    <div className="flex-grow mt-6 text-center sm:text-left sm:mt-0">
                        <h2 className="mb-2 text-lg font-medium text-white title-font">Disordini cranio-sacrali</h2>
                        <p className="text-base leading-relaxed">Quali cefalee ed emicranie.</p>
                        {/* <a className="inline-flex items-center mt-3 text-blue-400">Learn More
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </a> */}
                    </div>
                    <div className="inline-flex items-center justify-center flex-shrink-0 order-first w-20 h-20 text-blue-400 bg-gray-800 rounded-full sm:w-32 sm:order-none sm:h-32 sm:ml-10">
                        <PiBrain className="w-10 h-10 sm:w-16 sm:h-16" />
                        {/* <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 sm:w-16 sm:h-16" viewBox="0 0 24 24">
                            <circle cx="6" cy="6" r="3"></circle>
                            <circle cx="6" cy="18" r="3"></circle>
                            <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                        </svg> */}
                    </div>
                </motion.div>


                <motion.div className="flex flex-col items-center pb-10 mx-auto mb-10 border-b border-gray-800 lg:w-3/5 sm:flex-row"
                    variants={fadeIn("right", "tween", 0, 1)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.25 }}
                >
                    <div className="inline-flex items-center justify-center flex-shrink-0 w-20 h-20 text-blue-400 bg-gray-800 rounded-full sm:w-32 sm:h-32 sm:mr-10">
                        <GiStomach className="w-10 h-10 sm:w-16 sm:h-16" />
                        {/* <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 sm:w-16 sm:h-16" viewBox="0 0 24 24">
                            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                            <circle cx="12" cy="7" r="4"></circle>
                        </svg> */}
                    </div>

                    <div className="flex-grow mt-6 text-center sm:text-left sm:mt-0">
                        <h2 className="mb-2 text-lg font-medium text-white title-font">Disordini viscerali</h2>
                        <p className="text-base leading-relaxed">Ad esempio colon irritabile e stitichezza.</p>
                        {/* <a className="inline-flex items-center mt-3 text-blue-400">Learn More
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </a> */}
                    </div>
                </motion.div>


                <motion.div className="flex flex-col items-center pb-10 mx-auto mb-10 border-b border-gray-800 lg:w-3/5 sm:flex-row"
                    variants={fadeIn("left", "tween", 0, 1)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.25 }}
                >
                    <div className="flex-grow mt-6 text-center sm:text-left sm:mt-0">
                        <h2 className="mb-2 text-lg font-medium text-white title-font">Disordini legati al periodo pre e post gravidanza.</h2>
                        <p className="text-base leading-relaxed">Che comprendono edema degli arti inferiori, depressione post partum e alterazione dell’umore.</p>
                        {/* <a className="inline-flex items-center mt-3 text-blue-400">Learn More
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </a> */}
                    </div>
                    <div className="inline-flex items-center justify-center flex-shrink-0 order-first w-20 h-20 text-blue-400 bg-gray-800 rounded-full sm:w-32 sm:order-none sm:h-32 sm:ml-10">
                        <FaBaby className="w-10 h-10 sm:w-16 sm:h-16" />
                        {/* <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 sm:w-16 sm:h-16" viewBox="0 0 24 24">
                            <circle cx="6" cy="6" r="3"></circle>
                            <circle cx="6" cy="18" r="3"></circle>
                            <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                        </svg> */}
                    </div>
                </motion.div>

                <motion.div className="flex flex-col items-center mx-auto lg:w-3/5 sm:flex-row"
                    variants={fadeIn("right", "tween", 0, 1)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.25 }}
                >
                    <div className="inline-flex items-center justify-center flex-shrink-0 w-20 h-20 text-blue-400 bg-gray-800 rounded-full sm:w-32 sm:h-32 sm:mr-10">
                        <PiTooth className="w-10 h-10 sm:w-16 sm:h-16" />
                        {/* <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 sm:w-16 sm:h-16" viewBox="0 0 24 24">
                            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                            <circle cx="12" cy="7" r="4"></circle>
                        </svg> */}
                    </div>
                    <div className="flex-grow mt-6 text-center sm:text-left sm:mt-0">
                        <h2 className="mb-2 text-lg font-medium text-white title-font">Affezioni del sistema stomatognatico.</h2>
                        <p className="text-base leading-relaxed">Dolori derivanti dalla malocclusione e bruxismo.</p>
                        {/* <a className="inline-flex items-center mt-3 text-blue-400">Learn More
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </a> */}
                    </div>
                </motion.div>

                <motion.div className="flex justify-center mx-auto mt-16"
                    variants={fadeIn("up", "tween", 0, 1)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.25 }}
                >

                    <button className="inline-flex items-center px-6 py-2 text-lg transition-all bg-green-400 border-0 rounded-full text-black/75 focus:outline-none hover:bg-green-500 hover:text-white hover:-translate-y-1 hover:scale-110"><a href="tel:+393345832026" rel="noreferrer" target="_blank">Richiedi Appuntamento</a>
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </button>
                </motion.div>
            </div>
        </section>
    )
}

export default Treatment