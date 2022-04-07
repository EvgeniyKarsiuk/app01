import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import s from "./Profile.module.css";

const Profile = () => {
  return (
    <div className={s.content}>
      <img src="https://w-dog.ru/wallpapers/0/53/546328452145152/panorama-london.jpg" />
      <div>
        <img src="https://w-dog.ru/wallpapers/0/53/546328452145152/panorama-london.jpg" />
        ava + description
      </div>
      <MyPosts />
    </div>
  );
};

export default Profile;
