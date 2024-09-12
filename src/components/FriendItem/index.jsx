import Advice from "../Advice";
import Button from "../Button";
function FriendItem({ url, name, detail, text }) {
  return (
    <div>
      <Advice url={url} size={50}></Advice>
      <div className="info">
        <div className="name">{name}</div>
        <div className="detail-text">{detail}</div>
      </div>
      <Button text={text}></Button>
    </div>
  );
}

export default FriendItem;
