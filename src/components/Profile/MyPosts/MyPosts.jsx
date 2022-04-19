import React from "react";
import ProfileInfo from "../ProfileInfo/ProfileInfo";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

let postData = [
    {id:1, message:"How are you?", likeCount: 10},
    {id:2, message:"How many?", likeCount: 11},
    {id:3, message:"How do you do?", likeCount: 12}
]

let postElements = postData.map(p => <Post message={p.message} likeCount={p.likeCount}/>);

const MyPosts = (props) => {
    return (
        <div>
            <ProfileInfo/>
            {postElements}
        </div>
    );
};

export default MyPosts;
