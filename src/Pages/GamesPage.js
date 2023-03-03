import React, { useEffect, useState } from "react";
import ResNavbar from "../components/ResponsiveNavBar";
import Carousel from "../components/Carousel";
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
      <ResNavbar />
      <h1 className="headers">Assembly Games</h1>
      {errorMessage && <div>{errorMessage}</div>}
      <div
        style={{
          maxWidth: 1200,
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: 64,
        }}
      >
        <Carousel show={4} infiniteLoop>
          {!errorMessage &&
            games?.map((game, gameIndex) => (
              <div>
                <div style={{ padding: 8 }}>
                  <img
                    src={game.url}
                    alt="placeholder"
                    style={{ width: "100%" }}
                  />
                </div>
              </div>
            ))}
        </Carousel>
        <h2 className="headers" >COMING SOON</h2>
        <Carousel show={4} infiniteLoop>
          <div>
            <div style={{ padding: 8 }}>
              <img
                src="https://upload.wikimedia.org/wikipedia/en/2/25/War_Thunder_PSN_Cover_Art_2015_Playstation_4.png"
                alt="War thunder"
                style={{ width: "100%" }}
              />
            </div>
          </div>
          <div>
            <div style={{ padding: 8 }}>
              <img
                src="https://n9e5v4d8.ssl.hwcdn.net/images/longlanding/warframe-metacard.png"
                alt="Warframe"
                style={{ width: "100%" }}
              />
            </div>
          </div>
          <div>
            <div style={{ padding: 8 }}>
              <img
                src="https://m.media-amazon.com/images/M/MV5BOGVkNjEyN2EtMjRiYi00ZWY1LThkOWItZTNkNjA0MTE4YmRhXkEyXkFqcGdeQXVyNjUxNDQwMzA@._V1_.jpg"
                alt="Resident Evil"
                style={{ width: "100%" }}
              />
            </div>
          </div>
          <div>
            <div style={{ padding: 8 }}>
              <img
                src="https://prod.assets.earlygamecdn.com/images/warzone-2-release-date.jpg?mtime=1643176468"
                alt="Warzone"
                style={{ width: "100%" }}
              />
            </div>
          </div>
          <div>
            <div style={{ padding: 8 }}>
              <img
                src="https://analisadaily.com/imagesfile/202211/20221129-192005_valorant-akan-segera-hadir-di-android.jpeg"
                alt="Valorant"
                style={{ width: "100%" }}
              />
            </div>
          </div>
          <div>
            <div style={{ padding: 8 }}>
              <img
                src="https://cdn.akamai.steamstatic.com/steam/apps/945360/capsule_616x353.jpg?t=1673370035"
                alt="Among Us"
                style={{ width: "100%" }}
              />
            </div>
          </div>
          <div>
            <div style={{ padding: 8 }}>
              <img
                src="https://edgecast.wizard101.com/image/free/Wizard/Landing-Pages/Networks/ExplorePlay_logo.png?v=1"
                alt="Wizard101"
                style={{ width: "100%" }}
              />
            </div>
          </div>
          <div>
            <div style={{ padding: 8 }}>
              <img
                src="https://www.runescape.com/img/microsite/social-share-fb.jpg"
                alt="Runescape"
                style={{ width: "100%" }}
              />
            </div>
          </div>
          <div>
            <div style={{ padding: 8 }}>
              <img
                src="https://assets-prd.ignimgs.com/2022/08/25/nba-2k23-button-v2-1661451145664.jpg"
                alt="2k23"
                style={{ width: "100%" }}
              />
            </div>
          </div>
        </Carousel>
      </div>

      {!errorMessage && games?.map((game, gameIndex) => <div></div>)}
      {/* </Carousel> */}
    </div>
  );
}

export default GamesPage;
// import Carousel from 'react-bootstrap/Carousel';
// const [index, setIndex] = useState(0);

// const handleSelect = (selectedIndex, e) => {
//   setIndex(selectedIndex);
// };

// <Carousel.Item key={gameIndex}>
//   <img
//     className="d-block w-100"
//     src={game.url}
//     alt="First slide"
//     />
//   <Carousel.Caption>
//     <h3>{game.name}</h3>
//     <p>{game.platform}</p>
//   </Carousel.Caption>
// </Carousel.Item>
// <div style={{ color: "white" }}>
//   <h3>{game.name}</h3>
//   <h4>{game.platform}</h4>
//   <p>{game.rating}</p>
//   <div id="gameContainer">
//     <img src={game.url} alt="a video game"></img>
//   </div>
// </div>
