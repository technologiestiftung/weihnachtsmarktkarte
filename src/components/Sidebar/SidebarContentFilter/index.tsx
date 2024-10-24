import { FC } from 'react'
import classNames from 'classnames'
import ExpandablePanel from '@components/ExpandablePanel'
import { SwitchWrapper } from '@components/SwitchWrapper'
import { FilterDate } from '@components/FilterDate'
import { SidebarHeader } from '@components/Sidebar/SidebarHeader'
import { SidebarBody } from '@components/Sidebar/SidebarBody'
import { WeatherOverlay } from '@components/WeatherOverlay'
import { LanguageText } from '@lib/getText'

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
  text: LanguageText
  language: string
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
  text,
  language,
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
      <SidebarHeader text={text.sidebarFilter.header} />

      <SidebarBody>
        <>
          <ExpandablePanel
            title={text.sidebarFilter.filterDateHeader}
            open={true}
          >
            <p className="text-sm pb-2 sm:pb-4">
              {text.sidebarFilter.filterDate}
            </p>
            <div className="justify-center flex pb-2">
              <FilterDate
                marketFilterDate={marketFilterDate}
                setMarketFilterDate={setMarketFilterDate}
                language={language}
              />
            </div>
          </ExpandablePanel>
          <hr className="my-2 border-lightblue/70" />
          <ExpandablePanel
            title={text.sidebarFilter.filterEveningHeader}
            open={true}
          >
            <SwitchWrapper
              text={text.sidebarFilter.filterEvening}
              enabled={marketFilterTime}
              setEnabled={setMarketFilterTime}
            />
          </ExpandablePanel>
          <hr className="my-2 border-lightblue/70" />
          <ExpandablePanel
            title={text.sidebarFilter.filterFreeHeader}
            open={true}
          >
            <SwitchWrapper
              text={text.sidebarFilter.filterFree}
              enabled={marketFilterCosts}
              setEnabled={setMarketFilterCosts}
            />
          </ExpandablePanel>
          <hr className="my-2 border-lightblue/70" />
          <ExpandablePanel
            title={text.sidebarFilter.filterThemeHeader}
            open={true}
          >
            <SwitchWrapper
              text={text.sidebarFilter.filterTheme}
              enabled={marketFilterInternational}
              setEnabled={setMarketFilterInternational}
            />
          </ExpandablePanel>
          <hr className="my-2 border-lightblue/70" />
          <ExpandablePanel
            title={text.sidebarFilter.filterAccessibleHeader}
            open={true}
          >
            <SwitchWrapper
              text={text.sidebarFilter.filterAccessible}
              enabled={marketFilterAccessible}
              setEnabled={setMarketFilterAccessible}
            />
          </ExpandablePanel>
          <hr className="my-2 border-lightblue/70" />
          <ExpandablePanel
            title={text.sidebarFilter.filterActionHeader}
            open={true}
          >
            <SwitchWrapper
              text={text.sidebarFilter.filterAction}
              enabled={marketFilterAction}
              setEnabled={setMarketFilterAction}
            />
          </ExpandablePanel>
          <hr className="my-2 border-lightblue/70" />
          <ExpandablePanel
            title={text.sidebarFilter.filterPathsHeader}
            open={true}
          >
            <SwitchWrapper
              text={text.sidebarFilter.filterPaths}
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
              {text.sidebarFilter.filterReset}
            </button>
          )}
        </>
      </SidebarBody>
    </>
  )
}
