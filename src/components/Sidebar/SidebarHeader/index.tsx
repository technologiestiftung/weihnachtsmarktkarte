import { FC } from 'react'
import classNames from 'classnames'

export interface SidebarHeaderType {
  text: string
  fontSize: string
}

export const SidebarHeader: FC<SidebarHeaderType> = ({
  text,
  fontSize = 'text-2xl',
}) => {
  return (
    <>
      <h1
        className={classNames(
          fontSize,
          'font-bold pt-8 pb-4 px-4 text-2xl sticky top-0 bg-lightblue scroll-shadow z-10'
        )}
      >
        <span className="w-[90%]">{text}</span>
      </h1>
    </>
  )
}
