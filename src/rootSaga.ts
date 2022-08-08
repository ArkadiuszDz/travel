import { all, fork } from 'redux-saga/effects';
import { CarouselSaga } from './logic/Carousel/saga';
import { recentlyViewedSaga } from './logic/RecentlyViewed/saga';
import { tripDetailsSaga } from './logic/TripDetails/saga';

export function* rootSaga() {
  yield all([
    fork(CarouselSaga),
    fork(tripDetailsSaga),
    fork(recentlyViewedSaga)
  ])
};