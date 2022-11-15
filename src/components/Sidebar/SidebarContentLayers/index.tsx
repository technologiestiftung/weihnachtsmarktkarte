import { FC, useState } from 'react'
import classNames from 'classnames'

import { SidebarHeader } from '@components/Sidebar/SidebarHeader'
import ExpandablePanel from '@components/ExpandablePanel'
import { SwitchWrapper } from '@components/SwitchWrapper'

export interface SidebarContentLayersType {
  showMapLayerToilets: boolean
  setShowMapLayerToilets: (show: boolean) => void
}

export const SidebarContentLayers: FC<SidebarContentLayersType> = ({
  showMapLayerToilets,
  setShowMapLayerToilets,
}) => {
  return (
    <>
      <SidebarHeader text="Kartenebenen" />

      <div className="px-4">
        <p className="text-sm pb-4">
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
