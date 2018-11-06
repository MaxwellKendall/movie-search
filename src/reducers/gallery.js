import { handleActions } from 'redux-actions';
import * as actions from '../actions';

/**
 * initialState will be the first thing passed to the reducers and is therefore what you state * * will be by default until any actions are executed
 */

const initialState = {
  searchTerm: 'matrix',
  results: {
    data: {},
    loading: false,
    error: null,
  },
};

export default handleActions({
  // make each action return the object you want state to be for the given property
  [actions.updateSearchTerm]: (state, action) => ({ ...state, searchTerm: action.payload }),
  [actions.getMovieRequest]: state => ({ ...state, results: { ...state.results, loading: true } }),
  [actions.getMovieSuccess]: (state, action) => ({ ...state, results: { loading: false, data: action.payload, error: null } }),
  [actions.getMovieError]: (state, action) => ({ ...state, results: { data: state.results.data, loading: false, error: action.payload } }),
}, initialState);
