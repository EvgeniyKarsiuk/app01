import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import s from "./Profile.module.css";



const Profile = (props) => {
    return (
        <div className={s.Ava}>
            <img src="https://avatarko.ru/img/kartinka/3/ruki_karandash_2390.jpg"/>
            <div>ava + description</div>
            <MyPosts/>
        </div>
    );
};

export default Profile;
