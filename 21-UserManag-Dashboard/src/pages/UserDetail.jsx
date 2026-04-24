import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getUsers } from "../services/Services"
import { Star } from "lucide-react"

const UserDetail = () => {
  const { id } = useParams()
  const [user, setUser] = useState(null)
  const navigate = useNavigate()

  function goBackToUsers() {
    navigate("/")
  }

  useEffect(() => {
    const fetchUser = async () => {
      const data = await getUsers()
      const findUser = data.find((u) => u.id === Number(id))
      setUser(findUser)
    }
    fetchUser()
  }, [id])

  if (!user)
    return (
      <h2 className="absolute top-[50%] left-[40%] font-bold text-xl">
        Loading User.....
      </h2>
    )

  return (
<div className="min-h-screen bg-slate-900 flex justify-center items-center p-6">
  <div className="bg-slate-800 border border-slate-700 w-full max-w-3xl rounded-2xl overflow-hidden shadow-lg">

    <div className="h-60">
      <img src={user.image} className="w-full h-full object-cover"/>
    </div>

    <div className="p-6 flex flex-col gap-4">

      <h2 className="text-2xl font-bold text-white">{user.name}</h2>
      <p className="text-blue-400">{user.role}</p>

      <div className="grid grid-cols-2 gap-4 text-sm text-gray-400">
        <p>Email: {user.email}</p>
        <p>Phone: {user.phone}</p>
        <p>Website: {user.website}</p>
        <p className="text-green-400">Rate: {user.rate}</p>
      </div>

      <div>
        <h3 className="text-white font-semibold">Skills</h3>
        <div className="flex gap-2 mt-2 flex-wrap">
          {user.skills?.map((s,i)=>(
            <span key={i} className="bg-slate-700 px-2 py-1 text-xs rounded">
              {s}
            </span>
          ))}
        </div>
      </div>

      <button
        onClick={goBackToUsers}
        className="mt-4 bg-blue-600 hover:bg-blue-700 py-2 rounded-lg">
        ← Back
      </button>
    </div>
  </div>
</div>
  )
}

export default UserDetail