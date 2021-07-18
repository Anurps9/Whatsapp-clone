import './App.css';
import ChatHistoryScreen from '../ChatHistoryScreen/ChatHistoryScreen.js';
import DirectChatScreen from '../DirectChatScreen/DirectChatScreen.js';
import GroupInfoScreen from '../GroupInfoScreen/GroupInfoScreen.js';
import ContactScreen from '../ContactScreen/ContactScreen.js';
import {useState} from 'react';
import Footer from '../Footer/Footer.js';
import Header from '../Header/Header.js';

function App() {    

   var [styleOfChatHistory, setStyleOfChatHistory] = useState({left:"0", width: "100%"});
   var [styleOfContact, setStyleOfContact] = useState({left:"-100%", width: "100%"});

   return (
      <div className="App">
         <div className="headerContainer">
            <Header name="Anurag Sisodiya"/>
         </div>
         <div className="ScreenContainer">
            <div className="chatHistoryScreenContainer" style={{left: styleOfChatHistory.left, width: styleOfChatHistory.width}}>
               <ChatHistoryScreen />
            </div>
            <div className="contactScreenContainer" style={{left: styleOfContact.left, width: styleOfContact.width}}>
               <ContactScreen />
            </div>
         </div>
         <div className="footerContainer">
            <Footer forChatHistory={setStyleOfChatHistory} forContacts={setStyleOfContact}/>
         </div>
      </div>
   );
}

export default App;