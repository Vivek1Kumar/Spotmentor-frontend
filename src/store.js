import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {};
// ======================= Async using redux thunk =================================
const middleware = [thunk];
// ======================= Integate Redux Deveveloer Tool ==========================
	const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
 	const store = createStore(
	  	rootReducer,
	  	initialState,
	  			composeEnhancer(applyMiddleware(...middleware)),
  	);


export default store;