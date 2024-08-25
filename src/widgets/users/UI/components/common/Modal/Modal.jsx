import React from "react";
import "./Modal.scss";


const Modal = ({ modalIsOpen, user, closeModal }) => {
  let info = [
    {
      key: "Name",
      value: `${user.firstName} ${user.lastName}`,
    },
    {
      key: "Age",
      value: user.age,
    },
    {
      key: "Height",
      value: user.height,
    },
    {
      key: "Weight",
      value: user.weight,
    },
    {
      key: "Phone",
      value: user.phone,
    },
    {
      key: "Email",
      value: user.email,
    },
  ];
  // именно с address возникали проблемы, поэтому создана отдельная проверка на него
  if (user.address) {
    info.push({
      key: "Address",
      value: `${user.address.city} ${user.address.address}`,
    });
  }

  return (
    <div
      className={`modal ${modalIsOpen ? "modal__show" : ""}`}
      onClick={closeModal}
    >
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        <div className="modal__header">
          <div className="modal__title">{`Information about User ${user.id}`}</div>
        </div>
        <div className="modal__body">
          {info.map((item) => {
            return (
              <div className="modal__infoWrap">
                <div className="modal__infoTitle">
                  <p className="modal__key">{item.key}</p>
                </div>
                <div className="modal__info">
                  <p className="modal__val">{item.value}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Modal;
