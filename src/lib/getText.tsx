export interface LanguageText {
  title: {
    market: string
    finder: string
  }
  introModal: {
    header: string
    subHeader: string
    about: string
    explore: string
    moreInfo: string
    info: string
  }
  sidebarFilter: {
    header: string
    filterDateHeader: string
    filterDate: string
    filterEveningHeader: string
    filterEvening: string
    filterFreeHeader: string
    filterFree: string
    filterThemeHeader: string
    filterTheme: string
    filterAccessibleHeader: string
    filterAccessible: string
    filterActionHeader: string
    filterAction: string
    filterPathsHeader: string
    filterPaths: string
    filterReset: string
  }
  sidebarInfo: {
    header: string
    intro: string
    infoWhereHeader: string
    infoWhere: string
    infoOpenDataHeader: string
    infoOpenData: string
    infoTakePartHeader: string
    infoTakePart: string
    infoTownsHeader: string
    infoTowns: string
    infoAboutHeader: string
    infoAbout: string
    projectBy: string
    madeBy: string
    supportedBy: string
    privacy: string
    legal: string
  }
  sidebarMarket: {
    exceptions: string
    marketLink: string
    marketLinkCopied: string
    until: string
    closedOn: string
    date: string
    openingTimes: string
  }
}

interface Text {
  de: LanguageText
  en: LanguageText
}

