import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommentAlt } from '@fortawesome/free-solid-svg-icons'

function LeftButton(){
    return (
        <button className="btn"><FontAwesomeIcon icon={faCommentAlt} /></button>
    );
}
export default LeftButton;