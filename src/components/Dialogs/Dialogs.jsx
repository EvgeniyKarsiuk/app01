import React from "react";
import s from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogsItem";
import MessageItem from "./Message/Message";



let dialogData = [
    {id:1, name:"Alex"},
    {id:2, name:"Sacha"},
    {id:3, name:"Alexander"}
];
let messagesData = [
    {id:1, message:"How are you?"},
    {id:2, message:"What is your name?"},
    {id:3, message:"Where are you from?"}
];

let dialogElements = dialogData.map(d => <DialogItem name={d.name} id={d.id}/>);

let messageElements = messagesData.map(m => <MessageItem message={m.message}/>);


const Dialogs = (props) => {
    return (
        <div className={s.Dialogs}>
            <div className={s.DialogsItems}>
                {dialogElements}
            </div>
            <div className={s.Messages}>
                {messageElements}
            </div>
        </div>
    );
};

export default Dialogs;
