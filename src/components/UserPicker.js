import React, { useState, useEffect } from "react";
import { getData } from "../utils/api";
import { useUser } from "./Users/UserContext";

export default function UserPicker() {
  const [users, setUsers] = useState(null);

  const [user, setUser] = useUser()

  useEffect(() => {
    getData("http://localhost:3001/users")
    .then((users) => {
      setUsers(users)
      setUser(users[0])
    });
  }, [setUser]);

  const handleSelect = (e) => {
    const selectedId = parseInt(e.target.value);
    const user = users.find((u) => u.id === selectedId);

    setUser(user);
  };

  return users === null ? null : (
    <select className="user-picker" onChange={handleSelect} value={user?.id}>
      {users.map((user) => (
        <option key={user.id} value={user.id}>
          {user.name}
        </option>
      ))}
    </select>
  );
}
