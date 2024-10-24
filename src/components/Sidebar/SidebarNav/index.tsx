import { FC } from 'react'
import classNames from 'classnames'
import { useHasMobileSize } from '@lib/hooks/useHasMobileSize'
import { Home } from '@components/Icons'
import { LanguageText } from '@lib/getText'

export interface SidebarNavType {
  navViews: any
  setNavView: (view: 'info' | 'filter') => void
  navView?: 'info' | 'filter' | 'search'
  sidebarMenuOpen: boolean
  setSidebarMenuOpen: (open: boolean) => void
  setModalOpen: (open: boolean) => void
  marketId: string | number | null
  setMarketId: (time: string | null | number) => void
  text: LanguageText
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
  text,
}) => {
  const hasMobileSize = useHasMobileSize()
  let navPositionClasses =
    !sidebarMenuOpen || hasMobileSize ? 'left-[0px]' : 'left-sidebar'

  if (marketId && !hasMobileSize) {
    navPositionClasses = 'left-sidebar'
  }

  const padding = sidebarMenuOpen ? (hasMobileSize ? 'pl-4' : 'pl-0') : 'pl-4'
  const navClasses =
    'h-14 cursor-pointer list-none text-center grid place-items-center hover:bg-gold'
  function onNavClick(listView: any) {
    if (!sidebarMenuOpen) {
      setSidebarMenuOpen(true)
    }
    setNavView(listView.value)
    setMarketId(null)
  }
  return (
    <>
      <div className="fixed w-full top-4 z-10 text-center">
        <div
          onClick={() => setModalOpen(true)}
          title="home"
          className={classNames(
            'text-xs md:text-base mr-auto ml-auto w-fit cursor-pointer bg-darkblue font-clanbold hover:bg-gold rounded-2xl mb-4 px-4 py-2.5 group'
          )}
        >
          <span className={'text-gold group-hover:text-darkblue'}>
            {text.title.market}
          </span>
          <span className={'text-lightblue'}>{text.title.finder}</span>
        </div>
      </div>

      <nav
        className={classNames(
          navPositionClasses,
          padding,
          'fixed top-0 p-4 transition-left ease-in-out duration-300 z-10 rounded overflow-hidden'
        )}
      >
        <div className="w-14 flex flex-col list-none overflow-hidden shadow-lg text-gold ">
          <div className="w-14 flex flex-col list-none rounded overflow-hidden shadow-lg">
            {navViews.map((listView: any) => (
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
    </>
  )
}
