import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import thunk from "redux-thunk";

import { courseReducer } from "./Courses/coursereducer";
import { filterReducer } from "./FilterCourse/filterreducer";
import { popualReducer } from "./Popular/popularreducer";

const rootreducer = combineReducers({
	course: courseReducer,
	filter: filterReducer,
	popular: popualReducer,
	
});


/**
 *
 * @param {redux state} state
 */

//this is the functionality of thunks , it provides the control of actions while using the
//functions in action instead of plain object

// const customMiddleware = (store) => (next) => (action) => {
// 	return typeof action === "function"
// 		? action(store.dispatch, store.getState)
// 		: next(action);
// };

const composeEnhancers =
	(typeof window !== "undefined" &&
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
	compose;

const enhancer = composeEnhancers(
	applyMiddleware(thunk)
	// other store enhancers if any
);
export const store = createStore(
	rootreducer,
	enhancer
	// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

//extension for redux dev tools.....
//window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

//store has two functions namely dispatch() and getState();
//dispatch() has/takes an action
//getState() has current state/updates state

//const {getState}=store;
//const {dispatch}=store;
