import { FC } from 'react'
import classNames from 'classnames'

export interface SidebarHeaderType {
  text: string
  fontSize: string
}

export const SidebarHeader: FC<SidebarHeaderType> = ({
  text,
  fontSize = 'text-lg sm:text-xl md:text-2xl ',
}) => {
  return (
    <>
      <h1
        className={classNames(
          fontSize,
          'font-bold pt-7 pb-4 px-4 sticky top-0 bg-darkblue scroll-shadow z-10'
        )}
      >
        <span className="w-[85%] inline-block text-lightblue/90">{text}</span>
      </h1>
    </>
  )
}
