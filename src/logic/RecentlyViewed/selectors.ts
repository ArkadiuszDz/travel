import { RootState } from "../../configureStore";

export const getRecentlyViewedSelector = (state: RootState) => state.recentlyViewedData.recently_viewed;
