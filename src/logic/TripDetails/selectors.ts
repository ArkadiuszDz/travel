import { RootState } from "../../configureStore";

export const getTripDetailsSelector = (state: RootState) => state.tripData.trip_details;
export const getTripDetailsErrorSelector = (state: RootState) => state.tripData.get_trip_details_error;