import React from "react";
import Navy from "../components/Navbar";
import FriendsActivity from "../components/FriendsActivity";
import AsemilitesActivity from "../components/AsemilitesActivity";
import SearchPost from "../components/SearchPost";
import "./homePage.css";
function HomePage() {
  return (
    <div>
      <Navy />
      <FriendsActivity />
      <AsemilitesActivity/>
      <SearchPost/>
    </div>
  );
}

export default HomePage;
