import get from "lodash/get";
import { selectors } from "react-redux-fetch";

const getCatImage = state =>
  get(selectors.getRepository("cat").fromState(state), "image");

export default {
  getCatImage
};
