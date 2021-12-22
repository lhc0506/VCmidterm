import React, { useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import ReactDOM from "react-dom"

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 1;
  transition: opacity ease 0.25s;
`;
const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
`;

const ModalContainer = styled.div`
  position: relative;
  z-index: 10;
  max-width: 900px;
  min-width: 700px;
  min-height: 500px;
  width: 33%;
  padding: 20px;
  border-radius: 5px;
  background: #fff;
  transform: translateY(0px);
  text-align: center;
`;

const Contents = styled.div`
  padding: auto;
  margin: auto;
`;

export default function Modal({ handleModalShow, children }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "unset";
    };
  },[]);

  const modalRoot = document.getElementById("modal-root");

  return ReactDOM.createPortal(
    <ModalWrapper>
      <Overlay
        onClick={() => handleModalShow(false)}
      />
      <ModalContainer>
        <Contents>
          {children}
        </Contents>
      </ModalContainer>
    </ModalWrapper>,
    modalRoot
  );
}

Modal.propTypes = {
  handleModalShow: PropTypes.func.isRequired,
};
