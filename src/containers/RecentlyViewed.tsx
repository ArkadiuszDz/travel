import { connect } from 'react-redux';
import RecentlyViewed from '../components/RecentlyViewed';
import { AppDispatch, RootState } from '../configureStore';
import { getRecentlyViewed } from '../logic/RecentlyViewed/actions';
import { getRecentlyViewedSelector } from '../logic/RecentlyViewed/selectors';


const mapStateToProps = (state: RootState) => ({
  recently_viewed: getRecentlyViewedSelector(state),
})

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  getRecentlyViewed: (id: string) => dispatch(getRecentlyViewed(id))
});

const RecentlyViewedContainer = connect(mapStateToProps, mapDispatchToProps)(RecentlyViewed);

export default RecentlyViewedContainer;