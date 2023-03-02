import { React, useEffect, useState, useContext } from "react";
import Context from '../Context/Context'
import APIURL from '../apiEndpoint'
function List(props) {
  let token;
  if (window.localStorage.getItem("assembly-token")) {
    token = JSON.parse(window.localStorage.getItem("assembly-token")).token;
  }
  const [games, setGames] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const {setPosts} = useContext(Context)

  async function handleSumbit(games_id) {
    let token;
    if (window.localStorage.getItem("assembly-token")) {
      token = JSON.parse(window.localStorage.getItem("assembly-token")).token;
    }
    //dont need body because its a get request
    if (token) {
      const request = await fetch(`${APIURL}/posts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ games_id }),
      });
      const json = await request.json()
      setPosts(() => json)
    } else {
      setErrorMessage(
        <h1 style={{ color: "white" }}>You're Not Signed In.</h1>
      );
    }
  }

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

  //create a new array by filtering the original array
  const filteredData = games?.filter((el) => {
    //if no input the return the original
    if (props.input === "") {
      return el;
    }
    //return the item which contains the user input
    else {
      return el.name.toLowerCase().includes(props.input);
    }
  });

  return (
    <ul>
      {filteredData?.map((item) => (
        <li onClick={() => handleSumbit(item.id)} key={item.id}>
          {item.name}{" "}
        </li>
      ))}
      {errorMessage}
    </ul>
  );
}

export default List;
