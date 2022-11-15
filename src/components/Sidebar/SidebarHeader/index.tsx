import { FC } from 'react'

export interface SidebarHeaderType {
  text: string
}

export const SidebarHeader: FC<SidebarHeaderType> = ({ text }) => {
  return (
    <>
      <h1 className="font-bold pt-8 pb-4 px-4 text-2xl sticky top-0 bg-lightblue scroll-shadow z-10">
        {text}
      </h1>
    </>
  )
}
