import { compose, createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import albumReducer from "../reducers/albumReducer";
import artistReducer from "../reducers/artistReducer";
import likesReducer from "../reducers/likesReducer";
import homeReducer from "../reducers/homeReducer";
import searchReducer from "../reducers/searchReducer";

const aComposeFunctionThatAlwaysWorks =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const initialState = {
  mainHomeContent: {
    content: [],
    isLoading: true,
    isError: false,
  },
  specificAlbumArray: {
    content: [],
    isLoading: true,
    isError: false,
  },
  specificArtistArray: {
    content: [],
    isLoading: true,
    isError: false,
  },
    search: {
      content: [],
      isError: false,
      isLoading: true,
  },
  likes: {
    content: [],
  },
};

const bigReducer = combineReducers({
  home: homeReducer,
  search: searchReducer,
  specificAlbumArray: albumReducer,
  specificArtistArray: artistReducer,
  likes: likesReducer,
});

export const configureStore = createStore(
  bigReducer,
  initialState,
  aComposeFunctionThatAlwaysWorks(applyMiddleware(thunk))
);
