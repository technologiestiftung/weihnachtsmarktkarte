import { FC, ReactNode } from 'react'
import classNames from 'classnames'

export interface MarketInfoType {
  icon: ReactNode
  title: string
  children: ReactNode
}

export const MarketInfo: FC<MarketInfoType> = ({ icon, title, children }) => {
  return (
    <>
      <div className="flex pt-4">
        <div className="w-[40px]">{icon}</div>
        <div className="flex-1">
          <h3 className="font-bold pb-2">{title}</h3>
          {children}
        </div>
      </div>
    </>
  )
}
