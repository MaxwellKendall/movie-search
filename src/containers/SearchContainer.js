import { connect } from 'react-redux';
import { getMovieBySearchTerm, updateSearchTerm } from '../actions';
import Search from '../components/Search';

const mapStateToProps = state => ({
  searchTerm: state.gallery.searchTerm,
  loading: state.gallery.results.loading,
  error: state.gallery.results.error,
  results: state.gallery.results.data,
});

const mapDispatchToProps = dispatch => ({
  getMovieBySearchTerm: () => dispatch(getMovieBySearchTerm()),
  updateSearchTerm: term => dispatch(updateSearchTerm(term)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
