
let prodEndpoint = "https://assembly-backend-production.up.railway.app"
let devEndpoint = "http://localhost:8000"

let APIURL = process.env.NODE_ENV === "production" ? prodEndpoint : devEndpoint

export default APIURL