import { FC } from 'react'
import classNames from 'classnames'

export interface SidebarContentInfoType {
  // marketData: any
}

export const SidebarContentInfo: FC<SidebarContentInfoType> = (
  {
    // marketData,
  }
) => {
  return (
    <>
      <div className="text-bold p-4">
        <h2 className="font-bold py-4 text-lg">Über das Projekt</h2>
        <p className="text-xs pb-2">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate,
          harum vitae error voluptatibus perferendis officiis architecto vel
          deserunt tempore quasi maiores porro magni totam? Reprehenderit dolore
          asperiores quibusdam rem sint.
          <br />
          <br />
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo odio,
          laboriosam asperiores reprehenderit debitis aliquid, eum delectus
          molestias, minima praesentium eaque corporis veritatis impedit fuga
          nihil! Laboriosam nobis perferendis ducimus.
        </p>
      </div>
    </>
  )
}
