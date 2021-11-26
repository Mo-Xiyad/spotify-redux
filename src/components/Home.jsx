import React from "react";
import AlbumCard from "./AlbumCard";
import { Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { setDefaultHome } from "../redux/actions";

const mapStateToProps = (state) => ({
  searchArray: state.search.content,
  rockSongs: state.mainHomeContent.content.rockSongs,
  popSongs: state.mainHomeContent.content.popSongs,
  hipHopSongs: state.mainHomeContent.content.hipHopSongs,
});

const mapDispatchToProps = (dispatch) => ({
  setFreshHome: (string, category) => {
    dispatch(setDefaultHome(string, category));
  },
});

const Home = ({
  searchArray,
  setFreshHome,
  rockSongs,
  popSongs,
  hipHopSongs,
}) => {
  let rockArtists = [
    "queen",
    "u2",
    "thepolice",
    "eagles",
    "thedoors",
    "oasis",
    "thewho",
    "bonjovi",
  ];

  let popArtists = [
    "arianagrande",
    "maroon5",
    "onerepublic",
    "coldplay",
    "katyperry",
  ];

  let hipHopArtists = ["eminem", "snoopdogg", "lilwayne", "drake", "kanyewest"];

  // const handleArtist = async (artistName, category) => {
  //   try {
  //     let response = await fetch(
  //       "https://striveschool-api.herokuapp.com/api/deezer/search?q=" +
  //         artistName,
  //       {
  //         method: "GET",
  //         headers: new Headers({
  //           "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
  //           "X-RapidAPI-Key":
  //             "9d408f0366mshab3b0fd8e5ecdf7p1b09f2jsne682a1797fa0",
  //         }),
  //       }
  //     );
  //     let result = await response.json();
  //     let songInfo = result.data;
  //     [category]([...category,songInfo[0]])
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  const setHome = async () => {
    if (rockSongs.length < 4 && popSongs.length < 4 && hipHopSongs.length < 4){
    let rockRandomArtists = [];
    let popRandomArtists = [];
    let hipHopRandomArtists = [];
    console.log("START OF FUNCTION");

    while (rockRandomArtists.length < 4) {
      let artist = rockArtists[Math.floor(Math.random() * rockArtists.length)];
      if (!rockRandomArtists.includes(artist)) {
        rockRandomArtists.push(artist);
      }
    }

    while (popRandomArtists.length < 4) {
      let artist = popArtists[Math.floor(Math.random() * popArtists.length)];
      if (!popRandomArtists.includes(artist)) {
        popRandomArtists.push(artist);
      }
    }

    while (hipHopRandomArtists.length < 4) {
      let artist =
        hipHopArtists[Math.floor(Math.random() * hipHopArtists.length)];
      if (!hipHopRandomArtists.includes(artist)) {
        hipHopRandomArtists.push(artist);
      }
    }

    for (let j = 0; j < rockRandomArtists.length; j++)
      setFreshHome(rockRandomArtists[j], "SET_ROCK_SONGS");

    for (let k = 0; k < popRandomArtists.length; k++)
      setFreshHome(popRandomArtists[k], "SET_POP_SONGS");

    for (let l = 0; l < hipHopRandomArtists.length; l++)
      setFreshHome(hipHopRandomArtists[l], "SET_HIPHOP_SONGS");
    console.log("finish function");
  }};

  useEffect(() => {
    setHome();
  });

  return (
    <Col className="col-12 col-md-9 offset-md-3 mainPage">
      <Row>
        <div className="col-9 col-lg-11 mainLinks d-none d-md-flex">
          <div>TRENDING</div>
          <div>PODCAST</div>
          <div>MOODS AND GENRES</div>
          <div>NEW RELEASES</div>
          <div>DISCOVER</div>
        </div>
      </Row>
      {searchArray.length > 0 && (
        <Row>
          <Col xs={10}>
            <div id="searchResults">
              <h2>Search Results</h2>
              <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3">
                {searchArray.map((song) => (
                  <AlbumCard song={song} key={song.id} />
                ))}
              </Row>
            </div>
          </Col>
        </Row>
      )}
      {searchArray.length === 0 && (
        <>
          <Row>
            <Col xs={10}>
              <div id="rock">
                <h2>Rock Classics</h2>
                <Row
                  className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
                  id="rockSection"
                >
                  {rockSongs.map((song) => (
                    <AlbumCard song={song} key={song.id} />
                  ))}
                </Row>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={10}>
              <div id="pop">
                <h2>Pop Culture</h2>
                <Row
                  className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
                  id="popSection"
                >
                  {popSongs.map((song) => (
                    <AlbumCard song={song} key={song.id} />
                  ))}
                </Row>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={10}>
              <div id="hiphop">
                <h2>#HipHop</h2>
                <Row
                  className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
                  id="hipHopSection"
                >
                  {hipHopSongs.map((song) => (
                    <AlbumCard song={song} key={song.id} />
                  ))}
                </Row>
              </div>
            </Col>
          </Row>
        </>
      )}
    </Col>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
