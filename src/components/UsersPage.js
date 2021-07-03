import React, { useState } from 'react'
import UsersList from './UsersList'
import { useUser } from './Users/UserContext'

export default function UserPage () {
  const [user, setUser] = useState(null)
  const [loggedInUser] = useUser()
  const currentUser = user || loggedInUser

  return (
    <main className="user-page">
      <UsersList currentUser={currentUser} setUser={setUser} />
    </main>
  );
}
