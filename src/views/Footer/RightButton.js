import "./Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faListUl} from '@fortawesome/free-solid-svg-icons'

function RightButton(props) {
  return (
    <button className="btn" onClick={() => {props.forChatHistory({left: "100%", width: "100%"}); props.forContacts({left: 0, width: "100%"})}}><FontAwesomeIcon icon={faListUl}/></button>
  );
}
export default RightButton;
