import { compose, createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import albumReducer from "../reducers/albumReducer";
import artistReducer from "../reducers/artistReducer";
import likesReducer from "../reducers/likesReducer";
import homeReducer from "../reducers/homeReducer";

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
  specificArtist: {
    artistProfile: {},
    content: [],
    isLoading: true,
    isError: false,
  },
  likes: {
    content: [],
  },
};

const bigReducer = combineReducers({
  mainHomeContent: homeReducer,
  specificAlbumArray: albumReducer,
  specificArtist: artistReducer,
  likes: likesReducer,
});

export const configureStore = createStore(
  bigReducer,
  initialState,
  aComposeFunctionThatAlwaysWorks(applyMiddleware(thunk))
);
