import { TripDetailsType } from "../../apiResponseTypes";

export const constants = {
  GET_TRIP_DETAILS: "GET_TRIP_DETAILS",
  SET_TRIP_DETAILS: "SET_TRIP_DETAILS",
  GET_TRIP_DETAILS_ERROR: "GET_TRIP_DETAILS_ERROR"
};

export const getTripDetails = (id: string) => ({
  type: constants.GET_TRIP_DETAILS,
  payload: id
});

export const setTripDetails = (data: TripDetailsType) => ({
  type: constants.SET_TRIP_DETAILS,
  payload: data
});

export const getTripDetailsFailed = () => ({
  type: constants.GET_TRIP_DETAILS_ERROR,
  payload: true
})