import React, { useState } from "react";
// import Avatar from "../Avatar";
import Button from "../Button";
import FriendItem from "../FriendItem";
import AddForm from "../AddForm";
function SplitBill() {
  const [friendList, setFriendlist] = useState([
    {
      id: "1",
      url: "https://cdn.pixabay.com/photo/2024/04/18/19/56/leaves-8704937_1280.png",
      name: "Clark",
      owe: "1",
      detail: "you own Clark 7",
      isSelect: false,
    },
    {
      id: "2",
      url: "https://cdn.pixabay.com/photo/2022/11/08/14/42/monstera-7578722_1280.png",
      name: "Clark",
      owe: "0",
      detail: "you own Clark 7",
      isSelect: true,
    },
    {
      id: "3",
      url: "https://cdn.pixabay.com/photo/2016/11/18/23/38/child-1837375_1280.png",
      name: "Clark",
      owe: "-1",
      detail: "you own Clark 7",
      isSelect: false,
    },
  ]);
  const [info] = useState({
    name: "",
    url: "https://cdn.pixabay.com/photo/2024/04/18/19/56/leaves-8704937_1280.png",
  });

  const [isAdding, setIsAdding] = useState(false);
  function handleFriendSelect(friend) {
    console.log("friend", friend);
  }
  function handleFormSubmit(info) {
    console.log("info", info);
    setFriendlist([
      ...friendList,
      {
        ...info,
        id: Date.now(),
        owe: "-1",
        detail: "you own Clark 7",
        isSelect: false,
      },
    ]);
    setIsAdding(false);
  }
  return (
    <div>
      {/* <Avatar
        url="https://cdn.pixabay.com/photo/2024/04/18/19/56/leaves-8704937_1280.png"
        size={100}
      ></Avatar> */}
      <div className="friend-list w-300">
        {friendList.map((item) => {
          return (
            <FriendItem
              friend={item}
              key={item.id}
              onFriendSelect={handleFriendSelect}
            ></FriendItem>
          );
        })}
      </div>
      {isAdding && (
        <div className="add-form-container">
          <AddForm info={info} onFormSubmit={handleFormSubmit}></AddForm>
        </div>
      )}

      <div
        className="add-button flex w-300"
        onClick={() => setIsAdding(!isAdding)}
      >
        <div className="button-box ml-a p-10">
          <Button text={isAdding ? "Close" : "Add Friend"}></Button>
        </div>
      </div>
    </div>
  );
}

export default SplitBill;
