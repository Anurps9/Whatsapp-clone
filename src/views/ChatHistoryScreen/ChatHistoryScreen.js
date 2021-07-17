import React from "react";
import Footer from "../Footer/Footer.js";
import Detail from "../Detail/Detail.js";

function ChatHistoryScreen(props){
    var str1="9027658096";
    var str = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    var contactDetail = [];
    for (let i = 0; i < 100; ++i) {
      contactDetail.push(
        <Detail
          contactNumber={str1}
          lastMessage={str.substr(0, 150) + "..."}
          contactImg="logo512.png"
        />
      );
    }
    let mainContainer = React.createElement( "div", { className: "ContactDetail" },contactDetail);
    return (
      <div>
        <div className="OtherUserMessageDetail">
          <div className="OtherUserDetailContainer">{mainContainer}</div>
          <Footer/>
        </div>
    </div>
       
    );
}

export default ChatHistoryScreen;;

