import React, { FC, SVGProps } from 'react'

export const UnderConstruction: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width="80"
    height="80"
    viewBox="0 0 120 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M112.5 88.1248C112.501 87.7806 112.407 87.4427 112.228 87.1482C112.05 86.8541 111.793 86.6142 111.488 86.456L90.9935 75.825L63.5245 4.95C63.3948 4.61211 63.1698 4.31875 62.8769 4.10586C62.5843 3.89297 62.2358 3.76953 61.8746 3.75H58.3121C57.9343 3.75117 57.566 3.86641 57.2547 4.08047C56.9437 4.29453 56.7043 4.59766 56.5683 4.95L29.0063 75.825L8.51232 86.456C8.1006 86.6669 7.78185 87.0224 7.61623 87.4541C7.451 87.8861 7.451 88.3634 7.61623 88.7955C7.78185 89.2271 8.10061 89.5826 8.51232 89.7935L59.1373 116.044C59.6783 116.324 60.3213 116.324 60.8623 116.044L111.487 89.7935C111.793 89.6353 112.049 89.3955 112.228 89.1013C112.406 88.8068 112.501 88.4689 112.5 88.1248H112.5ZM59.212 74.8308C59.7116 75.062 60.2874 75.062 60.787 74.8308L82.706 64.8188L91.3872 87.2068L59.9992 102.901L28.6112 87.2068L37.2924 64.8188L59.212 74.8308ZM38.587 61.3118L46.8745 40.3308L59.2305 46.6683C59.7715 46.9483 60.4145 46.9483 60.9555 46.6683L73.3115 40.3308L81.3553 61.3118L59.9993 71.0618L38.587 61.3118ZM59.512 7.49975H60.487L71.849 36.8248L59.999 42.8998L48.149 36.8248L59.512 7.49975ZM59.9995 112.26L13.4435 88.1288L26.9625 81.1163L24.5063 87.4538C24.3399 87.8866 24.3399 88.3655 24.5063 88.7987C24.6723 89.2315 24.993 89.5873 25.4063 89.7975L59.1563 106.672C59.6872 106.94 60.3129 106.94 60.8438 106.672L94.5938 89.7975C95.0071 89.5873 95.3278 89.2315 95.4938 88.7987C95.6602 88.3655 95.6602 87.8865 95.4938 87.4538L93.0376 81.1163L106.557 88.1288L59.9995 112.26Z"
      fill="#BDA33B"
    />
  </svg>
)