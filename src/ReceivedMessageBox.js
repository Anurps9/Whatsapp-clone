import './ReceivedMessageBox.css'
/*
props
content: content of the message
*/
export default function ReceivedMessageBox(props){
	return(
		<div className="ReceivedMessageBox">
			{props.content}
		</div>
	)
}