import "./OtherUserInfoWithPhoto.css";
function OtherUserInfoWithPhoto(props) {
  return (
    <div className="GroupMember">
      <img
        className="align"
        src={props.contactImg}
        align="left"
        alt="Membert-Pic"
      />
      <div>
        <p className="MemberName">{props.name}</p>
        <p className="MemberNumber">{props.contactNumber}</p>
      </div>
    </div>
  );
}
export default OtherUserInfoWithPhoto;
