import { createContext, useState } from "react"

export const UserContext = createContext() //UserContext

export default function UserProvider({ children }) {//UserProvider
    const [token, setToken] = useState("")
    const [name, setName] = useState("")

    return (
        // UserContext
        <UserContext.Provider value={{ token, setToken, name, setName }}>
            {children}
        </UserContext.Provider>
    )
}