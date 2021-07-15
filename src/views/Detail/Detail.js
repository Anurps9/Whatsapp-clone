import React from "react";
import Photo from "../Photo/Photo";


function Detail(props) {
    return (
      <div style={{ width: "100%", zIndex: 5, padding: "5%" }}>
        <Photo/>
        <h2>{props.contactNumber}</h2>
        <h3>{props.lastMessage}</h3>
      </div>
    );
  
}
export default Detail;
