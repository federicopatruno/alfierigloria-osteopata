import React, { Fragment } from "react";

const legalTerms = [
  {
    title: "Dati Personali (o Dati)",
    content:
      "In aggiunta, ogni qualvolta l'utilizzo di Strumenti di Tracciamento dipenda da consenso, l'Utente può prestare o revocare tale consenso impostando le proprie preferenze all'interno dell'informativa sui cookie o aggiornando tali preferenze tramite il widget delle impostazioni di tracciamento, se presente.",
  },
  {
    title: "Dati di Utilizzo",
    content:
      "Sono le informazioni raccolte automaticamente attraverso questa Applicazione (anche da applicazioni di parti terze integrate in questa Applicazione), tra cui: gli indirizzi IP o i nomi a dominio dei computer utilizzati dall'Utente che si connette con questa Applicazione, gli indirizzi in notazione URI (Uniform Resource Identifier), l'orario della richiesta, il metodo utilizzato nell'inoltrare la richiesta al server, la dimensione del file ottenuto in risposta, il codice numerico indicante lo stato della risposta dal server (buon fine, errore, ecc.) il paese di provenienza, le caratteristiche del browser e del sistema operativo utilizzati dal visitatore, le varie connotazioni temporali della visita (ad esempio il tempo di permanenza su ciascuna pagina) e i dettagli relativi all'itinerario seguito all'interno dell'Applicazione, con particolare riferimento alla sequenza delle pagine consultate, ai parametri relativi al sistema operativo e all'ambiente informatico dell'Utente.",
  },
  {
    title: "Utente",
    content:
      "L'individuo che utilizza questa Applicazione che, salvo ove diversamente specificato, coincide con l'Interessato.",
  },

  {
    title: "Interessato",
    content: "La persona fisica cui si riferiscono i Dati Personali.",
  },

  {
    title: "Responsabile del Trattamento (o Responsabile)",
    content:
      "La persona fisica, giuridica, la pubblica amministrazione e qualsiasi altro ente che tratta dati personali per conto del Titolare, secondo quanto esposto nella presente privacy policy.",
  },

  {
    title: "Titolare del Trattamento (o Titolare)",
    content:
      "La persona fisica o giuridica, l'autorità pubblica, il servizio o altro organismo che, singolarmente o insieme ad altri, determina le finalità e i mezzi del trattamento di dati personali e gli strumenti adottati, ivi comprese le misure di sicurezza relative al funzionamento ed alla fruizione di questa Applicazione. Il Titolare del Trattamento, salvo quanto diversamente specificato, è il titolare di questa Applicazione.",
  },

  {
    title: "Questa Applicazione",
    content:
      "Lo strumento hardware o software mediante il quale sono raccolti e trattati i Dati Personali degli Utenti.",
  },
  {
    title: "Servizio",
    content:
      "Il Servizio fornito da questa Applicazione così come definito nei relativi termini (se presenti) su questo sito/applicazione.",
  },

  {
    title: "Unione Europea (o UE)",
    content:
      "Salvo ove diversamente specificato, ogni riferimento all'Unione Europea contenuto in questo documento si intende esteso a tutti gli attuali stati membri dell'Unione Europea e dello Spazio Economico Europeo.",
  },
];

const LegalTerms = () => {
  return (
    <div className="flex flex-col flex-wrap border-t-2 border-gray-200 md:flex-nowrap">
      <div className="">
        <div className="flex flex-wrap py-8 md:flex-nowrap">
          <div className="md:flex-grow">
            <h2 className="mb-5 text-2xl font-medium text-gray-200 title-font">
              Definizioni e riferimenti legali
            </h2>
            {legalTerms.map(
              (
                { title, content }, index
              ) => (
                <Fragment key={index}>
                  <h3 className="mb-3 text-xl font-medium text-gray-200 title-font">
                    {title}
                  </h3>
                  <p className="mb-4 leading-relaxed">{content}</p>
                </Fragment>
              )
            )}
          </div>
        </div>
      </div>
      <div className="border-t-2 border-gray-800">
        <div className="flex flex-wrap py-8 md:flex-nowrap">
          <div className="md:flex-grow">
            <h3 className="mb-3 text-xl font-medium text-gray-200 title-font">
              Riferimenti legali
            </h3>
            <p className="mb-4 leading-relaxed">
              La presente informativa privacy è redatta sulla base di molteplici
              ordinamenti legislativi, inclusi gli artt. 13 e 14 del Regolamento
              (UE) 2016/679.
            </p>

            <p className="leading-relaxed">
              Ove non diversamente specificato, questa informativa privacy
              riguarda esclusivamente questa Applicazione.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegalTerms;
