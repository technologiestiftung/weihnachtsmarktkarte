import { FC, ReactElement, useState, ReactNode } from 'react'
import classNames from 'classnames'
import { Plus, Minus } from '@components/Icons'

export interface ExpandablePanelType {
  title: string
  open: boolean
  children: ReactNode
}

export const ExpandablePanel: FC<ExpandablePanelType> = ({
  title,
  open,
  children,
}) => {
  const [openLocal, setOpenLocal] = useState(open)

  return (
    <>
      <div
        className="text-bold flex py-1.5 cursor-pointer"
        onClick={() => setOpenLocal(!openLocal)}
      >
        <h4 className="font-clanbold max-w-[90%] flex-1">{title}</h4>
        <p className="text-xs pb-1.5 hover:text-gold">
          {openLocal ? <Minus /> : <Plus />}
        </p>
      </div>
      {openLocal && children}
    </>
  )
}

export default ExpandablePanel
