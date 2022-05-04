import React, {Profiler} from "react";
import "./App.css";
import Profile from "./components/Profile/Profile";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import state, {addPost} from "./redux/state";


const App = (props) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path="/dialogs/*" element={<Dialogs
                            dialogs={props.state.messagesPage.dialogs}
                            messages={props.state.messagesPage.messages}/>}/>
                        <Route path="/profile" element={<Profile
                            posts={props.state.profilePage.posts} addPost={props.addPost}/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;
