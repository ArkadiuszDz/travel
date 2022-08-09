import { RootState } from "../../configureStore";

export const getTripsDataSelector = (state: RootState) => state.carouselData.trips_data;
export const getTripsTripsDataError = (state: RootState) => state.carouselData.get_trips_data_error;