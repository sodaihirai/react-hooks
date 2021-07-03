import React, { createContext, useState, useContext } from 'react'

const UserContext = createContext()
export const UserSetContext = createContext()

export default UserContext

export const UserProvider = ({children}) => {
  const [user, setUser] = useState(null)

  return(
    <UserContext.Provider value={user} >
      <UserSetContext.Provider value={setUser} >
        {children}
      </UserSetContext.Provider>
    </UserContext.Provider>
  )
}

export const useUser = () => {
  const user = useContext(UserContext)
  const setUser = useContext(UserSetContext)

  if (!setUser) {
    throw new Error('The UserProvider is missing.')
  }

  return [user, setUser]
}
