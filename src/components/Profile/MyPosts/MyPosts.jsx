import React from "react";
import ProfileInfo from "../ProfileInfo/ProfileInfo";
import Post from "./Post/Post";

const MyPosts = (props) => {
    let postElements = props.posts.map(p => <Post message={p.message} likeCount={p.likeCount} id={p.id}/>);
    return (
        <div className={Post}>
            <ProfileInfo/>
            {postElements}
        </div>
    );
};

export default MyPosts;
