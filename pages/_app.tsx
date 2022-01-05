import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import { MoralisProvider } from "react-moralis"
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MoralisProvider appId={process.env.NEXTAPPID || ''}
      serverUrl={process.env.NEXTSERVERURL || ''}>
      <ChakraProvider>
            <Component {...pageProps} />
      </ChakraProvider>
    </MoralisProvider>
  )
}

export default MyApp
