import { connect } from 'react-redux';
import MovieGallery from '../components/MovieGallery';
import { getMovieBySearchTerm, getMovieDetails } from '../actions';

const mapStateToProps = state => ({
  movies: state.gallery.results.data.Search,
  error: state.gallery.results.error,
  loading: state.gallery.results.loading,
});

const mapDispatchToProps = dispatch => ({
  getMovieDetails: (title, year) => dispatch(getMovieDetails(title, year)),
  getMoviesBySearchTerm: () => dispatch(getMovieBySearchTerm()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieGallery);
