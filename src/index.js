import * as React from 'react';
import {ReduxProvider} from './providers/redux.provider';
import {Navigation} from '~/navigation';

export const WeatherApp = () => {
  return (
    <ReduxProvider>
      <Navigation />
    </ReduxProvider>
  );
};
