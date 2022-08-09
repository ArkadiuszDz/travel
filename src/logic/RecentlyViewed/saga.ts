import { all, call, CallEffect, put, PutEffect, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { constants, setRecentlyViewed } from './actions';
import { AnyAction } from 'redux';
import { TripInfo } from '../../apiResponseTypes';

function* fetchRecentlyViewedData(action: AnyAction): Generator<CallEffect | PutEffect, void, {data: TripInfo[]}> {
  try {
    const response = yield call(axios.get,`${process.env.REACT_APP_DB_URL}/trips?id=${action.payload}`);
    yield put(setRecentlyViewed(response.data));

  } catch (e) {

  }
}

export function* recentlyViewedSaga() {
  yield all([
    takeLatest(constants.GET_RECENTLY_VIEWED, fetchRecentlyViewedData)
  ]);
}