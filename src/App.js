import React from "react";
import "./App.css";

const App = () => {
  return (
    <div className="app-wrapper">
      <header className="header">
        <img src="https://ru.seaicons.com/wp-content/uploads/2015/06/Sites-2-icon.png" />
      </header>
      <nav className="nav">
        <div>
          <a href="#">Profile</a>
        </div>
        <div>
          <a href="#">Messages</a>
        </div>
        <div>
          <a href="#">News</a>
        </div>
        <div>
          <a href="#">Musik</a>
        </div>
        <div>
          <a href="#">Settings</a>
        </div>
      </nav>
      <div className="content">
        <div>
          <img src="" />
        </div>
        <div>
          <img src="" />
          ava + description
        </div>
        <div>
          my post
          <div>new post</div>
        </div>
        <div>
          <div>post 1</div>
          <div>post 2</div>
        </div>
      </div>
    </div>
  );
};

export default App;
