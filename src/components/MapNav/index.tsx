import { FC } from 'react'
import classNames from 'classnames'
import { useHasMobileSize } from '@lib/hooks/useHasMobileSize'
import { Plus, Minus, Geolocate } from '../Icons'

export interface MapNavType {
  mapZoom: number
  setMapZoom: (time: number) => void
}

export const MapNav: FC<MapNavType> = ({ mapZoom, setMapZoom }) => {
  const navClasses =
    'hover:bg-gold hover:text-darkblue bg-darkblue text-gold h-10 w-10 mt-2 cursor-pointer list-none text-center grid place-items-center rounded-full'

  return (
    <nav
      className={classNames(
        'fixed bottom-0 p-6 ease-in-out duration-300 z-10 right-0'
      )}
    >
      <div>
        <button
          title="zoom in"
          className={navClasses}
          onClick={() => setMapZoom(mapZoom + 1)}
        >
          <Plus />
        </button>
        <button
          title="zoom out"
          className={navClasses}
          onClick={() => setMapZoom(mapZoom - 1)}
        >
          <Minus />
        </button>
        <button
          title=""
          // className={navClasses}
          onClick={() => setMapZoom(mapZoom - 1)}
          className={'maplibregl-ctrl-geolocate mapboxgl-ctrl-geolocate'}
        >
          <Geolocate />
        </button>
      </div>
    </nav>
  )
}
