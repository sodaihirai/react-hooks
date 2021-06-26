import React, { useState, useEffect } from "react";
import { getData } from "../utils/api";

export default function UserPicker() {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    getData("http://localhost:3001/users").then((users) => setUsers(users));
  }, []);

  return users === null ? null : (
    <select>
      {users.map((user) => (
        <option key={user.id}>{user.name}</option>
      ))}
    </select>
  );
}
