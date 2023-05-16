import React, { useState } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar';
import UserGrid from './components/UserGrid';
import './App.css';

const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const getUsers = async () => {
    try {
      setLoading(true);
      const response = await axios.get('https://reqres.in/api/users?page=1');
      setUsers(response.data.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="app">
      <Navbar getUsers={getUsers} />
      {loading ? (
        <div className="loader">Loading...</div>
      ) : (
        <UserGrid users={users} />
      )}
    </div>
  );
};

export default App;
