import './Footer.css';
import LeftButton from './LeftButton';
import RightButton from './RightButton';


function Footer(props) {
    return (
      <div className="footer">
        <LeftButton forChatHistory = {props.forChatHistory} forContacts = {props.forContacts}/>
        <RightButton forChatHistory = {props.forChatHistory} forContacts = {props.forContacts}/>
      </div>
    );
}

export default Footer
