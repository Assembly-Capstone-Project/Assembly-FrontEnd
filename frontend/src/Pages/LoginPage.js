import React, { useContext, useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Context from "../Context/Context";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const { user, setUser } = useContext(Context);
  let [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorText, setErrorText] = useState("");
  const navigate = useNavigate();

  const sendCredentials = (username, password) => {
    fetch("http://localhost:8000/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
      .then((res) => {
        if (res.status === 200) return res.json();
        console.warn("Invalid Username/Password");
        throw Error("Invalid Username/Password");
      })
      .then((json) => {
        const verifiedUser = {
          username: json.user.username,
          token: json.token,
          id: json.user.id,
        };
        setUser(json.user);
        localStorage.setItem("assembly-token", JSON.stringify(verifiedUser));
        navigate("/HomePage");
      })
      .catch((err) => console.log(err));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(username && password) {
      sendCredentials(username, password)
    } else {
      setErrorText("Please enter a valid information")
    }
  }

  return (
    <div>
        {user && <h1>{user.username}</h1>}
        <div id="body">
        <form onSubmit={handleSubmit}>
          <div className="inputBox">
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="username"
              required
            />
            <span>Username</span>
          </div>
          
          <div className="inputBox">
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              required
              placeholder=""
            />
            <span>Password</span>
          </div>
          
        </form>
      <button onClick={handleSubmit}>
            <div class="text ">Login</div>
          </button>
      </div>
    </div>
  );
}

export default LoginPage;
