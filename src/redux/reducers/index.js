import {combineReducers} from 'redux';
import appReducer from './app.reducer';
import homeReducer from './home.reducer';

export default combineReducers({
  app: appReducer,
  home: homeReducer,
});
