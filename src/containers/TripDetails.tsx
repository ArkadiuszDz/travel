import { connect } from 'react-redux';
import TripDetails from '../components/TripDetails';
import { getTripDetailsErrorSelector, getTripDetailsSelector } from '../logic/TripDetails/selectors';
import { getTripDetails } from '../logic/TripDetails/actions';
import { AppDispatch, RootState } from '../configureStore';

const mapStateToProps = (state: RootState) => ({
  trip_details: getTripDetailsSelector(state),
  get_trip_details_error: getTripDetailsErrorSelector(state)
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  getTripDetails: (id: string) => dispatch(getTripDetails(id))
});

const TripDetailsContainer = connect(mapStateToProps, mapDispatchToProps)(TripDetails);

export default TripDetailsContainer;