import { use, useEffect, useState } from "react"
import Login from "./components/Auth/Login"
import AdminDashboard from "./components/Dashboard/AdminDashboard"
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard"
import { getLocalStorage, setLocalStorage } from "./utils/localStorage"

const App = () => {
  const [user, setUser] = useState(null)

  const handleLogin = (email, password) => {
    // Implementation for handling login
    if(email == "admin@example.com" && password == "123") {
      console.log("This is Admin")
    }else if(email=="user@me.com" && password){
      console.log("This is User")
    }
    else{
      alert("Invalid Credentials")
    }
  }
  handleLogin("admin@example.com",123)
  return (
    <>
      {!user ?<Login />: ''}
      {/* <EmployeeDashboard /> */}
      {/* <AdminDashboard/> */}
    </>
  )
}

export default App
