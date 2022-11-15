import { FC, useState, useEffect, useRef, ReactNode } from 'react'
import { Cross, ArrowLeft } from '../../Icons'
import classNames from 'classnames'
import { useHasMobileSize } from '@lib/hooks/useHasMobileSize'

export interface SidebarWrapperType {
  classes: string
  isOpen: boolean
  setOpen: any
  children: ReactNode
  position: string
  closeSymbol: 'arrow' | 'cross'
  mobileHeight: 'full' | 'half'
}

export const SidebarWrapper: FC<SidebarWrapperType> = ({
  classes,
  isOpen,
  children,
  setOpen,
  position,
  closeSymbol,
  mobileHeight,
}) => {
  const hasMobileSize = useHasMobileSize()
  const positionClass = position === 'left' ? 'left-0' : 'right-0'
  const positionClassClosed =
    position === 'left' ? '-translate-x-full' : 'translate-x-full'
  //   const heightOnMobile = hasMobileSize ? mobileHeight
  const heightOnMobile = mobileHeight === 'full' ? 'h-full' : 'h-1/2'

  const classesMobile = hasMobileSize
    ? isOpen
      ? heightOnMobile + ' w-full bottom-0'
      : heightOnMobile + ' w-full'
    : 'top-0 w-sidebar'
  const sidebarPosition = isOpen
    ? positionClass
    : hasMobileSize
    ? 'bottom-[-100%]'
    : positionClassClosed

  // scrolling stuff
  const sidebarRef = useRef()
  const [hasScrolled, setHasScrolled] = useState<boolean>(false)
  useEffect(() => {
    const scrollContainer = sidebarRef.current
    if (!scrollContainer) return
    const onScroll: EventListener = (evt) => {
      const target = evt.target as HTMLButtonElement
      if (target.scrollTop > 5) {
        setHasScrolled(true)
      } else {
        setHasScrolled(false)
      }
    }
    scrollContainer.addEventListener('scroll', onScroll)
    return () => scrollContainer.removeEventListener('scroll', onScroll)
  }, [hasScrolled])
  const scrolling = hasScrolled ? 'scrolling' : ''

  return (
    <aside
      className={classNames(
        classesMobile,
        classes,
        scrolling,
        'fixed h-full p-4 rounded shadow-lg ease-in-out duration-300 text-darkblue',
        sidebarPosition,
        positionClass
      )}
    >
      <div
        ref={sidebarRef}
        className="bg-lightblue h-full overflow-y-auto rounded"
      >
        <button
          className="top-0 right-0 m-10 mr-8 mt-11 absolute cursor-pointer z-20 hover:bg-gold rounded-full p-2"
          onClick={() => setOpen(false)}
        >
          {closeSymbol === 'cross' && <Cross color1={'black'} />}
          {closeSymbol === 'arrow' && <ArrowLeft color1={'black'} />}
        </button>

        {children}
      </div>
    </aside>
  )
}
