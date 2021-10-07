import React, { useState } from "react";
import Modal from "react-modal";
import { categorList } from "../utils/database";
import "./modal.scss";

const nextMonth = new Date().setDate(new Date().getDate() + 30);
console.log(nextMonth);
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    boxShadow: `rgba(0, 0, 0, 0.25) 0px 12px 15px 0px`,
    background: "white",
    border: "none",
  },
};

if (typeof window !== "undefined") {
  Modal.setAppElement("body");
}

const CreateCountModal = ({ isOpen, onClose }) => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [deadline, setDeadline] = useState(
    new Date(nextMonth).toISOString().slice(0, 10)
  );
  const createCount = (e) => {
    e.preventDefault();
    localStorage.setItem(
      "countdown",
      JSON.stringify({ name, category, deadline })
    );
    resetForm();
    handleClose();
  };

  const resetForm = () => {
    setName("");
    setCategory("");
    setDeadline("");
  };

  const handleClose = () => {
    onClose();
  };

  console.log("deadline");
  return (
    <div className="count-modal">
      <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="header">
          <span onClick={onClose} className="text-right pointer">
            <i className="far fa-times-circle close-modal pointer"></i>
          </span>
          <h2 className="text-center">Create a Custom Countdown</h2>
        </div>
        <div className="body">
          <form onSubmit={createCount}>
            <div className="form-group mb-1">
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter countdown Name"
                value={name}
                maxLength="35"
                onChange={({ target }) => setName(target.value)}
                required={true}
              />
            </div>

            <div className="form-group mb-1">
              <div className="category">
                <select
                  className="form-control"
                  id="category"
                  value={category}
                  onChange={({ target }) => setCategory(target.value)}
                  required={true}
                >
                  <option value="">Select Category</option>
                  {categorList.map((catgry) => {
                    let { id, value } = catgry;
                    return (
                      <option key={id} value={value}>
                        {value}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="date" className="date__label">
                Deadline
              </label>
              <input
                className="form-control"
                type="date"
                name="date"
                id="date"
                value={deadline}
                onChange={({ target }) => setDeadline(target.value)}
              />
            </div>
            <div className="btn-wrap mt-1">
              <button type="submit" className="btn bg-pry create-countdown">
                Create Countdown
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default CreateCountModal;
