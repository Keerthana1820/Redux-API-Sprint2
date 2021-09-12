import get from "lodash/get";

const getActionType = action => {
  return action.type + get(action.resource, "name", "");
};

export default getActionType;
