function Avatar({ url, size }) {
  return (
    <div>
      <img
        src={url}
        alt=""
        className="of-c block br-p50"
        style={{ width: size + "px", height: size + "px" }}
      ></img>
    </div>
  );
}
export default Avatar;
