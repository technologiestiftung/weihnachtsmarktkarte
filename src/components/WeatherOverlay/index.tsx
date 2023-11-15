import {
  Cross,
  WindSpeedIcon,
  PrecipitationIcon,
  ClearDayIcon,
  RainyIcon,
  CloudyIcon,
  PartlyCloudyDayIcon,
  WindyIcon,
  ThunderstormIcon,
  ClearNightIcon,
  PartlyCloudyNightIcon,
} from '@components/Icons'
import classNames from 'classnames'
import { FC, ReactNode, useEffect, useState } from 'react'
import { format } from 'date-fns'
import { de } from 'date-fns/locale'

interface WeatherOptionPropType {
  value: ReactNode
  icon: ReactNode
}

interface WeatherType {
  timestamp: string | null | undefined
  temperature: number | null | undefined
  precipitation: number | null | undefined
  wind_speed: number | null | undefined
  cloud_cover: number | null | undefined
  pressure_msl: number | null | undefined
  icon:
    | 'clear-day'
    | 'rain'
    | 'partly-cloudy-day'
    | 'thunderstorm'
    | 'snow'
    | 'hail'
    | 'clear-night'
    | 'partly-cloudy-night'
    | 'cloudy'
    | 'sleet'
    | 'fog'
    | 'wind'
}

interface SourceType {
  station_name: string
}

interface WeatherAPIResponseType {
  weather: WeatherType[]
  sources: SourceType[]
}
const capitalizeWords = (str: string) => {
  return str
    .toLowerCase()
    .split(/\s+/)
    .map((word) => {
      const parts = word.split('-')
      return parts
        .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
        .join('-')
    })
    .join(' ')
}

const formatDate = (dateString: Date) => {
  const formattedDate = format(dateString, 'd. MMMM yyyy', { locale: de })
  return formattedDate
}

