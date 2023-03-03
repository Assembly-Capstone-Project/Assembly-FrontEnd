import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import React, { useContext } from "react";
import { useNavigate } from "react-router";
import Context from "../Context/Context";
import "./ResNavBar.css";

function ResNavbar() {


  const { user, setUser } = useContext(Context)
  const navigate = useNavigate()
  
  const logout = () => {
    localStorage.removeItem('assembly-token')
    setUser(null)
    navigate('/')
  }


  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <div id="logoUser">
        <a href="/homePage" className="assembly-title">
          <p>{user?.username}</p>
          Assembly
        </a>
      </div>
      <nav ref={navRef}>
        <a href="/homePage">Home</a>
        <a href="/gamesPage">Games</a>
        {/* <a href="/friendsList">Friends</a> */}
        <a href="/FavoritesPage">Favorites</a>
        <a onClick={logout} href="/">Logout</a>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default ResNavbar;
