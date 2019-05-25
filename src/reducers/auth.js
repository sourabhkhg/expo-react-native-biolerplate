import _ from "lodash";
import ActionTypes from "../constants/actionType";
import initialState from "../stores/initialState";

export default (state = initialState.auth, action) => {
  switch (action.type) {
    case ActionTypes.CUSTOM_AUTH:
      return {
        ...state,
        ...action.payload
      };

    default:
      return state;
  }
};
