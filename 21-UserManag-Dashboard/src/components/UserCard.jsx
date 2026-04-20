
import { Link, useNavigate } from "react-router-dom"
import UserDetail from "../pages/UserDetail"
import { Star } from "lucide-react"
import { useState } from "react"

const UserCard = ({user}) => {
  const [iconfill, setIconFill] = useState(false)
  const navigate=useNavigate()

  const toggleFavorite=()=>{
    setIconFill(!iconfill)
  }
  return (
    <div className="bg-white flex flex-col items-center gap-6 p-5 rounded-xl shadow hover:shadow-lg transition cursor-pointer relative">
        <button 
        onClick={()=>{
          toggleFavorite()
        }}
        className="absolute top-2 right-2">
          <Star color="blue" fill={iconfill?"blue":"none"} size={20}/>
        </button>
      <div className="flex flex-col items-center gap-2">
        <h2 className="text-lg font-semibold">{user.name}</h2>
        <p className="text-sm text-gray-500">{user.email}</p>
        <p className="text-sm">{user?.address?.city}</p>
        </div>
        <button 
        onClick={()=>{
          navigate(`/userdetail/${user.id}`)
        }}
        className="mt-3 bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">View Details</button>
    </div>
  )
}

export default UserCard
