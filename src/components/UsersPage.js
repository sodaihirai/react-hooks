import React, { useState, useContext } from 'react'
import UsersList from './UsersList'
import UserContext from './Users/UserContext'

export default function UserPage () {
  const [user, setUser] = useState(null)
  const loggedInUser = useContext(UserContext)
  const currentUser = user || loggedInUser

  return (
    <main className="user-page">
      <UsersList currentUser={currentUser} setUser={setUser} />
    </main>
  );
}
