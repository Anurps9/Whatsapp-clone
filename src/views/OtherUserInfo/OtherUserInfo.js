import './OtherUserInfo.css';
import Photo from '../Photo/Photo.js';

/*
props
name: name of other user
lastSeen: time other user was last seen
*/

export default function OtherUserInfo(props){
	var photoStyle = {
		width: "2.8rem",
		height: "2.8rem",
		display: "inline",
		margin: ".40rem 1rem 0 0",
		borderRadius: "2rem"		
	}
	return (
    <div className="OtherUserInfo" onClick={() => props.handleClick()}>
      <div className="PhotoContainer">
        <Photo contactImg="https://picsum.photos/200" style={photoStyle} />
      </div>
      <div className="InfoContainer">
        <div className="OtherUserName">{props.name}</div>
        <div className="OtherUserLastSeen">Last Seen {props.lastSeen}</div>
      </div>
    </div>
  );
}