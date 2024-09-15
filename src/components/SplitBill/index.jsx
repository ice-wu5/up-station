import React, { useEffect, useState } from "react";
// import Avatar from "../Avatar";
import Button from "../Button";
import FriendItem from "../FriendItem";
import AddForm from "../AddForm";
import BillDetail from "../BillDetail/iindex";
function SplitBill() {
  const [friendList, setFriendlist] = useState([
    {
      id: "1",
      url: "https://cdn.pixabay.com/photo/2024/04/18/19/56/leaves-8704937_1280.png",
      name: "Clark",
      owe: "0",
      detail: "🚗You and Clark are even",
      isSelect: false,
    },
    {
      id: "2",
      url: "https://cdn.pixabay.com/photo/2022/11/08/14/42/monstera-7578722_1280.png",
      name: "Tom",
      owe: "0",
      detail: "You and Tom are even",
      isSelect: false,
    },
    {
      id: "3",
      url: "https://cdn.pixabay.com/photo/2016/11/18/23/38/child-1837375_1280.png",
      name: "Herry",
      owe: "0",
      detail: "You and Herry are even",
      isSelect: false,
    },
  ]);
  const [activeFriendId, setActiveFriendId] = useState(0);
  const [info] = useState({
    name: "",
    url: "https://cdn.pixabay.com/photo/2024/04/18/19/56/leaves-8704937_1280.png",
  });

  const [isAdding, setIsAdding] = useState(false);
  const [isSpliting, setIsSpliting] = useState(false);
  function handleFriendSelect(friend) {
    console.log("friend", friend);
    //重复点击，关闭billForm
    if (friend.id === activeFriendId) {
      setActiveFriendId(0);

      setIsSpliting(false);
    } else {
      setActiveFriendId(friend.id);
      setIsSpliting(true);
    }
    setFriendlist((pre) => {
      return pre.map((item) => {
        if (item.id === friend.id) {
          return {
            ...item,
            isSelect: !item.isSelect,
          };
        } else {
          return item;
        }
      });
    });
  }
  const isFriendSelect = friendList.find(
    (item) => item.id === activeFriendId
  )?.isSelect;
  console.log("isFriendSelect", isFriendSelect);
  // useEffect(() => {
  //   if (isFriendSelect) {
  //     setIsSpliting(true);
  //   } else {
  //     setIsSpliting(false);
  //   }
  // }, [isFriendSelect]);

  let activeFriendInfo = friendList.find((item) => item.id === activeFriendId);
  function handleFormSubmit(info) {
    console.log("info", info);
    setFriendlist([
      ...friendList,
      {
        ...info,
        id: crypto.randomUUID(),
        owe: "0",
        detail: `You and ${info.name} are even`,
        isSelect: false,
      },
    ]);
    setIsAdding(false);
  }
  function handleSplitFormSubmit(formData) {
    console.log("formData", formData);
    let detail;
    let owe;
    if (formData.pay === 0) {
      // friend pay
      detail = `You owe ${formData.friend} ${formData.yourExpense}£`;
      owe = "1";
    } else if (formData.pay === 1) {
      //you pay
      detail = `${formData.friend} owes you ${
        formData.billValue - formData.yourExpense
      }£`;
      owe = "-1";
    }
    setFriendlist(
      friendList.map((item) => {
        if (item.id === activeFriendId) {
          return {
            ...item,
            detail,
            owe,
            isSelect: false,
          };
        } else {
          return item;
        }
      })
    );
    setIsSpliting(false);
  }
  return (
    <div className="flex">
      {/* <Avatar
        url="https://cdn.pixabay.com/photo/2024/04/18/19/56/leaves-8704937_1280.png"
        size={100}
      ></Avatar> */}
      <div className="left">
        <div className="friend-list w-350">
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
      <div className="right">
        {isSpliting && (
          <div className="add-form-container">
            <BillDetail
              friend={activeFriendInfo.name}
              onFormSubmit={handleSplitFormSubmit}
            ></BillDetail>
          </div>
        )}
      </div>
    </div>
  );
}

export default SplitBill;
