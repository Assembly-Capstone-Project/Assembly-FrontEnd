import { useEffect, useState } from "react"
import Context from "./Context"

export default function ContextProvider({children}){

    const [user, setUser] = useState(null)
    const [posts, setPosts] = useState([])
    // Grabs the token from localStorage and converting it to json because its a string
   
    // this checks to see if the token is truthy, if its truthy it will call your users api to get all of the logged in users data via their id, which is stored in the token
    // then it updates the user state to have the users information, every time the page loads
    //otherwise it will set the user to null, effectively logging you out

    //JSON.parse "{}" => {} converts string to a json object
    //JSON.stringify {} => "{}" converts object to json string

    useEffect(() => {
        const token = JSON.parse(localStorage.getItem('assembly-token'))
        if(token) {
            const { username, id } = token
            setUser({ username, id })
        } else {
            setUser(null)
        }
    }, [])

    const value = {
        user,
        setUser,
        posts,
        setPosts,
    }

    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    )
}