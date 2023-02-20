import React, { useEffect, useState } from 'react';

function GamesPage() {
  const { token } = JSON.parse(window.localStorage.getItem('assembly-token'))
  const [games, setGames] = useState([])

  const fetchGames = async () => {
    //dont need body because its a get request
    const result = await fetch("http://localhost:8000/games", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const json = await result.json()
    setGames(json)

  }
  useEffect(() => {
    fetchGames()
  }, [])

  useEffect(() => {
    
    console.log(games)
  }, [games])

  return (
    <div>
      <h1>Game Page</h1>
      <p>Welcome to the gamingPage</p>

      {games?.map((game) => (
        <div>
          <h3>{game.name}</h3>
          <h4>{game.platform}</h4>
          <p>{game.rating}</p>
        </div>
      ))}
    </div>
  );
}

export default GamesPage;