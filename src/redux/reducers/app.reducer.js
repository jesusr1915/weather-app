import {SET_SHOW_LOADING} from '../constants';

const initialState = {
  loading: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SHOW_LOADING:
      return {
        ...state,
        loading: action.loading,
      };

    default:
      return state;
  }
};

export default appReducer;
