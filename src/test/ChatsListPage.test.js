import React from "react";
import { render, screen } from "@testing-library/react";
import * as reactRedux from "react-redux";
import ChatsListPage from "../components/ChatsListPage";
import mockInitialData from "./mockIntialData";

describe("Chats List Page Test", () => {
  test("Should show friend whom I chat with and last Chat", () => {
    let useSelectorMock = jest.spyOn(reactRedux, "useSelector");

    useSelectorMock.mockReturnValueOnce(mockInitialData.entities.friends.byId);
    useSelectorMock.mockReturnValueOnce(mockInitialData.entities.chats.byId);

    render(<ChatsListPage />);

    expect(screen.getByText("Byul")).toBeInTheDocument();
    expect(screen.getByText("2021-12-19")).toBeInTheDocument();
    expect(screen.getByText("또 그런다 또!")).toBeInTheDocument();
    expect(screen.getByAltText("Byulimage")).toBeInTheDocument();
  });
});
