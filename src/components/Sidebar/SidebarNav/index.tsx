import { FC } from 'react'
import classNames from 'classnames'
import { useHasMobileSize } from '@lib/hooks/useHasMobileSize'
import { Home } from '@components/Icons'

export interface SidebarNavType {
  // // onChange: () => '',
  // value?: 'consumption' | 'renovation'
}

export const SidebarNav: FC<SidebarNavType> = ({
  navViews,
  setNavView,
  navView,
  sidebarMenuOpen,
  setSidebarMenuOpen,
  setModalOpen,
}) => {
  const hasMobileSize = useHasMobileSize()
  const navPositionClasses =
    !sidebarMenuOpen || hasMobileSize ? 'left-[0px]' : 'left-sidebar'
  const padding = sidebarMenuOpen ? (hasMobileSize ? 'pl-4' : 'pl-0') : 'pl-4'
  const navClasses =
    'h-14 cursor-pointer list-none text-center grid place-items-center hover:bg-gold'
  function onNavClick(listView) {
    if (!sidebarMenuOpen) {
      setSidebarMenuOpen(true)
    }
    setNavView(listView.value)
  }
  return (
    <nav
      className={classNames(
        navPositionClasses,
        padding,
        'fixed top-0 p-4 transition-left ease-in-out duration-300 z-10 rounded overflow-hidden'
      )}
    >
      <div className="w-14 flex flex-col list-none overflow-hidden shadow-lg ">
        <div
          onClick={() => setModalOpen(true)}
          className={classNames('bg-lightblue rounded mb-4', navClasses)}
        >
          <Home />
        </div>
        <div className="w-14 flex flex-col list-none rounded overflow-hidden shadow-lg ">
          {navViews.map((listView) => (
            <div
              key={listView.value}
              onClick={() => onNavClick(listView)}
              className={classNames(
                listView.value === navView && sidebarMenuOpen
                  ? 'bg-gold'
                  : 'bg-lightblue',
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
