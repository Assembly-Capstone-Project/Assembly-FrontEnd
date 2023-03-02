import { React, useState } from "react";
import TextField from "@mui/material/TextField";
import List from "./List";
import "./searchpost.css";

function SearchPost() {
  const [inputText, setInputText] = useState("");

  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  return (
    <div className="main">
      <div className="search">
      <h2 id="PostTitle">Assemble Other Players</h2>
        <TextField
          id="outlined-basic"
          className="outlined-basic"
          onChange={inputHandler}
          variant="outlined"
          fullWidth
          label="Search"
        />
      </div>
      <List input={inputText} />
    </div>
  );
}

export default SearchPost;
