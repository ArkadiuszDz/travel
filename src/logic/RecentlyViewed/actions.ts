import { TripInfo } from "../../apiResponseTypes";

export const constants = {
  GET_RECENTLY_VIEWED: "GET_RECENTLY_VIEWED",
  SET_RECENTLY_VIEWED: "SET_RECENTLY_VIEWED",
};

export const getRecentlyViewed = (id: string) => ({
  type: constants.GET_RECENTLY_VIEWED,
  payload: id
});

export const setRecentlyViewed = (data: TripInfo[]) => ({
  type: constants.SET_RECENTLY_VIEWED,
  payload: data
});
