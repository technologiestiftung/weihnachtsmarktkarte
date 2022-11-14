import { FC, useState } from 'react'
import classNames from 'classnames'

import { Switch } from '@headlessui/react'

export interface SwitchWrapperType {
  text: string
  enabled: boolean
}

export const SwitchWrapper: FC<SwitchWrapperType> = ({
  text,
  enabled,
  setEnabled,
}) => {
  return (
    <>
      <div className="text-bold flex">
        <div className="flex-1">
          <p className="text-sm">{text}</p>
        </div>
        <Switch
          checked={enabled}
          onChange={setEnabled}
          className={`${
            enabled ? 'bg-gold' : 'bg-gray-300'
          } relative inline-flex h-6 w-11 items-center rounded-full`}
        >
          <span className="sr-only">Enable notifications</span>
          <span
            className={`${
              enabled ? 'translate-x-6' : 'translate-x-1'
            } inline-block h-4 w-4 transform rounded-full bg-gray-100 transition`}
          />
        </Switch>
      </div>
    </>
  )
}
