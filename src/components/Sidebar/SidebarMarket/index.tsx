import { FC, ReactNode } from 'react'
import classNames from 'classnames'
import { useCopyToClipboard } from '@lib/hooks/useCopyToClipboard'

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
  Copy,
} from '@components/Icons/'
import { LanguageText } from '@lib/getText'

export interface SidebarMarketType {
  marketData: any
  text: LanguageText
}

export interface TimeExeptionType {
  hoursExc: string
}

export const SidebarMarket: FC<SidebarMarketType> = ({ marketData, text }) => {
  const days = ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So']
  const daysHelper = {
    Mo: 'Montag',
    Di: 'Dienstag',
    Mi: 'Mittwoch',
    Do: 'Donnerstag',
    Fr: 'Freitag',
    Sa: 'Samstag',
    So: 'Sonntag',
  }

  const { copyToClipboard, hasCopied } = useCopyToClipboard()

  const TimeExeption: FC<TimeExeptionType> = ({ hoursExc }) => {
    const data = hoursExc.split(',')
    return (
      <div className="text-sm italic pt-2 text-gray-500">
        <p>* {text.sidebarMarket.exceptions}:</p>
        {data.map((d: string, i: number) => (
          <p key={'ex' + i}>{d.split('=')[0] + ': ' + d.split('=')[1]}</p>
        ))}
      </div>
    )
  }

  return (
    <>
      <SidebarHeader text={marketData.shortname} fontSize="text-lg" />
      <SidebarBody>
        <img
          className="bg-darkblue w-full h-[200px]"
          src={
            marketData.image === ''
              ? './images/placeholder.png'
              : './images/' + marketData.image
          }
          alt=""
        />

        <p className="text-xs text-gray-500 mt-1">
          {marketData.urheberschaft
            ? marketData.urheberschaft
            : 'freestocks.org, CC BY-SA 4.0 via Wikimedia Commons'}
        </p>
        <div className="mb-2"></div>

        <div className="flex flex-row-reverse">
          <div
            className="cursor-pointer xmas-btn px-4 py-1.5 border-gold text-gold hover:text-lightblue hover:bg-gold p-1 text-bold rounded border-2 hover:border-gold"
            onClick={() => copyToClipboard(`${window.location.href}`)}
          >
            {!hasCopied && (
              <div className="text-xs mr-4 mt-1 flex float-left">
                {text.sidebarMarket.marketLink}
              </div>
            )}{' '}
            {hasCopied && (
              <div className="text-xs mr-4 mt-1 flex float-left">
                {text.sidebarMarket.marketLinkCopied}
              </div>
            )}{' '}
            <Copy />
          </div>
        </div>

        <MarketInfo
          title={
            marketData['closed-exc'] !== '0'
              ? `${text.sidebarMarket.date} *`
              : text.sidebarMarket.date
          }
          icon={<Calendar />}
        >
          <p className="text-sm pb-2">
            {marketData.von === marketData.bis && <span>{marketData.von}</span>}
            {marketData.von !== marketData.bis && (
              <span>
                {marketData.von} {text.sidebarMarket.until} {marketData.bis}
              </span>
            )}
          </p>

          {marketData['closed-exc'] !== '0' && (
            <p className="text-sm italic pt-0 text-gray-500">
              * {text.sidebarMarket.closedOn} {marketData['closed-exc']}
            </p>
          )}
        </MarketInfo>

        <MarketInfo
          title={
            marketData['hours-exc'] !== '0'
              ? `${text.sidebarMarket.openingTimes} *`
              : text.sidebarMarket.openingTimes
          }
          icon={<Clock />}
        >
          <ul className="columns-2 text-sm gap-0">
            <li className="font-bold pb-2">Wochentag</li>
            {days.map((day: string, i: number) => (
              <li key={'day' + i}>
                {daysHelper[day as keyof typeof daysHelper]}
              </li>
            ))}
            <li className="font-bold pb-2"> Uhrzeit</li>
            {days.map((day: string, i: number) => (
              <li key={'time' + i}>
                {marketData[day] === '0' ? '-' : marketData[day]}
              </li>
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

        <MarketInfo title="Anfahrt" icon={<GeoMarker />}>
          <p className="text-sm pb-1.5">
            {marketData.strasse}, {marketData.plz_ort}
          </p>
          <p className="text-sm">{marketData.train}</p>
        </MarketInfo>

        {marketData.bemerkungen !== '' && (
          <MarketInfo title="Informationen" icon={<Info />}>
            <p className="text-sm">{marketData.bemerkungen}</p>
          </MarketInfo>
        )}

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

        <div className="mb-10"></div>
      </SidebarBody>
    </>
  )
}
