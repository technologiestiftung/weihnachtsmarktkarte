import { FC } from 'react'
import classNames from 'classnames'
import { SidebarHeader } from '@components/Sidebar/SidebarHeader'

export interface SidebarMarketType {
  marketData: any
}

export const SidebarMarket: FC<SidebarMarketType> = ({ marketData }) => {
  console.log('marketData', marketData)

  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

  return (
    <>
      <SidebarHeader text={marketData.name} fontSize="text-lg" />
      <div className="text-bold p-4">
        <p className="text-xs pb-2">marketData.bemerkungen</p>
        <p>{marketData.inaktiv ? 'inaktiv' : 'ok'}</p>

        {/* {days.map((day: string) => 
         <div>
          <div>{day}</div>
          <div>{marketData[day] === 0 ? }</div>
        </div>
        ) */}
      </div>
    </>
  )
}
