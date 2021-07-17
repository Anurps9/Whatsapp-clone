import React from "react";
import './Photo.css';

function Photo(props) {
  var style = props.style;
  return (
    <div className="UserPhoto" >
      <img style={style} src={props.contactImg} align="left" alt="Contact-Pic" />
    </div>
  );
  
}
export default Photo;
