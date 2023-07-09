"use client";

import * as React from 'react';
import * as ReactDOMServer from 'react-dom/server'
import 'vanilla-cookieconsent';
// import { Cookies } from 'react-cookie-consent';
// import { initializeAndTrack } from 'gatsby-plugin-gdpr-cookies';


const CookieConsent = () => {

    React.useEffect(() => {
        /**
         * useEffect is executed twice (React 18+),
         * make sure the plugin is initialized and executed once
         */
        if (!!document && !document.getElementById('cc--main')) {
            window.CookieConsentApi = window.initCookieConsent();
            const cc = window.CookieConsentApi;
            cc.run({
                ...CC_CONFIG,
                // onAccept: (cookie) => {
                //     if (cc.allowedCategory("analytics")) {
                //         Cookies.set("gdpr-google-tagmanager", "true");
                //         initializeAndTrack(window?.location)
                //     }
                // },
                // onChange: (cookie, changed_preferences) => {
                //     if (cc.allowedCategory("analytics")) {
                //         Cookies.set("gdpr-google-tagmanager", "true");
                //         initializeAndTrack(window?.location)
                //     } else {
                //         Cookies.set("gdpr-google-tagmanager", "false");
                //     }
                // }
            });
        }
    }, []);

    return <></>;
};

/* Plugin Configuration */

const CC_CONFIG = {
    current_lang: 'it',
    autoclear_cookies: true, // default: false
    page_scripts: true,
    force_consent: false, // default: false
    // mode: 'opt-in'                          // default: 'opt-in'; value: 'opt-in' or 'opt-out'
    // delay: 0,                               // default: 0
    // auto_language: null                     // default: null; could also be 'browser' or 'document'
    // autorun: true,                          // default: true
    // force_consent: false,                   // default: false
    // hide_from_bots: false,                  // default: false
    // remove_cookie_tables: false             // default: false
    // cookie_name: 'cc_cookie',               // default: 'cc_cookie'
    // cookie_expiration: 182,                 // default: 182 (days)
    // cookie_necessary_only_expiration: 182   // default: disabled
    // cookie_domain: location.hostname,       // default: current domain
    // cookie_path: '/',                       // default: root
    // cookie_same_site: 'Lax',                // default: 'Lax'
    // use_rfc_cookie: false,                  // default: false
    // revision: 0,                            // default: 0

    gui_options: {
        consent_modal: {
            layout: 'cloud',               // box/cloud/bar
            position: 'bottom center',     // bottom/middle/top + left/right/center
            transition: 'slide',           // zoom/slide
            swap_buttons: false            // enable to invert buttons
        },
        settings_modal: {
            layout: 'box',                 // box/bar
            // position: 'left',           // left/right
            transition: 'slide'            // zoom/slide
        }
    },

    onFirstAction: function (user_preferences, cookie) {
        // callback triggered only once
    },

    onAccept: function (cookie) {
        // ...
    },

    onChange: function (cookie, changed_preferences) {
        // ...
    },

    languages: {
        it: {
            consent_modal: {
                title: "Selezione delle preferenze relative ai Cookie",
                description: ReactDOMServer.renderToString(<><p style={{ marginBottom: "1rem", }}>Questo sito web utilizza cookies per migliorare la tua esperienza di navigazione. Questi cookie sono definiti &quot;necessari&quot; e sono archiviati sul suo browser poiché risultano essenziali per il corretto funzionamento del sito stesso.</p> <p style={{ marginBottom: "1rem", }}>Inoltre previa accettazione, il sito utilizzerà cookie analitici. Questi cookie raccolgono informazioni su come utilizzi il sito web, quali pagine hai visitato e su quali link hai cliccato. Tutti i dati sono anonimi e non possono essere utilizzati per identificarti.</p> <a aria-label="Impostazioni" data-cc="c-settings" href="#">Impostazioni</a></>),
                primary_btn: {
                    text: 'Accetta Tutti',
                    role: 'accept_all' //'accept_selected' or 'accept_all'
                },
                secondary_btn: {
                    text: 'Accetta Necessari',
                    role: 'accept_necessary' //'settings' or 'accept_necessary'
                }
            },
            settings_modal: {
                title: 'Preferenze',
                save_settings_btn: 'Salva Impostazioni',
                accept_all_btn: 'Accetta Tutti',
                reject_all_btn: 'Accetta Necessari',
                close_btn_label: 'Chiudi',
                cookie_table_headers: [
                    { col1: "Nome" },
                    { col2: "Dominio" },
                    { col3: "Scadenza" },
                    { col4: "Descrizione" },
                    { col5: "Tipo" }
                ],
                blocks: [{
                    title: "Utilizzo Cookies",
                    description: 'I Cookie vengono utilizzati per garantire le funzionalità di base del sito e per migliorare la tua esperienza online. Puoi scegliere per ogni categoria di attivarli/disattivarli quando vuoi. Per maggiori informazioni riguardo la nostra politica dei cookies e della gestione dei dati sensibili, leggi l&apos;intera <a href="/privacy-policy" class="cc-link">Privacy Policy</a>.'
                }, {
                    title: "Cookies Strettamente Necessari",
                    description: 'Questi cookie sono essenziali per il corretto funzionamento sito. Senza questi cookie, il sito web non funzionerebbe correttamente.',
                    toggle: {
                        value: 'necessary',
                        enabled: true,
                        readonly: true,
                    }
                },

                // {
                //     title: "Cookies di Analisi e Prestazioni",
                //     description: 'Questi cookie raccolgono informazioni su come utilizzi il sito web, quali pagine hai visitato e su quali link hai cliccato. Tutti i dati sono anonimi e non possono essere utilizzati per identificarti.',
                //     toggle: {
                //         value: 'analytics',
                //         enabled: false,
                //         readonly: false
                //     },
                //     cookie_table: [{
                //         col1: '^_ga',
                //         col2: 'google.com',
                //         col3: '2 years',
                //         col4: '',
                //         col5: 'Google Analytics',
                //         is_regex: true
                //     },
                //     {
                //         col1: '_gid',
                //         col2: 'google.com',
                //         col3: '1 day',
                //         col4: '',
                //         col5: 'Google Analytics'
                //     }
                //     ]
                // },

                // {
                //     title: "Cookies di Profilazione per la pubblicità comportamentale",
                //     description: 'Questi cookie servono a tracciare la navigazione sul sito per analizzare il tuo comportamento ai fini marketing e creare un profilo in merito ai tuoi gusti, abitudini e scelte. In questo modo è possibile trasmettere messaggi pubblicitari mirati in relazione ai tuoi interessi ed in linea con le preferenze manifestate nella navigazione. Questa tipologia di cookie non è necessaria al funzionamento del sito, quindi per la loro installazione è richiesto il tuo consenso.',
                //     toggle: {
                //         value: 'advertisement',
                //         enabled: false,
                //         readonly: false,
                //     },
                //     // cookie_table: []
                // },



                {
                    title: "Maggiori Informazioni",
                    description: 'Per qualsiasi domanda in relazione alla politica sui cookie e alle tue scelte, per favore <a class="cc-link" href="/#contacts">Contattami</a>.',
                }
                ]
            }
        },
    },
};

export default CookieConsent;