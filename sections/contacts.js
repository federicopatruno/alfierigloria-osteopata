"use client";

import React from 'react'
import { motion } from 'framer-motion';
import { fadeIn, slideIn } from '@/utils/motion';

const Contacts = () => {
    return (
        <section id="contacts" className="relative pt-8 text-gray-400 bg-gray-900 body-font lg:pt-0">
            <div className="container px-5 pt-24 mx-auto">
                <div className="flex flex-col w-full mb-12 text-center">
                    <motion.h1 className="mb-4 text-2xl font-medium text-white sm:text-3xl title-font"
                        variants={fadeIn("down", "tween", 0, 1)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false, amount: 0.25 }}
                    >
                        Contatti
                    </motion.h1>
                    <motion.p className="mx-auto text-base leading-relaxed lg:w-2/3"
                        variants={fadeIn("right", "tween", 0.25, 1)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false, amount: 0.25 }}
                    >Si Riceve solo su appuntamento.</motion.p>
                </div>
            </div>
            <div className="container flex flex-wrap px-5 pt-8 pb-24 mx-auto sm:flex-nowrap">
                <div className="relative flex items-end justify-start p-10 overflow-hidden bg-gray-900 rounded-lg lg:w-full md:w-full sm:mr-10 min-h-[600px]">
                    <motion.iframe width="100%" height="100%" title="map" className="absolute inset-0" frameBorder="0" marginHeight="0" marginWidth="0" scrolling="no" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2888.4855558757517!2d13.50979587626855!3d43.61725195475499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132d7ffc82fa969f%3A0x9e5ce1481b050e4b!2sOsteopata%20Gloria%20Alfieri!5e0!3m2!1sen!2sit!4v1688632870919!5m2!1sen!2sit"
                        variants={fadeIn("right", "tween", 0, 1)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false, amount: 0.25 }}
                    ></motion.iframe>
                    <motion.div className="relative flex flex-wrap py-6 bg-gray-900 rounded shadow-md"
                        variants={fadeIn("left", "tween", 0, 1)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false, amount: 0.25 }}
                    >
                        <div className="px-6 lg:w-1/2">
                            <h2 className="text-xs font-semibold tracking-widest text-white title-font">STUDIO MEDICO</h2>
                            <p className="mt-1">Via Villafranca 4 - 60122, Ancona</p>
                            <h2 className="mt-4 text-xs font-semibold tracking-widest text-white title-font">ORARI</h2>
                            <p className="mt-1">da Lunedì a Sabato: 09:00 - 19:00</p>
                        </div>
                        <div className="px-6 mt-4 lg:w-1/2 lg:mt-0">
                            <h2 className="text-xs font-semibold tracking-widest text-white title-font">EMAIL</h2>
                            <a className="leading-relaxed text-blue-400" href="mailto:alfierigloria.osteopata@gmail.com?subject=Informazioni Visita Osteopatica">alfierigloriaosteopata@gmail.com</a>
                            <h2 className="mt-4 text-xs font-semibold tracking-widest text-white title-font">PRENOTAZIONI</h2>
                            <a className="leading-relaxed text-blue-400" href="tel:+393345832026">+39 334 5832026</a>
                        </div>
                    </motion.div>
                </div>
                {/* <div className="flex flex-col w-full mt-8 lg:w-1/3 md:w-1/2 md:ml-auto md:py-8 md:mt-0">
                    <h2 className="mb-1 text-lg font-medium text-white title-font">Orari Studio Medico</h2>
                    <p className="mb-5 leading-relaxed">da Lunedì al Sabato: 09:00 - 19:00</p>
                    <button className="px-6 py-2 text-lg text-white bg-blue-500 border-0 rounded focus:outline-none hover:bg-blue-600">Prenota Visita</button>
                    <p className="mt-3 text-xs text-gray-400 text-opacity-90">Si Riceve solo su appuntamento.</p>
                </div> */}
            </div>
        </section>
    )
}

export default Contacts