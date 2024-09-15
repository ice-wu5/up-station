import Avatar from "../Avatar/index.jsx";
import Button from "../Button";
function FriendItem({ friend, onFriendSelect }) {
  // {
  //   id:'1',
  //   url:'https://',
  //   name:'',
  //   owe:'',
  //   detail:'',
  //   isSelect:false
  // }
  function handleClick(item) {
    onFriendSelect(item);
  }
  return (
    <div>
      <div
        className={`flex items-center p-10  friend-item br-10 my-5 ${
          friend.isSelect ? "bg-light-orange" : ""
        }`}
      >
        <Avatar url={friend.url} size={50}></Avatar>
        <div className="info flex-1 flex-c content-between px-10">
          <div className="name fs-15 fw-700">{friend.name}</div>
          <div
            className={`fs-14 detail-text ${friend.owe === "1" ? "red" : ""} ${
              friend.owe === "-1" ? "green" : ""
            }`}
          >
            {friend.detail}
          </div>
        </div>
        <div onClick={() => handleClick(friend)}>
          <Button text={friend.isSelect ? "Close" : "Select"}></Button>
        </div>
      </div>
    </div>
  );
}

export default FriendItem;
