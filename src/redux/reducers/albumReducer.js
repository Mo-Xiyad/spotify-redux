import { initialState } from "../store/index.js";

const albumReducer = (state = initialState.specificAlbumArray, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default albumReducer;
