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
  FogyIcon,
  SnowyIcon,
  SleetyIcon,
  HailyIcon,
} from '@components/Icons'
import classNames from 'classnames'
import { FC, ReactNode, useEffect, useState } from 'react'
import { format } from 'date-fns'
import { de } from 'date-fns/locale'

interface WeatherOptionPropType {
  value: ReactNode
  icon: ReactNode
}

interface WeatherRowPropType {
  weatherRecords: WeatherType[] // Assuming you have an array of WeatherType objects
  hour: number
  ICON_MAPPING: { [key: string]: React.ReactNode } // Assuming ICON_MAPPING is an object with string keys and ReactNode values
  hourString: string
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
      <div className="flex">
        {icon}
        <p className="text-sm text-gray-400 italic pl-2 w-20">{value}</p>
      </div>
    </div>
  )
}

export const WeatherRow: FC<WeatherRowPropType> = ({
  weatherRecords,
  hour,
  ICON_MAPPING,
  hourString,
}) => {
  return (
    <div className="grid grid-flow-col auto-cols-max gap-x-4">
      <div className="text-sm font-bold text-lightblue/80 my-auto mx-auto pl-2">
        {hourString}
      </div>
      <div className="border-l border-lightblue/90 pl-3">
        {weatherRecords[hour] &&
          typeof weatherRecords[hour].precipitation !== 'undefined' && (
            <WeatherOption
              icon={<PrecipitationIcon />}
              value={`${weatherRecords[hour].precipitation} mm/h`}
            />
          )}
        {weatherRecords[hour] &&
          typeof weatherRecords[hour].wind_speed !== 'undefined' && (
            <WeatherOption
              icon={<WindSpeedIcon />}
              //@ts-ignore
              value={`${Math.round(weatherRecords[hour].wind_speed)} km/h`}
            />
          )}
      </div>
      {weatherRecords[hour] && (
        <div className="my-auto mx-auto">
          <span className="">{ICON_MAPPING[weatherRecords[hour].icon]}</span>
        </div>
      )}
      {weatherRecords[hour] && weatherRecords[hour].temperature && (
        <div className="my-auto text-lg font-bold text-lightblue/90 mx-auto">
          {weatherRecords[hour].temperature} °C
        </div>
      )}
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

  const today = new Date()

  let current = marketFilterDate instanceof Date ? marketFilterDate : today

  // Umwandlung in Millisekunden
  const todayTimestamp = today.getTime()
  const currentTimestamp = current.getTime()

  // Differenz in Millisekunden berechnen
  const timeDifference = currentTimestamp - todayTimestamp

  // Differenz in Tagen umrechnen
  const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24))

  let forecastCheck
  // Überprüfen, ob das ausgewählte Datum mehr als 9 Tage in der Zukunft liegt
  if (daysDifference > 8) {
    current = today
    forecastCheck = false
  } else {
    forecastCheck = true
  }

  const date = `${current.getDate()}.${
    current.getMonth() + 1
  }.${current.getFullYear()}`

  const monthWithLeadingZero = (current.getMonth() + 1)
    .toString()
    .padStart(2, '0')
  const dayWithLeadingZero = current.getDate().toString().padStart(2, '0')
  const dateAPI = `${current.getFullYear()}-${monthWithLeadingZero}-${dayWithLeadingZero}`

  const hour = today.getHours()

  const dayCheck = (): boolean => {
    return (
      new Date(current).setHours(0, 0, 0, 0) ===
      new Date(today).setHours(0, 0, 0, 0)
    )
  }
  const isSameDay = dayCheck()

  const ICON_MAPPING = {
    'clear-day': <ClearDayIcon />,
    'partly-cloudy-day': <PartlyCloudyDayIcon />,
    rain: <RainyIcon />,
    wind: <WindyIcon />,
    thunderstorm: <ThunderstormIcon />,
    cloudy: <CloudyIcon />,
    fog: <FogyIcon />,
    snow: <SnowyIcon />,
    sleet: <SleetyIcon />,
    hail: <HailyIcon />,
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
        console.log('Error fetching weather data:', error)
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
              'rounded-full w-10 h-10 mt-32',
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
          <div className="flex mb-2 last-of-type:mb-0">
            <div className="pr-4 mb-2">
              <p className="text-sm text-gold italic mb-2">
                Stelle im Kalender den Tag ein, für den du das Wetter sehen
                möchtest.
              </p>
              <span className="text-md font-bold text-lightblue/80">
                {`${formatDate(current)}`}
              </span>
            </div>
          </div>
          {!forecastCheck && (
            <div>
              <p className="text-lightblue/80 text-sm mb-4">
                Für diesen Tag ist noch keine Wettervorhersage verfügbar. Du
                kannst das Wetter für 9 Tage im Voraus sehen.
              </p>
            </div>
          )}
          {isSameDay && weatherRecords[hour] && (
            <div className="">
              <WeatherRow
                weatherRecords={weatherRecords}
                hour={hour}
                ICON_MAPPING={ICON_MAPPING}
                hourString={'aktuell'}
              />
            </div>
          )}
          {forecastCheck && isSameDay && weatherRecords[hour] && (
            <hr className="border-lightblue/80 mt-2 mb-2" />
          )}
          {weatherRecords[12] &&
            weatherRecords[17] &&
            weatherRecords[22] &&
            forecastCheck && (
              <div className="">
                <WeatherRow
                  weatherRecords={weatherRecords}
                  hour={12}
                  ICON_MAPPING={ICON_MAPPING}
                  hourString={'12 Uhr'}
                />
                <hr className="border-lightblue/80 mt-2 mb-2" />
                <WeatherRow
                  weatherRecords={weatherRecords}
                  hour={17}
                  ICON_MAPPING={ICON_MAPPING}
                  hourString={'17 Uhr'}
                />
                <hr className="border-lightblue/80 mt-2 mb-2" />
                <WeatherRow
                  weatherRecords={weatherRecords}
                  hour={22}
                  ICON_MAPPING={ICON_MAPPING}
                  hourString={'22 Uhr'}
                />
                <hr className="border-lightblue/80 mt-2" />
              </div>
            )}
          {weatherStation && (
            <p className="text-xs text-lightblue/80 italic mt-6">
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
