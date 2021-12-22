import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ChattingPage from "../components/ChattingPage";
import * as reactRedux from "react-redux";
import mockInitialData from "./mockIntialData";
import reducer, { fetchInitialData } from "../features/friendsSlice";

describe("ChattingPage Test", () => {
  const selectedFriend = mockInitialData.entities.friends.byId["5555"];

  test("Should show recieved Chat Data", () => {
    let useSelectorMock = jest.spyOn(reactRedux, "useSelector");
    let useDispatchMock = jest.spyOn(reactRedux, "useDispatch");

    useSelectorMock.mockReturnValue(mockInitialData.entities.chats.byId);
    useDispatchMock.mockReturnValue(jest.fn());

    render(<ChattingPage opponent={selectedFriend}/>);

    expect(screen.getByText("또 그런다 또!")).toBeInTheDocument();
  });

  test("Should show when submit text", () => {
    const initialState = {
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

    let prevState = reducer(initialState, fetchInitialData(mockInitialData));

    let useSelectorMock = jest.spyOn(reactRedux, "useSelector");
    let useDispatchMock = jest.spyOn(reactRedux, "useDispatch");

    useSelectorMock.mockReturnValue(prevState.entities.chats.byId);
    useDispatchMock.mockImplementation(() => (action) => {
      prevState = reducer(prevState, action)});

    render(<ChattingPage opponent={selectedFriend}/>);

    const messageInput = screen.getByLabelText("message-input");
    const submitMessage = screen.getByLabelText("submit-message");

    fireEvent.change(messageInput, {target: {value: "진짜 억까~"}});
    expect(messageInput.value).toBe("진짜 억까~");

    fireEvent.click(submitMessage);
    expect(messageInput.value).toBe("");

    useSelectorMock.mockReturnValue(prevState.entities.chats.byId);
    render(<ChattingPage opponent={prevState.entities.friends.byId["5555"]} />);

    expect(screen.getByText("진짜 억까~")).toBeInTheDocument();
  });
});
