import React, { useEffect, useState } from "react";
import ResNavbar from "../components/ResponsiveNavBar";
import APIURL from "../apiEndpoint";
import "./gamesPage.css";

function GamesPage() {
  let token;
  if (window.localStorage.getItem("assembly-token")) {
    token = JSON.parse(window.localStorage.getItem("assembly-token")).token;
  }
  const [games, setGames] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const fetchGames = async () => {
    //dont need body because its a get request
    if (token) {
      const result = await fetch(`${APIURL}/games`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const json = await result.json();
      setGames(json);
    } else {
      setErrorMessage(
        <h1 style={{ color: "white" }}>You're Not Signed In.</h1>
      );
    }
  };
  useEffect(() => {
    fetchGames();
  }, []);

  return (
    <div>
      {/* <NewNavBar/> */}
      <ResNavbar/>
      {errorMessage && <div>{errorMessage}</div>}
      {!errorMessage &&
        games?.map((game) => (
          <div style={{ color: "white" }}>
            <h3>{game.name}</h3>
            <h4>{game.platform}</h4>
            <p>{game.rating}</p>
            <div id="gameContainer">
              <img src={game.url} alt="a video game"></img>
            </div>
          </div>
        ))}
    </div>
  );
}

export default GamesPage;
