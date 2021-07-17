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
		<div className="ContactCard">
			<div>
				<Photo style={photoStyle} contactImg="https://picsum.photos/200"/>
			</div>
			<div>
			 {props.name}
			</div>
			<div>
			 {props.number}	
			</div>
		</div>
	)
}