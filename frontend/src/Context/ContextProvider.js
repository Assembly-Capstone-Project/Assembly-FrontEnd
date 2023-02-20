import { useEffect, useState } from "react"
import Context from "./Context"

export default function ContextProvider({children}){

    const [user, setUser] = useState(null)
    // Grabs the token from localStorage and converting it to json because its a string
    const token = JSON.parse(window.localStorage.getItem('assembly-token'))
    // this checks to see if the token is truthy, if its truthy it will call your users api to get all of the logged in users data via their id, which is stored in the token
    // then it updates the user state to have the users information, every time the page loads
    //otherwise it will set the user to null, effectively logging you out
    useEffect(() => {
        if(token) {
            fetch(`http://localhost:8000/users/${token.userId}`).then((res) => res.json()).then((json) => setUser(json))
        } else {
            setUser(null)
        }
    }, [token])

    const value = {
        user,
        setUser
    }

    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    )
}