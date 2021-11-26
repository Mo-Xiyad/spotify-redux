import { initialState } from "../store/index.js";

const homeReducer = (state = initialState.mainHomeContent, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default homeReducer;
