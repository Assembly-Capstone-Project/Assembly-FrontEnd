import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/esm/Button";
// import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
// import Context from "../Context/Context";

function SignUpPage() {
  let navigate = useNavigate();

  let [username, setUsername] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  function submitForm() {
    console.log("submitting sign up form");
    fetch("http://localhost:8000/users/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ 
        username: username,
        password: password,
          email: email
          }),

    })
    };


      const handleSubmit = (e) => {
        e.preventDefault();
        submitForm()
        navigate('/LoginPage')
      }
  

  return (
    <div>
      <form onSubmit={submitForm}>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="username"
          required
          placeholder="username"
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          required
          placeholder="Email"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          required
          placeholder="Password"
          className="text-black border border-gray-400 py-1 px-2 w-full rounded-xl mx-auto"
        />
        <button onClick={handleSubmit}>
          <div class="text ">Login</div>
        </button>
      </form>
    </div>
  );
}

export default SignUpPage;
<Link to="/HomePage"></Link>;
