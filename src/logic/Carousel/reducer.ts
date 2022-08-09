import { constants } from './actions';
import { AnyAction } from 'redux';
import { TripInfo } from '../../apiResponseTypes';

export interface TripsCarouselStateType {
  trips_data: TripInfo[];
  get_trips_data_error: boolean;
}

const initialState = {
  trips_data: [],
  get_trips_data_error: false
};

export function carouselReducer(state: TripsCarouselStateType = initialState, action: AnyAction) {
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