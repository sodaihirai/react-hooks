import React, { useState, useEffect } from "react";
import { getData } from '../utils/api'

const UsersList = () => {
  const [usersListIndex, setUsersListIndex] = useState(0);
  const [users, setUsers] = useState([]);
  const user = users[usersListIndex];

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
            className={i === usersListIndex ? "selected" : null}
          >
            <button className="btn" onClick={() => setUsersListIndex(i)}>
              {user.title}
            </button>
          </li>
        ))}
      </ul>
      {user && (
        <div>
          <p>{user.name}</p>
          <p>{user.title}</p>
        </div>
      )}
    </div>
  );
};

export default UsersList;
