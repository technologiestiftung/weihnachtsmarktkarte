import { FC } from 'react'
import classNames from 'classnames'
import ExpandablePanel from '@components/ExpandablePanel'
import { SwitchWrapper } from '@components/SwitchWrapper'
import { FilterDate } from '@components/FilterDate'
import { FilterTime } from '@components/FilterTime'
import { SidebarHeader } from '@components/SidebarHeader'

export interface SidebarContentFilterType {
  marketFilterInternational: boolean
  // setMarketFilterInternational,
  marketFilterEntry: boolean
  // setMarketFilterEntry,
}

export const SidebarContentFilter: FC<SidebarContentFilterType> = ({
  marketFilterInternational,
  setMarketFilterInternational,
  marketFilterEntry,
  setMarketFilterEntry,
  marketFilterDate,
  setMarketFilterDate,
  marketFilterTime,
  setMarketFilterTime,
}) => {
  function resetFilter() {
    console.log('resetting')
    setMarketFilterEntry(false)
    setMarketFilterInternational(false)
    setMarketFilterDate()
  }

  return (
    <>
      <SidebarHeader text="Filtern" />

      <p className="text-xs pb-4">
        Stellen Sie hier Ihre gewünschten Filter ein.{' '}
      </p>

      <div className="px-4">
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
            enabled={marketFilterEntry}
            setEnabled={setMarketFilterEntry}
          />
        </ExpandablePanel>
        <hr className="my-4" />
        <ExpandablePanel title={'International'} open={true}>
          <SwitchWrapper
            text={'Nur internationale Weihnachts-märkte anzeigen. '}
            enabled={marketFilterInternational}
            setEnabled={setMarketFilterInternational}
          />
        </ExpandablePanel>
        <div className="text-center pt-8">
          <button
            className="text-sm bg-darkblue text-gold hover:bg-gold hover:text-darkblue p-2 text-bold rounded"
            onClick={resetFilter}
          >
            Filter zurücksetzen
          </button>
        </div>
      </div>
    </>
  )
}
