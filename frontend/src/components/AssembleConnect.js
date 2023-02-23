import React, { useEffect, useContext, useState } from "react";
import Context from "../Context/Context";
import "./assembleConnect.css";
function AssembleConnect() {
  const { posts, setPosts } = useContext(Context);
  const [errorMessage, setErrorMessage] = useState("");
  // console.log(posts)
  const fetchPosts = async () => {
    let token;
    if (window.localStorage.getItem("assembly-token")) {
      token = JSON.parse(window.localStorage.getItem("assembly-token")).token;
    }
    if (token) {
      const result = await fetch("http://localhost:8000/posts", {
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
      const result = await fetch("http://localhost:8000/posts", {
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
            <h2>
              {post.username} is Assembling players for {post.name}
            </h2>
          </div>
          <div id="postContainer">
            <button>connect</button>
            <img
              className="img-item"
              src={[post.url[0]]}
              alt="Elden ring"
            ></img>
            <div id="tags">
              <ul>
                <li>
                  <button onClick={()=> deletePost(post.id)} >delete</button>
                </li>
                <li>{post.name}</li>
                <li>{post.rating}</li>
                <li>{post.platform}</li>
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AssembleConnect;

{
  /* <img
    className="img-item"
    src="https://e0.pxfuel.com/wallpapers/935/796/desktop-wallpaper-elden-ring-eldenring.jpg"
    alt="Elden ring"
  ></img> */
}
