import type { NextPage } from 'next'
import { useState, useEffect } from 'react'
// import { snowStorm } from '@lib/snowstorm'

import { useRouter } from 'next/router'
import { Head } from '@components/Head'

import { MapComponent } from '@components/Map'
import { SidebarWrapper } from '@components/Sidebar/SidebarWrapper'
import { SidebarMarket } from '@components/Sidebar/SidebarMarket'
import { SidebarContentInfo } from '@components/Sidebar/SidebarContentInfo'
import { SidebarContentSearch } from '@components/Sidebar/SidebarContentSearch'
import { SidebarContentFilter } from '@components/Sidebar/SidebarContentFilter'

import { Filter, Info, Search } from '@components/Icons'
import { SidebarNav } from '@components/Sidebar/SidebarNav'
import { MapNav } from '@components/MapNav'
import { LanguageSwitcher } from '@components/LanguageSwitcher'

import { SnowNav } from '@components/SnowNav'
import { AudioPlayer } from '@components/AudioPlayer'
import { IntroModal } from '@components/IntroModal'

import { WeatherOverlay } from '@components/WeatherOverlay'

import { getMapData } from '@lib/loadMapData'
import { filterMarkets } from '@lib/filterMarkets'
import { getText } from '@lib/getText'
import { LanguageText } from '@lib/getText'

export async function getStaticProps() {
  const mapData = getMapData()
  return mapData
}

const navViews = [
  {
    value: 'filter',
    name: 'filter',
    icon: <Filter />,
    mobileHeight: 'half',
  },
  {
    value: 'search',
    name: 'Search',
    icon: <Search />,
    mobileHeight: 'half',
  },
  {
    value: 'info',
    name: 'information',
    icon: <Info />,
    mobileHeight: 'full',
  },
]

