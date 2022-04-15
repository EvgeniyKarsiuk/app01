import React from "react";
import ProfileInfo from "../ProfileInfo/ProfileInfo";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";


const MyPosts = () => {
  return (
    <div>
    <ProfileInfo/>
      <Post/>
      <Post/>
      <Post/>
     
    </div>
  );
};

export default MyPosts;
