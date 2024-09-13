import React, { useState } from "react";
import Button from "../Button";
function AddForm({ info, onFormSubmit }) {
  // const [name, setName] = useState(info.name);
  // const [url, setUrl] = useState(info.url);
  const [formData, setFormData] = useState({
    name: info.name,
    url: info.url,
  });
  function handleSubmit(e) {
    e.preventDefault();
    if (formData.name === "") {
      alert("name can not be empty~");
      return;
    }
    onFormSubmit(formData);
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="form w-300 p-10 h-120 flex-c content-between bg-light-orange br-5"
    >
      <div className="form-item flex content-between items-center">
        <img className="icon w-20 h-20 of-c w-100" alt=""></img>
        <div className="name-text tal">Friend name</div>
        <input
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-150 ol-none b-none h-25"
          type="text"
        />
      </div>
      <div className="form-item flex content-between items-center">
        <img className="icon w-20 h-20 of-c" alt=""></img>
        <div className="name-text tal w-100">Image URL</div>
        <input
          value={formData.url}
          onChange={(e) => setFormData({ ...formData, url: e.target.value })}
          className="w-150 ol-none b-none h-25"
          type="text"
        />
      </div>
      <div className="form-item flex ">
        <button className="b-none pb-0 pi-0 fs-16 ml-a">
          <Button text="Add" width={150}></Button>
        </button>
      </div>
    </form>
  );
}

export default AddForm;
