import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import RecentlyViewed from '../components/RecentlyViewed';
import { getRecentlyViewed } from '../logic/RecentlyViewed/actions';
import { getRecentlyViewedSelector, getRecentlyViewedCookieSelector } from '../logic/RecentlyViewed/selectors';


const mapStateToProps = (state: any) => ({
  recently_viewed: getRecentlyViewedSelector(state),
  recently_viewed_cookie: getRecentlyViewedCookieSelector(state)
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getRecentlyViewed: (id: string) => dispatch(getRecentlyViewed(id))
});

const RecentlyViewedContainer = connect(mapStateToProps, mapDispatchToProps)(RecentlyViewed);

export default RecentlyViewedContainer;