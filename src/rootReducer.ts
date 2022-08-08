import { combineReducers } from 'redux';
import { carouselReducer } from './logic/Carousel/reducer';
import { tripDetailsReducer } from './logic/TripDetails/reducer';
import { recentlyViewedReducer } from './logic/RecentlyViewed/reducer';

export const rootReducer = combineReducers({
  carouselData: carouselReducer,
  tripData: tripDetailsReducer,
  recentlyViewedData: recentlyViewedReducer
});
