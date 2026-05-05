import { use, useContext, useEffect, useState } from "react"
import Login from "./components/Auth/Login"
import AdminDashboard from "./components/Dashboard/AdminDashboard"
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard"
import { getLocalStorage, setLocalStorage } from "./utils/localStorage"
import { AuthContext } from "./context/AuthProvider"

const App = () => {
  const [user, setUser] = useState(null)
  const [LoggedInUserData, setLoggedInUserData] = useState(null)
  const authData = useContext(AuthContext)

  // useEffect(()=>{
  //   if(authData){
  //     const LoggedInUser= JSON.parse(localStorage.getItem("loggedInUser"))
  //     if(LoggedInUser){
  //       setUser(LoggedInUser.role)
  //     }
  //   }
  // },[authData])

  const handleLogin = (email, password) => {
    // Implementation for handling login
    if(email == "admin@me.com" && password == "123"){
      setUser("admin")
      localStorage.setItem("LoggedInUser", JSON.stringify({role:"admin"}))
    }else if(authData){
      const employee = authData.employees.find(emp => emp.email == email && emp.password == password)
      if(employee){
      setUser("employee")
      setLoggedInUserData(employee)
      localStorage.setItem("LoggedInUser", JSON.stringify({role:"employee"}))
    }}
    else{
      alert("Invalid Credentials")
    }
  }
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
