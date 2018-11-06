import { handleActions } from 'redux-actions';
import * as actions from '../actions';

/**
 * initialState will be the first thing passed to the reducers and is therefore what you state * * will be by default until any actions are executed
 */

const initialState = {
  msg: '',
};

export default handleActions({
  // make each action return the object you want state to be for the given property
  [actions.setError]: (state, action) => ({ msg: action.payload }),
  [actions.dismissError]: () => ({ msg: '' }),
}, initialState);
