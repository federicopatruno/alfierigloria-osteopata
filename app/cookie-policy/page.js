import { gdprData } from '@/constants'
import { LegalTerms } from '@/sections'
import React from 'react'


export default function CookiePolicy() {
    const { owner, email } = gdprData
    return (
        <main>
            <section className="overflow-hidden text-gray-400 bg-gray-900 pt-28 body-font">
                <div className="container px-5 mx-auto">
                    <h1 className="text-3xl font-medium text-center text-white sm:text-4xl title-font">Politica dei Cookies</h1>

                    <div className="py-8">
                        <div className="flex flex-col flex-wrap md:flex-nowrap">
                            <div className="mb-4 md:flex-grow">
                                <h2 className="mb-5 text-2xl font-medium text-white title-font">Cosa sono i cookie</h2>
                                <p className="mb-4 leading-relaxed">I Cookie sono costituiti da porzioni di codice installate all’interno del browser che assistono il Titolare nell’erogazione del Servizio in base alle finalità descritte. Alcune delle finalità di installazione dei Cookie potrebbero, inoltre, necessitare del consenso dell’Utente.</p>

                                <p className="mb-4 leading-relaxed">Quando l’installazione di Cookies avviene sulla base del consenso, tale consenso può essere revocato liberamente in ogni momento seguendo le istruzioni contenute in questo documento.</p>

                                <p className="mb-4 leading-relaxed">Questo Sito Web utilizza Cookie comunemente detti “tecnici” o altri Strumenti di Tracciamento analoghi per svolgere attività strettamente necessarie a garantire il funzionamento o la fornitura del Servizio.</p>


                            </div>
                            <div className="mb-4 md:flex-grow">

                                <h2 className="mb-5 text-2xl font-medium text-white title-font">Come gestire le preferenze e prestare o revocare il consenso</h2>
                                <p className="leading-relaxed">Esistono vari modi per gestire le preferenze relative agli Strumenti di Tracciamento e per prestare o revocare il consenso, ove necessario:</p>
                                <a href="#" data-cc="c-settings" aria-haspopup="dialog" className="inline-flex items-center mt-4 text-xl text-blue-400 transition-all hover:text-blue-300">Gestisci Cookies
                                    <svg className="w-5 h-5 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M5 12h14"></path>
                                        <path d="M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>

                                <p className="my-4 leading-relaxed">Gli Utenti possono gestire le preferenze relative agli Strumenti di Tracciamento direttamente tramite le impostazioni dei propri dispositivi – per esempio, possono impedire l’uso o l’archiviazione di Strumenti di Tracciamento.</p>

                                <p className="mb-4 leading-relaxed">In aggiunta, ogni qualvolta l’utilizzo di Strumenti di Tracciamento dipenda da consenso, l’Utente può prestare o revocare tale consenso impostando le proprie preferenze all’interno dell’informativa sui cookie o aggiornando tali preferenze tramite il widget delle impostazioni di tracciamento, se presente.</p>

                                <p className="mb-4 leading-relaxed">Grazie ad apposite funzioni del browser o del dispositivo è anche possibile rimuovere Strumenti di Tracciamento precedentemente salvati.</p>

                                <p className="mb-4 leading-relaxed">Altri Strumenti di Tracciamento presenti nella memoria locale del browser possono essere rimossi cancellando la cronologia di navigazione.</p>

                                <p className="mb-4 leading-relaxed">Per quanto riguarda Strumenti di Tracciamento di terza parte, gli Utenti possono gestire le preferenze e revocare il consenso visitando il relativo link di opt out (qualora disponibile), utilizzando gli strumenti descritti nella privacy policy della terza parte o contattandola direttamente.</p>

                                <p className="mb-4 leading-relaxed">Fermo restando quanto precede, si informano gli Utenti della possibilità di avvalersi delle informazioni presenti su  <a href="http://www.youronlinechoices.eu/" target="_blank" rel="noreferrer" className="text-blue-400 transition-all hover:text-blue-300">YourOnlineChoices</a> (EU), <a href="https://www.networkadvertising.org/understanding-digital-advertising" target="_blank" rel="noreferrer" className="text-blue-400 transition-all hover:text-blue-300">Network Advertising Initiative</a> (USA) e <a href="https://www.aboutads.info/consumers/" target="_blank" rel="noreferrer" className="text-blue-400 transition-all hover:text-blue-300">Digital Advertising Alliance</a> (USA), <a href="https://youradchoices.ca/understnding-online-advertising/" target="_blank" rel="noreferrer" className="text-blue-400 transition-all hover:text-blue-300">DAAC</a> (Canada), <a href="http://www.ddai.info/optout" target="_blank" rel="noreferrer" className="text-blue-400 transition-all hover:text-blue-300">DDAI</a> (Giappone) o altri servizi analoghi. Con questi servizai è possibile gestire le preferenze di tracciamento della maggior parte degli strumenti pubblicitari. Il Titolare, pertanto, consiglia agli Utenti di utilizzare tali risorse in aggiunta alle informazioni fornite nel presente documento.</p>

                                <p className="mb-4 leading-relaxed">La Digital Advertising Alliance mette inoltre a disposizione un’applicazione chiamata <a href="https://youradchoices.com/appchoices" target="_blank" rel="noreferrer" className="text-blue-400 transition-all hover:text-blue-300">
                                    AppChoices</a> che aiuta gli Utenti a controllare la pubblicità comportamentale sulle applicazioni mobili.</p>
                            </div>


                            <div className="mb-4 md:flex-grow">
                                <h2 className="mb-5 text-2xl font-medium text-white title-font">Titolare del trattamento dei dati</h2>

                                <p className="mb-4 leading-relaxed">
                                    {owner}
                                </p>

                                <p className="mb-4 leading-relaxed">
                                    <span className="text-white">Indirizzo email del Titolare:</span> <a href={`mailto:${email}`} target="_blank" rel="noreferrer" className="text-blue-400 transition-all hover:text-blue-300">{email}</a>
                                </p>

                                <p className="mb-4 leading-relaxed">
                                    Dal momento che l’installazione di Cookie e di altri sistemi di tracciamento operata da terze parti tramite i servizi utilizzati all’interno di questo Sito Web non può essere tecnicamente controllata dal Titolare, ogni riferimento specifico a Cookie e sistemi di tracciamento installati da terze parti è da considerarsi indicativo. Per ottenere informazioni complete, l’Utente è invitato a consultare la privacy policy degli eventuali servizi terzi elencati in questo documento.</p>

                                <p className="leading-relaxed">
                                    Vista l’oggettiva complessità di identificazione delle tecnologie basate sui Cookie l’Utente è invitato a contattare il Titolare qualora volesse ricevere qualunque approfondimento relativo all’utilizzo dei Cookie stessi tramite questo Sito Web.

                                </p>

                            </div>
                        </div>

                    </div>
                    <LegalTerms />
                </div>
            </section>
        </main >
    )
}