import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Modal from "../Modal";
import ChattingPage from "../ChattingPage";

const ProfileImage = styled.img`
  width:80px;
  height:80px;
`;

export default function Friend({ person }) {
  const [showModal, setShowModal] = useState(false);

  function handleOnClick() {
    setShowModal(true);
  }

  return (
    <div>
      <div>
        <ProfileImage
          src={person.image}
          alt={person.name + "image"}
        />
        {person.name}
        <button
          type="submit"
          onClick={handleOnClick}
        >
          대화하기
        </button>
      </div>
      {showModal &&
        <Modal handleModalShow={setShowModal}>
          <ChattingPage opponent={person} />
        </Modal>
      }
    </div>
  );
}

Friend.prototype = {
  person: PropTypes.object.isRequired,
};
