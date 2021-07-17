import "./Photo.css"
import React from "react";

function Photo(props) {
  return (
    <img className="UserPhoto" style={props.style} src={props.contactImg} alt="Contact-Pic" />
  );
}
export default Photo;
