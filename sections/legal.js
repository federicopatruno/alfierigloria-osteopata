import { legalTerms } from '@/constants'
import React from 'react'

const LegalTerms = () => {
    return (
        <div className="flex flex-col flex-wrap border-t-2 border-gray-800 md:flex-nowrap">
            <div className="">
                <div className="flex flex-wrap py-8 md:flex-nowrap">
                    <div className="md:flex-grow">
                        <h2 className="mb-5 text-2xl font-medium text-white title-font">Definizioni e riferimenti legali</h2>
                        {
                            legalTerms.map(({ title, content }, index) => <>
                                <h3 key={index} className="mb-3 text-xl font-medium text-white title-font">{title}</h3>
                                <p key={title} className="mb-4 leading-relaxed">{content}</p>
                            </>
                            )
                        }



                    </div>
                </div>
            </div>
            <div className="border-t-2 border-gray-800">
                <div className="flex flex-wrap py-8 md:flex-nowrap">
                    <div className="md:flex-grow">
                        <h3 className="mb-3 text-xl font-medium text-white title-font">Riferimenti legali</h3>
                        <p className="mb-4 leading-relaxed">La presente informativa privacy è redatta sulla base di molteplici ordinamenti legislativi, inclusi gli artt. 13 e 14 del Regolamento (UE) 2016/679.</p>

                        <p className="leading-relaxed">Ove non diversamente specificato, questa informativa privacy riguarda esclusivamente questa Applicazione.</p>




                    </div>
                </div>
            </div>
        </div>
    )
}

export default LegalTerms