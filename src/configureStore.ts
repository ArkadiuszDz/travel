import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import { rootReducer } from './rootReducer';
import { rootSaga } from './rootSaga';

export interface RootStore {

}

export const initState = {
  carouselData: {
    trips_data: [],
    recently_viewed: [],
    recently_viewed_cookie: ''
  },
  tripData: {
    trip_details: {}
  }
}

export default function configureStore(initialState: RootStore = initState) {

  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];

  const enhancers = [applyMiddleware(...middlewares)];

  let enhancer: any;

  if (process.env.REACT_APP_NODE_ENV !== 'production' && typeof window === 'object') {
    enhancer = composeWithDevTools(...enhancers);
  } else {
    enhancer = compose(...enhancers)
  }

  const store = createStore(
    rootReducer,
    initialState,
    enhancer
  );

  sagaMiddleware.run(rootSaga);

  return store;
}