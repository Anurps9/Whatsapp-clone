import './App.css';

import DirectChatScreen from '../DirectChatScreen/DirectChatScreen.js';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import Detail from '../Detail/Detail.js';
import GroupInfoScreen from '../GroupInfoScreen/GroupInfoScreen';

function App() {    
   return (
     <div className="App" s>
        <Header/>
        <GroupInfoScreen/>
     </div>
   );
}

export default App;