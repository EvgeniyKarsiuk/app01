import {renderEntireTree} from "../render";

let state = {
    profilePage: {
        posts: [
            {id: 1, message: "How much?", likeCount: 5050},
            {id: 2, message: "How many?", likeCount: 11},
            {id: 3, message: "How do you do?", likeCount: 12}
        ]
    },
    messagesPage: {

        messages: [
            {id: 1, message: "How are you?"},
            {id: 2, message: "What is your name?"},
            {id: 3, message: "Where are you from?"}
        ],
        dialogs: [
            {id: 1, name: "Alex"},
            {id: 2, name: "Sacha"},
            {id: 3, name: "Alexander"},
            {id: 4, name: "Nikolay"},
            {id: 5, name: "Serega"},
            {id: 6, name: "Nikitos"}

        ]
    }
};

export let addPost = (postMessage) => {
    let newPost = {
        id: 4,
        message: postMessage,
        likeCount: 0
    }
    state.profilePage.posts.push(newPost);
    renderEntireTree(state);
}



export default state;