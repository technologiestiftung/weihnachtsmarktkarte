import { FC, useEffect, useRef, useCallback, useMemo } from 'react'
import Map, {
  Source,
  Layer,
  Marker,
  GeolocateControl,
  Popup,
} from 'react-map-gl'
import maplibregl from 'maplibre-gl'
import 'maplibre-gl/dist/maplibre-gl.css'
import mapStyle from './mapStyle'
import { layerStyles } from './layerStyles'
import { useState } from 'react'
import { useHasMobileSize } from '@lib/hooks/useHasMobileSize'

export interface MapComponentType {
  mapData: any
  marketsData: any
  setMarketId: (time: string | null | number) => void
  marketId: string | number | null
  setMarketData: (time: any) => void
  zoomToCenter?: number[]
  mapZoom?: number
}

export const MapComponent: FC<MapComponentType> = ({
  mapData,
  marketsData,
  setMarketId,
  marketId,
  setMarketData,
  zoomToCenter,
  mapZoom,
}) => {
  const isMobile = useHasMobileSize()
  const mapRef = useRef<mapboxgl.Map>()
  const startMapView = {
    longitude: 13.341760020413858,
    latitude: 52.510831578689704,
    zoom: mapZoom,
  }

  const [showMarker, setShowMarker] = useState<boolean>(true)
  const [popupVisible, setPopupVisible] = useState<boolean>(false)
  const [popupText, setPopupText] = useState<string>('')
  const [popupCoo, setPopupCoo] = useState<number[]>([0, 0])

  const [markerPosition, setMarkerPosition] = useState<number[]>([0, 0])

  useEffect(() => {
    if (mapRef.current) {
      // @ts-ignore
      if (mapRef.current.getZoom() !== mapZoom) {
        // @ts-ignore
        mapRef.current.zoomTo(mapZoom, {
          duration: 200,
        })
      }
    }
  }, [mapZoom])

  useEffect(() => {
    if (mapRef.current) {
      // @ts-ignore
      mapRef.current.easeTo({
        // @ts-ignore
        center: zoomToCenter,
        zoom: 13,
        // @ts-ignore
        padding: { left: isMobile ? 0 : 200 },
      })
    }
  }, [zoomToCenter])

  useEffect(() => {
    if (marketId == null) {
      setShowMarker(false)
    } else {
      const queriedMarket = marketsData.filter((d: any) => d.id == marketId)[0]
      setShowMarker(true)
      setMarkerPosition([queriedMarket.lng, queriedMarket.lat])
    }
  }, [marketId])

  const onMarkerCLick = (feature: any): void => {
    setMarketId(feature.id)
    setMarketData(feature)
  }

  const showPopupNow = (visible: boolean, data: any): void => {
    setPopupVisible(visible)
    if (visible) {
      setPopupText(data.shortname)
      setPopupCoo([data.lat, data.lng])
    }
  }
  const onMapCLick = (e: any): void => {
    if (e?.originalEvent?.originalTarget?.nodeName === 'CANVAS') {
      setMarketId(null)
      return
    }
  }

  const markers = useMemo(
    () =>
      marketsData.map((feature: any) => (
        <Marker
          longitude={feature.lng}
          latitude={feature.lat}
          anchor="center"
          onClick={() => onMarkerCLick(feature)}
          key={feature.id}
          style={{ opacity: feature.inaktiv ? 0.5 : 1, cursor: 'pointer' }}
        >
          <img
            onMouseEnter={() => showPopupNow(true, feature)}
            onMouseOut={() => showPopupNow(false, false)}
            src={
              feature.inaktiv ? './stern_inaktiv.png' : './stern_leuchtend.png'
            }
            className={'hover:scale-150 hover:animate-pulse'}
            width="20px"
          />
        </Marker>
      )),

    [marketsData]
  )

  return (
    <div className="h-screen w-screen">
      <Map
        mapLib={maplibregl}
        initialViewState={{ ...startMapView }}
        // mapStyle={process.env.NEXT_PUBLIC_MAPTILER_STYLE}
        mapStyle={mapStyle()}
        onClick={onMapCLick}
        // @ts-ignore
        ref={mapRef}
        maxBounds={[
          12.418399568051996, 51.93535247581585, 14.86247925084541,
          53.392513056341386,
        ]}
        attributionControl={false}
        // onLoad={onMapLoad}
      >
        <Source id="toilets-source" type="geojson" data={mapData.toilets}>
          {/* @ts-ignore */}
          <Layer {...layerStyles['toilets-labels']} />
          {/* @ts-ignore */}
          <Layer {...layerStyles['toilets-circles']} />
        </Source>
        <GeolocateControl
          positionOptions={{ enableHighAccuracy: true }}
          trackUserLocation={true}
          showUserLocation={true}
          style={{}}
          onGeolocate={(posOptions: {
            coords: {
              latitude: number
              longitude: number
            }
          }) => {
            // console.log(posOptions)
            // // const { latitude, longitude } = posOptions.coords
            // // onViewStateChange({
            // //   longitude,
            // //   latitude,
            // //   zoom: VIEWSTATE_ZOOMEDIN_ZOOM,
            // //   transitionDuration: VIEWSTATE_TRANSITION_DURATION,
            // // })
          }}
        />
        {popupVisible && !isMobile && (
          <Popup
            longitude={popupCoo[1]}
            latitude={popupCoo[0]}
            closeButton={false}
            anchor={'bottom'}
          >
            {popupText}
          </Popup>
        )}
        {markers}
        {showMarker && (
          <Marker
            longitude={markerPosition[0]}
            latitude={markerPosition[1]}
            anchor="center"
          >
            <img
              src="./stern_ausgewaehlt.png"
              width="40px"
              // style={{animation:'pulse 4s infinite'}}
            />
          </Marker>
        )}
      </Map>
      <div>
        <div className="fixed bottom-2 right-2 text-gray-500/60 text-xs">
          <a href="https://www.maptiler.com/copyright/" target="_blank">
            © MapTiler
          </a>{' '}
          <a href="https://www.openstreetmap.org/copyright" target="_blank">
            © OpenStreetMap contributors
          </a>
        </div>
      </div>
    </div>
  )
}
