import { connect } from 'react-redux';
import MovieDetails from '../components/MovieDetails';
import { closeMovieDetailsScreen } from '../actions';

const mapStateToProps = state => ({
  showDetails: state.details.showDetails,
  loading: state.details.loading,
  error: state.details.error,
  data: state.details.data,
});

const mapDispatchToProps = dispatch => ({
  closeMovieDetailsScreen: () => dispatch(closeMovieDetailsScreen()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails);
