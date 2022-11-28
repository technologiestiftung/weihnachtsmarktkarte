import { FC, ReactNode } from 'react'

export interface SidebarBodyType {
  children: ReactNode
}

export const SidebarBody: FC<SidebarBodyType> = ({ children }) => {
  return (
    <>
      <div className="px-4">{children}</div>
    </>
  )
}
