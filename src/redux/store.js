import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { getMatchesReducer } from "./reducers/getMatches.reducer";

const rootReducer = combineReducers({
	getMatches: getMatchesReducer,
});

const store = createStore(
	rootReducer,
	undefined,
	composeWithDevTools(applyMiddleware(thunk))
);

export default store;
