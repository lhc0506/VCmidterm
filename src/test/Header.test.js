import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Header from "../components/Header";

describe("Header Test", () => {
  test("Link to Chat List", () => {
    render(<BrowserRouter><Header /></BrowserRouter>);
    fireEvent.click(screen.getByText("Chat List"));
    expect(global.window.location.pathname).toEqual("/chatList");
  });

  test("Link to Friends List", () => {
    render(<BrowserRouter><Header /></BrowserRouter>);
    fireEvent.click(screen.getByText("Friends List"));
    expect(global.window.location.pathname).toEqual("/friendslist");
  });
});
