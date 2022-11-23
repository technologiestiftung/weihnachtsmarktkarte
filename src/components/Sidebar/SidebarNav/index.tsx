import { FC } from 'react'
import classNames from 'classnames'
import { useHasMobileSize } from '@lib/hooks/useHasMobileSize'
import { Home } from '@components/Icons'

export interface SidebarNavType {
  navViews: any
  setNavView: (view: string) => void
  navView?: 'info' | 'filter' | 'layers'
  sidebarMenuOpen: boolean
  setSidebarMenuOpen: (open: boolean) => void
  setModalOpen: (open: boolean) => void
  marketId: string | number | null
  setMarketId: (time: string | null | number) => void
}

export const SidebarNav: FC<SidebarNavType> = ({
  navViews,
  setNavView,
  navView,
  sidebarMenuOpen,
  setSidebarMenuOpen,
  setModalOpen,
  marketId,
  setMarketId,
}) => {
  const hasMobileSize = useHasMobileSize()
  let navPositionClasses =
    !sidebarMenuOpen || hasMobileSize ? 'left-[0px]' : 'left-sidebar'

  if (marketId) {
    navPositionClasses = 'left-sidebar'
  }

  const padding = sidebarMenuOpen ? (hasMobileSize ? 'pl-4' : 'pl-0') : 'pl-4'
  const navClasses =
    'h-14 cursor-pointer list-none text-center grid place-items-center hover:bg-gold'
  function onNavClick(listView) {
    if (!sidebarMenuOpen) {
      setSidebarMenuOpen(true)
    }
    setNavView(listView.value)
    setMarketId(null)
  }
  return (
    <nav
      className={classNames(
        navPositionClasses,
        padding,
        'fixed top-0 p-4 transition-left ease-in-out duration-300 z-10 rounded overflow-hidden'
      )}
    >
      <div className="w-14 flex flex-col list-none overflow-hidden shadow-lg text-gold ">
        <div
          onClick={() => setModalOpen(true)}
          title="home"
          className={classNames(
            'bg-darkblue hover:text-darkblue rounded mb-4',
            navClasses
          )}
        >
          <Home />
        </div>
        <div className="w-14 flex flex-col list-none rounded overflow-hidden shadow-lg">
          {navViews.map((listView) => (
            <div
              key={listView.value}
              title={listView.name}
              onClick={() => onNavClick(listView)}
              className={classNames(
                'text-gold',
                'hover:text-darkblue',
                listView.value === navView && sidebarMenuOpen
                  ? 'bg-gold text-darkblue'
                  : 'bg-darkblue text-gold',
                navClasses
              )}
            >
              {listView.icon}
            </div>
          ))}
        </div>
      </div>
    </nav>
  )
}
