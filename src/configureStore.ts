import { applyMiddleware, compose, Action } from 'redux';
import { configureStore } from '@reduxjs/toolkit'
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { TripDetailsType, TripInfo } from './apiResponseTypes';

import { rootReducer } from './rootReducer';
import { rootSaga } from './rootSaga';

export interface RootStore {
  carouselData: {
    trips_data: TripInfo[],
    get_trips_data_error: boolean
  },
  tripData: {
    trip_details: TripDetailsType,
    get_trip_details_error: boolean
  },
  recentlyViewedData: {
    recently_viewed: TripInfo[]
  }
}

export const initState = {
  carouselData: {
    trips_data: [],
    get_trips_data_error: false
  },
  tripData: {
    trip_details: {
      title: '',
      info: '',
      images: []
    },
    get_trip_details_error: false
  },
  recentlyViewedData: {
    recently_viewed: []
  }
}

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];
const enhancers = [applyMiddleware(...middlewares)];

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(...middlewares)
  },
  enhancers: [composeWithDevTools(...enhancers)],
  devTools: process.env.NODE_ENV !== 'production' && typeof window === 'object',
  preloadedState: initState
});

export default store;

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
