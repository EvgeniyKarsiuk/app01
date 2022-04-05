import React from "react";
import s from "./Profile.module.css";
console.log(s);

const Profile = () => {
  return (
    <div className={s.content}>
      <div>
        <img src="" />
      </div>
      <div>
        <img src="" />
        ava + description
      </div>
      <div>
        my post
        <div>new post</div>
      </div>
      <div className={`${s.content} ${s.active}`}>
        <div>post 1</div>
        <div>post 2</div>
      </div>
    </div>
  );
};

export default Profile;
