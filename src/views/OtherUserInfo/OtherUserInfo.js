import './OtherUserInfo.css';

/*
props
name: name of other user
lastSeen: time other user was last seen
*/

export default function OtherUserInfo(props){
	return(
		<div className="OtherUserInfo">
			<div className="OtherUserName">{props.name}</div>
			<div className="OtherUserLastSeen">Last Seen {props.lastSeen}</div>
		</div>
	)
}