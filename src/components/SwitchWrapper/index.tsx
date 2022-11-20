import { FC } from 'react'

import { Switch } from '@headlessui/react'

export interface SwitchWrapperType {
  text: string
  enabled: boolean
  setEnabled: (time: boolean) => void
}

export const SwitchWrapper: FC<SwitchWrapperType> = ({
  text,
  enabled,
  setEnabled,
}) => {
  return (
    <>
      <div className="text-bold flex items-center pb-1">
        <div className="flex-1">
          <p className="text-sm pr-2">{text}</p>
        </div>
        <Switch
          checked={enabled}
          onChange={setEnabled}
          className={`${
            enabled ? 'bg-gold' : 'bg-gray-300'
          } relative inline-flex h-6 w-11 items-center rounded-full`}
        >
          <span className="sr-only">enabled</span>
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
