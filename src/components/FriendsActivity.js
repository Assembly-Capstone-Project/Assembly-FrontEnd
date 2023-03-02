import React from "react";
import "./friendsActivity.css";
function FriendsActivity() {
  return (
    <div id="parent">
      <h2 id="title1">Friends Playing</h2>
      <div id="platform-box">
        <div className="img-container">
          
          <img
            className="img-item"
            src="https://e0.pxfuel.com/wallpapers/935/796/desktop-wallpaper-elden-ring-eldenring.jpg"
            alt="Elden ring"
          ></img>
          <img
            className="img-item"
            src="https://www.pokemon.com/static-assets/app/static3/img/og-default-image.jpeg"
            alt="Pokemon"
          ></img>
          <img
            className="img-item"
            src="https://images2.alphacoders.com/927/thumb-1920-927337.png"
            alt="super smash bros"
          ></img>
          <img
            className="img-item"
            src="https://news.xbox.com/en-us/wp-content/uploads/sites/2/2022/08/Evolution_Key_Art_logo-V2-a534739934edf3831f93.jpg"
            alt="World of tanks"
          ></img>
          <img
            className="img-item"
            src="https://media.wired.com/photos/633c95ef85e7a4cc2f802256/master/w_2560%2Cc_limit/Breath-of-the-Wild-Casual-Gamer-Culture.jpg"
            alt="video game"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default FriendsActivity;
