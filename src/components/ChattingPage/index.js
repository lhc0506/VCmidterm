import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { format } from "date-fns";
import PropTypes from "prop-types";
import { inputMessage } from "../../features/friendsSlice";

export default function ChattingPage({ opponent }) {
  const dispatch = useDispatch();
  const [message, setMessage] = useState("");

  const wholeChatList = useSelector((state) => state.friendsReducer.entities.chats.byId);
  const chattingList = opponent.chats.map((chat) => wholeChatList[chat]);

  function showChattings() {
    return chattingList.map((chat) => (
      <div key={chat.id}>
        <span>
          {chat.isSending ? "Me : " : `${opponent.name} :`}
        </span>
        <span>
          {chat.content}
        </span>
        <span>
          {chat.date}
        </span>
      </div>
    ));
  }

  function handleOnSubmit(value) {
    setMessage("");
    const now = format(new Date(), "yyyy-MM-dd HH:mm:ss");
    dispatch(inputMessage({opponent, value, now}));
  }

  return (
    <div>
      <div>
        채팅 페이지
        {showChattings()}
      </div>
      <form
        onSubmit={
          (event) => {
            event.preventDefault();
            handleOnSubmit(message);
          }
        }
      >
        <input
          type="text"
          aria-label="message-input"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        />
        <button
          type="submit"
          aria-label="submit-message"
        >
          전송
        </button>
      </form>
    </div>
  );
}

ChattingPage.prototype = {
  opponent: PropTypes.object.isRequired,
};
