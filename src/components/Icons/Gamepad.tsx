import { FC } from 'react'
import { IconPropType } from './IconPropType'

export const Gamepad: FC<IconPropType> = ({
  color1,
  strokeWidth = 2,
  size = 24,
  ...props
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color1 || 'currentColor'}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M6 7h12a4 4 0 0 1 4 4v3a3 3 0 0 1-5.4 1.8L15 14H9l-1.6 1.8A3 3 0 0 1 2 14v-3a4 4 0 0 1 4-4z" />
      <path d="M6 11h4" />
      <path d="M8 9v4" />
      <path d="M15 11h.01" />
      <path d="M18 11h.01" />
    </svg>
  )
}
