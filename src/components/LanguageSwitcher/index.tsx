import { FC } from 'react'
import classNames from 'classnames'
import { Plus, Minus, Geolocate } from '../Icons'

export interface LanguageSwitcherType {
  language: string
  setLanguage: (lang: string) => void
}

export const LanguageSwitcher: FC<LanguageSwitcherType> = ({
  language,
  setLanguage,
}) => {
  const navClasses =
    'hover:bg-gold hover:text-darkblue bg-darkblue text-gold h-10 w-10 mt-2 cursor-pointer list-none text-center grid place-items-center rounded-full'

  return (
    <nav
      className={classNames(
        'mb-3 fixed bottom-36 p-6 ease-in-out duration-300 z-10 right-0'
      )}
    >
      <div>
        <button
          title="change language"
          className={navClasses}
          onClick={() => setLanguage(language === 'de' ? 'en' : 'de')}
        >
          {language === 'de' ? 'EN' : 'DE'}
        </button>
      </div>
    </nav>
  )
}
