import { useState } from "react"
import Context from "./Context"

export default function ContextProvider({children}){

    const [user, SetUser] = useState(null)

    const value = {
        user,
        SetUser
    }

    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    )
}