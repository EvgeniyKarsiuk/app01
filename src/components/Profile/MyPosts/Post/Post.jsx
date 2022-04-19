import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.post}>
      <img
        src="https://avatarko.ru/img/kartinka/1/avatarko_anonim.jpg"
        alt=""
      />
      {props.message}
      <div>
        <span>{props.likeCount}</span>
      </div>
    </div>
  );
};

export default Post;
