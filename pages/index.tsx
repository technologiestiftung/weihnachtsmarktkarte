import type { NextPage } from 'next'
import { useState, useEffect } from 'react'
// import { snowStorm } from '@lib/snowstorm'

import { useRouter } from 'next/router'
import { Head } from '@components/Head'

import { MapComponent } from '@components/Map'
import { SidebarWrapper } from '@components/Sidebar/SidebarWrapper'
import { SidebarMarket } from '@components/Sidebar/SidebarMarket'
import { SidebarContentInfo } from '@components/Sidebar/SidebarContentInfo'
import { SidebarContentLayers } from '@components/Sidebar/SidebarContentLayers'
import { SidebarContentFilter } from '@components/Sidebar/SidebarContentFilter'

import { Filter, Info, Search } from '@components/Icons'
import { SidebarNav } from '@components/Sidebar/SidebarNav'
import { MapNav } from '@components/MapNav'

import { SnowNav } from '@components/SnowNav'
import { AudioPlayer } from '@components/AudioPlayer'
import { IntroModal } from '@components/IntroModal'

import { WeatherOverlay } from '@components/WeatherOverlay'

import { getMapData } from '@lib/loadMapData'
import { filterMarkets } from '@lib/filterMarkets'

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
  // {
  //   value: 'layers',
  //   name: 'Kartenlayers',
  //   icon: <Layers color1={'black'} />,
  //   mobileHeight: 'half',
  // },
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

  const [navView, setNavView] = useState<'filter' | 'info'>('filter')
  const [sidebarMenuOpen, setSidebarMenuOpen] = useState<boolean>(false)
  const [sidebarInfoOpen, setSidebarInfoOpen] = useState<boolean>(false)
  const [mobileHeight, setMobileHeight] = useState<'half' | 'full'>('half')

  const [zoomToCenter, setZoomToCenter] = useState<number[]>([0, 0])
  const [mapZoom, setMapZoom] = useState<number>(10)

  const [marketsData, setMarketsData] = useState<any>(mapData.markets)

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
  }, [isReady])

  // when the id changes -> open the sidebar and set the query
  useEffect(() => {
    setSidebarInfoOpen(marketId === null ? false : true)
    if (isReady) {
      replace({ pathname, query: { id: marketId } }, undefined, {
        shallow: true,
      })
    }
  }, [marketId])

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

  const [showMapLayerToilets, setShowMapLayerToilets] = useState(true)

  return (
    <>
      <Head />
      <div
        id="snowId"
        className="w-full h-full absolute z-50 pointer-events-none overflow-hidden"
      ></div>
      <IntroModal
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        setNavView={setNavView}
        setSidebarMenuOpen={setSidebarMenuOpen}
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
          />
        )}
        {navView === 'info' && <SidebarContentInfo />}
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
        {marketData && marketId && <SidebarMarket marketData={marketData} />}
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
      />
      <SnowNav></SnowNav>
      <WeatherOverlay
        marketFilterDate={marketFilterDate}
        setSidebarMenuOpen={setSidebarMenuOpen}
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
