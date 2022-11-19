import { FC } from 'react'
import classNames from 'classnames'
import { SidebarHeader } from '@components/Sidebar/SidebarHeader'
import { SidebarBody } from '@components/Sidebar/SidebarBody'
import { MarketInfo } from '@components/MarketInfo'
import {
  GeoMarker,
  Euro,
  Clock,
  Globe,
  Info,
  Calendar,
} from '@components/Icons/'

export interface SidebarMarketType {
  marketData: any
}

export const SidebarMarket: FC<SidebarMarketType> = ({ marketData }) => {
  console.log('marketData', marketData)

  const days = ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So']

  function TimeExeption({ hoursExc }) {
    const data = hoursExc.split(',')
    return (
      <div className="text-sm italic pt-2 text-gray-500">
        <p>* Ausnahmen:</p>
        {data.map((d: string) => (
          <p>{d.split('=')[0] + ': ' + d.split('=')[1]}</p>
        ))}
      </div>
    )
    // marketData['hours-exc']
    // .split(',')
    // .map((ex: string) => ex.split(':')[0] + '-' + ex.split(':')[1])
    return <h1>My favorite color is </h1>
  }

  return (
    <>
      <SidebarHeader text={marketData.name} fontSize="text-lg" />
      <SidebarBody>
        <img
          className="bg-darkblue w-full h-[200px] mb-4"
          src={marketData.image === '' ? '' : './images/' + marketData.image}
          alt=""
        />

        <MarketInfo title="Adresse" icon={<GeoMarker />}>
          <p className="text-sm">
            {marketData.strasse}, {marketData.plz_ort}
          </p>
        </MarketInfo>

        <MarketInfo
          title={marketData['closed-exc'] !== '0' ? 'Datum *' : 'Datum'}
          icon={<Calendar />}
        >
          <p className="text-sm pb-2">
            {marketData.von} bis {marketData.bis}
          </p>

          {marketData['closed-exc'] !== '0' && (
            <p className="text-sm italic pt-0 text-gray-500">
              * geschlossen am {marketData['closed-exc']}
              {/* {marketData['closed-exc']
                .split(',')
                .map((date: string) => date.trim())} */}
            </p>
          )}
        </MarketInfo>

        <MarketInfo
          title={
            marketData['hours-exc'] !== '0'
              ? 'Öffnungszeiten *'
              : 'Öffnungszeiten'
          }
          icon={<Clock />}
        >
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

          {marketData['hours-exc'] !== '0' && (
            <TimeExeption hoursExc={marketData['hours-exc']} />
          )}
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

        <div className="mb-10"></div>

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
