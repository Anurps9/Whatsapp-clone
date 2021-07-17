import "./Photo.css"
import React from "react";
import './Photo.css';

function Photo(props) {
  var style = props.style;
  return (
<<<<<<< HEAD
    <div className="Grp" >
      <img className="GrpPhoto"src={props.contactImg} alt="Contact-Pic" />
=======
    <div className="UserPhoto" >
      <img style={style} src={props.contactImg} align="left" alt="Contact-Pic" />
>>>>>>> cdf1a42179c41a4cb23955535ea90eef49ea3e65
    </div>
  );
  
}
export default Photo;
