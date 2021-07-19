import './App.css';
import ChatHistoryScreen from '../ChatHistoryScreen/ChatHistoryScreen.js';
import DirectChatScreen from '../DirectChatScreen/DirectChatScreen.js';
import GroupInfoScreen from '../GroupInfoScreen/GroupInfoScreen.js';
import ContactScreen from '../ContactScreen/ContactScreen.js';
import ReceivedMessageBox from '../ReceivedMessageBox/ReceivedMessageBox.js';
import UserDescriptionScreen from '../UserDescriptionScreen/UserDescriptionScreen.js'

import {useState} from 'react';
import Footer from '../Footer/Footer.js';
import Header from '../Header/Header.js';

function App() {    

   var [styleOfDirectMessage, setStyleOfDirectMessage] = useState({left: "-100%"});
   var [styleOfChatHistory, setStyleOfChatHistory] = useState({left:"0"});
   var [styleOfContact, setStyleOfContact] = useState({left:"100%"});

   return (
      <div className="App">
         <div className="otherUserDescriptionContainer">
            <UserDescriptionScreen />
         </div>
         <div className="headerContainer">
            <Header name="Anurag Sisodiya"/>
         </div>
         <div className="ScreenContainer">
            <div className="directChatScreenContainer" style={{left: styleOfDirectMessage.left}}>
               <DirectChatScreen />
            </div>
            <div className="chatHistoryScreenContainer" style={{left: styleOfChatHistory.left}}>
               <ChatHistoryScreen 
                  forChatHistory={setStyleOfChatHistory} 
                  forContacts={setStyleOfContact} 
                  forDirectMessage={setStyleOfDirectMessage}
               />
            </div>
            <div className="contactScreenContainer" style={{left: styleOfContact.left}}>
               <ContactScreen />
            </div>
         </div>
         <div className="footerContainer">
            <Footer 
               forChatHistory={setStyleOfChatHistory} 
               forContacts={setStyleOfContact} 
               forDirectMessage={setStyleOfDirectMessage}
            />
         </div>
      </div>
   );
}

export default App;