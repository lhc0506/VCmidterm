import React, { useState, useCallback } from "react";
import { useSelector } from "react-redux";
import { debounce } from "lodash";
import Friend from "./Friend";
import SearchFriend from "./SearchFriend";
import { DEBOUNCE_TIME } from '../../app/constants';

export default function FriendsListPage() {
  const [isAscending, setIsAscending] = useState(true);
  const [keyword, setKeyword] = useState("");
  const [searchValue, setSearchValue] = useState("");

  const friendsArrayById = Object.values(useSelector((state) => state.friendsReducer.entities.friends.byId));

  const delaySearch = useCallback(
    debounce((value) => {
      setSearchValue(value);
    },[DEBOUNCE_TIME])
  , []);

  function handleOnChangeSearchInput(inputValue) {
    delaySearch(inputValue);
    setKeyword(inputValue);
  }

  function handleOnClickSortBtn() {
    setIsAscending(!isAscending);
  }

  function showFriendsList(input) {
    sortByName(friendsArrayById, isAscending);
    const filteredFriendsArrayById = friendsArrayById.filter((friend) =>
      friend.name.toUpperCase().includes(input.toUpperCase())
    );

    return filteredFriendsArrayById.map((friend) => (
      <Friend key={friend.id} person={friend}/>
    ));
  }

  function sortByName(arr, ascend) {
    if (ascend) {
      arr.sort((a, b) => {
        if (a.name > b.name) {
          return 1;
        }
        if (a.name < b.name) {
          return -1;
        }
        return 0;
      });
    } else {
      arr.sort((a, b) => {
        if (a.name > b.name) {
          return -1;
        }
        if (a.name < b.name) {
          return 1;
        }
        return 0;
      });
    }
  }

  return (
    <div>
      친구 목록 페이지
      <div>
        <SearchFriend
          text={keyword}
          handleOnChange={(value) => handleOnChangeSearchInput(value)}
        />
      </div>
      <div>
        {showFriendsList(searchValue)}
      </div>
      <div>
        <button
          type="submit"
          onClick={handleOnClickSortBtn}
        >
          {isAscending ? "to descending" : "to ascending"}
        </button>
      </div>
    </div>
  );
}
