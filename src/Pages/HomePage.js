import React from "react";
import Navy from "../components/Navbar";
import NewNavBar from "../components/NewNavBar";
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
      {/* <NewNavBar/> */}
      {/* <Navy /> */}
      <FriendsActivity />
      <AsemilitesActivity/>
      <SearchPost/>
      <AssembleConnect/>
    </div>
  );
}

export default HomePage;