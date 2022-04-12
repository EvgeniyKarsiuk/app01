import React from "react";
import s from "./Dialogs.module.css";

const Dialogs = (props) => {
  return (
    <div className={s.Dialogs}>
      <div className={s.DialogsItem}>
        <div className={s.Dialog}>Sasha</div>
        <div className={s.Dialog}>Andrey</div>
        <div className={s.Dialog}>Ignat</div>
        <div className={s.Dialog}>Genadiy</div>
        <div className={s.Dialog}>Pavel</div>
        </div>
        <div className={s.Messages}>
          <div className={s.Message}>'How are you?'</div>
          <div className={s.Message}>'I'm feel good!'</div>
          <div className={s.Message}>'How match?'</div>
        </div>
      
    </div>
  );
};

export default Dialogs;
