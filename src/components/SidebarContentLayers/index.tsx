import { FC, useState } from 'react'
import classNames from 'classnames'

import ExpandablePanel from '@components/ExpandablePanel'
import { SwitchWrapper } from '@components/SwitchWrapper'

export interface SidebarContentLayersType {}

export const SidebarContentLayers: FC<SidebarContentLayersType> = ({
  showMapLayerToilets,
  setShowMapLayerToilets,
}) => {
  return (
    <>
      <div className="text-bold p-4">
        <h2 className="font-bold py-4 text-lg">Kartenebenen</h2>
        <p className="text-xs pb-2">
          Blenden Sie hier Ihre gewünschten zusätzlichen Kartenebenen ein.
        </p>

        <ExpandablePanel title={'Öffentliche Toiletten'} open={true}>
          <SwitchWrapper
            text={
              'Öffentliche Toiletten einblenden (Stadtbetriebene WCs neben den Markteigenen WCs)'
            }
            enabled={showMapLayerToilets}
            setEnabled={setShowMapLayerToilets}
          />
        </ExpandablePanel>
      </div>
    </>
  )
}
