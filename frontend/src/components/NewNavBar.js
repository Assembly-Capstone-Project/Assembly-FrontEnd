import "./NewNavBar.css"
import React, { useContext } from "react";
import { useNavigate } from "react-router";
// import Container from "react-bootstrap/Container";
// import Navbar from "react-bootstrap/Navbar";
// import Nav from 'react-bootstrap/Nav';
// import "./navbar.css";
import Context from "../Context/Context";

function NewNavBar() {

  const { user, setUser } = useContext(Context)
  const navigate = useNavigate()
  
  const logout = () => {
    localStorage.removeItem('assembly-token')
    setUser(null)
    navigate('/')
  }

  return (
    <nav className="nav">
      <div>
      <a href="/homePage" className="assembly-title">
      <p  >{user?.username}</p>
        Assembly
      </a>
      </div>
      <ul>
        <li>
          <a href="/gamesPage">games</a>
        </li>
        <li>
          <a href="/friendsList">friends</a>
        </li>
        <li>
          <a href="/favorites">favorites</a>
        </li>
        <li>
          <a onClick={logout} href="/">logout</a>
        </li>
      </ul>
    </nav>
  );
}

export default NewNavBar;
