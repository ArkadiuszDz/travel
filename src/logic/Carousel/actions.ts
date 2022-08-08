import { TripInfo } from "../../apiResponseTypes";

export const constants = {
  GET_TRIPS: "GET_TRIPS",
  SET_TRIPS: "SET_TRIPS",
  GET_TRIPS_ERROR: "GET_TRIPS_ERROR"
};

export const getTrips = () => ({
  type: constants.GET_TRIPS
});

export const setTrips = (data: TripInfo[]) => ({
  type: constants.SET_TRIPS,
  payload: data
});

export const getTripsFailed = () => ({
  type: constants.GET_TRIPS_ERROR
});