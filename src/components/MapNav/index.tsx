import { FC } from 'react'
import classNames from 'classnames'
import { useHasMobileSize } from '@lib/hooks/useHasMobileSize'
import { Plus, Minus, Snow } from '../Icons'

export interface MapNavType {
  mapZoom: number
  sidebarMenuOpen: boolean
}

export const MapNav: FC<MapNavType> = ({ mapZoom, setMapZoom }) => {
  const navClasses =
    'hover:bg-gold hover:text-blueverydark bg-blueverydark text-gold h-10 w-10 mt-2 cursor-pointer list-none text-center grid place-items-center rounded-full'

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
          className={navClasses}
          onClick={() => setMapZoom(mapZoom - 1)}
        >
          <Snow />
        </button>
      </div>
    </nav>
  )
}