import { constants } from './actions';
import { AnyAction } from 'redux';

const initialState = {
  trips_data: [],
  recently_viewed: [],
  get_trips_data_error: false
};

export function carouselReducer(state = initialState, action: AnyAction) {
  switch(action.type) {
    case constants.SET_TRIPS:
      return {
        ...state,
        trips_data: [...action.payload],
        get_trips_data_error: false,
      }
    case constants.GET_TRIPS_ERROR:
      return {
        ...state,
        get_trips_data_error: true,
      }
    default:
      return state;
  }
}