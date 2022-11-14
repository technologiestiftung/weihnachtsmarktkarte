import { FC, useState } from 'react'

import { Snow } from '../Icons'

export interface SnowNavType {}

export const SnowNav: FC<SnowNavType> = ({}) => {
  function snowToggle() {
    console.log('hhuuuhuh')
  }

  const navClasses =
    'hover:bg-gold hover:text-darkblue bg-darkblue text-gold h-10 w-10 mt-2 cursor-pointer list-none text-center grid place-items-center rounded-full'

  return (
    <>
      <nav
        className={
          'fixed bottom-0 p-6 ease-in-out duration-300 z-10 right-0 top-0 h-min'
        }
      >
        <button
          title="snow on/off"
          className={navClasses}
          onClick={() => snowToggle()}
        >
          <Snow />
        </button>
      </nav>
    </>
  )
}
