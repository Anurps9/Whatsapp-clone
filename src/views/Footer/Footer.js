import './Footer.css';
import LeftButton from './LeftButton';
import RightButton from './RightButton';
import ChatHistoryScreen from '../ChatHistoryScreen/ChatHistoryScreen.js';
import ContactScreen from '../ContactScreen/ContactScreen.js'

import {
   BrowserRouter as Router,
   Switch,
   Route,
   Link
} from 'react-router-dom';

function Footer(props) {
    return (
      <div className="footer">
          <LeftButton handleClick = {props.handleLeftButtonClick}/>
          <RightButton handleClick = {props.handleRightButtonClick} />
      </div>
    );
}

export default Footer
