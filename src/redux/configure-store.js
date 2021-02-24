import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {createStore, applyMiddleware, compose} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import Reducers from './reducers';

const window = global.window;

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['app'],
};

const persistedReducer = persistReducer(persistConfig, Reducers);

const composeEnhancer =
  (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

export default () => {
  const store = createStore(
    persistedReducer,
    composeEnhancer(applyMiddleware(thunk)),
  );
  const persistor = persistStore(store);

  return {store, persistor};
};
