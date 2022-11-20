import { FC } from 'react'
import classNames from 'classnames'
import ExpandablePanel from '@components/ExpandablePanel'
import { SwitchWrapper } from '@components/SwitchWrapper'
import { FilterDate } from '@components/FilterDate'
import { FilterTime } from '@components/FilterTime'
import { SidebarHeader } from '@components/Sidebar/SidebarHeader'
import { SidebarBody } from '@components/Sidebar/SidebarBody'

export interface SidebarContentFilterType {
  marketFilterInternational: boolean
  setMarketFilterInternational: (enabled: boolean) => void
  marketFilterCosts: boolean
  setMarketFilterCosts: (enabled: boolean) => void
  marketFilterDate: Date
  setMarketFilterDate: (date: Date | void) => void
  marketFilterTime: number[]
  setMarketFilterTime: (time: number[] | void) => void
  marketFilterAction: boolean
  setMarketFilterAction: (enabled: boolean) => void
}

export const SidebarContentFilter: FC<SidebarContentFilterType> = ({
  marketFilterInternational,
  setMarketFilterInternational,
  marketFilterCosts,
  setMarketFilterCosts,
  marketFilterDate,
  setMarketFilterDate,
  marketFilterTime,
  setMarketFilterTime,
  marketFilterAction,
  setMarketFilterAction,
}) => {
  function resetFilter() {
    console.log('resetting')
    setMarketFilterCosts(false)
    setMarketFilterInternational(false)
    setMarketFilterDate()
    setMarketFilterAction(false)
  }

  return (
    <>
      <SidebarHeader text="Finder" />

      <SidebarBody>

        <ExpandablePanel title={'Datum'} open={true}>
        <p className="text-sm pb-4">
          Wann möchtest du auf einen Weihnachtsmarkt gehen? Wähle einen Tag.{' '}
        </p>
        <div className="justify-center flex">
          <FilterDate
            marketFilterDate={marketFilterDate}
            setMarketFilterDate={setMarketFilterDate}
          />
        </div>
        </ExpandablePanel>
        <hr className="my-2" />
        <ExpandablePanel title={'Uhrzeit'} open={true}>
        <p className="text-sm pb-4">
          Zeitlich nicht so flexibel? Wähle den Zeitraum, in dem der Markt offen sein soll.{' '}
        </p>
          <FilterTime
            marketFilterTime={marketFilterTime}
            setMarketFilterTime={setMarketFilterTime}
          />
        </ExpandablePanel>
        <hr className="my-2 mt-12" />
        <ExpandablePanel title={'Eintritt frei'} open={true}>
          <SwitchWrapper
            text={'Keine Lust auf Eintritt zahlen? Zeige Märkte, die immer kostenfrei sind.'}
            enabled={marketFilterCosts}
            setEnabled={setMarketFilterCosts}
          />
        </ExpandablePanel>
        <hr className="my-2" />
        <ExpandablePanel title={'Themen-Märkte'} open={true}>
          <SwitchWrapper
            text={'Du magst es speziell? Zeige Märkte mit historischem, internationalem oder ökologischem Fokus.'}
            enabled={marketFilterInternational}
            setEnabled={setMarketFilterInternational}
          />
        </ExpandablePanel>
        <hr className="my-2" />
        <ExpandablePanel title={'Action bitte'} open={true}>
          <SwitchWrapper
            text={'Nur Glühwein trinken ist dir zu langweilig? Zeige Märkte mit besonderen Attraktionen.'}
            enabled={marketFilterAction}
            setEnabled={setMarketFilterAction}
          />
        </ExpandablePanel>
        <div className="text-center pt-8">
          <button
            className="mb-8 xmas-btn px-4 bg-darkblue text-gold hover:bg-gold hover:text-darkblue p-2 text-bold rounded border-2 border-darkblue hover:border-gold"
            onClick={resetFilter}
          >
            Filter zurücksetzen
          </button>
        </div>
      </SidebarBody>
    </>
  )
}
