import "./Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faListUl} from '@fortawesome/free-solid-svg-icons'

function RightButton(props) {
  return (
    <button onClick={() => props.handleClick()} className="btn"><FontAwesomeIcon icon={faListUl}/></button>
  );
}
export default RightButton;
