import { FC, useState } from 'react'
import classNames from 'classnames'

import { Snow } from '../Icons'

export interface SnowNavType {}

export const SnowNav: FC<SnowNavType> = ({}) => {
  const [snow, setSnow] = useState(false)

  function snowToggle() {
    if (window.snowStorm) {
      if (snow) {
        window.snowStorm.toggleSnow()
        window.snowStorm.toggleSnow()
      } else {
        window.snowStorm.stop()
      }
      setSnow(!snow)
    }
  }

  const navClasses =
    'hover:bg-gold hover:text-darkblue h-10 w-10 mt-2 cursor-pointer list-none text-center grid place-items-center rounded-full'

  return (
    <>
      {typeof window !== 'undefined' && window.snowStorm && (
        <nav
          className={
            'fixed bottom-0 p-6 ease-in-out duration-300 z-10 right-0 top-0 h-min'
          }
        >
          <button
            title="snow on/off"
            className={classNames(
              snow ? 'bg-darkblue text-gold' : 'bg-gold text-darkblue',
              navClasses
            )}
            onClick={() => snowToggle()}
          >
            <Snow />
          </button>
        </nav>
      )}
    </>
  )
}
