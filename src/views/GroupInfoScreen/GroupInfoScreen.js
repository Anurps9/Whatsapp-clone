import React from "react";
import OtherUserInfoWithPhoto from "../OtherUserInfoWithPhoto.js/OtherUserInfoWithPhoto.js";
import Photo from "../Photo/Photo.js";

function GroupInfoScreen(props) {
  var str1 = "9027658096";
  var str ="Sachin Singh";
  var Groupmember = [];
  for (let i = 0; i < 100; ++i) {
    Groupmember.push(
      <OtherUserInfoWithPhoto
        name={str}
        contactNumber={str1}
        contactImg="logo512.png"
      />
    );
  }
  let mainContainer = React.createElement(
    "div",
    { className: "MemberDetail" },
    Groupmember
  );
  return (
    <div>
      <Photo contactImg="logo512.png" />
      <div>
        <h2 style={{ marginLeft: "40%" }}>GroupName</h2>
      </div>
      <div>
        <h3 style={{ marginLeft: "39%" }}>Total Members:100</h3>
      </div>
      <div className="GroupMemberDetail">
        <div className="GroupMemberDetailContainer">{mainContainer}</div>
      </div>
    </div>
  );
}

export default GroupInfoScreen;
