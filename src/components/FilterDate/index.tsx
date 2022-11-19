import { FC, useState } from 'react'

import { format } from 'date-fns'
import { DayPicker } from 'react-day-picker'
import de from 'date-fns/locale/de'
import 'react-day-picker/dist/style.css'

export interface FilterDateType {
  marketFilterDate: Date
  setMarketFilterDate: (date: Date) => void
}

export const FilterDate: FC<FilterDateType> = ({
  marketFilterDate,
  setMarketFilterDate,
}) => {
  const css = `
  .rdp {
    --rdp-cell-size: 30px;
    --rdp-accent-color: #0000ff;
    --rdp-background-color: #e7edff;
    /* Switch to dark colors for dark themes */
    --rdp-accent-color-dark: #3003e1;
    --rdp-background-color-dark: #180270;
    /* Outline border for focused elements */
    --rdp-outline: 2px solid var(--rdp-accent-color);
    /* Outline border for focused and selected elements */
    --rdp-outline-selected: 2px solid rgba(0, 0, 0, 0.75);
    margin: 0;
  }

  .rdp-caption_label{

  }
`
  const defaultMonth = new Date(2022, 10)
  return (
    <>
      <div className="self-center">
        <style>{css}</style>
        <DayPicker
          mode="single"
          selected={marketFilterDate}
          onSelect={setMarketFilterDate}
          modifiersClassNames={{
            selected: '!bg-gold hover:bg-gold',
            mouseover: '!bg-gold',
          }}
          defaultMonth={defaultMonth}
          fromMonth={defaultMonth}
          toDate={new Date(2023, 0, 4)}
          locale={de}
          weekStartsOn={1}
        />
      </div>
    </>
  )
}
