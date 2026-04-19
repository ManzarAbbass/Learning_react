
import { Link, useNavigate } from "react-router-dom"
import UserDetail from "../pages/UserDetail"

const UserCard = ({user}) => {
  const navigate=useNavigate()
  return (
    <div className="bg-white flex flex-col items-center gap-6 p-4 rounded-xl shadow hover:shadow-lg transition cursor-pointer">
      <div className="flex flex-col items-center gap-2">
        <h2 className="text-lg font-semibold">{user.name}</h2>
        <p className="text-sm text-gray-500">{user.email}</p>
        <p className="text-sm">{user?.address?.city}</p>
        </div>
        <button 
        onClick={()=>{
          navigate(`/user/:id`)
        }}
        className="mt-3 bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">View Details</button>
    </div>
  )
}

export default UserCard
