import { FC } from 'react'
import classNames from 'classnames'
import { SidebarHeader } from '@components/Sidebar/SidebarHeader'
import { SidebarBody } from '@components/Sidebar/SidebarBody'
import { MarketInfo } from '@components/MarketInfo'
import { GeoMarker, Euro, Clock, Globe, Info } from '@components/Icons/'

export interface SidebarMarketType {
  marketData: any
}

export const SidebarMarket: FC<SidebarMarketType> = ({ marketData }) => {
  console.log('marketData', marketData)

  const days = ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So']

  return (
    <>
      <SidebarHeader text={marketData.name} fontSize="text-lg" />
      <SidebarBody>
        <img className="bg-darkblue w-full h-[200px] pb-4" src="" alt="" />

        <MarketInfo title="Adresse" icon={<GeoMarker />}>
          <p className="text-sm">
            {marketData.strasse}, {marketData.plz_ort}
          </p>
        </MarketInfo>

        <MarketInfo title="Öffnungszeiten" icon={<Clock />}>
          <ul className="columns-2 text-sm">
            <li className="font-bold pb-2">Wochentag</li>
            {days.map((day: string) => (
              <li>{day}</li>
            ))}
            <li className="font-bold pb-2"> Uhrzeit</li>
            {days.map((day: string) => (
              <li>{marketData[day] === '0' ? '-' : marketData[day]}</li>
            ))}
          </ul>
        </MarketInfo>

        <MarketInfo title="Eintritt" icon={<Euro />}>
          <p className="text-sm">
            {marketData['immer-kostenlos'] === '1'
              ? 'Kostenlos'
              : '(Teilweise) Kostenpflichtig'}
          </p>
        </MarketInfo>

        {marketData.w3 !== '' && (
          <MarketInfo title="Webseite" icon={<Globe />}>
            <a
              className="text-sm underline"
              href={marketData.w3}
              target="_blank"
            >
              {marketData.w3
                .replace('www.', '')
                .replace('https://', '')
                .replace('http://', '')}
            </a>
          </MarketInfo>
        )}

        {marketData.bemerkungen !== '' && (
          <MarketInfo title="Informationen" icon={<Info />}>
            <p className="text-sm">{marketData.bemerkungen}</p>
          </MarketInfo>
        )}

        {/* {days.map((day: string) => 
         <div>
          <div>{day}</div>
          <div>{marketData[day] === 0 ? }</div>
        </div>
        ) */}
      </SidebarBody>
    </>
  )
}
