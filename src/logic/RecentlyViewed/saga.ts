import { all, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { constants, setRecentlyViewed } from './actions';
import { AnyAction } from 'redux';

function* fetchRecentlyViewedData(action: AnyAction): any {
  const data = yield axios.get(`${process.env.REACT_APP_DB_URL}/trips?id=${action.payload}`)
    .then(response => response.data)
    .catch(() => null);

    yield put(setRecentlyViewed(data));
}

export function* recentlyViewedSaga() {
  yield all([
    takeLatest(constants.GET_RECENTLY_VIEWED, fetchRecentlyViewedData)
  ]);
}