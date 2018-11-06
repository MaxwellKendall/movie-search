import { handleActions } from 'redux-actions';
import * as actions from '../actions';

/**
 * initialState will be the first thing passed to the reducers and is therefore what you state * * will be by default until any actions are executed
 */

const initialState = {
  showDetails: false,
  loading: false,
  error: null,
  data: {},
};

export default handleActions({
  // make each action return the object you want state to be for the given property
  [actions.closeMovieDetailsScreen]: state => ({ ...state, showDetails: false }),
  [actions.getMovieDetailsRequest]: state => ({ ...state, showDetails: true, loading: true }),
  [actions.getMovieDetailsSuccess]: (state, action) => ({ ...state, loading: false, data: action.payload }),
  [actions.getMovieDetailsError]: (state, action) => ({ ...state, loading: false, error: action.payload }),
}, initialState);
