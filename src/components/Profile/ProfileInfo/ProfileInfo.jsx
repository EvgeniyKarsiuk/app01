import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
  return (
    <div className={s.newpost}>
      <div className={s.headline}>My post</div>
      <div>
        <div>
          <textarea name="" id="" cols="30" rows="2"></textarea>
        </div>
        <div>
         
          <button>Add Post</button>
        </div>
      </div>
    </div>
  );
};
export default ProfileInfo;
