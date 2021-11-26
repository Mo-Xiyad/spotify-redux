export const FETCH_DATA_WITH_ID = "FETCH_DATA_WITH_ID";
export const GET_ALL_SONGS = "GET_ALL_SONGS";
export const GET_ALBUM_ERROR = "GET_ALBUM_ERROR";
export const TOGGLE_LOADER = "TOGGLE_LOADER";
export const SET_USERNAME = "SET_USERNAME";

export const getAlbumAction = (albumId) => {
  return async (dispatch) => {
    let headers = new Headers({
      "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
      "X-RapidAPI-Key": "222902beabmshb95a65b737cead6p1f3ac9jsn23ced94c0d20",
    });

    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/album/" + albumId,
        {
          method: "GET",
          headers,
        }
      );
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        //let newData = data.data;
        // now it's time do to the dispatch
        dispatch({
          type: GET_ALL_SONGS,
          payload: data.tracks.data,
        });

        dispatch({
          type: FETCH_DATA_WITH_ID,
          payload: data,
        });
        setTimeout(() => {
          dispatch({
            type: TOGGLE_LOADER,
            payload: false,
          });
        }, 1000);
      } else {
        console.log("Houston, we got an error :(");
        // we can also dispatch ANOTHER action here for the error!
        dispatch({
          type: GET_ALBUM_ERROR,
        });
        dispatch({
          type: TOGGLE_LOADER,
          payload: false,
        });
      }
    } catch (error) {
      console.log(error);
      dispatch({
        type: GET_ALBUM_ERROR,
      });
      dispatch({
        type: TOGGLE_LOADER,
        payload: false,
      });
    }
  };
};
