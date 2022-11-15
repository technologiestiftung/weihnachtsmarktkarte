import { FC, useState } from 'react'
import classNames from 'classnames'

import { SidebarHeader } from '@components/SidebarHeader'
import ExpandablePanel from '@components/ExpandablePanel'
import { SwitchWrapper } from '@components/SwitchWrapper'

export interface SidebarContentLayersType {}

export const SidebarContentLayers: FC<SidebarContentLayersType> = ({
  showMapLayerToilets,
  setShowMapLayerToilets,
}) => {
  return (
    <>
      <SidebarHeader text="Kartenebenen" />

      <div className="text-bold p-4">
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
