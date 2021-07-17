import './App.css';
import OtherUserInfo from '../OtherUserInfo/OtherUserInfo.js';
import ReceivedMessageBox from '../ReceivedMessageBox/ReceivedMessageBox.js';
import SentMessageBox from '../SentMessageBox/SentMessageBox.js';
import MessageInputField from '../MessageInputField/MessageInputField.js';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import Detail from '../Detail/Detail.js';

function App() {
  var str = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    
   return (
     <div className="App">
       <Header />
       <Footer />
       <Detail
         contactNumber="9027658096"
         lastMessage={str.substr(0,170)+"..."}
         contactImg="logo512.png"
       />
       {/* <OtherUserInfo name="Anurag Sisodiya" lastSeen="One hour ago" />
      <SentMessageBox content={str} />
      <ReceivedMessageBox content={str} />
      <MessageInputField /> */}
     </div>
   );
}

export default App;