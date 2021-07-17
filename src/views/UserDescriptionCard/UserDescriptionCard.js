import './UserDescriptionCard.css';

export default function UserDescriptionCard(props){
	return (
		<div className="UserDescriptionCard">
			<div>
				{props.name}
			</div>
			<div>
				{props.number}
			</div>
		</div>
	)
}