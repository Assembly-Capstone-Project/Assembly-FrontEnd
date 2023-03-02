import React, { useState, useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import Context from "../Context/Context";
import "./signUpPage.css";
import APIURL from "../apiEndpoint";

function SignUpPage() {
  let navigate = useNavigate();

  let [username, setUsername] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  const { setUser } = useContext(Context);

  const submitForm = async () => {
    try {
      const result = await fetch(`${APIURL}/users/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
          email,
        }),
      });
      const json = await result.json();
      const verifiedUser = {
        username: json.user.username,
        token: json.token,
        id: json.user.id,
      };
      window.localStorage.setItem(
        "assembly-token",
        JSON.stringify(verifiedUser)
      );
      setUser(json.user);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitForm();
    navigate("/LoginPage");
  };

  return (
    <div>
      <div id="body">
        <div className="formbackground">
          <form onSubmit={submitForm}>
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                required
                placeholder=""
              />
              <span>Email</span>
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
            <button id="signupbtn" onClick={handleSubmit}>
              <div class="text">Login</div>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
