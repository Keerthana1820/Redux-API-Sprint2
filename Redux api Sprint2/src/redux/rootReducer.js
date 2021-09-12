import { reducer as fetchReducer, container } from "react-redux-fetch";
import { combineReducers } from "redux";
import catReducer from "./reducers/catReducer";

container.registerReducer("cat", catReducer);

export const rootReducer = combineReducers({
  repository: fetchReducer
});
