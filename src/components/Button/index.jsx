function Button({ text, width }) {
  return (
    <div>
      <div
        className="grey bg-orange br-5 px-10 w-f-c py-5 pointer"
        style={{ width: width + "px" }}
      >
        {text}
      </div>
    </div>
  );
}

export default Button;
