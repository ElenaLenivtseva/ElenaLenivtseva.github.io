import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../features/modalSlice";
import "./Modal.scss";

const Modal = () => {
  const dispatch = useDispatch();
  const modalIsOpen = useSelector((state) => state.modal.isOpen);
  const user = useSelector((state) => state.modal.info);

  return (
    <div
      className={`modal ${modalIsOpen ? "modal__show" : ""}`}
      onClick={() => dispatch(closeModal())}
    >
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        <div className="modal__header">
          <div className="modal__title">{`Information about user ${user.id}`}</div>
        </div>
        <div className="modal__body">
          <div className="modal__infoWrap">
            <div className="modal__info">
                <p className="modal__key">Name</p>
            </div>
            <div className="modal__info">
                <p className="modal__val">{user.lastName}</p>
            </div>
          </div>
          <div className="modal__infoWrap">
            <div className="modal__info">
                <p className="modal__key">Age</p>
            </div>
            <div className="modal__info">
                <p className="modal__val">{user.age}</p>
            </div>
          </div>
          <div className="modal__infoWrap">
            <div className="modal__info">
                <p className="modal__key">Height</p>
            </div>
            <div className="modal__info">
                <p className="modal__val">{user.height}</p>
            </div>
          </div>
          <div className="modal__infoWrap">
            <div className="modal__info">
                <p className="modal__key">Weight</p>
            </div>
            <div className="modal__info">
                <p className="modal__val">{user.weight}</p>
            </div>
          </div>
          <div className="modal__infoWrap">
            <div className="modal__info">
                <p className="modal__key">Weight</p>
            </div>
            <div className="modal__info">
                <p className="modal__val">{user.weight}</p>
            </div>
          </div>
          <div className="modal__infoWrap">
            <div className="modal__info">
                <p className="modal__key">Phone</p>
            </div>
            <div className="modal__info">
                <p className="modal__val">{user.phone}</p>
            </div>
          </div>
          <div className="modal__infoWrap">
            <div className="modal__info">
                <p className="modal__key">Email</p>
            </div>
            <div className="modal__info">
                <p className="modal__val">{user.email}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
