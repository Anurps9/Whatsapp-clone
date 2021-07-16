import './App.css';
import OtherUserInfo from './OtherUserInfo.js';
import ReceivedMessageBox from './ReceivedMessageBox.js';
import SentMessageBox from './SentMessageBox.js';
import MessageInputField from './MessageInputField.js';
import ProfilePictureExpanded from './ProfilePictureExpanded.js';
import UserInfoHeader from './UserInfoHeader.js';

function App() {
  var str = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  return (
    <div className="App">
      <ProfilePictureExpanded src="http://dummyimage.com/800x600/4d494d/686a82.gif&text=placeholder+image"/>
      <UserInfoHeader name="Anurag Sisodiya" mobileNumber="6307211086" />
      <UserInfoHeader name="Sachin Singh" mobileNumber="7398287597" />
    </div>
  );
}

export default App;