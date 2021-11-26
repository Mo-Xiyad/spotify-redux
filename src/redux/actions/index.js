export const FETCH_DATA_WITH_ID = "FETCH_DATA_WITH_ID";
export const GET_ALL_SONGS = "GET_ALL_SONGS";
const SET_SEARCH = "SET_SEARCH"






export const fetchSearch = (string) => {
    return async (dispatch) => {
try {
    const response = await fetch(
      "https://striveschool-api.herokuapp.com/api/deezer/search?q=" +
        string,
      {
        method: "GET",
        headers: new Headers({
            "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
            "X-RapidAPI-Key": "222902beabmshb95a65b737cead6p1f3ac9jsn23ced94c0d20",
          }),
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


export const setDefaultHome = (artistName, category) => {
    return async (dispatch) => {
        console.log(category)
        try {
          let response = await fetch(
            "https://striveschool-api.herokuapp.com/api/deezer/search?q=" +
              artistName,
            {
              method: "GET",
              headers: new Headers({
                "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
                "X-RapidAPI-Key":
                  "9d408f0366mshab3b0fd8e5ecdf7p1b09f2jsne682a1797fa0",
              }),
            }
          );
          let result = await response.json();
          let songInfo = result.data;
          dispatch({
            type: category,
            payload: songInfo[0],
        })
        } catch (err) {
          console.log(err);
        }
      };
    
}




