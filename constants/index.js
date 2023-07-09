import { Facebook, Instagram } from "@/assets/social"

export const menuItems = [
    {
        id: "about",
        title: "Chi Sono",
        href: "/#about",
    },
    {
        id: "treatment",
        title: "Il Trattamento",
        href: "/#treatment",
    },
    {
        id: "fees",
        title: "Tariffe",
        href: "/#fees",
    },
    {
        id: "contacts",
        title: "Contatti",
        href: "/#contacts",
    },
]

export const gdprMenuItems = [
    {
        id: "privacy-policy",
        title: "Informativa sulla privacy",
        href: "/privacy-policy",
    },
    {
        id: "cookie-policy",
        title: "Politica dei cookies",
        href: "/cookie-policy",
    },
]

export const socialItems = [
    {
        id: "facebook",
        href: "https://www.facebook.com/alfierigloria.osteopata",
        icon: Facebook
    },
    {
        id: "instagram",
        href: "https://www.instagram.com/alfierigloria.osteopata/",
        icon: Instagram
    },
]

export const fees = [
    {
        title: "Prima Visita Osteopatica",
        fee: 70,
        services: ["Anamnesi", "Valutazione", "Trattamento"],

    },
    {
        title: "Visita Osteopatica",
        fee: 60,
        services: ["Trattamento"],

    },
]

export const gdprData = {
    owner: "Ds. Osteopata Gloria Alfieri - Via Villafranca 4, 60122 - Ancona",
    email: "alfierigloriaosteopata@gmail.com"
}

export const about = [
    "Ho intrapreso il mio percorso di studio dell’osteopatia nel 2011, presso il poliambulatorio Take Care di Milano.",

    "Nel 2016 ho ottenuto il diploma in osteopatia in seguito al superamento dell’esame d’ammissione al R.O.I. (Registro degli osteopati d’Italia).",

    "Durante i cinque anni di corso, ho potuto specializzarmi nella medicina osteopatica, in qualità di tirocinante, dapprima osservatore ed in seguito operativo in vari ambulatori osteopatici privati a Milano.",

    "Successivamente ho preso parte ad un studio approfondito, in qualità di tirocinante pratico, sulle cure osteopatiche palliative ed il rapporto fra operatore e paziente all’interno dell’Hospice di Borgonovo val Tidone (PC), trattando pazienti affetti da malattie terminali.",

    "Ho affinato le mie competenze anatomiche e mediche, effettuando tirocinio osservativo all’Ospedale Civile di Piacenza nei reparti di chirurgia generale ed ortopedica, cardiologia, radiologia ed in pronto soccorso ortopedico pediatrico.",

    "Per anni ho eseguito la mia professione a Cinisello Balsamo in uno studio privato in condivisione con una psicoterapeuta, al C.T.I. (Centro Terapie Integrate) in team con diversi specialisti tra cui ortopedici, fisioterapisti e psicoterapeuti e collaborando con odontoiatri presso lo studio medico dentistico Bartolacci a Milano.",

    "Attualmente svolgo il mio lavoro in uno studio medico ad Ancona, nelle Marche.",
]
export const currentYear = new Date().getFullYear()


export const legalTerms = [
    {
        title: "Dati Personali (o Dati)",
        content: "In aggiunta, ogni qualvolta l’utilizzo di Strumenti di Tracciamento dipenda da consenso, l’Utente può prestare o revocare tale consenso impostando le proprie preferenze all’interno dell’informativa sui cookie o aggiornando tali preferenze tramite il widget delle impostazioni di tracciamento, se presente.",
    },
    {
        title: "Dati di Utilizzo",
        content: "Sono le informazioni raccolte automaticamente attraverso questa Applicazione (anche da applicazioni di parti terze integrate in questa Applicazione), tra cui: gli indirizzi IP o i nomi a dominio dei computer utilizzati dall’Utente che si connette con questa Applicazione, gli indirizzi in notazione URI (Uniform Resource Identifier), l’orario della richiesta, il metodo utilizzato nell’inoltrare la richiesta al server, la dimensione del file ottenuto in risposta, il codice numerico indicante lo stato della risposta dal server (buon fine, errore, ecc.) il paese di provenienza, le caratteristiche del browser e del sistema operativo utilizzati dal visitatore, le varie connotazioni temporali della visita (ad esempio il tempo di permanenza su ciascuna pagina) e i dettagli relativi all’itinerario seguito all’interno dell’Applicazione, con particolare riferimento alla sequenza delle pagine consultate, ai parametri relativi al sistema operativo e all’ambiente informatico dell’Utente.",
    },
    {
        title: "Utente",
        content: "L'individuo che utilizza questa Applicazione che, salvo ove diversamente specificato, coincide con l’Interessato.",
    },


    {
        title: "Interessato",
        content: "La persona fisica cui si riferiscono i Dati Personali."

    },

    {
        title: "Responsabile del Trattamento (o Responsabile)",
        content: "La persona fisica, giuridica, la pubblica amministrazione e qualsiasi altro ente che tratta dati personali per conto del Titolare, secondo quanto esposto nella presente privacy policy."

    },

    {
        title: "Titolare del Trattamento (o Titolare)",
        content: "La persona fisica o giuridica, l’autorità pubblica, il servizio o altro organismo che, singolarmente o insieme ad altri, determina le finalità e i mezzi del trattamento di dati personali e gli strumenti adottati, ivi comprese le misure di sicurezza relative al funzionamento ed alla fruizione di questa Applicazione. Il Titolare del Trattamento, salvo quanto diversamente specificato, è il titolare di questa Applicazione."

    },

    {
        title: "Questa Applicazione",
        content: "Lo strumento hardware o software mediante il quale sono raccolti e trattati i Dati Personali degli Utenti."

    },
    {
        title: "Servizio",
        content: "Il Servizio fornito da questa Applicazione così come definito nei relativi termini (se presenti) su questo sito/applicazione."
    },

    {
        title: "Unione Europea (o UE)",
        content: "Salvo ove diversamente specificato, ogni riferimento all’Unione Europea contenuto in questo documento si intende esteso a tutti gli attuali stati membri dell’Unione Europea e dello Spazio Economico Europeo."
    }
]