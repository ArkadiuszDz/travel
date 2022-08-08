import { constants } from './actions';
import { AnyAction } from 'redux';

const initialState = {
  trip_details: null,
  get_trip_details_error: false,
};

export function tripDetailsReducer(state = initialState, action: AnyAction) {
  switch(action.type) {
    case constants.SET_TRIP_DETAILS:
      return {
        ...state,
        get_trip_details_error: false,
        trip_details: { ...action.payload }
      }
    case constants.GET_TRIP_DETAILS_ERROR:
      return {
        ...state,
        get_trip_details_error: true
      }
    default:
      return state;
  }
};
