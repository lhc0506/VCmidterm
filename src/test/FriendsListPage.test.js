import React from "react";
import { render, screen } from "@testing-library/react";
import * as reactRedux from "react-redux";
import FriendsListPage from "../components/FriendsListPage";
import mockInitialData from "./mockIntialData";

describe("Friends List Page Test", () => {
  test("Should show friend", () => {
    let useSelectorMock = jest.spyOn(reactRedux, "useSelector");

    useSelectorMock.mockReturnValue(mockInitialData.entities.friends.byId);
    render(<FriendsListPage />);

    expect(screen.getByText("Byul")).toBeInTheDocument();
    expect(screen.getByAltText("Byulimage")).toBeInTheDocument();
  });
});
