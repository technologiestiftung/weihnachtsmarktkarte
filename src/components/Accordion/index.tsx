import { ChevronDown } from '@components/Icons/ChevronDown'
import classNames from 'classnames'
import { FC, ReactNode, useState } from 'react'

interface AccordionItemType {
  id: string
  title: string
  content: ReactNode
}

interface AccordionPropType {
  items: AccordionItemType[]
}

type StyleGetterType = (props: { isActive: boolean }) => Record<string, string>

const borderBottomStyle = 'border-b border-gray-300'
const getStyles: StyleGetterType = ({ isActive }) => ({
  wrapper: classNames(!isActive && borderBottomStyle, 'relative z-0'),
  title: classNames('pt-2 flex ', isActive ? 'pb-3' : 'pb-4'),
  content: classNames(
    borderBottomStyle,
    'rounded m-0 pb-6 pt-0 overflow-hidden',
    'max-w-none w-full text-sm'
  ),
})

export const Accordion: FC<AccordionPropType> = ({ items }) => {
  const [activeItemId, setActiveItemId] = useState<string | null>(null)
  return (
    <div>
      {items.map(({ id, title, content }) => {
        const isActive = id === activeItemId
        const classes = getStyles({ isActive })
        return (
          <div key={id} className={classes.wrapper}>
            <button
              className={classes.title}
              onClick={() => {
                if (activeItemId === id) return setActiveItemId(null)
                setActiveItemId(id)
              }}
              tabIndex={isActive ? 1 : 0}
            >
              <h2 className="group-hover:text-blue-500 text-sm inline">
                {title}
              </h2>
              <ChevronDown
                className={classNames(
                  'right-0 absolute transform transition-transform text-gold',
                  isActive ? 'rotate-180' : 'rotate-0'
                )}
              />
            </button>
            {isActive && (
              <p style={{ margin: 0 }} className={classes.content}>
                {content}
              </p>
            )}
          </div>
        )
      })}
    </div>
  )
}
