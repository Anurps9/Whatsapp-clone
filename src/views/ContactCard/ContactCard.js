import Photo from '../Photo/Photo.js';
import './ContactCard.css';

export default function ContactCard(props){
	var photoStyle = {
    	width: "2.8rem",
    	height: "2.8rem",
    	display: "inline",
    	margin: ".40rem 1rem 0 0.4rem",
    	borderRadius: "2rem"    
  	}
	return (
    <div
      className="ContactCard"
      onClick={() => {
        props.handleClick();
      }}
    >
      <div className="PhotoContainer">
        <Photo style={photoStyle} contactImg={props.imgSrc} />
      </div>
      <div className="InfoContainer">
        <div>{props.name}</div>
        <div className="memberNumber">{props.number}</div>
      </div>
    </div>
  );
}