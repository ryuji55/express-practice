import React, { useEffect, useState } from "react";
import "./App.css";
import Users from "./components/users/Users";

function App() {
  const [message, setMessage] = useState("");
  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
    <div className="App">
      <h1>フロントエンド</h1>
      <p>{message}</p>
      <Users />
    </div>
  );
}

export default App;
