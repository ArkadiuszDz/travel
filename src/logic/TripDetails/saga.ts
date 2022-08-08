import { all, put, takeLatest, call } from 'redux-saga/effects';
import { AnyAction } from 'redux';
import axios from 'axios';
import { constants, getTripDetailsFailed, setTripDetails } from './actions';

function* fetchTripData(action: AnyAction): any {
  try {
    const response = yield call(axios.get, `${process.env.REACT_APP_DB_URL}/${action.payload}`);
    yield put(setTripDetails(response.data));
  } catch (e) {
    yield put(getTripDetailsFailed());
  }
}

export function* tripDetailsSaga() {
  yield all([
    takeLatest(constants.GET_TRIP_DETAILS, fetchTripData),
  ]);
};
