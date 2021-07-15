import React from "react";

function Photo(props) {
  return (
      <div style={{ width: "100%", zIndex: 5, padding: "5%" }}>
        <img src={props.contactImg} alt="Contact-Pic"/>
      </div>
    );
  
}
export default Photo;