// Define the text object
const text: Text = {
  de: {
    title: {
      market: 'Weihnachtsmarkt',
      finder: 'Finder',
    },
    introModal: {
      header: 'Berliner Weihnachtsmarkt-Finder',
      subHeader:
        'Glühwein, Glögg, Glückseligkeit - alle Weihnachtsmärkte auf einen Blick!',
      about:
        'Der Weihnachtsmarkt-Finder zeigt das vielfältige Angebot der Berliner Weihnachtsmärkte von traditionellem bis zu individuellem Flair. Lass dir Weihnachtsmärkte nach Wunschdatum anzeigen, nutze die Filter, um passende Märkte zu finden und teile deine Entdeckung mit deinen Freund:innen! Frohe Weihnachten!',
      explore: 'Erkunden',
      moreInfo: 'Mehr Infos',
      info: 'Eine prototypische Datenvisualisierung der Open Data Informationsstelle Berlin in Zusammenarbeit mit dem CityLAB Berlin',
    },
    sidebarFilter: {
      header: 'Weihnachtsmärkte entdecken',
      filterDateHeader: 'Datum',
      filterDate:
        'Wann möchtest du auf einen Weihnachtsmarkt gehen? Wähle einen Tag.',
      filterEveningHeader: 'Abends offen',
      filterEvening:
        'Appetit auf gebrannte Mandeln zum Feierabend? Zeige Märkte die nach 19 Uhr offen haben.',
      filterFreeHeader: 'Eintritt frei',
      filterFree:
        'Keine Lust auf Eintritt zahlen? Zeige Märkte, die immer kostenfrei sind.',
      filterThemeHeader: 'Themen-Märkte',
      filterTheme:
        'Du magst es speziell? Zeige Märkte mit historischem, internationalem oder ökologischem Fokus.',
      filterAccessibleHeader: 'Barrierefrei',
      filterAccessible: 'Zeige Märkte an, die barrierefrei sind.',
      filterActionHeader: 'Action bitte',
      filterAction:
        'Nur Glühwein trinken ist dir zu langweilig? Zeige Märkte mit besonderen Attraktionen.',
      filterPathsHeader: 'Kurze Wege',
      filterPaths:
        'Mit den Öffis unterwegs? Zeige Märkte mit kurzen Wegen zu U- oder S-Bahnstationen.',
      filterReset: 'Filter zurücksetzen',
    },
    sidebarInfo: {
      header: 'Über den Finder',
      intro:
        'Von klassisch über kiezig bis krawallig: Bei den Berliner Weihnachtsmärkten ist für jeden Geschmack etwas dabei. Einige der über 60 Weihnachtsmärkte sind dabei nur für wenige Tage geöffnet. Mit dem Berliner Weihnachtsmarkt-Finder behältst du stets den Überblick, an welchen Tagen und zu welchen Uhrzeiten welche Weihnachtsmärkte zu einem Besuch einladen. Entdecke außerdem, welche Weihnachtsmärkte kostenlos sind, wo es spannende Attraktionen und Programm zu erleben gibt und mehr. Zoom in die Karte rein, um Haltestationen zu öffentlichen Verkehrsmitteln und Standorte von nahegelegenen öffentlichen Toiletten zu sehen. Mit einem Klick über die Teilen-Funktion kannst du den Link zu deinem Lieblingsweihnachtsmarkt kopieren und an Freund:innen verschicken.',
      infoWhereHeader: 'Woher kommen die Daten?',
      infoWhere: `<p class="text-sm pb-2">
        Diese Anwendung basiert komplett auf offenen Daten. Die
        gezeigten Weihnachtsmärkte stammen aus dem Datensatz 
        <a
            target="blank"
            href="https://daten.berlin.de/datensaetze/berliner-weihnachtsmärkte"
            class="text-gold"
        >
            Berliner Weihnachtsmärkte
        </a>
        , der jährlich von der Senatsverwaltung für Wirtschaft,
        Energie und Betriebe bereitgestellt wird. Dadurch sind nur
        zu den der Senatsverwaltung gemeldeten Märkte Informationen
        vorhanden und es besteht kein Anspruch auf Vollständigkeit.
        <br />
        <br />
        Weiterhin liegen in der Karte 
        <a
            target="blank"
            href="https://daten.berlin.de/datensaetze/standorte-der-öffentlichen-toiletten"
            class="text-gold"
        >
            Standorte der öffentlichen Toiletten
        </a>
        , die sich ebenfalls im Berliner Open Data Portal befinden
        und regelmäßig durch die Senatsverwaltung für Mobilität,
        Verkehr, Klimaschutz und Umwelt aktualisiert werden.
        <br />
        Für die Identifizierung der nahelegenen 
        <a
            target="blank"
            href="https://daten.berlin.de/datensaetze/koordinaten-der-zugangsmöglichkeiten-zu-stationen"
            class="text-gold"
        >
            S-Bahn und U-Bahn-Stationen 
        </a> 
        wurde ein weiterer offener Datensatz des VBB herangezogen.
        Weihnachtsmärkte die unter 400m Luftlinie entfernt zu diesen
        Haltestellen liegen werden entsprechend bei der Filterung
        “Kurze Wege” ausgegeben. Die verarbeiteten Daten und die
        Skripte zur Datenprozessierung sind in 
        <a
            target="blank"
            href="https://github.com/technologiestiftung/weihnachtsmarktkarte"
            class="text-gold"
        >
            GitHub-Repository 
        </a>
        zu finden.
        <br />
        Die Hintergrundkarte basiert auf der 
        <a
            target="blank"
            href="https://www.openstreetmap.de"
            class="text-gold"
        >
            OpenStreetMap
        </a>
        .
        <br />
        Die Musik 
        <i>Christmas Chill lofi Launge (IG Version 60s)</i> von
        Lesfm kommt von
        <a
            target="blank"
            href="https://pixabay.com"
            class="text-gold"
        >
             
            Pixabay Music
        </a>
        .
        <br />
        Die Wetterdaten stammen vom 
        <a
            target="blank"
            href="https://www.dwd.de/DE/leistungen/opendata/opendata.html"
            class="text-gold"
        >
            Deutschen Wetterdienst (DWD)
        </a>
        , der im Rahmen seines Open-Data-Programms eine Vielzahl von
        meteorologischen Beobachtungen und Berechnungen
        veröffentlicht. Das Open-Source-Projekt 
        <a
            target="blank"
            href="https://brightsky.dev/"
            class="text-gold"
        >
            BrightSky
        </a>
        , bietet eine kostenlose JSON-API an, um Wetterdaten ganz
        einfach abzufragen. So können die Wettervorhersagen für
        Berlin stundengenau dargestellt werden.
        </p>`,
      infoOpenDataHeader: 'Was ist Open Data?',
      infoOpenData: `<p  class="text-sm pb-2">
        Offene Daten definieren sich dadurch, dass sie in einem
        offenen und maschinenlesbaren Format vorliegen, unter einer
        freien Lizenz nutzbar sind, der Zugang diskriminierungsfrei
        und kostenlos ist und die Daten an einem zentralen Ort
        dauerhaft auffindbar sind. Open Data ist heute ein wichtiger
        Bestandteil im Verwaltungshandeln Berlins und schafft nicht
        nur Transparenz und Offenheit, sondern ermöglicht auch
        Analysen und Anwendungen wie diese, um den Alltag angenehmer
        zu machen. Deshalb unterstützt die 
        <a
            target="blank"
            href="https://odis-berlin.de"
             class="text-gold"
        >
            Open Data Infor­mations­stelle 
        </a>
        Berliner Behörden bei der Bereit­stellung von Open Data.
        Mehr offene Daten findest du im 
        <a
            target="blank"
            href="https://daten.berlin.de"
             class="text-gold"
        >
            Berliner Datenportal
        </a>
        .
        </p>`,
      infoTakePartHeader: 'Wie kann ich mitmachen?',
      infoTakePart: `<p class="text-sm pb-2">
        Du möchtest aktiv werden und dazu beitragen, dass der
        Weihnachtsmarkt-Finder im besten Glanz erscheint? Der Code
        ist 
        <a
            target="blank"
            href="https://github.com/technologiestiftung/weihnachtsmarktkarte"
            class="text-gold"
        >
            Open Source 
        </a>
        und jede:r kann nutzen. So kannst du das Projekt duplizieren
        und selbst weiterentwickeln oder du machst direkt Vorschläge
        für Verbesserungen und neue Funktionen. Sicher ist dir auch
        aufgefallen, dass viele Weihnachtsmärkte lediglich ein
        Platzhalter-Bild haben. Dies liegt daran, dass wir nur auf
        Bilder zurückgreifen wollen, die in Wikimedia Commons
        liegen, dem zentralen und offenen Medienarchiv. Also knips
        ein Bild von deinem nächsten Weihnachtsmarktbesuch und
        veröffentliche es unter einer freien Lizenz auf 
        <a
            target="blank"
            href="https://commons.wikimedia.org/wiki/Commons:First_steps/Uploading_files/de"
            class="text-gold"
        >
            Wikimedia
        </a>
        !
        </p>`,
      infoTownsHeader: 'Was ist mit anderen Städten?',
      infoTowns: `<p  class="text-sm pb-2">
        Der “Berliner Weihnachtsmarkt-Finder” ist ein
        Open-Source-Projekt und läuft unter einer MIT Lizenz.
        Dementsprechend kann die Idee, aber auch der Quellcode für
        die Umsetzung in anderen Städten kostenlos genutzt,
        angepasst und weiterentwickelt werden. Wenn Du dich dafür
        interessierst, schau gerne in unserem
        <a
            target="blank"
            href="https://github.com/technologiestiftung/weihnachtsmarktkarte"
             class="text-gold"
        >
            GitHub-Repository
        </a>
        vorbei.
        </p>`,
      infoAboutHeader: 'Über uns',
      infoAbout: `<p class="text-sm pb-2">
        Der “Berliner Weihnachtsmarkt-Finder” ist ein Projekt der 
        <a
            target="blank"
            href="https://odis-berlin.de"
            class="text-gold"
        >
            Open Data Informationsstelle 
        </a>
        in Zusammenarbeit mit dem CityLAB Berlin. Die ODIS wird von
        der Senatskanzlei Berlin und der Investitionsbank Berlin aus
        den Mitteln des Landes Berlin gefördert und ist ein Projekt
        der 
        <a
            target="blank"
            href="https://www.technologiestiftung-berlin.de"
            class="text-gold"
        >
            Technologiestiftung Berlin
        </a>
        . Seit 2018 begleiten wir als ODIS die Stadt auf dem Weg zu
        einer partizipativen, nachhaltigen und datengetriebenen
        Gesellschaft mit dem Schwerpunkt auf die Bereitstellung und
        Nutzung offener Daten. Du hast Feedback oder willst mehr
        erfahren? Schau dich auf unserer Webseite um oder
        kontaktiere uns unter 
        <a href="mailto:odis@ts.berlin" class="text-gold">
            odis@ts.berlin
        </a>
        .
        </p>`,
      projectBy: 'Ein Projekt der',
      madeBy: 'Durchgeführt von der',
      supportedBy: 'Gefördert von',
      privacy: 'Datenschutzerklärung',
      legal: 'Impressum',
    },
    sidebarMarket: {
      exceptions: 'Ausnahmen',
      marketLink: 'Markt-Link kopieren',
      marketLinkCopied: 'Markt-Link kopiert!',
      until: 'von',
      closedOn: 'geschlossen am',
      date: 'Datum',
      openingTimes: 'Öffnungszeiten',
    },
  },
  en: {
    title: {
      market: 'ChristmasMarket',
      finder: 'Finder',
    },
    introModal: {
      header: 'Berliner XMas-Finder',
      subHeader: '???',
      about: 'About text',
      explore: 'Explore',
      moreInfo: 'About',
      info: '???',
    },
    sidebarFilter: {
      header: 'Discover Markets',
      filterDateHeader: 'Date',
      filterDate: 'When do you want to go to a christmas market? Choose a day.',
      filterEveningHeader: 'Evenings open',
      filterEvening: '???',
      filterFreeHeader: 'Free entry',
      filterFree: '???',
      filterThemeHeader: '???',
      filterTheme: '???',
      filterAccessibleHeader: 'Accessible?',
      filterAccessible: '???',
      filterActionHeader: 'Action please',
      filterAction: '???',
      filterPathsHeader: '???',
      filterPaths: '???',
      filterReset: 'reset filter',
    },
    sidebarInfo: {
      header: 'About',
      intro: '???',
      infoWhereHeader: '???',
      infoWhere: '???',
      infoOpenDataHeader: 'What is Open Data?',
      infoOpenData: '???',
      infoTakePartHeader: '???',
      infoTakePart: '???',
      infoTownsHeader: '???',
      infoTowns: '???',
      infoAboutHeader: '???',
      infoAbout: '???',
      projectBy: 'A Project by',
      madeBy: 'Made by',
      supportedBy: 'Supported by',
      privacy: 'Privacy Policy',
      legal: 'Legal notice',
    },
    sidebarMarket: {
      exceptions: 'Exceptions',
      marketLink: 'Copy Market-Link',
      marketLinkCopied: 'Market-Link copied!',
      until: 'to',
      closedOn: 'closed on',
      date: 'Date',
      openingTimes: 'Opening times',
    },
  },
}

// Function to get text based on the language
export function getText(lang: keyof Text) {
  return text[lang]
}
