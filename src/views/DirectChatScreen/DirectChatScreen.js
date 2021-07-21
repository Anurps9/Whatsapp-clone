import SentMessageBox from '../SentMessageBox/SentMessageBox.js';
import ReceivedMessageBox from '../ReceivedMessageBox/ReceivedMessageBox';
import OtherUserInfo from '../OtherUserInfo/OtherUserInfo.js';
import MessageInputField from '../MessageInputField/MessageInputField.js';
import Footer from '../Footer/Footer.js';
import React, { useState } from 'react';
import './DirectChatScreen.css'
import { CSSTransition } from 'react-transition-group';
import UserDescriptionScreen from '../UserDescriptionScreen/UserDescriptionScreen.js';

export default function DirectChatScreen(props){

	const[showOtherUserInfo,setShowotherUserInfo]=useState(false);
	const [header,setshowHeader] = useState(true);

	function handleClick(){
		setShowotherUserInfo(true);
		setshowHeader(false);
	}
	var str = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

	var messages = [];
	for(let i=0; i<100; ++i){
		messages.push(<SentMessageBox key={i} content={str}/>);
		messages.push(<ReceivedMessageBox key={100+i} content={str}/>);
	}

	let mainContainer = React.createElement('div', {className: 'messageList'}, messages);

	return (
		<div className="DirectChatScreen">
			<CSSTransition in={header} unmountOnExit timeout={200} classNames="OtherUser">
				<div className="OtherUserInfoContainer">
				<div>
					<OtherUserInfo handleClick={handleClick} name="Anurag Sisodiya" lastSeen="One hour ago" /></div>
					<MessageInputField />
      			
				</div>
				  
			</CSSTransition>
			<CSSTransition in={header} unmountOnExit timeout={200} classNames="OtherUser">
				{mainContainer}  
			</CSSTransition>
			<CSSTransition in={showOtherUserInfo} unmountOnExit timeout={200} classNames="userDescription">
          		<UserDescriptionScreen/>
      		</CSSTransition>    		
		</div>
	)
}