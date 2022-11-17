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
  marketFilterDesign: boolean
  setMarketFilterDesign: (enabled: boolean) => void
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
  marketFilterDesign,
  setMarketFilterDesign,
}) => {
  function resetFilter() {
    console.log('resetting')
    setMarketFilterCosts(false)
    setMarketFilterInternational(false)
    setMarketFilterDate()
    setMarketFilterDesign(false)
  }

  return (
    <>
      <SidebarHeader text="Filtern" />

      <SidebarBody>
        <p className="text-sm pb-4">
          Stellen Sie hier Ihre gewünschten Filter ein.{' '}
        </p>

        <ExpandablePanel title={'Datum'} open={true}>
          <FilterDate
            marketFilterDate={marketFilterDate}
            setMarketFilterDate={setMarketFilterDate}
          />
        </ExpandablePanel>
        <hr className="my-4" />
        <ExpandablePanel title={'Uhrzeit'} open={true}>
          <FilterTime
            marketFilterTime={marketFilterTime}
            setMarketFilterTime={setMarketFilterTime}
          />
        </ExpandablePanel>
        <hr className="my-4" />
        <ExpandablePanel title={'Eintritt frei'} open={true}>
          <SwitchWrapper
            text={'Nur Weihnachtsmärkte, die immer kostenfrei sind anzeigen'}
            enabled={marketFilterCosts}
            setEnabled={setMarketFilterCosts}
          />
        </ExpandablePanel>
        <hr className="my-4" />
        <ExpandablePanel title={'International'} open={true}>
          <SwitchWrapper
            text={'Nur internationale Weihnachtsmärkte anzeigen. '}
            enabled={marketFilterInternational}
            setEnabled={setMarketFilterInternational}
          />
        </ExpandablePanel>
        {/* <hr className="my-4" />
        <ExpandablePanel title={'Designmärkte'} open={true}>
          <SwitchWrapper
            text={'Nur Design-Weihnachtmärkte anzeigen. '}
            enabled={marketFilterDesign}
            setEnabled={setMarketFilterDesign}
          />
        </ExpandablePanel> */}
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
