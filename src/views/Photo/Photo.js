import "./Photo.css"
import React from "react";

function Photo(props) {
  return (
    <div className="Grp" >
      <img className="GrpPhoto"src={props.contactImg} alt="Contact-Pic" />
    </div>
  );
  
}
export default Photo;
