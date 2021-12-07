import * as actionTypes from "../actionTypes";

const initialState = {
	loading: false,
	allMatches: [],
};

export const getMatchesReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.GET_MATCH_REQUEST: {
			return { ...state, loading: true };
		}
		case actionTypes.GET_MATCH_SUCCESS: {
			return { ...state, loading: false, allMatches: action.payload };
		}
		case actionTypes.GET_MATCH_FAIL: {
			return { ...state, allMatches: null, error: action.payload };
		}

		default:
			return state;
	}
};
