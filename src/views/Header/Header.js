import React from "react";
import './Header.css';
import Photo from '../Photo/Photo.js';

function Header (props){
  var photoStyle = {
    width: "2.8rem",
    height: "2.8rem",
    display: "inline",
    margin: ".40rem 1rem 0 0.4rem",
    borderRadius: "2rem"    
  }
   return (
     <div style={{width: "100%"}}>
         <Photo style={photoStyle} contactImg="https://picsum.photos/200"/>
         <div className="Header">Anurag Sisodiya</div>
     </div>
   );
}
export default Header;