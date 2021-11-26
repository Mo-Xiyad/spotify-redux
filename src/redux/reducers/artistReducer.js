import { initialState } from "../store/index.js";

const artistReducer = (state = initialState.specificArtistArray, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default artistReducer;
