import { TripInfo } from "../../apiResponseTypes";

export const constants = {
  GET_RECENTLY_VIEWED: "GET_RECENTLY_VIEWED",
  SET_RECENTLY_VIEWED: "SET_RECENTLY_VIEWED",
  SET_RECENTLY_VIEWED_COOKIE: "SET_RECENTLY_VIEWED_COOKIE"
};

export const getRecentlyViewed = (id: string) => ({
  type: constants.GET_RECENTLY_VIEWED,
  payload: id
});

export const setRecentlyViewed = (data: TripInfo[]) => ({
  type: constants.SET_RECENTLY_VIEWED,
  payload: data
});

export const setRecentlyViewedCookie = (data: string) => ({
  type: constants.SET_RECENTLY_VIEWED_COOKIE,
  payload: data
});
