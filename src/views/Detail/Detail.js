function Detail(props) {
    return (
      <div
        className="align"
        style={{ width: "90%", zIndex: 5, padding: "5%", height: "30px" }}
      >
        <img className="align"src={props.contactImg} align="left" alt="Contact-Pic" />
        <div className="OtherUserNumber">{props.contactNumber}</div>
        <div className="OtherUserLast">{props.lastMessage}</div>
      </div>
    );
  
}
export default Detail;
