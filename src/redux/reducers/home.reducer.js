import {SET_CITIES} from '../constants';

const initialState = {
  cities: {},
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CITIES:
      return {
        ...state,
        cities: action.cities,
      };

    default:
      return state;
  }
};

export default homeReducer;
