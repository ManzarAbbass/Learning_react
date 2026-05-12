import { use, useContext, useEffect, useState } from "react"
import Login from "./components/Auth/Login"
import AdminDashboard from "./components/Dashboard/AdminDashboard"
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard"
import { getLocalStorage, setLocalStorage } from "./utils/localStorage"
import { AuthContext } from "./context/AuthProvider"

const App = () => {
  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const {userData,setuserData} = useContext(AuthContext)

  useEffect(()=>{
    const loggedInUser= localStorage.getItem("loggedInUser")
    // console.log(loggedInUser)
    if(loggedInUser){
      const userData= JSON.parse(loggedInUser) 
      setUser(userData.role)
      setLoggedInUserData(userData.data)
    }
  },[])


const handleLogin = (email, password) => {
  if (email == "admin@me.com" && password == "123") {
    setUser("admin")
    localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin"}))
  } 
  else if (userData) { // Check karein ke employees array hai ya nahi
    const employee = userData.employees.find((emp)=> emp.email ==email && emp.password ==password)
    if (employee) {
      setUser("employee")
      setLoggedInUserData(employee)
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "employee",data:employee}))
    } 
  }
  else {
      alert("Invalid Credentials")
    }
  }
// console.log("current user :", user )
return (
  <>
    {!user ? <Login handleLogin={handleLogin}/> : ""}
    {user === "admin"? (
      <AdminDashboard  setUser={setUser} setLoggedInUserData={setLoggedInUserData} />
    ) : (user === "employee" && loggedInUserData) ? ( // Check if data is not null
      <EmployeeDashboard data={loggedInUserData} setUser={setUser} setLoggedInUserData={setLoggedInUserData}/>
    ) : null}
  </>
)
}

export default App
