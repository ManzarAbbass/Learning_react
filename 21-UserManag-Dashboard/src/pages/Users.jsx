import { useState, useEffect } from "react"
import SearchBar from "../components/SearchBar"
import UserCard from "../components/UserCard"
import { getUsers } from "../services/Services"
const Users = () => {
  const [users, setUsers] = useState([])
  const [favorites, setFavorites] = useState([])

  const save

  const toggleFavorite = (userId) => {
    if (favorites.includes(userId)) {
      setFavorites(favorites.filter((id) => id !== userId))
    } else {
      setFavorites([...favorites, userId])
    }
  }

  useEffect(() => {
    const fetchUsers = async () => {
      const data = await getUsers()
      setUsers(data)
    }
    fetchUsers()
  }, [])

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="mb-5">
        <SearchBar />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-6">
        {
          users.map((u) => {
            return <UserCard key={u.id} user={u} fav={favorites.includes(u.id)} toggleFavorite={toggleFavorite}/>
          })
        }
      </div>
    </div>
  )
}

export default Users
