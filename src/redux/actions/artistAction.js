export const GET_ARTIST_DATA = "GET_ARTIST_DATA";
export const GET_ARTIST_CONTENT = "GET_ARTIST_CONTENT";
export const DATA_IS_LOADING = "DATA_IS_LOADING";
export const FETCH_FAILED = "FETCH_FAILED";

export const getSelectedArtistInfo = (artistId) => {
  return async (dispatch) => {
    dispatch({
      type: DATA_IS_LOADING,
      payload: true,
    });
    let headers = new Headers({
      "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
      "X-RapidAPI-Key": "c74a0a086emshf55ffb8dbdcb59ap17a486jsnb83bb4d3e387",
    });

    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/artist/" + artistId,
        {
          method: "GET",
          headers,
        }
      );

      if (response.ok) {
        let artist = await response.json();
        // setArtist(artist);
        dispatch({
          type: GET_ARTIST_DATA,
          payload: artist,
        });
        setTimeout(() => {
          dispatch({
            type: DATA_IS_LOADING,
            payload: false,
          });
        }, 1000);
        let tracksResponse = await fetch(
          "https://striveschool-api.herokuapp.com/api/deezer/search?q=" +
            artist.name,
          {
            method: "GET",
            headers,
          }
        );
        if (tracksResponse.ok) {
          let tracklist = await tracksResponse.json();
          //   setSongs(tracklist.data);
          dispatch({
            type: GET_ARTIST_CONTENT,
            payload: tracklist.data,
          });
        } else {
          dispatch({
            type: FETCH_FAILED,
            payload: true,
          });
        }
      } else {
        dispatch({
          type: DATA_IS_LOADING,
          payload: false,
        });
        dispatch({
          type: FETCH_FAILED,
          payload: true,
        });
      }
    } catch (exception) {
      console.log(exception);
      dispatch({
        type: DATA_IS_LOADING,
        payload: false,
      });
      dispatch({
        type: FETCH_FAILED,
        payload: true,
      });
    }
  };
};
