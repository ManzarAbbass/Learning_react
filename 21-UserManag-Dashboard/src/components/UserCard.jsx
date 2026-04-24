import { useNavigate } from "react-router-dom"
import { Star } from "lucide-react"

const UserCard = ({ user, fav, toggleFavorite }) => {
  const navigate = useNavigate()

  return (
    <div className="bg-slate-800/80 backdrop-blur-md border border-slate-700 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition overflow-hidden relative">

  {/* ⭐ Favorite */}
  <button
    onClick={() => toggleFavorite(user.id)}
    className="absolute top-3 right-3 bg-slate-900/80 p-2 rounded-full shadow">
    <Star color="gold" fill={fav ? "gold" : "none"} size={18} />
  </button>

  {/* Image */}
  <div className="w-full h-44">
    <img src={user.image} className="w-full h-full object-cover" />
  </div>

  {/* Content */}
  <div className="p-4 flex flex-col gap-3">

    <h2 className="text-lg font-bold text-white">{user.name}</h2>

    <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded w-fit">
      {user.role}
    </span>

    <p className="text-sm text-gray-400">{user.email}</p>
    <p className="text-sm text-gray-500">{user?.address?.city}</p>

    <p className="text-sm text-green-400 font-medium">{user.rate}</p>

    <div className="flex flex-wrap gap-1">
      {user.skills?.map((s,i)=>(
        <span key={i} className="text-xs bg-slate-700 px-2 py-1 rounded">
          {s}
        </span>
      ))}
    </div>

    <button
      onClick={() => navigate(`/userdetail/${user.id}`)}
      className="mt-3 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition">
      View Details
    </button>

  </div>
</div>
  )
}

export default UserCard