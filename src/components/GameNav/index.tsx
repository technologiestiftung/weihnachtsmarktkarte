import { FC } from 'react'
import { Gamepad } from '../Icons'
import { LanguageText } from '@lib/getText'
import { getGameLink } from '@lib/gameLink'

export interface GameNavType {
  text: LanguageText
}

export const GameNav: FC<GameNavType> = ({ text }) => {
  return (
    <nav
      className={
        'fixed p-4 ease-in-out duration-300 z-10 right-0 top-48 h-min nav-small-height-game'
      }
    >
      <a
        href={getGameLink('button')}
        target="_blank"
        rel="noopener noreferrer"
        title={text.game.buttonTitle}
        aria-label={text.game.buttonTitle}
        className={
          'bg-darkblue text-gold hover:bg-gold hover:text-darkblue h-10 w-10 cursor-pointer text-center grid place-items-center rounded-full'
        }
      >
        <Gamepad size={22} />
      </a>
    </nav>
  )
}
