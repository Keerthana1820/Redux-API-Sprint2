import getActionType from "../utils/getActionType";
import { CAT_FETCHED } from "../actions/actionTypes";

const handleCatFetched = (state, action) => {
  return state
    .setIn(["value", "image"], action.value.message)
    .setIn(["value", "message"], undefined);
};

const catReducer = (state, action) => {
  switch (getActionType(action)) {
    case CAT_FETCHED:
      return handleCatFetched(state, action);
    default:
      return state;
  }
};

export default catReducer;
