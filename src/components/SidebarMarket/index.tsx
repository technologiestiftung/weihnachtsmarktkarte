import { FC } from 'react'
import classNames from 'classnames'

export interface SidebarMarketType {
  marketData: any
}

export const SidebarMarket: FC<SidebarMarketType> = ({ marketData }) => {
  return (
    <>
      <div className="text-bold p-4">
        <h2 className="font-bold pt-4 text-lg">{marketData.name}</h2>
        <p className="text-xs pb-2">marketData.bemerkungen</p>
      </div>
    </>
  )
}
