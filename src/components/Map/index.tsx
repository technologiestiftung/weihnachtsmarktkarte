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
  marketFilterInternational: boolean
  marketFilterAction: boolean
  marketFilterTrain: boolean
  marketFilterCosts: boolean
  marketFilterDate: Date
  marketFilterTime: number[]
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
  const mapRef = useRef()
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
      if (mapRef.current.getZoom() !== mapZoom) {
        mapRef.current.zoomTo(mapZoom, {
          duration: 200,
        })
      }
    }
  }, [mapZoom])

  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.easeTo({
        center: zoomToCenter,
        zoom: 13,
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

  const onMarkerCLick = (feature): void => {
    setMarketId(feature.id)
    setMarketData(feature)
  }

  const showPopupNow = (visible: boolean, data: any): void => {
    setPopupVisible(visible)
    if (visible) {
      setPopupText(data.name)
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
        mapStyle={process.env.NEXT_PUBLIC_MAPTILER_STYLE}
        // mapStyle={mapStyle()}
        onClick={onMapCLick}
        ref={mapRef}
        maxBounds={[
          12.536773681640625, 52.08034997571588, 14.20257568359375,
          52.9395349771423,
        ]}
        // onLoad={onMapLoad}
      >
        <Source id="toilets-source" type="geojson" data={mapData.toilets}>
          <Layer {...layerStyles['toilets-labels']} />
          <Layer {...layerStyles['toilets-circles']} />
        </Source>
        {/* <GeolocateControl
          positionOptions={{ enableHighAccuracy: true }}
          trackUserLocation={true}
          // isMobile ? true : false
          showUserLocation={true}
          style={{}}
          onGeolocate={(posOptions: {
            coords: {
              latitude: number
              longitude: number
            }
          }) => {
            console.log(posOptions)
            // const { latitude, longitude } = posOptions.coords
            // onViewStateChange({
            //   longitude,
            //   latitude,
            //   zoom: VIEWSTATE_ZOOMEDIN_ZOOM,
            //   transitionDuration: VIEWSTATE_TRANSITION_DURATION,
            // })
          }}
        /> */}
        {popupVisible && (
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
            <img src="./stern_ausgewaehlt.png" width="40px" />
          </Marker>
        )}
      </Map>
    </div>
  )
}
