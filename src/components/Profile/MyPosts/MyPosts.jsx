import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div>
      <div className={s.newpost}>
        my post
        <div>
          <textarea name="" id="" cols="30" rows="2"></textarea>
          <button>Add Post</button>
        </div>
      </div>
      <Post/>
      <Post/>
      <Post/>
     
    </div>
  );
};

export default MyPosts;
