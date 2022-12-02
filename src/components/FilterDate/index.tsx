import { FC, useState, useEffect } from 'react'

import { format } from 'date-fns'
import { DayPicker } from 'react-day-picker'
import de from 'date-fns/locale/de'
import 'react-day-picker/dist/style.css'

export interface FilterDateType {
  marketFilterDate: Date | boolean
  setMarketFilterDate: (date: Date | boolean) => void
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
font-size: 16px
  }
  .rdp-button:hover:not([disabled]):not(.rdp-day_selected) {
    color: #091725;
  }

  .rdp-day_today:not(.rdp-day_outside) {
    color: #BDA33B;
  }

`

  const [defaultMonth, setDefaultMonth] = useState<Date>()
  const [today, setToday] = useState<Date>()
  const fromMonth = new Date(2022, 10)
  const toDate = new Date(2023, 0, 4)

  useEffect(() => {
    const today = new Date()
    const maxOrToday = today.getTime() > toDate.getTime() ? toDate : today
    setToday(maxOrToday)
    setDefaultMonth(new Date(maxOrToday.getFullYear(), maxOrToday.getMonth()))
  }, [])

  return (
    <>
      <div className="self-center">
        <style>{css}</style>
        <DayPicker
          mode="single"
          selected={marketFilterDate}
          // @ts-ignore
          onSelect={setMarketFilterDate}
          modifiersClassNames={{
            selected: '!bg-gold hover:bg-gold !text-darkblue',
            mouseover: '!bg-gold',
          }}
          defaultMonth={defaultMonth}
          today={today}
          fromMonth={fromMonth}
          toDate={toDate}
          locale={de}
          weekStartsOn={1}
        />
      </div>
    </>
  )
}
