import React from "react";
import s from "./ProfileInfo.module.css";


const ProfileInfo = (props) => {
    return (
        <div className={s.newpost}>
            <h3>My post</h3>
            <div>
                <textarea name="" id="" cols="30" rows="2"></textarea>
            </div>
            <div>
                <button>Add Post</button>
            </div>

        </div>
    );
};
export default ProfileInfo;
