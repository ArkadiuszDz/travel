import { constants } from './actions';
import { AnyAction } from 'redux';
import { TripDetailsType } from '../../apiResponseTypes';

export interface TripDetailsStateType {
  trip_details: TripDetailsType;
  get_trip_details_error: boolean;
}

const initialState = {
  trip_details: {
    title: '',
    info: '',
    images: []
  },
  get_trip_details_error: false,
};

export function tripDetailsReducer(state: TripDetailsStateType = initialState, action: AnyAction) {
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
