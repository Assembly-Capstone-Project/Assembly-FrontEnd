import React, { useEffect, useContext, useState } from "react";
import Context from "../Context/Context";
import APIURL from "../apiEndpoint";
import "./assembleConnect.css";



function AssembleConnect() {
  const { posts, setPosts } = useContext(Context);
  const [ setErrorMessage] = useState("");
  // console.log(posts)
  const fetchPosts = async () => {
    let token;
    if (window.localStorage.getItem("assembly-token")) {
      token = JSON.parse(window.localStorage.getItem("assembly-token")).token;
    }
    if (token) {
      const result = await fetch(`${APIURL}/posts`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const json = await result.json();
      setPosts(json);
    } else {
      setErrorMessage(
        <h1 style={{ color: "white" }}>You're Not Signed In.</h1>
      );
    }
  };
  useEffect(() => {
    fetchPosts();
  }, []);

  const deletePost = async (id) => {
    let token;
    if (window.localStorage.getItem("assembly-token")) {
      token = JSON.parse(window.localStorage.getItem("assembly-token")).token;
    }
    if (token) {
      const result = await fetch(`${APIURL}/posts`, {
        method: "DELETE",
        headers: {
         "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ id }),
      });
      const json = await result.json();
      setPosts(json);
    } else {
      setErrorMessage(
        <h1 style={{ color: "white" }}>You're Not Signed In.</h1>
      );
    }
  };

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id} id="postparent">
          <div id="header">
            <h2 id="postHeader">
              {post.username} is Assembling players for {post.name}
            </h2>
          <div id="postContainer">
            <img
              src="https://www.pngall.com/wp-content/uploads/5/Video-Game-Controller-PNG-Picture.png"
              className="logoCon"
              alt="React Bootstrap logo"
              />
              <div id="buttonContainer" >
            <button>connect</button>
            <button onClick={()=> deletePost(post.id)} >delete</button>
              </div>
            <img
              className="img-item"
              src={[post.url[0]]}
              alt="Elden ring"
            ></img>
            <div id="tags">
              <ul id="taglist">
                <li>Title: {post.name}</li>
                <li>Rating: {post.rating}</li>
                <li>Platform: {post.platform}</li>
              </ul>
            </div>
          </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AssembleConnect;

