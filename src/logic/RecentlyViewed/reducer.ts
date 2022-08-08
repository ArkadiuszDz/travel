import { constants } from './actions';
import { AnyAction } from 'redux';

const initialState = {
  recently_viewed: [],
  recently_viewed_cookie: ''
};

export function recentlyViewedReducer(state = initialState, action: AnyAction) {
  switch(action.type) {
    case constants.SET_RECENTLY_VIEWED:
      return {
        ...state,
        recently_viewed: [...action.payload]
      }
    case constants.SET_RECENTLY_VIEWED_COOKIE:
      return {
        ...state,
        recently_viewed_cookie: action.payload
      }
    default:
      return state;
  }
}