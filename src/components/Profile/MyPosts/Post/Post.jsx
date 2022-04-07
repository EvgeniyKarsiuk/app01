import React from "react";
import s from "./Post.module.css";

const Post = () => {
  return (
    <div className={s.post}>
      <img src="https://www.vokrug.tv/pic/person/2/b/f/4/2bf448098b7badf3b37e87c510da29bc.jpeg"></img>
      post 1
      <div>
        <span>like</span>
      </div>
    </div>
  );
};

export default Post;
