"use client";

import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion';
import { zoomIn } from '@/utils/motion';

const Gallery = () => {
    return (
        <section className="pt-10 text-gray-600 bg-gray-900 body-font">
            <div className="container flex flex-wrap px-5 pt-12 mx-auto">
                {/* <div className="flex flex-wrap w-full mb-20">
                    <h1 className="mb-4 text-2xl font-medium text-gray-600 sm:text-3xl title-font lg:w-1/3 lg:mb-0">Master Cleanse Reliac Heirloom</h1>
                    <p className="mx-auto text-base leading-relaxed lg:pl-6 lg:w-2/3">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven&apos;t heard of them man bun deep jianbing selfies heirloom.</p>
                </div> */}
                <motion.div className="flex flex-col flex-wrap -m-1 md:-m-2 md:flex-row"
                    variants={zoomIn(0, 1)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.25 }}
                >
                    <div className="flex flex-wrap w-full md:w-1/2"

                    >
                        <div className="w-1/2 p-1 md:p-2">
                            <Image src="/images/treatment/01.jpg" alt="Trattamento | Fig. 1" className="block object-cover object-center w-full h-full" height={300} width={500} />
                        </div>
                        <div className="w-1/2 p-1 md:p-2">
                            <Image src="/images/treatment/02.jpg" alt="Trattamento | Fig. 2" className="block object-cover object-center w-full h-full" height={300} width={500} />
                        </div>

                    </div>
                    <div className="flex flex-wrap w-full md:w-1/2"
                    >

                        <div className="w-1/2 p-1 md:p-2">
                            <Image src="/images/treatment/03.jpg" alt="Trattamento | Fig. 3" className="block object-cover object-center w-full h-full" height={300} width={500} />
                        </div>
                        <div className="w-1/2 p-1 md:p-2">
                            <Image src="/images/treatment/04.jpg" alt="Trattamento | Fig. 4" className="block object-cover object-center w-full h-full" height={300} width={500} />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Gallery