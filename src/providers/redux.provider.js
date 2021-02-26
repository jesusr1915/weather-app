import * as React from 'react';
import {PersistGate} from 'redux-persist/integration/react';
import reduxStore from '~/redux/configure-store';
import {Provider} from 'react-redux';

export const ReduxProvider = ({children}) => {
  const {store, persistor} = reduxStore();
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>{children}</PersistGate>
    </Provider>
  );
};
