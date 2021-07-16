import "./Details.css";
function Detail(props) {
    return (
      <div style={{ width: "90%", zIndex: 5, padding: "5%", height: "30px" }}>
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
