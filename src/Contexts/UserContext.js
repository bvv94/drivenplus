import { createContext, useState } from "react"

export const UserContext = createContext() //UserContext

export default function UserProvider({ children }) {//UserProvider
    const [token, setToken] = useState("")
    const [name, setName] = useState("")
    const [UserData, setUserData] = useState([])
    const [id, setId] = useState(0)

    return (
        // UserContext
        <UserContext.Provider value={{ token, setToken, name, setName, UserData, setUserData, id, setId }}>
            {children}
        </UserContext.Provider>
    )
}