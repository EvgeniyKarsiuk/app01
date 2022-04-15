import React from "react";
import s from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
let path = "dialogs/" + props.id
  return (
    <div className={s.Dialog}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

const MessageItem = (props) => {
  return( <div >{props.message}</div>
  );
};

const Dialogs = (props) => {
  return (
    <div className={s.Dialogs}>
      <div className={s.DialogsItems}>
        <DialogItem name="Sasha" id="1" />
        <DialogItem name="Ignat" id="2" />
        <DialogItem name="Nikolay" id="3" />
        <DialogItem name="Oleg" id="4" />
        <DialogItem name="Igor" id="5" />
      </div>
      <div className={s.Messages}>
        <MessageItem message="Hi IT!" />
        <MessageItem message="Hi YO!" />
        <MessageItem message="Hi Hi!" />
        <MessageItem message="Hi Alex!" />
        <MessageItem message="Hi IT!" />
        
      </div>
    </div>
  );
};

export default Dialogs;
