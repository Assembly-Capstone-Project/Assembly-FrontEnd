import React, { useEffect, useState } from "react";
import ResNavbar from "../components/ResponsiveNavBar";
import "./FavoritesPage.css";

function FavoritesPage() {
  const [favorites, setFavorites] = useState([]);
  const mockFavorites = [
    {
      imgUrl:
        "https://m.media-amazon.com/images/I/717Ej4GMLsS.jpg",
      imgAlt: "Halo Odst",
      title: "Halo Odst",
    },
    {
      imgUrl:
        "https://m.media-amazon.com/images/I/813gXz6Vi0L.jpg",
      imgAlt: "Halo 3",
      title: "Halo",
    },
    {
      imgUrl:
        "https://upload.wikimedia.org/wikipedia/en/7/7f/Fable_II.jpg",
      imgAlt: "War Thunder",
      title: "War Thunder",
    },
    {
      imgUrl:
        "https://upload.wikimedia.org/wikipedia/en/f/f2/Halo_wars.png",
      imgAlt: "War Thunder",
      title: "War Thunder",
    },
  ];

  useEffect(() => {
    setFavorites(mockFavorites);
  }, []);

  const removeFavorite = (index) => {
    let holderArr = favorites.slice();
    holderArr.splice(index, 1);
    setFavorites(holderArr);
  };
  return (
    <div>
      <ResNavbar />
      <h1 className="headers" >Assembly Favorites</h1>
      <div
        style={{
          padding: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
        }}
      >
        {favorites.map((game, index) => (
          <div key={index} className="game-container">
            <img src={game.imgUrl} alt={game.imgAlt} />
            {/* <h3>{game.title}</h3> */}
            <button onClick={() => removeFavorite(index)}>Delete</button>
            <p></p>
          </div>
        ))}
      </div>
      <p>Welcome to the favor page</p>
    </div>
  );
}

export default FavoritesPage;
