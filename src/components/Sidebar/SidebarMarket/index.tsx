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
  language: string
}

export interface TimeExeptionType {
  hoursExc: string
}

export const SidebarMarket: FC<SidebarMarketType> = ({
  marketData,
  text,
  language,
}) => {
  const days = ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So']
  const daysHelper = text.sidebarMarket.daysHelper

  const { copyToClipboard, hasCopied } = useCopyToClipboard()

  const TimeExeption: FC<TimeExeptionType> = ({ hoursExc }) => {
    const data = hoursExc.split(',')
    return (
      <div className="text-sm pt-2 text-lightgray">
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

        <p className="text-xs text-lightgray mt-1">
          ©{' '}
          {marketData.urheberschaft
            ? marketData.urheberschaft
            : 'freestocks.org, CC BY-SA 4.0 via Wikimedia Commons'}
        </p>
        <div className="mb-2"></div>

        <div className="text-center">
          <div
            className="font-clanbold cursor-pointer xmas-btn px-4 py-1.5 border-gold text-gold hover:text-lightblue hover:bg-gold p-1 rounded-full border-2 hover:border-gold inline-block"
            onClick={() => copyToClipboard(`${window.location.href}`)}
          >
            {!hasCopied && (
              <div className=" mr-4 mt-1 flex float-left ">
                {text.sidebarMarket.marketLink}
              </div>
            )}{' '}
            {hasCopied && (
              <div className=" mr-4 mt-1 flex float-left">
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
            <p className="text-sm pt-0 text-lightgray">
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
            <li className="font-clanbold pb-2">
              {text.sidebarMarket.openingWeekday}
            </li>
            {days.map((day: string, i: number) => (
              <li key={'day' + i}>
                {daysHelper[day as keyof typeof daysHelper]}
              </li>
            ))}
            <li className="font-clanbold pb-2">
              {' '}
              {text.sidebarMarket.openingTime}
            </li>
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

        <MarketInfo title={text.sidebarMarket.fee} icon={<Euro />}>
          <p className="text-sm">
            {marketData['immer-kostenlos'] === '1'
              ? text.sidebarMarket.feeFree
              : text.sidebarMarket.feePay}
          </p>
        </MarketInfo>

        <MarketInfo title={text.sidebarMarket.connection} icon={<GeoMarker />}>
          <p className="text-sm pb-1.5">
            {marketData.strasse}, {marketData.plz_ort}
          </p>
          <p className="text-sm">{marketData.train}</p>
        </MarketInfo>

        {marketData.bemerkungen !== '' && (
          <MarketInfo title={text.sidebarMarket.info} icon={<Info />}>
            <p className="text-sm">
              {language === 'de'
                ? marketData.bemerkungen
                : marketData.bemerkungen_en || marketData.bemerkungen}
            </p>
          </MarketInfo>
        )}

        {marketData.w3 !== '' && (
          <MarketInfo title={text.sidebarMarket.website} icon={<Globe />}>
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
