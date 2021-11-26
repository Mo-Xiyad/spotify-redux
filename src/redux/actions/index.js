export const FETCH_DATA_WITH_ID = "FETCH_DATA_WITH_ID";
export const GET_ALL_SONGS = "GET_ALL_SONGS";
const SET_SEARCH = "SET_SEARCH"


//headers are consistent and needed for fetching
let headers = new Headers({
    "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
    "X-RapidAPI-Key": "222902beabmshb95a65b737cead6p1f3ac9jsn23ced94c0d20",
  });




export const fetchSearch = (string) => {
    return async (dispatch) => {
try {
    const response = await fetch(
      "https://striveschool-api.herokuapp.com/api/deezer/search?q=" +
        string,
      {
        method: "GET",
        headers,
      }
    )
    if (response.ok){
        const result = await response.json()
        const songs = result.data
        dispatch({
            type: SET_SEARCH,
            payload: songs,
        })
    } else {
        console.log("ERROR: problem with fetch")
    }
  } catch (err) {
    console.log("ERROR: could not fetch search", err);
  }
}
}