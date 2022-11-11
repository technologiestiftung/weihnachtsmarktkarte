import { FC, useState } from 'react'
const Slider = require('rc-slider')
const createSliderWithTooltip = Slider.createSliderWithTooltip
const Range = createSliderWithTooltip(Slider.Range)
import 'rc-slider/assets/index.css'

export interface FilterTimeType {}

export const FilterTime: FC<FilterTimeType> = ({
  marketFilterTime,
  setMarketFilterTime,
}) => {
  //   console.log(Slider.createSliderWithTooltip)

  //   const createSliderWithTooltip = Slider.createSliderWithTooltip
  //   const Range = createSliderWithTooltip(Slider.Range)

  // const [selected, setSelected] = useState<Date>()
  //   console.log(Range)

  return (
    <>
      <Range
        min={0}
        max={320}
        marks={{ 0: 0, 80: 80, 160: 160, 240: 240, 320: 320 }}
        onAfterChange={(arr) => {
          console.log(arr)

          // setMin(arr[0]);
          // setMax(arr[1]);
          // setAgeRange([arr[0], arr[1]]);
        }}
        trackStyle={[
          { backgroundColor: '#BDA33B' },
          { backgroundColor: 'green' },
        ]}
        handleStyle={[
          { backgroundColor: '#BDA33B', borderColor: '#BDA33B' },
          { backgroundColor: '#BDA33B', borderColor: '#BDA33B' },
        ]}
        railStyle={{ backgroundColor: 'black' }}
        defaultValue={[50, 200]}
        // railStyle={'bg-gold'}
      />
    </>
  )
}
