import React from 'react';

const Navbar = ({ getUsers }) => {
  return (
    <nav>
      <div className="navbar">
        <span className="brand">Brand Name</span>
        <button onClick={getUsers} className="get-users-btn">
          Get Users
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