export const WeatherOption: FC<WeatherOptionPropType> = ({ icon, value }) => {
  return (
    <div className="flex last-of-type:mb-0 mb-1">
      <div className="pr-4 flex">
        {icon}
        <p className="text-sm text-gray-400 italic pl-2">{value}</p>
      </div>
    </div>
  )
}
export const WeatherOverlay: FC<{ marketFilterDate: Date | boolean }> = ({
  marketFilterDate,
}) => {
  const [isWeatherOpened, setIsWeatherOpened] = useState(false)
  //const elRef = useClickOutside<HTMLDivElement>(() => setIsWeatherOpened(false))

  const [weatherRecords, setWeatherRecords] = useState<WeatherType[] | null>(
    null
  )
  const [weatherStation, setWeatherStation] = useState<
    SourceType['station_name'] | null
  >(null)

  const current =
    marketFilterDate instanceof Date ? marketFilterDate : new Date()

  const date = `${current.getDate()}.${
    current.getMonth() + 1
  }.${current.getFullYear()}`
  const dateAPI = `${current.getFullYear()}-${(
    '0' + (current.getMonth() + 1).toString()
  ).slice(-2)}-${current.getDate()}`

  console.log(dateAPI)
  const hour = current.getHours()

  const ICON_MAPPING = {
    'clear-day': <ClearDayIcon />,
    'partly-cloudy-day': <PartlyCloudyDayIcon />,
    rain: <RainyIcon />,
    wind: <WindyIcon />,
    thunderstorm: <ThunderstormIcon />,
    cloudy: <CloudyIcon />,
    fog: <CloudyIcon />,
    snow: <CloudyIcon />,
    sleet: <CloudyIcon />,
    hail: <CloudyIcon />,
    'clear-night': <ClearNightIcon />,
    'partly-cloudy-night': <PartlyCloudyNightIcon />,
  }
  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          `https://api.brightsky.dev/weather?lat=52.5162&lon=13.3777&date=${dateAPI}`
        )
        const data: WeatherAPIResponseType = await response.json()

        const station = data.sources[0].station_name
        const weatherData = data.weather
        const weatherVariables = weatherData.map(
          (hourlyData) =>
            ({
              timestamp: hourlyData.timestamp,
              temperature: hourlyData.temperature,
              precipitation: hourlyData.precipitation,
              wind_speed: hourlyData.wind_speed,
              cloud_cover: hourlyData.cloud_cover,
              pressure_msl: hourlyData.pressure_msl,
              icon: hourlyData.icon,
            } as unknown as Pick<
              WeatherType,
              | 'timestamp'
              | 'temperature'
              | 'precipitation'
              | 'wind_speed'
              | 'cloud_cover'
              | 'pressure_msl'
              | 'icon'
            >)
        )
        setWeatherRecords(weatherVariables)
        setWeatherStation(station)
      } catch (error) {
        console.error('Error fetching weather data:', error)
      }
    }
    // Fetch data when dateAPI changes
    fetchWeather()
  }, [dateAPI]) // Add dateAPI as a dependency to useEffect

  return (
    <span>
      {weatherRecords &&
        weatherRecords[hour] &&
        weatherRecords[hour].temperature && (
          <button
            onClick={() => setIsWeatherOpened(!isWeatherOpened)}
            aria-label="Wettervorhersage"
            className={classNames(
              'rounded-full w-10 h-10 mt-20',
              'fixed right-4 text-center py-2 z-10',
              'bg-darkblue text-gold',
              isWeatherOpened && 'bg-gold text-darkblue',
              !isWeatherOpened && 'hover:bg-gold hover:text-darkblue'
            )}
          >
            {' '}
            <span className="font-bold">
              {weatherRecords[hour].temperature?.toFixed()}
            </span>
            <span className="text-sm">°C</span>
          </button>
        )}
      {isWeatherOpened && weatherRecords && (
        <div
          className={classNames(
            'right-4  top-16 sm:top-28 sm:right-20',
            'rounded shadow-xl p-6 sm:p-8 w-96',
            'fixed bg-darkblue flex flex-col z-10'
          )}
          style={{ maxWidth: 'calc(100% - 32px)' }}
        >
          <h3 className="font-bold text-lg text-lightblue/80 sm:text-xl pr-20 mb-2">
            Wie wird das Wetter?{' '}
          </h3>
          <div className="flex mb-4 last-of-type:mb-0">
            <div className="pr-4">
              <p className="text-sm text-gold italic mb-2">
                Stelle im Kalender den Tag ein, für den du das Wetter sehen
                möchtest.
              </p>
              <span className="text-md text-lightblue/80">
                {`${formatDate(current)}`}
              </span>
            </div>
          </div>
          <div className="flex">
            <div>
              {typeof weatherRecords[hour].precipitation !== 'undefined' && (
                <WeatherOption
                  icon={<PrecipitationIcon />}
                  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
                  value={`${weatherRecords[hour].precipitation} mm/h`}
                />
              )}
              {typeof weatherRecords[hour].wind_speed !== 'undefined' && (
                <WeatherOption
                  icon={<WindSpeedIcon />}
                  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
                  value={`${weatherRecords[hour].wind_speed} km/h`}
                />
              )}
            </div>
            <div className="flex m-auto  font-medium text-xl">
              {ICON_MAPPING[weatherRecords[hour].icon]}
              {weatherRecords[hour].temperature && (
                <p className="my-auto text-lightblue/80 mx-auto pl-6">
                  {weatherRecords[hour].temperature} °C
                </p>
              )}
            </div>
          </div>
          {weatherStation && (
            <p className="text-xs text-lightblue/80 italic mb-1 mt-3">
              {`Wetterstation  ${capitalizeWords(weatherStation)}`}
            </p>
          )}
          <button
            className="text-lightblue/80 top-0 right-0 mr-8 mt-6 absolute cursor-pointer z-20 border-lightblue border-2 hover:bg-gold hover:border-gold rounded-full p-0"
            onClick={() => setIsWeatherOpened(false)}
          >
            <Cross />
          </button>
        </div>
      )}
    </span>
  )
}
