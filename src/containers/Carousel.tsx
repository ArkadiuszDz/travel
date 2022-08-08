import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import Carousel from '../components/Carousel';
import { getTrips } from '../logic/Carousel/actions';
import { getTripsDataSelector, getTripsTripsDataError } from '../logic/Carousel/selectors';


const mapStateToProps = (state: any) => ({
  trips_data: getTripsDataSelector(state),
  get_trips_data_error: getTripsTripsDataError(state)
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getTrips: () => dispatch(getTrips()),
});

const CarouselContainer = connect(mapStateToProps, mapDispatchToProps)(Carousel);

export default CarouselContainer;