import { store } from '@/redux/store';
import { StyledEngineProvider } from '@mui/material/styles';
import { AppProps } from 'next/app';
import { Provider } from 'react-redux';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
    <StyledEngineProvider injectFirst>
      <Component {...pageProps} />
    </StyledEngineProvider>
  </Provider>
  );
}

export default MyApp;
