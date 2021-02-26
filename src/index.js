import * as React from 'react';
import {ReduxProvider, AppProvider} from './providers';
import {Navigation} from '~/navigation';

export const WeatherApp = () => {
  return (
    <ReduxProvider>
      <AppProvider>
        <Navigation />
      </AppProvider>
    </ReduxProvider>
  );
};
