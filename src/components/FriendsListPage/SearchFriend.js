import React from "react";
import PropTypes from "prop-types";

export default function SearchFriend({ text, handleOnChange }) {
  return (
    <div>
      <input
        type="search"
        value={text}
        placeholder="find your friend"
        onChange={(event) => handleOnChange(event.target.value)}
      />
    </div>
  );
}

SearchFriend.prototype = {
  text: PropTypes.string.isRequired,
  handleOnChange: PropTypes.func.isRequired,
};
