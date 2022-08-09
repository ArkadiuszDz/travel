import { connect } from 'react-redux';
import Carousel from '../components/Carousel';
import { AppDispatch, RootState } from '../configureStore';
import { getTrips } from '../logic/Carousel/actions';
import { getTripsDataSelector, getTripsTripsDataError } from '../logic/Carousel/selectors';


const mapStateToProps = (state: RootState) => ({
  trips_data: getTripsDataSelector(state),
  get_trips_data_error: getTripsTripsDataError(state)
})

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  getTrips: () => dispatch(getTrips()),
});

const CarouselContainer = connect(mapStateToProps, mapDispatchToProps)(Carousel);

export default CarouselContainer;