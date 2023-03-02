import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "../Pages/LandingPage";
import SignUpPage from "../Pages/SignUpPage";
import LoginPage from "../Pages/LoginPage";
import HomePage from "../Pages/HomePage";
import FavoritesPage from "../Pages/FavoritesPage";
import FriendsList from "../Pages/FriendsList";
import GamesPage from "../Pages/GamesPage";
// import UserAccountPage from "../Pages/UserAccountPage";
// import UserMessagePage from "./UserMessage";

function RoutesTree() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/SignUpPage" element={<SignUpPage/>}/>
        <Route path="/LoginPage" element={<LoginPage/>}/>
        <Route path="/HomePage" element={<HomePage/>}/>
        <Route path="/GamesPage" element={<GamesPage/>}/>
        <Route path="/FriendsList" element={<FriendsList/>}/>
        <Route path="/FavoritesPage" element={<FavoritesPage/>}/>
      </Routes>
    </div>
  );
}

export default RoutesTree;
