import { FC, useEffect, useRef, useCallback, useMemo } from 'react'
import Map, { Source, Layer, Marker, GeolocateControl } from 'react-map-gl'
import maplibregl from 'maplibre-gl'
import 'maplibre-gl/dist/maplibre-gl.css'
import mapStyle from './mapStyle'
import { layerStyles } from './layerStyles'
import { useState } from 'react'

export interface MapComponentType {
  mapData: any
  marketsData: any
  setMarketId: (time: string | null | number) => void
  marketId: string | null
  setMarketData: (time: any) => void
  mapCenter?: number[]
  mapZoom?: number
  showMapLayerToilets?: boolean
  marketFilterInternational: boolean
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
  mapCenter,
  mapZoom,
  showMapLayerToilets,
}) => {
  const mapRef = useRef()
  const startMapView = {
    longitude: 13.341760020413858,
    latitude: 52.510831578689704,
    zoom: mapZoom,
  }

  const [showMarker, setShowMarker] = useState<boolean>(true)
  const [markerPosition, setMarkerPosition] = useState<number[]>([0, 0])

  const toiletLayerVisibilty = {
    layout: {
      visibility: 'visible',
    },
  }

  const onMapLoad = useCallback(() => {
    console.log('map loaded')
  }, [])

  // useEffect(() => {
  //   console.log('filter intern')
  //   if (mapRef.current) {
  //     console.log('filter intern')
  //     layerStyles['xmarkets'].paint['circle-color'] = marketFilterInternational
  //       ? 'red'
  //       : 'green'
  //     // layerStyles['xmarkets'].filter = ['==', 'id', '207']
  //   }
  // }, [marketFilterInternational])

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
    if (marketId == null) {
      setShowMarker(false)
    }
  }, [marketId])

  useEffect(() => {
    if (mapRef.current) {
      if (showMapLayerToilets) {
        toiletLayerVisibilty.layout.visibility = 'visible'
      } else {
        toiletLayerVisibilty.layout.visibility = 'none'
      }
    }
  }, [showMapLayerToilets])

  const onMarkerCLick = (feature): void => {
    setMarketId(feature.id)
    setMarketData(feature)
    setShowMarker(true)
    setMarkerPosition([feature.lng, feature.lat])
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
        mapStyle={mapStyle()}
        onClick={onMapCLick}
        ref={mapRef}
        onLoad={onMapLoad}
      >
        <Source id="toilets-source" type="geojson" data={mapData.toilets}>
          <Layer {...layerStyles['toilets']} {...toiletLayerVisibilty} />
        </Source>
        <GeolocateControl
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
        />
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
