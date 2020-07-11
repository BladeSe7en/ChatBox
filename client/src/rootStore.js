import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './rootReducer';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

/* eslint-disable no-underscore-dangle */
const rootStore = createStore(rootReducer, composeEnhancers(
  applyMiddleware(
    thunk
      )
));
/* eslint-enable */

export default rootStore;
