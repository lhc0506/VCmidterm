import React from "react";
import { useSelector } from "react-redux";
import Chat from "./Chat";

export default function ChatsListPage() {
  const friendsArray = Object.values(
    useSelector((state) => state.friendsReducer.entities.friends.byId))
    .filter((friend) => friend.chats.length !== 0);
  const chatsSet = useSelector((state) => state.friendsReducer.entities.chats.byId);

  function giveLastMessage(opponent) {
    return chatsSet[opponent.chats[opponent.chats.length - 1]];
  }

  function showChatsList() {
    return friendsArray.map((friend) => (
      <Chat
        key={friend.id}
        person={friend}
        message={giveLastMessage(friend)}
      />
    ));
  }

  friendsArray.sort((a, b) =>
    new Date(giveLastMessage(b).date) - new Date(giveLastMessage(a).date)
  );

  return (
    <div>
      채팅 목록 페이지
      {showChatsList()}
    </div>
  );
}
