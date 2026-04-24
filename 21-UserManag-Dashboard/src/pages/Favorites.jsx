import { getUsers } from "../services/Services"
import { useEffect, useState } from "react"
import { Star } from "lucide-react"
import { useNavigate } from "react-router-dom"

const Favorites = () => {
  const favItem = JSON.parse(localStorage.getItem("favItem") || "[]")
  const [favuser, setFavUser] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    const fetchUsers = async () => {
      const data = await getUsers()
      const users = data.filter((u) => favItem.includes(u.id))
      setFavUser(users)
    }
    fetchUsers()
  }, [])

  function deleteItem(id) {
    setFavUser(favuser.filter((u) => u.id !== id))

    const newFavItem = favItem.filter((item) => item !== id)
    localStorage.setItem("favItem", JSON.stringify(newFavItem))
  }

  function goBackToUsers() {
    navigate("/")
  }

  if (favuser.length === 0)
    return (
      <div className="min-h-screen flex items-center justify-center p-6">
        <div className="flex flex-col items-center gap-4 bg-blue-100 border border-gray-300 p-6 rounded-xl text-gray-700">
          <h2 className="font-bold text-xl">No Favorite Users Found</h2>
          <p className="text-sm text-center">
            Add users by clicking the star icon
          </p>
          <button
            onClick={goBackToUsers}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Go Home
          </button>
        </div>
      </div>
    )

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      {/* Header */}
      <h2 className="text-center font-bold text-3xl mb-6 text-gray-800">
        ⭐ Favorite Users
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {favuser.map((u) => (
          <div
            key={u.id}
            className="bg-slate-800 border border-slate-700 rounded-xl shadow hover:shadow-lg transition">

            {/* Remove Favorite */}
            <button
              onClick={() => deleteItem(u.id)}
              className="absolute top-3 right-3 bg-slate-900/80 p-1 rounded-full shadow">
              <Star color="blue" fill="blue" size={20} />
            </button>

            {/* Content */}
            <div className="p-5 flex flex-col gap-2">

              <h2 className="text-lg font-bold text-gray-800">
                {u.name}
              </h2>

              <p className="text-sm text-gray-500">
                {u.email}
              </p>

              <p className="text-sm text-gray-600">
                {u?.address?.city}
              </p>

              <button
                onClick={goBackToUsers}
                className="mt-3 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
                Back to Users
              </button>

            </div>
          </div>
        ))}

      </div>
    </div>
  )
}

export default Favorites