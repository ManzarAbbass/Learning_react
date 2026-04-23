import { useNavigate } from "react-router-dom"
import { Star } from "lucide-react"

const UserCard = ({ user, fav, toggleFavorite }) => {
  const navigate = useNavigate()

  return (
    <div className="bg-white rounded-2xl shadow hover:shadow-xl transition overflow-hidden relative">

      {/* ⭐ Favorite Button */}
      <button
        onClick={() => toggleFavorite(user.id)}
        className="absolute top-3 right-3 z-10 bg-white p-1 rounded-full shadow">
        <Star color="blue" fill={fav ? "blue" : "none"} size={20} />
      </button>

      {/* 🖼 Image Section */}
      <div className="w-full h-40">
        <img 
          src={user.image} 
          alt="user"
          className="w-full h-full object-cover"
        />
      </div>

      {/* 📄 Content */}
      <div className="p-4 flex flex-col gap-2">

        {/* Name */}
        <h2 className="text-lg font-bold text-gray-800">
          {user.name}
        </h2>

        {/* Role */}
        <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded w-fit">
          {user.role}
        </span>

        {/* Email */}
        <p className="text-sm text-gray-500">
          {user.email}
        </p>

        {/* City */}
        <p className="text-sm text-gray-600">
          {user?.address?.city}
        </p>

        {/* Rate */}
        <p className="text-sm font-medium text-green-600">
          {user.rate}
        </p>

        {/* Skills */}
        <div className="flex flex-wrap gap-1 mt-1">
          {user.skills?.map((skill, index) => (
            <span 
              key={index}
              className="text-xs bg-gray-100 px-2 py-1 rounded">
              {skill}
            </span>
          ))}
        </div>

        {/* Button */}
        <button
          onClick={() => navigate(`/userdetail/${user.id}`)}
          className="mt-3 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
          View Details
        </button>
      </div>
    </div>
  )
}

export default UserCard