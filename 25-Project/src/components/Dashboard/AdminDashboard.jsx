import AllTask from "../others/AllTask"
import CreateTask from "../others/CreateTask"
import Header from "../others/Header"

const AdminDashboard = ({ setUser,setLoggedInUserData }) => {
  return (
    <div className="h-screen w-full p-10 text-white">
      <Header setUser={setUser} setLoggedInUserData={setLoggedInUserData}/>
      <CreateTask/>
      <AllTask/>
    </div>
  )
}

export default AdminDashboard
