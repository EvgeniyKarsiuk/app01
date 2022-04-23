let state = {
    profilePage: {
        posts: [
            {id: 1, message: "How much?", likeCount: 10},
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
            {id: 3, name: "Alexander"}

        ]
    }
};

export default state;