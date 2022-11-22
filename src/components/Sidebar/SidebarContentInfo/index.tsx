import { FC } from 'react'
import classNames from 'classnames'
import { SidebarHeader } from '@components/Sidebar/SidebarHeader'
import { SidebarBody } from '@components/Sidebar/SidebarBody'

import { CitylabLogo } from '@components/Logos/CitylabLogo'
import { OdisLogo } from '@components/Logos/OdisLogo'
import { SenWebLogo } from '@components/Logos/SenWebLogo'
import { TsbLogo } from '@components/Logos/TsbLogo'
import { Accordion } from '@components/Accordion'

export interface SidebarContentInfoType {}

export const SidebarContentInfo: FC<SidebarContentInfoType> = ({}) => {
  return (
    <>
      <SidebarHeader text="Über den Finder" />

      <SidebarBody>
        <p className="text-sm pt-2 pb-2">
          Von klassisch über kiezig bis krawallig: Bei den Berliner
          Weihnachtsmärkten ist für jeden Geschmack etwas dabei. Einige der über 60 Weihnachtsmärkte sind dabei nur für wenige Tage geöffnet. Mit dem
          Berliner Weihnachtsmarkt-Finder behaltet ihr stets den Überblick, an
          welchen Tagen und zu welchen Uhrzeiten welche Weihnachtsmärkte zu
          einem Besuch einladen. Entdeckt außerdem, welche Weihnachtsmärkte
          kostenlos sind, wo es spannende Attraktionen und Programm zu erleben gibt und mehr. Zoomt in die Karte rein, um Haltestationen zu öffentlichen Verkehrsmitteln und Standorte von nahegelegenen öffentlichen Toiletten zu sehen. Mit einem Klick über die Teilen-Funktion könnt ihr den Link zu eurem Lieblingsweihnachtsmarkt kopieren und an Freund:innen verschicken.
        </p>

        <Accordion items={[{  id: '1', title: 'Woher kommen die Infos?', content: 'Open Data ist sehr gut!' }]} />
        <Accordion items={[{  id: '2', title: 'Was ist Open Data?', content: 'Open Data ist sehr gut!' }]} />
        <Accordion items={[{  id: '3', title: 'Wie kann ich mitmachen?', content: 'Open Data ist sehr gut!' }]} />
        <Accordion items={[{  id: '4', title: 'Können andere Städte die Anwendung auch nutzen?', content: 'Open Data ist sehr gut!' }]} />
        <Accordion items={[{  id: '5', title: 'Über uns', content: 'Open Data ist sehr gut!' }]} />
        
        <p className="text-sm pb-2">
          Diese Anwendung basiert komplett auf offenen Daten der Berliner Verwaltung. Open Data ist
          heute ein wichtiger Bestandteil im Verwaltungshandeln Berlins und
          schafft nicht nur Transparenz und Offenheit, sondern ermöglicht auch
          Analysen und Anwendungen wie diese, um den Alltag angenehmer zu
          machen. Deshalb unterstützt und berät die{' '}
          <a
            target="blank"
            href="https://odis-berlin.de"
            className="text-gray-500 underline"
          >
            Open Data Informationsstelle{' '}
          </a>
          Berliner Behörden bei der Bereitstellung von Open Data. Mehr offene
          Daten findet ihr im{' '}
          <a
            target="blank"
            href="https://daten.berlin.de"
            className="text-gray-500 underline"
          >
            Berliner Datenportal
          </a>
          .
        </p>

        <section className="mt-4 flex flex-wrap">
          <div className="flex flex-col mr-6 mb-6">
            <span className="text-sm mb-2">Ein Projekt der</span>
            <TsbLogo className={`w-40`} />
          </div>
          <div className="flex flex-col mb-6">
            <span className="text-sm mb-2">Durchgeführt von der</span>
            <a
              href="https://odis-berlin.de/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open Data Informationsstelle Berlin"
              // className={}
            >
              <OdisLogo className={`w-40`} />
            </a>
          </div>
          {/* <div className="flex flex-col mb-6">
            <span className="text-sm mb-2">In Zusammenarbeit mit dem</span>
            <a
              href="https://www.citylab-berlin.org"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="CityLAB Berlin"
              // className={}
            >
              <CitylabLogo className={`w-36`} />
            </a>
          </div> */}
          <div className="flex flex-col">
            <span className="text-sm mb-2">Gefördert von</span>
            <SenWebLogo className={`w-40`} />
          </div>
        </section>
      </SidebarBody>
      <footer className={classNames('mt-8 bg-gray-200 p-4', 'flex flex-wrap')}>
        <span className="text-xs w-full mb-4">
          © 2022 Technologiestiftung Berlin
        </span>
        <a
          href="https://www.technologiestiftung-berlin.de/de/impressum/"
          className={`text-xs hover:underline mr-4`}
          target="_blank"
          rel="noreferrer"
        >
          Impressum
        </a>
        <a
          href="https://www.technologiestiftung-berlin.de/de/datenschutz/"
          className={`text-xs hover:underline`}
          target="_blank"
          rel="noreferrer"
        >
          Datenschutzerklärung
        </a>
      </footer>
    </>
  )
}
