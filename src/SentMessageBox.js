import './SentMessageBox.css'
/*
props
content: content of the message
*/
export default function SentMessageBox(props){
	return(
		<div className="SentMessageBox">
			{props.content}
		</div>
	)
}