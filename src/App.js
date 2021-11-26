import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Player from "./components/Player";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import { Row } from "react-bootstrap";
import Artist from "./components/Artist";
import Album from "./components/Album";
import { connect } from "react-redux";
import { useState, useEffect } from "react";
import { fetchSearch } from "./redux/actions";
let headers = new Headers({
  "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
  "X-RapidAPI-Key": "222902beabmshb95a65b737cead6p1f3ac9jsn23ced94c0d20",
});

const mapStateToProps = (state) => ({
  searchArray : state.search.content
})

//setJobs takes a url 
const mapDispatchToProps = (dispatch) => ({
  searchForQuery: (string) => {
    dispatch(fetchSearch(string))
  }
});


const App = ({searchForQuery}) => {
 

  const [searchResults, setSearchResults] = useState([]);

  const search = async (string) => {
    if (string.length > 2) {
      try {
        let response = await fetch(
          "https://striveschool-api.herokuapp.com/api/deezer/search?q=" +
            string,
          {
            method: "GET",
            headers,
          }
        );

        let result = await response.json();
        let songs = result.data;
          setSearchResults(songs)
      } catch (err) {
        console.log(err);
      }
    }
  };

    return (
      <Router>
        <div className="container-fluid">
          <Row>
            <Sidebar search={search} />
            <Route
              path="/"
              exact
              render={() => <Home searchResults={searchResults} />}
            />
            <Route path="/artist/:id" component={Artist} />
            <Route path="/album/:id" component={Album} />
          </Row>
        </div>
        <Player />
      </Router>
    );
}

export default App;
