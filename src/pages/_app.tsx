import '@/styles/globals.scss'
import theme from '@/styles/theme'
import { AppProps } from 'next/dist/shared/lib/router/router'
import { StyledEngineProvider } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';
import { Provider } from 'react-redux';
import createStore from '@/redux/store';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={createStore()}>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </StyledEngineProvider>
    </Provider>
  )
}

export default MyApp
