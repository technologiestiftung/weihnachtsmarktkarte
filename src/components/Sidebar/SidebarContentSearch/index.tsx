import { FC, useState } from 'react'
import classNames from 'classnames'

import { SidebarHeader } from '@components/Sidebar/SidebarHeader'

export interface SidebarContentSearchType {
  marketsData: any
  setMarketId: (d: string | null | number) => void
  setMarketData: (d: any) => void
  setZoomToCenter: (d: any) => void
  setMapZoom: (d: any) => void
}

export const SidebarContentSearch: FC<SidebarContentSearchType> = ({
  marketsData,
  setMarketId,
  setMarketData,
  setZoomToCenter,
  setMapZoom,
}) => {
  const [markets, setMarkets] = useState<any>(marketsData)

  function onMarketSelect(m: any) {
    setMarketId(m.id)
    setMarketData(m)
    setZoomToCenter([m.lng, m.lat])
    setMapZoom(12)
  }

  function onMarketSearch(e: React.ChangeEvent<HTMLInputElement>) {
    const inputText = e.target.value.toLowerCase()

    const filteredMarkets: any[] = []
    marketsData.forEach((m: any) => {
      if (m.shortname && m.shortname.toLowerCase().includes(inputText)) {
        filteredMarkets.push(m)
      }
    })
    setMarkets(filteredMarkets)
  }

  return (
    <>
      <SidebarHeader text="Markt Suche" />

      <span className="sticky top-10">
        <div className="px-4 bg-darkblue">
          <p className="text-sm pb-4">Suche nach einem Markt</p>
        </div>
        <div className="relative w-full px-4 pb-4 bg-darkblue">
          <input
            type="text"
            onInput={onMarketSearch}
            className="text-darkblue flex p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:gold focus:gold "
          />
        </div>
      </span>
      <div className="">
        <ul>
          {markets
            .sort((a: any, b: any) => a.shortname.localeCompare(b.shortname))
            .map((market: any) => (
              <>
                <li
                  key={market.id}
                  className="hover:bg-gold hover:text-white py-2 px-4"
                >
                  <p
                    className="text-sm font-bold flex-1 cursor-pointer"
                    title={market.shortname}
                    onClick={() => onMarketSelect(market)}
                  >
                    {' '}
                    {market.shortname}
                  </p>
                </li>
                <hr className="my-2 mx-4 border-lightblue/70"></hr>
              </>
            ))}
        </ul>
      </div>
    </>
  )
}
