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
  // make button here
  // handle sumbit here


  return (
    <div className="main">
      <h2>Assemble Other Players</h2>
      <div className="search">
        <TextField
          id="outlined-basic"
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