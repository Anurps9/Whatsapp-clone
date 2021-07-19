import "./Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faListUl} from '@fortawesome/free-solid-svg-icons'

function RightButton(props) {
  return (
    <button className="btn" onClick={() => {
      props.forChatHistory({left: "-100%"}); 
      props.forDirectMessage({left: "-200%"});
      props.forContacts({left: 0});
    }}><FontAwesomeIcon icon={faListUl}/></button>
  );
}
export default RightButton;
