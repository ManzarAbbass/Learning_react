import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getUsers } from "../services/Services"

const UserDetail = () => {
  const {id}=useParams()
  const [user, setUser] = useState(null)

  useEffect(()=>{
    const fetchUser=async ()=>{
      const data=await getUsers()
      const findUser=data.find((u)=>(u.id===Number(id)))
      console.log(findUser)
      setUser(findUser)
    }
    fetchUser()
  },[id])
  
  if(!user) return <h2>{"Loading User....."}</h2>

  return (
    <div>
    <div className="bg-white flex flex-col items-center gap-6 p-4 rounded-xl shadow hover:shadow-lg transition cursor-pointer">
      <div className="flex flex-col items-center gap-2">
        <h2 className="text-lg font-semibold">{user.name}</h2>
        <p className="text-sm text-gray-500">{user.email}</p>
        <p className="text-sm">{user?.address?.city}</p>
        </div>
        <button className="mt-3 bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">
          Go Back
        </button>
        </div>
    </div>
  )
}

export default UserDetail
