import './App.css';
import ChatHistoryScreen from '../ChatHistoryScreen/ChatHistoryScreen.js';
import DirectChatScreen from '../DirectChatScreen/DirectChatScreen.js';
import GroupInfoScreen from '../GroupInfoScreen/GroupInfoScreen.js';
import ContactScreen from '../ContactScreen/ContactScreen.js';
import UserDescriptionScreen from '../UserDescriptionScreen/UserDescriptionScreen.js'
import Footer from '../Footer/Footer.js';
import Header from '../Header/Header.js';
import {CSSTransition} from 'react-transition-group';

import {useState, useReact} from 'react';
 

function App() {
  const [inChatHistory, setInChatHistory] = useState(true);
  const [inContacts, setInContacts] = useState(false);
  const [inDirectChat, setInDirectChat] = useState(false);

  function handleRightButtonClick(){
      if(inContacts === false){
        setInContacts(true);
        setInChatHistory(false);
        setInDirectChat(false);
      }
  }

  function handleLeftButtonClick(){
      if(inChatHistory === false){
        setInChatHistory(true);
        setInContacts(false);
        setInDirectChat(false);
      }
  }

  function handleChatClick(){
      if(inDirectChat === false){
        setInDirectChat(true);
        setInChatHistory(false);
        setInContacts(false);
      }
  }
  

  return (
    <div className="App">
      <Header name="Anurag Sisodiya" />
      <CSSTransition in={inChatHistory} unmountOnExit timeout={200} classNames="chatScreen">
          <ChatHistoryScreen handleChatClick = {handleChatClick}/>
      </CSSTransition>
      <CSSTransition in={inContacts} unmountOnExit timeout={200} classNames="contactScreen">
          <ContactScreen handleContactClick = {handleChatClick}/>
      </CSSTransition>
      <CSSTransition in={inDirectChat} unmountOnExit timeout={200} classNames="directChatScreen">
          <DirectChatScreen />
      </CSSTransition>
      <div className="footerContainer">
         <Footer handleRightButtonClick = {handleRightButtonClick} handleLeftButtonClick = {handleLeftButtonClick}/>
      </div>
    </div>
  );
}

export default App;