import React,{useState} from "react";
import Footer from "../Footer/Footer.js";
import ChatDetail from "../ChatDetail/ChatDetail.js";
import Header from "../Header/Header.js";
import './ChatHistoryScreen.css';
import DirectChatScreen from "../DirectChatScreen/DirectChatScreen.js";

function ChatHistoryScreen(props){
  var [styleOfChatHistory, setStyleOfChatHistory] = useState({
    left: "0",
    width: "100%",
  });
  var [styleOfMessages, setStyleOfMessages] = useState({
    left: "-100%",
    width: "100%",
  });

    var str1="9027658096";
    var str = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    var contactDetail = [];
    for (let i = 0; i < 10; ++i) {
      contactDetail.push(
        <ChatDetail
          contactNumber={str1}
          lastMessage={str.substr(0, 50) + "..."}
          contactImg="logo512.png"
          forChatScreen={setStyleOfChatHistory}
          forMessages={setStyleOfMessages}
        />
      );
    }
    let mainContainer = React.createElement( "div", { className: "ContactDetail" },contactDetail);
    return (
      <div className="Total">
        <div
          className="ChatHistoryScreen"
          style={{
            left: styleOfChatHistory.left,
            width: styleOfChatHistory.width,
          }}
        >
          <div
            className="OtherUserDetailContainer"
            style={{ paddingBottom: "3rem" }}
          >
            {mainContainer}
          </div>
        </div>
        <div
          className="MessagesToUser"
          style={{ left: styleOfMessages.left, width: styleOfMessages.width }}
        >
          <DirectChatScreen />
        </div>
      </div>
    );
}

export default ChatHistoryScreen;

