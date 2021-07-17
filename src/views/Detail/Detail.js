import "./Details.css";
function Detail(props) {
    return (
      <div className="OtherUserMessage">
        <img
          className="align"
          src={props.contactImg}
          align="left"
          alt="Contact-Pic"
        />
        <div>
          <p className="OtherUserNumber">{props.contactNumber}</p>
          <p className="OtherUserLast">{props.lastMessage}</p>
        </div>
      </div>
    );
  
}
export default Detail;
