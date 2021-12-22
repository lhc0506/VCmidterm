import React, { useState } from "react";
import { format } from "date-fns";
import styled from "styled-components";
import PropTypes from "prop-types";
import Modal from "../Modal";
import ChattingPage from "../ChattingPage";

const ChatContainer = styled.div`
  display: inline-block;
`;

const NameMessageDiv = styled.div`
  display: inline-block;
  overflow: hidden;
  width: 320px;
  margin-left: 10px;
`;

const NameContainer = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

const MessageContatiner = styled.div`
  display: inline-block;
  overflow: hidden;
  width: 270px;
  margin-left: 10px;
  margin-bottom: 10px;
  font-size: 15px;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const ProfileImage = styled.img`
  width:80px;
  height:80px;
`;

export default function Chat({ person, message }) {
  const [showModal, setShowModal] = useState(false);
  const today = format(new Date(), "yyyy-MM-dd");
  const messageDate = format(new Date(message.date), "yyyy-MM-dd");

  return (
    <div>
      <ChatContainer onClick={() => setShowModal(true)}>
        <ProfileImage
          src={person.image}
          alt={person.name + "image"}
        />
        <NameMessageDiv>
          <NameContainer>
            {person.name}
          </NameContainer>
          <MessageContatiner>
            {message.content}
          </MessageContatiner>
        </NameMessageDiv>
        {messageDate === today ? format(new Date(message.date), "HH:mm") : messageDate}
      </ChatContainer>
      {showModal &&
        <Modal handleModalShow={setShowModal}>
          <ChattingPage opponent={person} />
        </Modal>
      }
    </div>
  );
}

Chat.prototype = {
  person: PropTypes.object.isRequired,
  message: PropTypes.string.isRequired,
};
