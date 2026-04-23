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
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
      <div className="bg-white w-full max-w-3xl rounded-2xl shadow-lg overflow-hidden">

        {/* 🖼 Top Image */}
        <div className="w-full h-56 relative">
          <img
            src={user.image}
            alt="user"
            className="w-full h-full object-cover"
          />
        </div>

        {/* 📄 Content */}
        <div className="p-6 flex flex-col gap-4">

          {/* Header */}
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-bold text-gray-800">
                {user.name}
              </h2>
              <p className="text-sm text-gray-500">{user.role}</p>
            </div>

            <Star color="blue" size={24} />
          </div>

          {/* Contact */}
          <div className="grid grid-cols-2 gap-4 text-sm">
            <p><span className="font-semibold">Email:</span> {user.email}</p>
            <p><span className="font-semibold">Phone:</span> {user.phone}</p>
            <p><span className="font-semibold">Website:</span> {user.website}</p>
            <p><span className="font-semibold">Rate:</span> {user.rate}</p>
          </div>

          {/* Address */}
          <div className="text-sm">
            <h3 className="font-semibold mb-1">Address</h3>
            <p>
              {user?.address?.street}, {user?.address?.city}
            </p>
          </div>

          {/* Skills */}
          <div>
            <h3 className="font-semibold mb-2">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {user.skills?.map((skill, index) => (
                <span
                  key={index}
                  className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Button */}
          <button
            onClick={goBackToUsers}
            className="mt-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
            ← Back to Users
          </button>
        </div>
      </div>
    </div>
  )
}

export default UserDetail