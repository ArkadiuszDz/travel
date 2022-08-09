import { all, put, takeLatest, call, CallEffect, PutEffect, StrictEffect } from 'redux-saga/effects';
import axios from 'axios';
import { constants, getTripsFailed, setTrips } from './actions';
import { TripInfo } from '../../apiResponseTypes';

function* fetchTravelData(): Generator<CallEffect | PutEffect, void, {data: TripInfo[]}> {
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