const MapSite: NextPage = (mapData: any) => {
  const { pathname, query, replace, isReady } = useRouter()
  let [modalOpen, setModalOpen] = useState(false)
  const [marketId, setMarketId] = useState<string | number | null>(null)
  const [language, setLanguage] = useState<string>('de')
  const [text, setText] = useState<LanguageText>(getText('de'))

  const [marketData, setMarketData] = useState<any>()
  const [marketFilterInternational, setMarketFilterInternational] =
    useState<boolean>(false)
  const [marketFilterAccessible, setMarketFilterAccessible] =
    useState<boolean>(false)
  const [marketFilterCosts, setMarketFilterCosts] = useState<boolean>(false)
  const [marketFilterDate, setMarketFilterDate] = useState<Date | boolean>(
    false
  )
  const [marketFilterTime, setMarketFilterTime] = useState<boolean>(false)
  const [marketFilterAction, setMarketFilterAction] = useState<boolean>(false)
  const [marketFilterTrain, setMarketFilterTrain] = useState<boolean>(false)

  const [navView, setNavView] = useState<'filter' | 'info' | 'search'>('filter')
  const [sidebarMenuOpen, setSidebarMenuOpen] = useState<boolean>(false)
  const [sidebarInfoOpen, setSidebarInfoOpen] = useState<boolean>(false)
  const [mobileHeight, setMobileHeight] = useState<'half' | 'full'>('half')

  const [zoomToCenter, setZoomToCenter] = useState<number[]>([0, 0])
  const [mapZoom, setMapZoom] = useState<number>(10)

  const [marketsData, setMarketsData] = useState<any>(mapData.markets)

  // if the intro modal should show a under construction text
  const [underConstruction, setUnderConstruction] = useState<boolean>(false)

  // when the query string is read check if we have an id
  useEffect(() => {
    if (!isReady) return
    const queryId = Number(query.id)
    const allowedId = mapData.allowedIds.includes(Number(query.id))
    if (Boolean(query.id) && allowedId && queryId !== marketId) {
      const queriedMarket = marketsData.filter((d: any) => d.id == queryId)[0]
      // make 2X sure we have the data
      if (queriedMarket) {
        setMarketId(queryId)
        setMarketData(queriedMarket)
        setModalOpen(false)
        setZoomToCenter([queriedMarket.lng, queriedMarket.lat])
        setMapZoom(12)
      }
    } else {
      setModalOpen(true)
    }

    // set language
    const queryLang = query.lang
    if (queryLang === 'de' || queryLang === 'en') {
      setLanguage(queryLang)
    }
  }, [isReady])

  // when the id changes -> open the sidebar and set the query
  useEffect(() => {
    setSidebarInfoOpen(marketId === null ? false : true)
    if (isReady) {
      replace(
        { pathname, query: { id: marketId, lang: language } },
        undefined,
        {
          shallow: true,
        }
      )
    }
  }, [marketId])

  useEffect(() => {
    if (isReady) {
      replace(
        { pathname, query: { id: marketId, lang: language } },
        undefined,
        {
          shallow: true,
        }
      )
      // @ts-ignore
      setText(getText(language))
    }
  }, [language])

  // load snow on first load
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const script = document.createElement('script')
      script.src = 'snowstorm.js'
      script.async = true
      document.body.appendChild(script)
      setTimeout(() => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        window.snowStorm.start()
      }, 1000)
    }
  }, [])

  // when any filter is changed -> filter market data
  useEffect(() => {
    const newData = filterMarkets(
      marketsData,
      marketFilterInternational,
      marketFilterAccessible,
      marketFilterCosts,
      marketFilterDate,
      marketFilterAction,
      marketFilterTrain,
      marketFilterTime
    )
    // const newData 0
    setMarketsData(JSON.parse(JSON.stringify(newData)))
  }, [
    marketFilterInternational,
    marketFilterAccessible,
    marketFilterCosts,
    marketFilterDate,
    marketFilterAction,
    marketFilterTrain,
    marketFilterTime,
  ])

  // when the sidebar is closed -> set markerId to null
  useEffect(() => {
    if (!sidebarInfoOpen) {
      setMarketId(null)
    }
  }, [sidebarInfoOpen])

  // when the nav view changes
  // -> set the mobile height (it differs for some views)
  // and close the info sidebar
  useEffect(() => {
    const navViewFiltered = navViews.filter((d) => d.value === navView)
    // @ts-ignore
    setMobileHeight(navViewFiltered[0].mobileHeight)
    setSidebarInfoOpen(false)
  }, [navView])

  return (
    <>
      <Head />
      <div
        id="snowId"
        className="w-full h-full absolute z-50 pointer-events-none overflow-hidden"
      ></div>
      <LanguageSwitcher language={language} setLanguage={setLanguage} />

      <IntroModal
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        setNavView={setNavView}
        setSidebarMenuOpen={setSidebarMenuOpen}
        underConstruction={underConstruction}
        text={text}
        language={language}
        setLanguage={setLanguage}
      />
      <SidebarWrapper
        classes="z-20"
        position="left"
        isOpen={sidebarMenuOpen}
        setOpen={setSidebarMenuOpen}
        closeSymbol="cross"
        mobileHeight={mobileHeight}
      >
        {navView === 'filter' && (
          <SidebarContentFilter
            marketFilterInternational={marketFilterInternational}
            setMarketFilterInternational={setMarketFilterInternational}
            marketFilterAccessible={marketFilterAccessible}
            setMarketFilterAccessible={setMarketFilterAccessible}
            marketFilterCosts={marketFilterCosts}
            setMarketFilterCosts={setMarketFilterCosts}
            marketFilterDate={marketFilterDate}
            setMarketFilterDate={setMarketFilterDate}
            marketFilterTime={marketFilterTime}
            setMarketFilterTime={setMarketFilterTime}
            marketFilterAction={marketFilterAction}
            setMarketFilterAction={setMarketFilterAction}
            marketFilterTrain={marketFilterTrain}
            setMarketFilterTrain={setMarketFilterTrain}
            text={text}
            language={language}
          />
        )}
        {navView === 'info' && <SidebarContentInfo text={text} />}
        {navView === 'search' && (
          <SidebarContentSearch
            marketsData={marketsData}
            setMarketId={setMarketId}
            setMarketData={setMarketData}
            setZoomToCenter={setZoomToCenter}
            setMapZoom={setMapZoom}
            text={text}
          />
        )}
      </SidebarWrapper>
      {/* market data information */}
      <SidebarWrapper
        classes="z-30"
        position="left"
        isOpen={sidebarInfoOpen}
        setOpen={setSidebarInfoOpen}
        closeSymbol="cross"
        mobileHeight="full"
      >
        {marketData && marketId && (
          <SidebarMarket
            marketData={marketData}
            text={text}
            language={language}
          />
        )}
      </SidebarWrapper>
      <SidebarNav
        navViews={navViews}
        setNavView={setNavView}
        navView={navView}
        sidebarMenuOpen={sidebarMenuOpen}
        setSidebarMenuOpen={setSidebarMenuOpen}
        setModalOpen={setModalOpen}
        marketId={marketId}
        setMarketId={setMarketId}
        text={text}
      />
      <SnowNav></SnowNav>
      <WeatherOverlay
        marketFilterDate={marketFilterDate}
        setSidebarMenuOpen={setSidebarMenuOpen}
        text={text}
      />

      <AudioPlayer></AudioPlayer>
      <MapComponent
        mapData={mapData}
        marketsData={marketsData}
        zoomToCenter={zoomToCenter}
        mapZoom={mapZoom}
        setMarketId={setMarketId}
        setMarketData={setMarketData}
        marketId={marketId}
      />
      <MapNav mapZoom={mapZoom} setMapZoom={setMapZoom} />
    </>
  )
}

export default MapSite
