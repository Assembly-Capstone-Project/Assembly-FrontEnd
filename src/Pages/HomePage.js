import React from "react";
import FriendsActivity from "../components/FriendsActivity";
import AsemilitesActivity from "../components/AsemilitesActivity";
import SearchPost from "../components/SearchPost";
import AssembleConnect from "../components/AssembleConnect";
import ResNavbar from "../components/ResponsiveNavBar";
import "./homePage.css";
function HomePage() {
  return (
    <div> 
      <ResNavbar/>
      <FriendsActivity />
      <AsemilitesActivity/>
      <SearchPost/>
      <AssembleConnect/>
    </div>
  );
}

export default HomePage;
