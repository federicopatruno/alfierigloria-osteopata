/**
 * All config. options available here:
 * https://cookieconsent.orestbida.com/reference/configuration-reference.html
 */
import * as CookieConsent from "vanilla-cookieconsent";
import { sendGTMEvent } from "@next/third-parties/google";

export const config: CookieConsent.CookieConsentConfig = {
  // root: 'body',
  // autoShow: true,
  // disablePageInteraction: true,
  // hideFromBots: true,
  // mode: 'opt-in',
  // revision: 0,

  cookie: {
    name: "cc_cookie",
    // domain: location.hostname,
    // path: '/',
    // sameSite: "Lax",
    // expiresAfterDays: 365,
  },

  // https://cookieconsent.orestbida.com/reference/configuration-reference.html#guioptions
  guiOptions: {
    consentModal: {
      layout: "cloud inline",
      position: "bottom center",
      equalWeightButtons: true,
      flipButtons: false,
    },
    preferencesModal: {
      layout: "box",
      equalWeightButtons: true,
      flipButtons: false,
    },
  },

  onFirstConsent: ({ cookie }) => {
    console.log("onFirstConsent fired", cookie);
    sendGTMEvent({ event: "client-consent-update" });
  },

  onConsent: ({ cookie }) => {
    console.log("onConsent fired!", cookie);
    // if (typeof window !== "undefined")
    //     window.dataLayer.push({ 'event': 'client-consent-update' });
  },

  onChange: ({ changedCategories, changedServices }) => {
    console.log("onChange fired!", changedCategories, changedServices);
    sendGTMEvent({ event: "client-consent-update" });
  },

  onModalReady: ({ modalName }) => {
    console.log("ready:", modalName);
  },

  onModalShow: ({ modalName }) => {
    console.log("visible:", modalName);
  },

  onModalHide: ({ modalName }) => {
    console.log("hidden:", modalName);
  },

  categories: {
    necessary: {
      enabled: true, // this category is enabled by default
      readOnly: true, // this category cannot be disabled
    },
    analytics: {
      autoClear: {
        cookies: [
          {
            name: /^_ga/, // regex: match all cookies starting with '_ga'
          },
          {
            name: "_gid", // string: exact cookie name
          },
        ],
      },

      // https://cookieconsent.orestbida.com/reference/configuration-reference.html#category-services
      services: {
        ga: {
          label: "Google Analytics",
          onAccept: () => {},
          onReject: () => {},
        },
      },
    },
    ads: {},
  },

  language: {
    default: "it",
    translations: {
      it: {
        consentModal: {
          title: "Selezione delle preferenze relative ai Cookie",
          description:
            '<p style="margin-bottom: 1rem;">Questo sito web utilizza cookies per migliorare la tua esperienza di navigazione. Questi cookies sono definiti "necessari" e sono archiviati sul suo browser poiché risultano essenziali per il corretto funzionamento del sito stesso.</p> <p style="margin-bottom: 1rem;">Inoltre previa accettazione, il sito utilizzerà cookie analitici. Questi cookie raccolgono informazioni su come utilizzi il sito web, quali pagine hai visitato e su quali link hai cliccato. Tutti i dati sono anonimi e non possono essere utilizzati per identificarti',
          acceptAllBtn: "Accetta Tutti",
          acceptNecessaryBtn: "Rifiuta Tutti",
          showPreferencesBtn: "Gestisci Preferenze",
          // closeIconLabel: 'Reject all and close modal',
          footer: `
                       <a href="/privacy-policy/" target="_blank">Privacy Policy</a>
                   `,
        },
        preferencesModal: {
          title: "Gestisci le preferenze sui cookie",
          acceptAllBtn: "Accetta Tutti",
          acceptNecessaryBtn: "Rifiuta Tutti",
          savePreferencesBtn: "Accetta Selezionati",
          closeIconLabel: "Chiudi Pannello",
          serviceCounterLabel: "Servizio|Servizi",
          sections: [
            {
              title: "Le tue scelte sulla privacy",
              description: `In questo pannello puoi esprimere alcune preferenze relative al trattamento dei tuoi dati personali. Puoi rivedere e modificare le scelte espresse in qualsiasi momento, riaprendo questo pannello tramite il collegamento fornito. Per negare il tuo consenso ai servizi specifici descritti di seguito, disattiva i pulsanti o utilizza il pulsante "Rifiuta tutto" e conferma di voler salvare le tue scelte.`,
            },
            {
              title: "Strettamente necessari",
              description:
                "Questi cookie sono essenziali per il corretto funzionamento del sito web e non possono essere disabilitati.",

              //this field will generate a toggle linked to the 'necessary' category
              linkedCategory: "necessary",
            },
            {
              title: "Prestazioni e analisi",
              description: `Questi cookie raccolgono informazioni su come utilizzi il nostro sito web. Tutti i dati sono resi anonimi e non possono essere utilizzati per identificarti.`,
              linkedCategory: "analytics",
              cookieTable: {
                caption: "Tabella dei Cookies",
                headers: {
                  name: "Cookie",
                  domain: "Dominio",
                  desc: "Descrizione",
                },
                body: [
                  {
                    name: "_ga",
                    // domain: location.hostname,
                    domain: "",
                    desc: "Questo cookie viene utilizzato da Google Analytics per distinguere i singoli utenti assegnando un numero generato casualmente come identificatore",
                  },
                  {
                    name: "_gid",
                    // domain: location.hostname,
                    domain: "",
                    desc: "Questo cookie viene utilizzato da Google Analytics per memorizzare e aggiornare un valore univoco per ogni pagina visitata",
                  },
                ],
              },
            },
            {
              title: "Targeting e pubblicità",
              description: `Questi cookie vengono utilizzati per rendere i messaggi pubblicitari più pertinenti per te e i tuoi interessi. L'intenzione è quella di visualizzare annunci pertinenti e coinvolgenti per il singolo utente e quindi più preziosi per editori e inserzionisti di terze parti.`,
              linkedCategory: "ads",
            },
            {
              title: "Maggiori informazioni",
              description:
                'Per qualsiasi domanda in relazione alla nostra politica sui cookie e alle tue scelte, per favore <a href="/contacts">Contattaci</a>',
            },
          ],
        },
      },
    },
  },
};
