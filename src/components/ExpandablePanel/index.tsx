import { FC, ReactElement, useState, ReactNode } from 'react'
import classNames from 'classnames'
import { Plus, Minus } from '@components/Icons'

export interface ExpandablePanelType {
  // marketData: any
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
        className="text-bold flex py-2 cursor-pointer"
        onClick={() => setOpenLocal(!openLocal)}
      >
        <h4 className="font-bold max-w-[90%] flex-1">{title}</h4>
        <p className="text-xs pb-2">{openLocal ? <Minus /> : <Plus />}</p>
      </div>
      {openLocal && children}
    </>
  )
}

export default ExpandablePanel
