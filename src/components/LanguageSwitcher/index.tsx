import { EventHandler, FC, MouseEvent } from 'react'
import classNames from 'classnames'

export interface LanguageSwitcherType {
  language: string
  setLanguage: (lang: string) => void
}

export const LanguageSwitcher: FC<LanguageSwitcherType> = ({
  language,
  setLanguage,
}) => {
  const navClasses =
    'hover:text-darkblue text-darkblue h-10 w-10 cursor-pointer list-none text-center grid place-items-center rounded-full hover:bg-darkgold bg-gold focus-visible:outline-none'

  function btnClicked(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault()
    e.stopPropagation()
    setLanguage(language === 'de' ? 'en' : 'de')
  }

  return (
    <nav
      className={classNames(
        'mb-3 absolute top-0 p-4 ease-in-out duration-300 z-20 right-0'
      )}
    >
      <div>
        <button
          title="change language"
          className={navClasses}
          onClick={(e) => btnClicked(e)}
        >
          {language === 'de' ? 'DE' : 'EN'}
        </button>
      </div>
    </nav>
  )
}
