import './App.css';
import ChatHistoryScreen from '../ChatHistoryScreen/ChatHistoryScreen.js';
import DirectChatScreen from '../DirectChatScreen/DirectChatScreen.js';
import GroupInfoScreen from '../GroupInfoScreen/GroupInfoScreen.js';
import ContactScreen from '../ContactScreen/ContactScreen.js';

function App() {    
   return (
      <div className="App" >
        {/*<DirectChatScreen />*/}
        {/*<ChatHistoryScreen />*/}
        {/*<GroupInfoScreen />*/}
        <ContactScreen />
      </div>
   );
}

export default App;