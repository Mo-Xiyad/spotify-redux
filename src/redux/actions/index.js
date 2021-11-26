export const FETCH_DATA_WITH_ID = "FETCH_DATA_WITH_ID";
export const GET_ALL_SONGS = "GET_ALL_SONGS";


//headers are consistent and needed for fetching
let headers = new Headers({
    "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
    "X-RapidAPI-Key": "222902beabmshb95a65b737cead6p1f3ac9jsn23ced94c0d20",
  });



  export const fetchSearch = (url) => {
    // do fetch stuff
   return async (dispatch) => {
       console.log("THIS IS THE URL",url)

        dispatch({
          type: "TOGGLE_LOADER",
          payload: true,
        })
    const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log("HERE IS THE FETCHED DATA :", data);
        const spreadData = [...data.data]
         await dispatch({
            type:'SET_JOBS',
            payload: spreadData
        });
        setTimeout(() => {
          dispatch({
            type: "TOGGLE_LOADER",
            payload: false,
          })
        }, 1000)
      } else {
        console.log("ERROR: could not fetch data");
      }
   }
};