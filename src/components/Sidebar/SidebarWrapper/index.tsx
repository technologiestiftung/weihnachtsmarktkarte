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
  closeSymbol?: 'arrow' | 'cross'
  mobileHeight?: 'full' | 'half' | string
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
  const sidebarRef = useRef<HTMLDivElement>(null)
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
    // @ts-ignore
    scrollContainer.addEventListener('scroll', onScroll)
    // @ts-ignore
    return () => scrollContainer.removeEventListener('scroll', onScroll)
  }, [hasScrolled])
  const scrolling = hasScrolled ? 'scrolling' : ''

  return (
    <aside
      className={classNames(
        classesMobile,
        classes,
        scrolling,
        'fixed h-full p-4 rounded shadow-lg ease-in-out duration-300 text-lightblue/80',
        sidebarPosition,
        positionClass
      )}
    >
      <div
        ref={sidebarRef}
        className="bg-darkblue h-full overflow-y-auto rounded"
      >
        <button
          className="top-0 right-0 m-10 mr-10 mt-11 absolute cursor-pointer z-20 border-lightblue border-2 hover:bg-gold hover:border-gold rounded-full p-0"
          onClick={() => setOpen(false)}
        >
          {closeSymbol === 'cross' && <Cross color1={'#F5F8FE'} />}
          {closeSymbol === 'arrow' && <ArrowLeft color1={'black'} />}
        </button>

        {children}
      </div>
    </aside>
  )
}
