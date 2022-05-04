import React from "react";
import s from "./ProfileInfo.module.css";



const ProfileInfo = (props) => {

    let newPostElement = React.createRef();

    let addPost = () =>{
        let text = newPostElement.current.value;
        props.addPost(text);
        newPostElement.current.value = '';
    };

    return (
        <div className={s.newpost}>
            <h3>My post</h3>
            <div>
                <textarea ref={newPostElement} name="" id="" cols="30" rows="2"></textarea>
            </div>
            <div>
                <button onClick={addPost}>Add Post</button>
            </div>

        </div>
    );
};
export default ProfileInfo;
