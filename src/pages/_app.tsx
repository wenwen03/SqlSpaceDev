import { AppProps } from 'next/dist/shared/lib/router/router'
import '../styles/globals.css'
import { StyledEngineProvider } from '@mui/material/styles';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StyledEngineProvider injectFirst>
        <Component {...pageProps} />
    </StyledEngineProvider>
  )
}

export default MyApp
