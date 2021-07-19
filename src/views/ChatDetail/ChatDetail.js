import Photo from "../Photo/Photo.js";
import "./ChatDetail.css";

function ChatDetail(props) {
    var photoStyle = {
      width: "2.8rem",
      height: "2.8rem",
      display: "inline",
      margin: ".40rem 1rem 0 0.4rem",
      borderRadius: "2rem"    
    }
    return (
      <div
        className="ChatDetail"
        onClick={() => {
          props.forDirectMessage({left: "0"});
          props.forChatHistory({left: "100%"});
          props.forContacts({left: "200%"});
        }}
      >
        <Photo style={photoStyle} contactImg="https://picsum.photos/200" />
        <div className="ChatInfoContainer">
          <div className="OtherUserNumber">{props.contactNumber}</div>
          <div className="OtherUserLast">{props.lastMessage}</div>
        </div>
      </div>
    );
  
}
export default ChatDetail;
