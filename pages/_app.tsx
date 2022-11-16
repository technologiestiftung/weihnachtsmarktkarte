import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useMatomo } from '@lib/hooks/useMatomo'

export default function App({ Component, pageProps }: AppProps) {
  useMatomo()
  return <Component {...pageProps} />
}
