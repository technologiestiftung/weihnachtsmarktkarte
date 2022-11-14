import { FC } from 'react'
import { IconPropType } from './IconPropType'

export const Geolocate: FC<IconPropType> = ({
  color1,
  color2,
  color3,
  strokeWidth = 2,
  size = 24,
  ...props
}) => {
  const col1 = color1
  const col2 = color3 || color2 || color1
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill={col1}
      viewBox="0 0 20 20"
    >
      <path
        fill={color1 || 'currentColor'}
        d="M10 4C9 4 9 5 9 5v.1A5 5 0 0 0 5.1 9H5s-1 0-1 1 1 1 1 1h.1A5 5 0 0 0 9 14.9v.1s0 1 1 1 1-1 1-1v-.1a5 5 0 0 0 3.9-3.9h.1s1 0 1-1-1-1-1-1h-.1A5 5 0 0 0 11 5.1V5s0-1-1-1zm0 2.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 1 1 0-7z"
      />
      <circle fill={color1 || 'currentColor'} cx="10" cy="10" r="2" />
      <path
        fill={color1 || 'currentColor'}
        d="M14 5l1 1-9 9-1-1 9-9z"
        display="none"
      />
    </svg>
  )
}
