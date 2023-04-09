import "./App.css";
import React, { useState } from "react";
import CreateUser from "./components/Users/CreateUser";
import Userlist from "./components/Users/UserList";

function App() {
  const [userList, setUserList] = useState([]);
  const creatUserHadler = (name, age) => {
    setUserList((prevUserList) => {
      return [
        ...prevUserList,
        { name: name, age: age, id: Math.random().toString() },
      ];
    });
  };
  return (
    <div>
      <CreateUser onClickUser={creatUserHadler} />
      <Userlist users={userList} />
    </div>
  );
}

export default App;
