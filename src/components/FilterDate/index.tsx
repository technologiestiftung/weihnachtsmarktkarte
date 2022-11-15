import { FC, useState } from 'react'

import { format } from 'date-fns'
import { DayPicker } from 'react-day-picker'
import 'react-day-picker/dist/style.css'

export interface FilterDateType {
  marketFilterDate: Date
  setMarketFilterDate: (date: Date) => void
}

export const FilterDate: FC<FilterDateType> = ({
  marketFilterDate,
  setMarketFilterDate,
}) => {
  return (
    <>
      <DayPicker
        mode="single"
        selected={marketFilterDate}
        onSelect={setMarketFilterDate}
        modifiersClassNames={{
          selected: '!bg-gold hover:bg-gold',
          mouseover: '!bg-gold',
        }}
      />
    </>
  )
}
