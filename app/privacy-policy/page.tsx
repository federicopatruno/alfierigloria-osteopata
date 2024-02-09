import LegalTerms from "@/components/shared/LegalTerms";
import { gdprData } from "@/constants";
import Link from "next/link";

export default function PrivacyPolicy() {
  const { owner, email } = gdprData;
  return (
    <main>
      <section className="overflow-hidden text-gray-300 bg-blue-950 body-font pt-28">
        <div className="container px-5 mx-auto">
          <h1 className="text-3xl font-medium text-center text-white sm:text-4xl title-font">
            Informativa sulla Privacy
          </h1>

          <div className="py-8">
            <div className="flex flex-col flex-wrap md:flex-nowrap">
              <div className="mb-4 md:flex-grow">
                <h2 className="mb-5 text-2xl font-medium text-white title-font">
                  Titolare del trattamento dei dati
                </h2>

                <p className="mb-4 leading-relaxed">{owner}</p>

                <p className="mb-4 leading-relaxed">
                  <span className="text-white">
                    Indirizzo email del Titolare:
                  </span>{" "}
                  <a
                    href={`mailto:${email}`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-400 transition-all hover:text-blue-300"
                  >
                    {email}
                  </a>
                </p>

                <p className="leading-relaxed">
                  Per avere informazioni circa i tuoi dati personali raccolti,
                  le finalità ed i soggetti con cui i dati vengono condivisi,
                  contatta il Titolare.
                </p>
              </div>
              <div className="mt-4 mb-4 md:flex-grow">
                <h2 className="mb-5 text-2xl font-medium text-white title-font">
                  Tipologia dei Dati Raccolti
                </h2>
                <p className="mb-4 leading-relaxed">
                  Il Titolare non fornisce una lista di tipologie di Dati
                  Personali raccolti.
                </p>

                <p className="mb-4 leading-relaxed">
                  Dettagli completi su ciascuna tipologia di dati raccolti sono
                  forniti nelle sezioni dedicate di questa privacy policy o
                  mediante specifici testi informativi visualizzati prima della
                  raccolta dei dati stessi.
                  <br />I Dati Personali possono essere liberamente forniti
                  dall&apos;Utente o, nel caso di Dati di Utilizzo, raccolti
                  automaticamente durante l&apos;uso di questa Applicazione.
                </p>

                <p className="mb-4 leading-relaxed">
                  Se non diversamente specificato, tutti i Dati richiesti da
                  questa Applicazione sono obbligatori. Se l&apos;Utente rifiuta
                  di comunicarli, potrebbe essere impossibile per questa
                  Applicazione fornire il Servizio. Nei casi in cui questa
                  Applicazione indichi alcuni Dati come facoltativi, gli Utenti
                  sono liberi di astenersi dal comunicare tali Dati, senza che
                  ciò abbia alcuna conseguenza sulla disponibilità del Servizio
                  o sulla sua operatività.
                </p>

                <p className="mb-4 leading-relaxed">
                  Gli Utenti che dovessero avere dubbi su quali Dati siano
                  obbligatori, sono incoraggiati a contattare il Titolare.
                </p>

                <p className="mb-4 leading-relaxed">
                  L&apos;eventuale utilizzo di Cookie – o di altri strumenti di
                  tracciamento – da parte di questa Applicazione o dei titolari
                  dei servizi terzi utilizzati da questa Applicazione, ove non
                  diversamente precisato, ha la finalità di fornire il Servizio
                  richiesto dall&apos;Utente, oltre alle ulteriori finalità
                  descritte nel presente documento e nella Cookie Policy, se
                  disponibile.
                </p>

                <p className="leading-relaxed">
                  L&apos;Utente si assume la responsabilità dei Dati Personali
                  di terzi ottenuti, pubblicati o condivisi mediante questa
                  Applicazione e garantisce di avere il diritto di comunicarli o
                  diffonderli, liberando il Titolare da qualsiasi responsabilità
                  verso terzi.
                </p>
              </div>

              <div className="mt-4 mb-4 md:flex-grow">
                <h2 className="mb-5 text-2xl font-medium text-white title-font">
                  Modalità e luogo del trattamento dei Dati raccolti
                </h2>

                <h3 className="mb-3 text-xl font-medium text-white title-font">
                  Modalità di trattamento
                </h3>

                <p className="mb-4 leading-relaxed">
                  Il Titolare adotta le opportune misure di sicurezza volte ad
                  impedire l&apos;accesso, la divulgazione, la modifica o la
                  distruzione non autorizzate dei Dati Personali.
                </p>

                <p className="mb-4 leading-relaxed">
                  Il trattamento viene effettuato mediante strumenti informatici
                  e/o telematici, con modalità organizzative e con logiche
                  strettamente correlate alle finalità indicate. Oltre al
                  Titolare, in alcuni casi, potrebbero avere accesso ai Dati
                  altri soggetti coinvolti nell&apos;organizzazione di questa
                  Applicazione (personale amministrativo, commerciale,
                  marketing, legali, amministratori di sistema) ovvero soggetti
                  esterni (come fornitori di servizi tecnici terzi, corrieri
                  postali, hosting provider, società informatiche, agenzie di
                  comunicazione) nominati anche, se necessario, Responsabili del
                  Trattamento da parte del Titolare. L&apos;elenco aggiornato
                  dei Responsabili potrà sempre essere richiesto al Titolare del
                  Trattamento.
                </p>

                <h3 className="mb-3 text-xl font-medium text-white title-font">
                  Base giuridica del trattamento
                </h3>

                <p className="mb-4 leading-relaxed">
                  Il Titolare tratta Dati Personali relativi all&apos;Utente in
                  caso sussista una delle seguenti condizioni:
                </p>

                <ul className="mb-4 ml-4 list-disc list-outside">
                  <li>
                    l&apos;Utente ha prestato il consenso per una o più finalità
                    specifiche; Nota: in alcuni ordinamenti il Titolare può
                    essere autorizzato a trattare Dati Personali senza che debba
                    sussistere il consenso dell&apos;Utente o un&apos;altra
                    delle basi giuridiche specificate di seguito, fino a quando
                    l&apos;Utente non si opponga (“opt-out”) a tale trattamento.
                    Ciò non è tuttavia applicabile qualora il trattamento di
                    Dati Personali sia regolato dalla legislazione europea in
                    materia di protezione dei Dati Personali;
                  </li>
                  <li>
                    il trattamento è necessario all&apos;esecuzione di un
                    contratto con l&apos;Utente e/o all&apos;esecuzione di
                    misure precontrattuali;
                  </li>
                  <li>
                    il trattamento è necessario per adempiere un obbligo legale
                    al quale è soggetto il Titolare;
                  </li>
                  <li>
                    il trattamento è necessario per l&apos;esecuzione di un
                    compito di interesse pubblico o per l&apos;esercizio di
                    pubblici poteri di cui è investito il Titolare;
                  </li>
                  <li>
                    il trattamento è necessario per il perseguimento del
                    legittimo interesse del Titolare o di terzi.
                  </li>
                </ul>

                <p className="mb-4 leading-relaxed">
                  È comunque sempre possibile richiedere al Titolare di chiarire
                  la concreta base giuridica di ciascun trattamento ed in
                  particolare di specificare se il trattamento sia basato sulla
                  legge, previsto da un contratto o necessario per concludere un
                  contratto.
                </p>

                <h3 className="mb-3 text-xl font-medium text-white title-font">
                  Luogo
                </h3>

                <p className="mb-4 leading-relaxed">
                  I Dati sono trattati presso le sedi operative del Titolare ed
                  in ogni altro luogo in cui le parti coinvolte nel trattamento
                  siano localizzate. Per ulteriori informazioni, contatta il
                  Titolare.
                </p>

                <p className="mb-4 leading-relaxed">
                  I Dati Personali dell&apos;Utente potrebbero essere trasferiti
                  in un paese diverso da quello in cui l&apos;Utente si trova.
                  Per ottenere ulteriori informazioni sul luogo del trattamento
                  l&apos;Utente può fare riferimento alla sezione relativa ai
                  dettagli sul trattamento dei Dati Personali.
                </p>

                <p className="mb-4 leading-relaxed">
                  L&apos;Utente ha diritto a ottenere informazioni in merito
                  alla base giuridica del trasferimento di Dati al di fuori
                  dell&apos;Unione Europea o ad un&apos;organizzazione
                  internazionale di diritto internazionale pubblico o costituita
                  da due o più paesi, come ad esempio l&apos;ONU, nonché in
                  merito alle misure di sicurezza adottate dal Titolare per
                  proteggere i Dati.
                </p>

                <p className="mb-4 leading-relaxed">
                  L&apos;Utente può verificare se abbia luogo uno dei
                  trasferimenti appena descritti esaminando la sezione di questo
                  documento relativa ai dettagli sul trattamento di Dati
                  Personali o chiedere informazioni al Titolare contattandolo
                  agli estremi riportati in apertura.
                </p>

                <h3 className="mb-3 text-xl font-medium text-white title-font">
                  Periodo di Conservazione
                </h3>

                <p className="mb-4 leading-relaxed">
                  I Dati sono trattati e conservati per il tempo richiesto dalle
                  finalità per le quali sono stati raccolti.
                </p>

                <p className="mb-4 leading-relaxed">Pertanto:</p>

                <ul className="mb-4 ml-4 list-disc list-outside">
                  <li>
                    i Dati Personali raccolti per scopi collegati
                    all&apos;esecuzione di un contratto tra il Titolare e
                    l&apos;Utente saranno trattenuti sino a quando sia
                    completata l&apos;esecuzione di tale contratto;
                  </li>
                  <li>
                    i Dati Personali raccolti per finalità riconducibili
                    all&apos;interesse legittimo del Titolare saranno trattenuti
                    sino al soddisfacimento di tale interesse. L&apos;Utente può
                    ottenere ulteriori informazioni in merito all&apos;interesse
                    legittimo perseguito dal Titolare nelle relative sezioni di
                    questo documento o contattando il Titolare.
                  </li>
                </ul>

                <p className="mb-4 leading-relaxed">
                  Quando il trattamento è basato sul consenso dell&apos;Utente,
                  il Titolare può conservare i Dati Personali più a lungo sino a
                  quando detto consenso non venga revocato. Inoltre, il Titolare
                  potrebbe essere obbligato a conservare i Dati Personali per un
                  periodo più lungo in ottemperanza ad un obbligo di legge o per
                  ordine di un&apos;autorità.
                </p>

                <p className="leading-relaxed">
                  Al termine del periodo di conservazione i Dati Personali
                  saranno cancellati. Pertanto, allo spirare di tale termine il
                  diritto di accesso, cancellazione, rettificazione ed il
                  diritto alla portabilità dei Dati non potranno più essere
                  esercitati.
                </p>
              </div>

              <div className="mt-4 mb-4 md:flex-grow">
                <h2 className="mb-5 text-2xl font-medium text-white title-font">
                  Diritti dell&apos;Utente
                </h2>

                <p className="mb-4 leading-relaxed">
                  Gli Utenti possono esercitare determinati diritti con
                  riferimento ai Dati trattati dal Titolare.
                </p>

                <p className="mb-4 leading-relaxed">
                  In particolare, l&apos;Utente ha il diritto di:
                </p>

                <ul className="mb-4 ml-4 list-disc list-outside">
                  <li>
                    <span className="text-white">
                      revocare il consenso in ogni momento.
                    </span>{" "}
                    L&apos;Utente può revocare il consenso al trattamento dei
                    propri Dati Personali precedentemente espresso.
                  </li>
                  <li>
                    <span className="text-white">
                      opporsi al trattamento dei propri Dati.
                    </span>{" "}
                    L&apos;Utente può opporsi al trattamento dei propri Dati
                    quando esso avviene su una base giuridica diversa dal
                    consenso. Ulteriori dettagli sul diritto di opposizione sono
                    indicati nella sezione sottostante.
                  </li>
                  <li>
                    <span className="text-white">accedere ai propri Dati.</span>{" "}
                    L&apos;Utente ha diritto ad ottenere informazioni sui Dati
                    trattati dal Titolare, su determinati aspetti del
                    trattamento ed a ricevere una copia dei Dati trattati.
                  </li>
                  <li>
                    <span className="text-white">
                      verificare e chiedere la rettificazione.
                    </span>{" "}
                    L&apos;Utente può verificare la correttezza dei propri Dati
                    e richiederne l&apos;aggiornamento o la correzione.
                  </li>
                  <li>
                    <span className="text-white">
                      ottenere la limitazione del trattamento.
                    </span>{" "}
                    Quando ricorrono determinate condizioni, l&apos;Utente può
                    richiedere la limitazione del trattamento dei propri Dati.
                    In tal caso il Titolare non tratterà i Dati per alcun altro
                    scopo se non la loro conservazione.
                  </li>
                  <li>
                    <span className="text-white">
                      ottenere la cancellazione o rimozione dei propri Dati
                      Personali.
                    </span>{" "}
                    Quando ricorrono determinate condizioni, l&apos;Utente può
                    richiedere la cancellazione dei propri Dati da parte del
                    Titolare.
                  </li>
                  <li>
                    <span className="text-white">
                      ricevere i propri Dati o farli trasferire ad altro
                      titolare.
                    </span>{" "}
                    L&apos;Utente ha diritto di ricevere i propri Dati in
                    formato strutturato, di uso comune e leggibile da
                    dispositivo automatico e, ove tecnicamente fattibile, di
                    ottenerne il trasferimento senza ostacoli ad un altro
                    titolare. Questa disposizione è applicabile quando i Dati
                    sono trattati con strumenti automatizzati ed il trattamento
                    è basato sul consenso dell&apos;Utente, su un contratto di
                    cui l&apos;Utente è parte o su misure contrattuali ad esso
                    connesse.
                  </li>
                  <li>
                    <span className="text-white">proporre reclamo.</span>{" "}
                    L&apos;Utente può proporre un reclamo all&apos;autorità di
                    controllo della protezione dei dati personali competente o
                    agire in sede giudiziale.
                  </li>
                </ul>
              </div>

              <div className="mt-4 mb-4 md:flex-grow">
                <h2 className="mb-5 text-2xl font-medium text-white title-font">
                  Dettagli sul diritto di opposizione
                </h2>

                <p className="mb-4 leading-relaxed">
                  Quando i Dati Personali sono trattati nell&apos;interesse
                  pubblico, nell&apos;esercizio di pubblici poteri di cui è
                  investito il Titolare oppure per perseguire un interesse
                  legittimo del Titolare, gli Utenti hanno diritto ad opporsi al
                  trattamento per motivi connessi alla loro situazione
                  particolare.
                </p>

                <p className="mb-4 leading-relaxed">
                  Si fa presente agli Utenti che, ove i loro Dati fossero
                  trattati con finalità di marketing diretto, possono opporsi al
                  trattamento senza fornire alcuna motivazione. Per scoprire se
                  il Titolare tratti dati con finalità di marketing diretto gli
                  Utenti possono fare riferimento alle rispettive sezioni di
                  questo documento.
                </p>

                <h3 className="mb-3 text-xl font-medium text-white title-font">
                  Come esercitare i diritti
                </h3>

                <p className="leading-relaxed">
                  Per esercitare i diritti dell&apos;Utente, gli Utenti possono
                  indirizzare una richiesta agli estremi di contatto del
                  Titolare indicati in questo documento. Le richieste sono
                  depositate a titolo gratuito e evase dal Titolare nel più
                  breve tempo possibile, in ogni caso entro un mese.
                </p>
              </div>

              <div className="mt-4 mb-4 md:flex-grow">
                <h2 className="mb-5 text-2xl font-medium text-white title-font">
                  Cookie Policy
                </h2>

                <p className="leading-relaxed">
                  Questo Sito Web fa utilizzo di Strumenti di Tracciamento. Per
                  saperne di più, l&apos;Utente può consultare la{" "}
                  <Link
                    href="/cookie-policy"
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-400 transition-all hover:text-blue-300"
                  >
                    Cookie Policy
                  </Link>
                </p>
              </div>
            </div>

            <div className="mt-4 mb-4 md:flex-grow">
              <h2 className="mb-5 text-2xl font-medium text-white title-font">
                Ulteriori informazioni sul trattamento
              </h2>
              <h3 className="mb-3 text-xl font-medium text-white title-font">
                Difesa in giudizio
              </h3>

              <p className="mb-4 leading-relaxed">
                I Dati Personali dell&apos;Utente possono essere utilizzati da
                parte del Titolare in giudizio o nelle fasi preparatorie alla
                sua eventuale instaurazione per la difesa da abusi
                nell&apos;utilizzo di questo Sito Web o dei Servizi connessi da
                parte dell&apos;Utente. L&apos;Utente dichiara di essere
                consapevole che il Titolare potrebbe essere obbligato a rivelare
                i Dati per ordine delle autorità pubbliche.
              </p>

              <h3 className="mb-3 text-xl font-medium text-white title-font">
                Informative specifiche
              </h3>

              <p className="mb-4 leading-relaxed">
                Su richiesta dell&apos;Utente, in aggiunta alle informazioni
                contenute in questa privacy policy, questo Sito Web potrebbe
                fornire all&apos;Utente delle informative aggiuntive e
                contestuali riguardanti Servizi specifici, o la raccolta ed il
                trattamento di Dati Personali.
              </p>

              <h3 className="mb-3 text-xl font-medium text-white title-font">
                Log di sistema e manutenzione
              </h3>

              <p className="mb-4 leading-relaxed">
                Per necessità legate al funzionamento ed alla manutenzione,
                questo Sito Web e gli eventuali servizi terzi da essa utilizzati
                potrebbero raccogliere log di sistema, ossia file che registrano
                le interazioni e che possono contenere anche Dati Personali,
                quali l&apos;indirizzo IP Utente.
              </p>

              <h3 className="mb-3 text-xl font-medium text-white title-font">
                Informazioni non contenute in questa policy
              </h3>

              <p className="mb-4 leading-relaxed">
                Ulteriori informazioni in relazione al trattamento dei Dati
                Personali potranno essere richieste in qualsiasi momento al
                Titolare del Trattamento utilizzando gli estremi di contatto.
              </p>

              <h3 className="mb-3 text-xl font-medium text-white title-font">
                Risposta alle richieste “Do Not Track”
              </h3>

              <p className="mb-4 leading-relaxed">
                Questo Sito Web non supporta le richieste “Do Not Track”. Per
                scoprire se gli eventuali servizi di terze parti utilizzati le
                supportino, l&apos;Utente è invitato a consultare le rispettive
                privacy policy.
              </p>

              <h3 className="mb-3 text-xl font-medium text-white title-font">
                Modifiche a questa privacy policy
              </h3>

              <p className="mb-4 leading-relaxed">
                Il Titolare del Trattamento si riserva il diritto di apportare
                modifiche alla presente privacy policy in qualunque momento
                notificandolo agli Utenti su questa pagina e, se possibile, su
                questo Sito Web nonché, qualora tecnicamente e legalmente
                fattibile, inviando una notifica agli Utenti attraverso uno
                degli estremi di contatto di cui è in possesso. Si prega dunque
                di consultare con frequenza questa pagina, facendo riferimento
                alla data di ultima modifica indicata in fondo.
              </p>

              <p className="leading-relaxed">
                Qualora le modifiche interessino trattamenti la cui base
                giuridica è il consenso, il Titolare provvederà a raccogliere
                nuovamente il consenso dell&apos;Utente, se necessario.
              </p>
            </div>
          </div>
          <LegalTerms />
        </div>
      </section>
    </main>
  );
}
