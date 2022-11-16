import type { NextPage } from 'next'
import { useState, useEffect } from 'react'

import { useRouter } from 'next/router'
import { mapRawQueryToState } from '@lib/utils/queryUtil'
// import { useDebouncedCallback } from 'use-debounce'
import { Head } from '@components/Head'

import { MapComponent } from '@components/Map'
import { SidebarWrapper } from '@components/Sidebar/SidebarWrapper'
import { SidebarMarket } from '@components/Sidebar/SidebarMarket'
import { SidebarContentInfo } from '@components/Sidebar/SidebarContentInfo'
import { SidebarContentLayers } from '@components/Sidebar/SidebarContentLayers'
import { SidebarContentFilter } from '@components/Sidebar/SidebarContentFilter'

import { Layers, Filter, Info } from '@components/Icons'
import { SidebarNav } from '@components/Sidebar/SidebarNav'
import { MapNav } from '@components/MapNav'

import { SnowNav } from '@components/SnowNav'
import { IntroModal } from '@components/IntroModal'

import { getMapData } from '@lib/loadMapData'

export async function getStaticProps() {
  const mapData = getMapData()
  return mapData
}

const navViews = [
  {
    value: 'filter',
    name: 'filter',
    icon: <Filter color1={'black'} />,
    mobileHeight: 'half',
  },
  {
    value: 'layers',
    name: 'Kartenlayers',
    icon: <Layers color1={'black'} />,
    mobileHeight: 'half',
  },
  {
    value: 'info',
    name: 'information',
    icon: <Info color1={'black'} />,
    mobileHeight: 'full',
  },
]

const MapSite: NextPage = (mapData) => {
  // let snowLoaded = false
  // if (typeof window != 'undefined' && !snowLoaded) {
  //   const script = document.createElement('script')
  //   script.src = 'snowstorm.js'
  //   script.async = true
  //   document.body.appendChild(script)
  //   console.log('LOADED')
  // }

  // if (typeof window != 'undefined' && window.snowStorm && !snowLoaded) {
  //   snowLoaded = true
  //   window.snowStorm.toggleSnow()
  //   console.log('HHHHH')
  // }

  const { pathname, query, replace } = useRouter()
  const mappedQuery = mapRawQueryToState(query)
  let [modalOpen, setModalOpen] = useState(true)
  const [marketId, setMarketId] = useState<number | null>(null)
  const [marketData, setMarketData] = useState<any>()
  const [marketFilterInternational, setMarketFilterInternational] =
    useState<boolean>(false)
  const [marketFilterCosts, setMarketFilterCosts] = useState<boolean>(false)
  const [marketFilterDate, setMarketFilterDate] = useState<Date>()
  const [marketFilterTime, setMarketFilterTime] = useState<number[]>()
  const [marketFilterDesign, setMarketFilterDesign] = useState<boolean>(false)

  const [navView, setNavView] = useState<string>(navViews[0].value)
  const [sidebarMenuOpen, setSidebarMenuOpen] = useState<boolean>(false)
  const [sidebarInfoOpen, setSidebarInfoOpen] = useState<boolean>(false)
  const [mobileHeight, setMobileHeight] = useState<string>(navViews[0].value)

  const [mapCenter, setMapCenter] = useState<number[]>([0, 0])
  const [mapZoom, setMapZoom] = useState<number>(10)
  // if (mappedQuery.id && mappedQuery.id !== marketId) {
  //   console.log('MMMM???')
  //   setSidebarInfoOpen(true)
  //   setMarketId(mappedQuery?.id)
  // }
  useEffect(() => {
    setSidebarInfoOpen(marketId === null ? false : true)
    // if (marketId) {
    //   replace({ pathname, query: { id: marketId } }, undefined, {
    //     shallow: true,
    //   })
    // }
  }, [marketId])

  // useEffect(() => {
  //   // let snowLoaded = false
  //   // if (typeof window != 'undefined' && !snowLoaded) {
  //   //   snowLoaded = true
  //   //   const script = document.createElement('script')
  //   //   script.src = 'snowstorm.js'
  //   //   script.async = true
  //   //   document.body.appendChild(script)
  //   //   console.log('LOADED')

  //   //   window.snowStorm.stop()
  //   //   window.snowStorm.toggleSnow()
  //   // }
  // }, [])

  // when any filter is changed
  useEffect(() => {
    console.log('filter changed')
  }, [
    marketFilterInternational,
    marketFilterCosts,
    marketFilterDate,
    marketFilterDesign,
    marketFilterTime,
  ])

  // when the sidebar is closed -> set markerId to null
  useEffect(() => {
    if (!sidebarInfoOpen) {
      setMarketId(null)
    }
  }, [sidebarInfoOpen])

  useEffect(() => {
    const navViewFiltered = navViews.filter((d) => d.value === navView)
    console.log('navViewFiltered', navViewFiltered)
    setMobileHeight(navViewFiltered[0].mobileHeight)
    setSidebarInfoOpen(false)
  }, [navView])

  const [showMapLayerToilets, setShowMapLayerToilets] = useState(true)

  return (
    <>
      <Head />
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
            marketFilterCosts={marketFilterCosts}
            setMarketFilterCosts={setMarketFilterCosts}
            marketFilterDate={marketFilterDate}
            setMarketFilterDate={setMarketFilterDate}
            marketFilterTime={marketFilterTime}
            setMarketFilterTime={setMarketFilterTime}
            marketFilterDesign={marketFilterDesign}
            setMarketFilterDesign={setMarketFilterDesign}
          />
        )}
        {navView === 'layers' && (
          <SidebarContentLayers
            showMapLayerToilets={showMapLayerToilets}
            setShowMapLayerToilets={setShowMapLayerToilets}
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
        closeSymbol="arrow"
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
      />
      <SnowNav></SnowNav>
      <MapComponent
        mapData={mapData}
        mapCenter={mapCenter}
        mapZoom={mapZoom}
        setMapZoom={setMapZoom}
        setMarketId={setMarketId}
        marketData={marketData}
        setMarketData={setMarketData}
        marketId={marketId}
        showMapLayerToilets={showMapLayerToilets}
        marketFilterInternational={marketFilterInternational}
        marketFilterCosts={marketFilterCosts}
        marketFilterDate={marketFilterDate}
        marketFilterTime={marketFilterTime}
      />
      <MapNav
        mapZoom={mapZoom}
        setMapZoom={setMapZoom}
        sidebarMenuOpen={sidebarMenuOpen}
      />
    </>
  )
}

export default MapSite
