import './UserInfoHeader.css';

export default function UserInfoHeader(props){
	return(
		<div className = "UserInfoHeader">
			<div id="name">{props.name}</div>
			<div id="number">{props.mobileNumber}</div>
		</div>
	)
}