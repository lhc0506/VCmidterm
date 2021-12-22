import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const LinkContainer = styled.div`
  display: flex;
  width: 500px;
  border: 1px solid;
  justify-content: space-between;
`;

const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
  cursor: pointer;
`;

export default function Header() {
  return (
    <LinkContainer>
      <StyledLink to="/friendslist">
        Friends List
      </StyledLink>
      <StyledLink to="chatList">
        Chat List
      </StyledLink>
    </LinkContainer>
  );
}
