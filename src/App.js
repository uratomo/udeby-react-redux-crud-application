import React from "react";
import "./App.css";

const App = () => {
  const profiles = [
    { name: "Taro", age: 10 },
    { name: "hana", age: 13 },
  ];
  const userList = profiles.map((profile) => {
    return <User name={profile.name} age={profile.age} />;
  });

  return <div>{userList}</div>;
};

const User = (props) => {
  return (
    <div>
      Hi,I am {props.name},and {props.age}
    </div>
  );
};

export default App;
