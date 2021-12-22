import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

let initialState = {
  entities: {
    friends: {
      byId: {},
      alId: [],
    },
    chats: {
      byId: {},
      alId: [],
    },
  },
};

export const friendsSlice = createSlice({
  name: "friends",
  initialState,
  reducers: {
    fetchInitialData: (state, action) => {
      state.entities.friends = action.payload.entities.friends;
      state.entities.chats = action.payload.entities.chats;
    },
    inputMessage: (state, action) => {
      const { opponent, value, now } = action.payload;
      const newChatId = nanoid();
      state.entities.friends.byId[opponent.id].chats.push(newChatId);
      state.entities.chats.alId.push(newChatId);
      state.entities.chats.byId[newChatId] = {
        id: newChatId,
        isSending: true,
        date: now,
        content: value,
      };
    },
  },
});

export default friendsSlice.reducer;
export const { inputMessage, fetchInitialData } = friendsSlice.actions;
