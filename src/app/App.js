import React, { useEffect } from "react";
import Header from '../components/Header';
import { Route, Switch, Redirect } from "react-router-dom";
import FriendsListPage from '../components/FriendsListPage';
import ChatsListPage from '../components/ChatsListPage';
import { useDispatch } from "react-redux";
import { fetchInitialData } from "../features/friendsSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(async () => {
    const fetchedStoredData = await fetch("./data.json");
    const storedData = await fetchedStoredData.json();

    dispatch(fetchInitialData(storedData));
  },[]);

  return (
    <div>
      <Header />
      <Switch>
        <Route path="/friendslist" exact>
          <FriendsListPage />
        </Route>
        <Route path="/chatList">
          <ChatsListPage />
        </Route>
        <Route path="/" exact>
          <Redirect to="/friendslist" />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
