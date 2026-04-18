import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

const UserDetail = () => {
  let {id}=useParams()
  let navigate=useNavigate()
  const [dummyUser, setDummyUser] = useState([])
  const user=[{ id: 1, name: "Ali", email: "ali@gmail.com", city: "Karachi", phone: "12345" },
    { id: 2, name: "Ahmed", email: "ahmed@gmail.com", city: "Lahore", phone: "67890" }
  ]
  useEffect(()=>{
    const foundUser=user.find((u)=>u.id===id);
    setDummyUser(foundUser)
  },[id])
  if (!user) return <p>Loading...</p>;
  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-xl shadow">
      <div className="flex flex-col items-center gap-2">
        <h2 className="text-lg font-semibold">{user.name}</h2>
        <p className="text-sm text-gray-500">{user.email}</p>
        <p className="text-sm">{user.city}</p>
        </div>
        <button 
        onClick={()=>{
          navigate(-1)
        }}
        className="mt-3 bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">
          Go Back</button>
    </div>
  )
}

export default UserDetail
