import React,{useState} from "react";
import Footer from "../Footer/Footer.js";
import ChatDetail from "../ChatDetail/ChatDetail.js";
import Header from "../Header/Header.js";
import './ChatHistoryScreen.css';
import DirectChatScreen from "../DirectChatScreen/DirectChatScreen.js";

function ChatHistoryScreen(props){

    var str1="9027658096";
    var str = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    var contactDetail = [];
    for (let i = 0; i < 10; ++i) {
      contactDetail.push(
        <ChatDetail
          contactNumber={str1}
          lastMessage={str.substr(0, 50) + "..."}
          contactImg="logo512.png"
          forDirectMessage={props.forDirectMessage}
          forChatHistory={props.forChatHistory}
          forContacts={props.forContacts}
        />
      );
    }
    let mainContainer = React.createElement( "div", { className: "ContactDetail" },contactDetail);
    return (
        <div className="ChatHistoryScreen">
           {mainContainer}
        </div>
    );
}

export default ChatHistoryScreen;

