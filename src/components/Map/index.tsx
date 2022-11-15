import { FC, useEffect, useRef, useCallback } from 'react'
import Map, { Source, Layer, Marker, GeolocateControl } from 'react-map-gl'
import maplibregl from 'maplibre-gl'
import 'maplibre-gl/dist/maplibre-gl.css'
import mapStyle from './mapStyle'
import { layerStyles } from './layerStyles'
import { useState } from 'react'

export interface MapComponentType {
  mapCenter?: number[]
  mapZoom?: number
  showMapLayerToilets: boolean
  marketFilterInternational: boolean
  marketFilterEntry: boolean
  marketFilterDate: Date
  // marketFilterTime
}

export const MapComponent: FC<MapComponentType> = ({
  mapData,
  setMarketId,
  marketId,
  setMarketData,
  mapCenter,
  mapZoom,
  showMapLayerToilets,
  marketFilterInternational,
  marketFilterEntry,
  marketFilterDate,
  // marketFilterTime
}) => {
  const mapRef = useRef()
  const startMapView = {
    longitude: 13.341760020413858,
    latitude: 52.510831578689704,
    zoom: mapZoom,
  }

  console.log(mapData)

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

  useEffect(() => {
    console.log('filter intern')
    if (mapRef.current) {
      console.log('filter intern')
      layerStyles['xmarkets'].paint['circle-color'] = marketFilterInternational
        ? 'red'
        : 'green'
      // layerStyles['xmarkets'].filter = ['==', 'id', '207']
    }
  }, [marketFilterInternational])

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

  const onMapCLick = (e): void => {
    if (!e.features || !e.features.length) {
      setMarketId(null)
      setShowMarker(false)
      return
    }

    // take the first market if there are many.
    const market = e.features.filter((d) => d.source === 'xmarkets-source')[0]
    if (market) {
      const marketData = JSON.parse(market.properties.data)
      setMarketId(marketData.id)
      setMarketData(marketData)
      setShowMarker(true)
      setMarkerPosition(market.geometry.coordinates)
    } else {
      console.log(e.features)
    }
  }

  return (
    <div className="h-screen w-screen">
      <Map
        mapLib={maplibregl}
        initialViewState={{ ...startMapView }}
        mapStyle={mapStyle()}
        // onClick={onMapCLick}
        // interactiveLayerIds={['layer-toilets', 'layer-xmarkets']}
        ref={mapRef}
        onLoad={onMapLoad}
      >
        {/* <Source id="xmarkets-source" type="geojson" data={mapData.xmarkets}>
          <Layer {...layerStyles['xmarkets']} />
        </Source> */}

        <Source id="toilets-source" type="geojson" data={mapData.toilets}>
          <Layer {...layerStyles['toilets']} {...toiletLayerVisibilty} />
        </Source>
        <GeolocateControl
          positionOptions={{ enableHighAccuracy: true }}
          // trackUserLocation={isMobile ? true : false}
          showUserLocation={true}
          // style={'display':'none'}
          onGeolocate={(posOptions: {
            coords: {
              latitude: number
              longitude: number
            }
          }) => {
            const { latitude, longitude } = posOptions.coords
            onViewStateChange({
              longitude,
              latitude,
              zoom: 12,
              transitionDuration: 2000,
            })
          }}
        />

        {mapData.markets.map((feature: any) => (
          <Marker
            longitude={feature.lng}
            latitude={feature.lat}
            anchor="center"
            onClick={() => onMarkerCLick(feature)}
            key={feature.id}
          >
            <img src="./stern_leuchtend.png" width="40px" />
          </Marker>
        ))}
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
