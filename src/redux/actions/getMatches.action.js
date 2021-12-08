import axios from "axios";
import * as actionTypes from "../actionTypes";

export const getMatches = () => async (dispatch) => {
  dispatch({
    type: actionTypes.GET_MATCH_REQUEST,
  });
  try {
    const { data } = await axios.get(
      "https://rehmatulla-ipl-app-default-rtdb.firebaseio.com/matchName/.json"
    );
    const { matchName } = data;

    console.log(matchName);

    dispatch({
      type: actionTypes.GET_MATCH_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_MATCH_FAIL,
      payload: error.message,
    });
  }
};
