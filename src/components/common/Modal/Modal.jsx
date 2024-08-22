import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../../features/slices/modalSlice";
import "./Modal.scss";

const Modal = () => {
  const dispatch = useDispatch();
  const modalIsOpen = useSelector((state) => state.modal.isOpen);
  const user = useSelector((state) => state.modal.info);
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
  if (user.address){
    info.push({
      key: "Address",
      value: `${user.address.city} ${user.address.address}`,
    })
  }

  return (
    <div
      className={`modal ${modalIsOpen ? "modal__show" : ""}`}
      onClick={() => dispatch(closeModal())}
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
