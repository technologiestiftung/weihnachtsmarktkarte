import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useMatomo } from '@lib/hooks/useMatomo'
import '@components/Map/mapPopup.css'

export default function App({ Component, pageProps }: AppProps) {
  useMatomo()
  return <Component {...pageProps} />
}
