import React from "react";

function Photo(props) {
  return (
    <div className="UserPhoto"style={{ width: "100%", zIndex: 5, padding: "5%" }} >
      <img src={props.contactImg} align="left" alt="Contact-Pic" />
    </div>
  );
  
}
export default Photo;
