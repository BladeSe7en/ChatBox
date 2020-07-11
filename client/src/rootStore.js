import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './rootReducer';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

/* eslint-disable no-underscore-dangle */
const rootStore = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(
    thunk
      )
));
/* eslint-enable */

export default rootStore;

