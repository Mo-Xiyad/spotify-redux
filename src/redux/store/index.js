import { compose, createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import albumReducer from "../reducers/albumReducer";
import artistReducer from "../reducers/artistReducer";
import likesReducer from "../reducers/likesReducer";
import homeReducer from "../reducers/homeReducer";

import userReducer from "../reducers/user";

import searchReducer from "../reducers/searchReducer";


const aComposeFunctionThatAlwaysWorks =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const initialState = {
  mainHomeContent: {
    content: {
      rockSongs:[],
      popSongs: [],
      hipHopSongs:[]
    },
    isLoading: true,
    isError: false,
  },
  specificAlbumArray: {
    album: {},
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


    search: {
      content: [],
      isError: false,
      isLoading: true,
  },
  likes: {
    content: [],
  },
  user: {
    name: "",
  },
};

const bigReducer = combineReducers({
  mainHomeContent: homeReducer,


  search: searchReducer,
  specificAlbumArray: albumReducer,
  specificArtist: artistReducer,
  likes: likesReducer,
  user: userReducer,
});

export const configureStore = createStore(
  bigReducer,
  initialState,
  aComposeFunctionThatAlwaysWorks(applyMiddleware(thunk))
);
