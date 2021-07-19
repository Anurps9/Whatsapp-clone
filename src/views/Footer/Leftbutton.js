import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommentAlt } from '@fortawesome/free-solid-svg-icons'

function LeftButton(props){
    return (
        <button className="btn" onClick={() => {
            props.forContacts({left: "100%"}); 
            props.forChatHistory({left: "0"}); 
            props.forDirectMessage({left:"-100%"});
        }}><FontAwesomeIcon icon={faCommentAlt} /></button>
    );
}
export default LeftButton;