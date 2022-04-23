import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import s from "./Profile.module.css";

const Profile = (props) => {
  return (
      <div className={s.fon}>
      <div className={s.ava}>
          <img src="https://avatarko.ru/img/kartinka/3/ruki_karandash_2390.jpg"  />
      </div>
      <div>ava + description</div>
      <MyPosts posts={props.posts}/>
    </div>
  );
};

export default Profile;
