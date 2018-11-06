import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import gallery from './gallery';
import details from './details';
import error from './error';
/**
 * rootReducer:
 *   - creates initial state
 *   - key is state
 *   - Value is reducer that returns state
 */

const rootReducer = combineReducers({
  router: routerReducer, // from reduxRouter
  gallery,
  details,
  error,
});

export default rootReducer;
