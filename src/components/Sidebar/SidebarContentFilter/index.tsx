import { FC } from 'react'
import classNames from 'classnames'
import ExpandablePanel from '@components/ExpandablePanel'
import { SwitchWrapper } from '@components/SwitchWrapper'
import { FilterDate } from '@components/FilterDate'
import { SidebarHeader } from '@components/Sidebar/SidebarHeader'
import { SidebarBody } from '@components/Sidebar/SidebarBody'
import { WeatherOverlay } from '@components/WeatherOverlay'

export interface SidebarContentFilterType {
  marketFilterInternational: boolean
  setMarketFilterInternational: (enabled: boolean) => void
  marketFilterAccessible: boolean
  setMarketFilterAccessible: (enabled: boolean) => void
  marketFilterCosts: boolean
  setMarketFilterCosts: (enabled: boolean) => void
  marketFilterDate: Date | boolean
  setMarketFilterDate: (date: Date | boolean) => void
  marketFilterTime: boolean
  setMarketFilterTime: (time: boolean) => void
  marketFilterAction: boolean
  setMarketFilterAction: (enabled: boolean) => void
  marketFilterTrain: boolean
  setMarketFilterTrain: (enabled: boolean) => void
}

export const SidebarContentFilter: FC<SidebarContentFilterType> = ({
  marketFilterInternational,
  setMarketFilterInternational,
  marketFilterAccessible,
  setMarketFilterAccessible,
  marketFilterCosts,
  setMarketFilterCosts,
  marketFilterDate,
  setMarketFilterDate,
  marketFilterTime,
  setMarketFilterTime,
  marketFilterAction,
  setMarketFilterAction,
  marketFilterTrain,
  setMarketFilterTrain,
}) => {
  function resetFilter() {
    setMarketFilterCosts(false)
    setMarketFilterInternational(false)
    setMarketFilterAccessible(false)
    setMarketFilterDate(false)
    setMarketFilterTime(false)
    setMarketFilterAction(false)
    setMarketFilterTrain(false)
  }

  return (
    <>
      <SidebarHeader text="Weihnachtsmärkte entdecken" />

      <SidebarBody>
        <>
          <ExpandablePanel title={'Datum'} open={true}>
            <p className="text-sm pb-2 sm:pb-4">
              Wann möchtest du auf einen Weihnachtsmarkt gehen? Wähle einen Tag.{' '}
            </p>
            <div className="justify-center flex pb-2">
              <FilterDate
                marketFilterDate={marketFilterDate}
                setMarketFilterDate={setMarketFilterDate}
              />
            </div>
          </ExpandablePanel>
          <hr className="my-2 border-lightblue/70" />
          <ExpandablePanel title={'Abends offen'} open={true}>
            <SwitchWrapper
              text={
                'Appetit auf gebrannte Mandeln zum Feierabend? Zeige Märkte die nach 19 Uhr offen haben.'
              }
              enabled={marketFilterTime}
              setEnabled={setMarketFilterTime}
            />
          </ExpandablePanel>
          <hr className="my-2 border-lightblue/70" />
          <ExpandablePanel title={'Eintritt frei'} open={true}>
            <SwitchWrapper
              text={
                'Keine Lust auf Eintritt zahlen? Zeige Märkte, die immer kostenfrei sind.'
              }
              enabled={marketFilterCosts}
              setEnabled={setMarketFilterCosts}
            />
          </ExpandablePanel>
          <hr className="my-2 border-lightblue/70" />
          <ExpandablePanel title={'Themen-Märkte'} open={true}>
            <SwitchWrapper
              text={
                'Du magst es speziell? Zeige Märkte mit historischem, internationalem oder ökologischem Fokus.'
              }
              enabled={marketFilterInternational}
              setEnabled={setMarketFilterInternational}
            />
          </ExpandablePanel>
          <hr className="my-2 border-lightblue/70" />
          <ExpandablePanel title={'Barrierefrei'} open={true}>
            <SwitchWrapper
              text={'Zeige Märkte an, die barrierefrei sind.'}
              enabled={marketFilterAccessible}
              setEnabled={setMarketFilterAccessible}
            />
          </ExpandablePanel>
          <hr className="my-2 border-lightblue/70" />
          <ExpandablePanel title={'Action bitte'} open={true}>
            <SwitchWrapper
              text={
                'Nur Glühwein trinken ist dir zu langweilig? Zeige Märkte mit besonderen Attraktionen.'
              }
              enabled={marketFilterAction}
              setEnabled={setMarketFilterAction}
            />
          </ExpandablePanel>
          <hr className="my-2 border-lightblue/70" />
          <ExpandablePanel title={'Kurze Wege'} open={true}>
            <SwitchWrapper
              text={
                'Mit den Öffis unterwegs? Zeige Märkte mit kurzen Wegen zu U- oder S-Bahnstationen.'
              }
              enabled={marketFilterTrain}
              setEnabled={setMarketFilterTrain}
            />
          </ExpandablePanel>

          <div className="mt-8"></div>

          {(marketFilterTrain ||
            marketFilterAction ||
            marketFilterInternational ||
            marketFilterAccessible ||
            marketFilterCosts ||
            marketFilterTime ||
            marketFilterDate) && (
            <button
              className="block mr-auto ml-auto sticky bottom-4 mb-8 xmas-btn px-4 bg-darkblue text-gold hover:bg-gold hover:text-lightblue p-2 text-bold rounded border-2 border-gold hover:border-gold"
              onClick={resetFilter}
            >
              Filter zurücksetzen
            </button>
          )}
        </>
      </SidebarBody>
    </>
  )
}
