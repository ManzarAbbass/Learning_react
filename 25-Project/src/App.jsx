import { use, useContext, useEffect, useState } from "react"
import Login from "./components/Auth/Login"
import AdminDashboard from "./components/Dashboard/AdminDashboard"
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard"
import { getLocalStorage, setLocalStorage } from "./utils/localStorage"
import { AuthContext } from "./context/AuthProvider"

const App = () => {
  const [user, setUser] = useState(null)

  const handleLogin = (email, password) => {
    // Implementation for handling login
    if(email == "admin@me.com" && password == "123") {
      setUser("admin")
    }else if(email=="user@me.com" && password){
      setUser("employee")
    }
    else{
      alert("Invalid Credentials")
    }
  }

  const authData = useContext(AuthContext)
  console.log(authData)
  return (
    <>
      {!user ?<Login handleLogin={handleLogin}/>: ''}
      {user=="admin"?<AdminDashboard/>:<EmployeeDashboard/>}
      {/* <EmployeeDashboard /> */}
      {/* <AdminDashboard/> */}
    </>
  )
}

export default App
