import './MessageInputField.css';

export default function MessageInputField(props){
	return (
		<div className="MessageInputField">
			<div className="MessageInputFieldContainer">
				<input type="text" placeholder="Type your message..."></input>
				<button>></button>
			</div>
		</div>
	)
}

