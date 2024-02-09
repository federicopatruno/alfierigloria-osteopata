import { fees } from '@/constants'
import { fadeIn } from '@/utils/motion';
import { MotionDiv } from '../shared/MotionDiv';
import Divider from '../shared/ui/Divider';

const Fees = () => {
    return (
        <section id="fees" className="py-24 overflow-hidden text-gray-400 bg-gray-900 body-font">
            <div className="container mx-auto max-sm:w-11/12">
                <MotionDiv
                    className="flex flex-col w-full mx-auto mb-8 text-center lg:w-2/3 gap-y-2"
                    variants={fadeIn("up", "tween", 0, 1)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.25 }}
                >
                    <h1 className="title">Tariffe</h1>
                </MotionDiv>
                <div className="flex flex-col items-center justify-center gap-y-8">
                    <div className="flex flex-wrap justify-center md:w-3/4 lg:w-2/3">
                        {
                            fees.map(({ title, services, fee }, index) => (
                                <MotionDiv className="w-3/4 p-4 sm:w-1/2 min-h-80"
                                    key={index}
                                    variants={fadeIn(index % 2 === 0 ? "right" : "left", "tween", 0, 1)}
                                    initial="hidden"
                                    whileInView="show"
                                    viewport={{ once: false, amount: 0.25 }}
                                >
                                    <div className="flex flex-col items-center h-full p-6 overflow-hidden border-2 border-blue-500 rounded-lg">
                                        <h2 className="mx-auto mb-4 text-sm font-medium tracking-[3px] text-blue-300 uppercase title-font">{title}</h2>
                                        <h1 className="flex items-center mx-auto mb-4 text-5xl leading-none text-center text-white">
                                            <span>&euro;{fee}</span>
                                            <span className="ml-1 text-lg font-normal text-gray-300"></span>
                                        </h1>
                                        <Divider />
                                        <div className="mt-4">
                                            {services.map((service, index) =>
                                                <p key={index} className="flex items-center mb-2 text-gray-300">
                                                    <span className="inline-flex items-center justify-center flex-shrink-0 w-4 h-4 mr-2 text-gray-200 bg-blue-500 rounded-full">
                                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                                            <path d="M20 6L9 17l-5-5"></path>
                                                        </svg>
                                                    </span>
                                                    {service}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                </MotionDiv>
                            ))}
                    </div>
                    <MotionDiv className="flex"
                        variants={fadeIn("up", "tween", 0, 1)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.25 }}
                    >
                        <a className="flex items-center px-4 py-2 mt-auto text-white transition-all duration-500 bg-blue-500 border-0 rounded-full book-appointment focus:outline-none hover:bg-green-500 hover:scale-110" href="tel:+393345832026">Prenota Visita
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </a>
                    </MotionDiv>
                </div>
            </div>
        </section>
    )
}

export default Fees