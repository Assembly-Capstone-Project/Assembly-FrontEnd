import React from "react";
import "./friendsActivity.css";

function AsemilitesActivity(){
  return (
    <div id="parent">
      <h2 id="title1">Other Asemilites Are Playing</h2>
      <div id="platform-box">
        <div className="img-container">
          <img
            className="img-item"
            src="https://image.api.playstation.com/vulcan/ap/rnd/202008/1020/b0OfuUs4lHGWG4VNlHcXwL5a.jpg"
             alt="spiderman"
          ></img>
          <img
            className="img-item"
            src="https://s.yimg.com/uu/api/res/1.2/uGviRPMoIyDUERbV3axoUw--~B/Zmk9ZmlsbDtoPTU3ODt3PTg3NTthcHBpZD15dGFjaHlvbg--/https://www.blogcdn.com/www.joystiq.com/media/2013/09/wiisports2013530.jpg.cf.jpg"
             alt="Wii Sports"
          ></img>
          <img
            className="img-item"
            src="https://www.pacman.com/ogp.png?ver02"
             alt="PacMan"
          ></img>
          <img
            className="img-item"
            src="https://cdn1.epicgames.com/offer/fn/23BR_C4S1_EGS_Launcher_Blade_2560x1440_2560x1440-70d48b6b897fd8509891ebeb1c160117"
             alt="Fort Nite"
          ></img>
          <img
            className="img-item"
            src="https://cdn.akamai.steamstatic.com/steam/apps/976310/header.jpg?t=1654216426"
             alt="Mortal Kombat"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default AsemilitesActivity;
