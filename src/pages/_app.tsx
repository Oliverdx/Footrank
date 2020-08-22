import React from 'react';
import { AppProps } from 'next/app';

//SCSS
import './app.scss';

const App = ({ Component, pageProps }: AppProps): React.ReactElement => {
  return <Component {...pageProps} />;
};

export default App;