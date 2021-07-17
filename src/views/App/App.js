import './App.css';
import DirectChatScreen from '../DirectChatScreen/DirectChatScreen.js';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import Detail from '../Detail/Detail.js';
import ChatHistoryScreen from '../ChatHistoryScreen/ChatHistoryScreen';

function App() {    
   return (
     <div className="App" s>
        <Header/>
        <ChatHistoryScreen/>
     </div>
   );
}

export default App;