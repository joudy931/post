import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  // store users in a new variable
  const [users, setUsers] = useState([]);

  useEffect(() => {
    let fetchData = async () => {
      let response = await fetch('http://localhost:8000/api/users/')
      let json = await response.json();
      console.log(json)
      setUsers(json)
    }
    fetchData()
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Users list is :</h1>
        {users.map(user => <div>{user.username}</div>)}
        {/* {users.map((user) => <p>
          {user} {user.email}
        </p>
        )} */}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;