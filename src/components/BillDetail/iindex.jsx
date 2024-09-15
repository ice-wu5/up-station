import { useState } from "react";
import Button from "../Button";
function BillDetail({ friend, onFormSubmit }) {
  const [formData, setFormData] = useState({
    friend: friend,
    billValue: "",
    yourExpense: "",
    pay: 1,
  });
  let friendExpense;
  friendExpense = formData.billValue - formData.yourExpense;
  function handleSubmit(e) {
    e.preventDefault();
    onFormSubmit(formData);
    // console.log("handleSubmit");
  }
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="form w-300 p-10 h-320 flex-c content-between bg-light-orange br-5"
      >
        <div className="title fw-700">{`SPLIT BILL WITH ${friend}`}</div>
        <div className="form-item flex content-between items-center">
          <img className="icon w-20 h-20 of-c w-100" alt=""></img>
          <div className="name-text tal w-150 fs-14">Bill value</div>
          <input
            value={formData.billValue}
            onChange={(e) =>
              setFormData({ ...formData, billValue: e.target.value })
            }
            className="w-80 ol-none b-none h-25 tac input"
            type="number"
          />
        </div>
        <div className="form-item flex content-between items-center">
          <img className="icon w-20 h-20 of-c" alt=""></img>
          <div className="name-text tal w-150 fs-14 ">Your expense</div>
          <input
            value={formData.yourExpense}
            onChange={(e) =>
              setFormData({ ...formData, yourExpense: e.target.value })
            }
            className="w-80 ol-none b-none h-25 tac input"
            type="number"
          />
        </div>
        <div className="form-item flex content-between items-center">
          <img className="icon w-20 h-20 of-c" alt=""></img>
          <div className="name-text tal w-150 fs-14 ">{`${friend}'s expense:`}</div>
          <div className="friend-expense tac w-80  h-25 tac">
            {friendExpense}
          </div>
        </div>
        <div className="form-item flex content-between items-center">
          <img className="icon w-20 h-20 of-c" alt=""></img>
          <div className="name-text tal w-150 fs-14 ">
            Who is paying the bill?
          </div>
          <div className="friend-expense tac w-80  h-25">
            <select
              className="ol-none b-none w-80 h-25 input"
              value={formData.pay}
              onChange={(e) =>
                setFormData({ ...formData, pay: Number(e.target.value) })
              }
            >
              <option value={1}>You</option>
              <option value={0}>{friend}</option>
            </select>
          </div>
        </div>
        <div className="form-item flex ">
          <button className="b-none pb-0 pi-0 fs-16 ml-a">
            <Button text="Split bill" width={80}></Button>
          </button>
        </div>
      </form>
    </div>
  );
}

export default BillDetail;
