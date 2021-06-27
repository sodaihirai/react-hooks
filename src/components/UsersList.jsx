import React, { useState, useEffect } from "react";
import { getData } from '../utils/api'

const UsersList = ({currentUser, setUser }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getData("http://localhost:3001/users").then((users) => setUsers(users));
  }, []);

  return users.length === 0 ? (
    <div>wait</div>
  ) : (
    <div>
      <ul className="users items-list-nav">
        {users.map((user, i) => (
          <li
            key={user.id}
            className={user.id === currentUser.id ? "selected" : null}
          >
            <button className="btn" onClick={() => setUser(user)}>
              {user.name}
            </button>
          </li>
        ))}
      </ul>
      {currentUser && (
        <div>
          <p>{currentUser.name}</p>
          <p>{currentUser.title}</p>
        </div>
      )}
    </div>
  );
};

export default UsersList;
