import React from "react";
import ProfilePictureExpanded from "../ProfilePictureExpanded/ProfilePictureExpanded.js";
import ContactCard from "../ContactCard/ContactCard.js";
import './GroupInfoScreen.css';
import Footer from '../Footer/Footer.js';

function GroupInfoScreen(props) {
  var str1 = "9027658096";
  var str ="Sachin Singh";
  var groupMembers = [];
  for (let i = 0; i < 10; ++i) {
    groupMembers.push(
      <ContactCard
        name={str}
        number={str1}
        imgSrc="https://picsum.photos/200"
      />
    );
  }
  let mainContainer = React.createElement(
    "div",
    { className: "MemberDetail" },
    groupMembers
  );
  return (
    <div className="GroupInfoScreen">
      <ProfilePictureExpanded src="https://picsum.photos/200" />
      <div className="GroupInfo">
        <div style={{fontSize: "1.5rem"}}>GroupName</div>
        <div>Total Members:100</div>
      </div>
      <div style={{paddingBottom: "2.5rem"}} className="GroupMemberDetail">
        <div className="GroupMemberDetailContainer">{mainContainer}</div>
      </div>
      <div className="footerContainer">
        <Footer />
      </div>
    </div>
  );
}

export default GroupInfoScreen;
