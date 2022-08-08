import { all, put, takeLatest, call } from 'redux-saga/effects';
import axios from 'axios';
import { constants, getTripsFailed, setTrips } from './actions';

function* fetchTravelData(): any {
  try {
    const response = yield call(axios.get, `${process.env.REACT_APP_DB_URL}/trips`);

    yield put(setTrips(response.data));
  } catch (e) {
    yield put(getTripsFailed());
  }
}

export function* CarouselSaga() {
  yield all([
    takeLatest(constants.GET_TRIPS, fetchTravelData)
  ]);
}