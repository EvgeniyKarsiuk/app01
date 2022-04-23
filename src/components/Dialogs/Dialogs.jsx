import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogsItem";
import MessageItem from "./Message/Message";

const Dialogs = (props) => {
    let dialogElements = props.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messageElements = props.messages.map(m => <MessageItem message={m.message} id={m.id}/>);
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
