import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getUsers } from "../services/Services"

const UserDetail = () => {
  const {id}=useParams()
  const [user, setUser] = useState(null)
  const navigate=useNavigate();

  function goBackToUsers(){
    navigate("/")
  }

  useEffect(()=>{
    const fetchUser=async ()=>{
      const data=await getUsers()
      const findUser=data.find((u)=>(u.id===Number(id)))
      setUser(findUser)
    }
    fetchUser()
  },[id])
  
  if(!user) return <h2 className="absolute top-[50%] left-[40%] font-bold text-xl">{"Loading User....."}</h2>

  return (
    <div className="h-screen flex justify-center items-center bg-gray-100"> 
    <div className="bg-white flex flex-col items-center gap-8 justify-between p-12 rounded-xl shadow hover:shadow-lg transition cursor-pointer h-auto w-auto">
      <div className="flex flex-col items-center gap-2">
        <h2 className="text-lg font-semibold">{user.name}</h2>
        <p className="text-sm text-gray-500">{user.email}</p>
        <p className="text-sm">{user?.address?.city}</p>
        </div>
        <button 
        onClick={()=>{
          goBackToUsers()
        }}
        className="mt-3 bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">
          Go Back
        </button>
        </div>
    </div>
  )
}

export default UserDetail
