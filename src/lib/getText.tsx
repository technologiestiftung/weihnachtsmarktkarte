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
    infoConstruction: string
    reportMarket: string
    exploreMarkets: string
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
  sidebarSearch: {
    header: string
  }
  sidebarMarket: {
    exceptions: string
    marketLink: string
    marketLinkCopied: string
    until: string
    closedOn: string
    date: string
    openingTimes: string
    openingWeekday: string
    openingTime: string
    fee: string
    feeFree: string
    feePay: string
    connection: string
    info: string
    website: string
    daysHelper: object
  }
  weather: {
    header: string
    subHeader: string
    current: string
    station: string
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
      infoConstruction: `Im Weihnachtsmarkt-Finder werden gerade die Daten für
      die Weihnachtszeit 2024 aktualisiert!
      <span class="text-gold font-clanbold">
        Sie sind Betreiber:in eines Weihnachtsmarkts? Dann
        können Sie Ihren Markt zur Eintragung in der Karte bei
        der Senatsverwaltung für Wirtschaft, Energie und
        Betriebe melden.
      </span>
      Ende Oktober steht der neue Weihnachtsmarkt-Finder 2024
      zur Verfügung.`,
      reportMarket: 'Markt melden',
      exploreMarkets: 'Märkte 2023 erkunden',
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
    sidebarSearch: {
      header: 'Marktsuche',
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
      marketLink: 'Markt teilen',
      marketLinkCopied: 'Markt-Link kopiert!',
      until: 'von',
      closedOn: 'geschlossen am',
      date: 'Datum',
      openingTimes: 'Öffnungszeiten',
      openingWeekday: 'Wochentag',
      openingTime: 'Uhrzeit',
      fee: 'Eintritt',
      feeFree: 'Kostenlos',
      feePay: '(Teilweise) Kostenpflichtig',
      connection: 'Anfahrt',
      info: 'Informationen',
      website: 'Webseite',
      daysHelper: {
        Mo: 'Montag',
        Di: 'Dienstag',
        Mi: 'Mittwoch',
        Do: 'Donnerstag',
        Fr: 'Freitag',
        Sa: 'Samstag',
        So: 'Sonntag',
      },
    },
    weather: {
      header: 'Wie wird das Wetter?',
      subHeader:
        'Stelle im Filtermenü den Tag ein, für den du das Wetter sehen möchtest.',
      current: 'aktuell',
      station: 'Wetterstation',
    },
  },
  en: {
    title: {
      market: 'ChristmasMarket',
      finder: 'Finder',
    },
    introModal: {
      header: 'Berlin Christmas Market Finder',
      subHeader:
        'Mulled Wine, Cheer, and Winter Magic – All Berlin Christmas Markets at a Glance!',
      about:
        "The Christmas Market Finder showcases the diversity of Berlin's Christmas Markets, from its traditional to unique offerings. Browse markets by your preferred dates, use the filters to find the perfect ones and share your favourite ones with your friends! Happy Holidays!",
      explore: 'Explore',
      moreInfo: 'About',
      info: 'A data visualization prototype of the Open Data Informationsstelle (ODIS) Berlin in cooperation with CityLAB Berlin',
      infoConstruction: `The Christmas Market Finder is currently being updated with dates for the 2024 Christmas season!
      <span className="text-gold font-clanbold">
        Are you the operator of a Christmas Market? Then you can register your market with the Senate Department for Economics, Energy and Enterprises to be included in the map.
      </span>
      The updated Christmas Market Finder for 2024 will be made available at the end of October.`,
      reportMarket: 'Report market',
      exploreMarkets: 'Explore markets from 2023',
    },
    sidebarFilter: {
      header: 'Discover Christmas Markets',
      filterDateHeader: 'Date',
      filterDate: 'When do you want to visit a christmas market? Choose a day.',
      filterEveningHeader: 'Open late',
      filterEvening:
        'Fancy a drink after work? Show markets that stay open past 7pm',
      filterFreeHeader: 'Free entry',
      filterFree:
        "Don't feel like paying admission? Show markets that are always free of charge.",
      filterThemeHeader: 'Markets with a theme',
      filterTheme:
        'Do you have a special interest? Show markets with historical, international, or eco-friendly themes.',
      filterAccessibleHeader: 'Accessible?',
      filterAccessible:
        'Show markets that are accessible to people using a wheelchair.',
      filterActionHeader: 'Action please',
      filterAction:
        'Drinking mulled wine is not thrilling enough for you? Show markets with special attractions, rides and entertainment.',
      filterPathsHeader: 'Quick detour',
      filterPaths:
        'Taking public transport? Show markets located a short distance from Metro and S-Bahn stops.',
      filterReset: 'Reset filter',
    },
    sidebarSearch: {
      header: 'Market search',
    },
    sidebarInfo: {
      header: 'About the Finder',
      intro:
        "From traditional to quirky: there is something for everyone's tastes and preferences at Berlin's Christmas markets. Some of the more than 60 christmas markets are only open for a few days. thankfully the Berlin Christmas Market Finder can help you keep track of which markets are open on specific days and during specific times. Additionally you can filter markets for specific interests. For example, which ones offer free entry, or feature exciting attractions and other entertainment. Zoom in on the map to see public transport stops and locations of nearby public toilets. With a click on the share button, you can copy the link to your favourite Christmas market and send it to a friend. ",
      infoWhereHeader: 'Where does the data come from?',
      infoWhere: `<p class="text-sm pb-2">
      The map is generated using publicly available data only. Information
      about christmas markets is taken from the data set on  
      <a
          target="blank"
          href="https://daten.berlin.de/datensaetze/berliner-weihnachtsmärkte"
          class="text-gold"
      >
          Berlin christmas markets
      </a>
      , published annually by the Senate Department for  Senatsverwaltung für Economics, Energy and Enterprises. 
      Information about markets is only available for markets registered with the Senate Department and
      thus might not represent the entirety of venues in Berlin.
      <br />
      <br />
      The map additionally shows the
      <a
          target="blank"
          href="https://daten.berlin.de/datensaetze/standorte-der-öffentlichen-toiletten"
          class="text-gold"
      >
          locations of public toilets
      </a>
      , which are published to Berlin's Open Data portal and regularly updated by the Senate Department
      for Mobility, Traffic and Climate Protection.
      <br />
      In order to identify the nearest 
      <a
          target="blank"
          href="https://daten.berlin.de/datensaetze/koordinaten-der-zugangsmöglichkeiten-zu-stationen"
          class="text-gold"
      >
          S-Bahn and metro stops 
      </a> 
      an additional data set published by the Transit Association for Berlin and Brandenburg was used.
      Christmas markets located within a 400 meter radius from a station are displayed when the filter
      "Quick Detour" is selected. The processed data alongside scripts for data processing can be accessed via   
      <a
          target="blank"
          href="https://github.com/technologiestiftung/weihnachtsmarktkarte"
          class="text-gold"
      >
          this repository  
      </a>
      on GitHub.
      <br />
      The basemap is taken from 
      <a
          target="blank"
          href="https://www.openstreetmap.de"
          class="text-gold"
      >
          OpenStreetMap
      </a>
      .
      <br />
      The background music 
      <i>Christmas Chill lofi Launge (IG Version 60s)</i> by
      Lesfm is taken from
      <a
          target="blank"
          href="https://pixabay.com"
          class="text-gold"
      >
           
          Pixabay Music
      </a>
      .
      <br />
      Weather data is provided by the  
      <a
          target="blank"
          href="https://www.dwd.de/DE/leistungen/opendata/opendata.html"
          class="text-gold"
      >
          German Weather Service (DWD)
      </a>
      , which publishes a variety of meteorological observations and calculations
      as part of its open data service. The open source project 
      <a
          target="blank"
          href="https://brightsky.dev/"
          class="text-gold"
      >
          BrightSky
      </a>
      offers an easy to use API that provides weather data as JSON files at no cost.
      This way, hourly weather forecasts for Berlin can be included in the map.
      </p>`,
      infoOpenDataHeader: 'What is Open Data?',
      infoOpenData: `<p  class="text-sm pb-2">
      Open Data commonly includes data held or generated by public administration 
      that is machine-readable, made accessible freely at no cost and can be found permanently at a central location,
      such as an open data portal. Today, open data is an important part of Berlin's administrative activities and
      not only creates transparency and openness, but also enable analyses and applications like this one, 
      making everyday life in Berlin more convenient. To this end, the
      <a
          target="blank"
          href="https://odis-berlin.de"
           class="text-gold"
      >
          Open Data Infor­mations­stelle 
      </a>
      supports Berlin's authorities in the provision of open data.
      More publicly available data can be found in the 
      <a
          target="blank"
          href="https://daten.berlin.de"
           class="text-gold"
      >
          Open Data Portal Berlin
      </a>
      .
      </p>`,
      infoTakePartHeader: 'How can I contribute?',
      infoTakePart: `<p class="text-sm pb-2">
      Do you want to play an active role in improving the 
      Christmas Market Finder? It was built with  
      <a
          target="blank"
          href="https://github.com/technologiestiftung/weihnachtsmarktkarte"
          class="text-gold"
      >
          open source code 
      </a>
      , which means you can replicate it yourself and develop it further or suggest
      improvements and new functionalities to the current project. You may have noticed 
      that many christmas markets contain a placeholder image. We decided to only
      use images available at Wikimedia Commons, a central and open media archive.
      We invite you to capture your next visit to a christmas market with your camera
      and upload the image to
      <a
          target="blank"
          href="https://commons.wikimedia.org/wiki/Commons:First_steps/Uploading_files/en"
          class="text-gold"
      >
          Wikimedia
      </a>
      under a free license.
      </p>`,
      infoTownsHeader: 'What about other cities?',
      infoTowns: `<p  class="text-sm pb-2">
      The Christmas Market Finder is an open source project, published under an MIT license.
      Accordingly, the idea, including its source code can be used free of charge for implementation
      and further development in other cities. If you are interested in this, visit our 
      <a
          target="blank"
          href="https://github.com/technologiestiftung/weihnachtsmarktkarte"
           class="text-gold"
      >
          repository 
      </a>
      on GitHub.
      </p>`,
      infoAboutHeader: 'About',
      infoAbout: `<p class="text-sm pb-2">
      The Berlin Christmas Market Finder is a project by the 
      <a
          target="blank"
          href="https://odis-berlin.de"
          class="text-gold"
      >
          Open Data Informationsstelle 
      </a>
      in collaboration with CityLAB Berlin. ODIS is funded by the 
      Berlin Senate Chancellery and the Investitionsbank Berlin from funds of the 
      State of Berlin and is a project of the 
      <a
          target="blank"
          href="https://www.technologiestiftung-berlin.de/en"
          class="text-gold"
      >
          Technologiestiftung Berlin
      </a>
      . Since 2018, ODIS has been supporting Berlin on its path towards a 
      participatory, sustainable, and data-driven society with a focus on the 
      provision and use of open data. Do you have feedback or would like to 
      find out more? Visit our website or contact us at
      <a href="mailto:odis@ts.berlin" class="text-gold">
          odis@ts.berlin
      </a>
      .
      </p>`,
      projectBy: 'A Project by',
      madeBy: 'Made by',
      supportedBy: 'Supported by',
      privacy: 'Privacy Policy',
      legal: 'Legal notice',
    },
    sidebarMarket: {
      exceptions: 'Exceptions',
      marketLink: 'Share Market',
      marketLinkCopied: 'Market-Link copied!',
      until: 'to',
      closedOn: 'closed on',
      date: 'Date',
      openingTimes: 'Opening times',
      openingWeekday: 'Weekday',
      openingTime: 'Time',
      fee: 'Entrance fee',
      feeFree: 'Free',
      feePay: 'Partial entrance fee',
      connection: 'How to get there',
      info: 'Information',
      website: 'Website',
      daysHelper: {
        Mo: 'Monday',
        Di: 'Tuesday',
        Mi: 'Wednesday',
        Do: 'Thursday',
        Fr: 'Friday',
        Sa: 'Saturday',
        So: 'Sunday',
      },
    },
    weather: {
      header: 'What will the weather be like? ',
      subHeader:
        'Set the day for which you want to see weather info in the filter menu.',
      current: 'now',
      station: 'Weather station',
    },
  },
}

// Function to get text based on the language
export function getText(lang: keyof Text) {
  return text[lang] || text['de']
}
