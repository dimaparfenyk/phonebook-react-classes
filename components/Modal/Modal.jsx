import React, { Component } from "react";
import { createPortal } from "react-dom";
import { ModalBackdrop, ModalContent } from "./Modal.styled";
import IconButton from "../IconButton";
import { ReactComponent as CloseIcon } from "../../icons/cross.svg";

const modalPortal = document.querySelector("#modal-root");

class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.onHandleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.onHandleKeyDown);
  }

  onHandleKeyDown = (e) => {
    if (e.code === "Escape") {
      this.props.onClose();
    }
  };

  onBackDropClick = (e) => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <ModalBackdrop onClick={this.onBackDropClick}>
        <ModalContent>
          {this.props.children}
          <IconButton className={"closeIcon"} onClick={this.props.onClose}>
            <CloseIcon width={24} height={24} />
          </IconButton>
        </ModalContent>
      </ModalBackdrop>,
      modalPortal
    );
  }
}

export default Modal;
