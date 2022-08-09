import { constants } from './actions';
import { AnyAction } from 'redux';
import { TripInfo } from '../../apiResponseTypes';

export interface RecentlyViewedStateType {
  recently_viewed: TripInfo[];
}

const initialState = {
  recently_viewed: [],
};

export function recentlyViewedReducer(state: RecentlyViewedStateType = initialState, action: AnyAction) {
  switch(action.type) {
    case constants.SET_RECENTLY_VIEWED:
      return {
        ...state,
        recently_viewed: [...action.payload]
      }
    default:
      return state;
  }
}