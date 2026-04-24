import { useState, useEffect } from "react"
import SearchBar from "../components/SearchBar"
import UserCard from "../components/UserCard"
import { getUsers } from "../services/Services"
const Users = () => {
  const [users, setUsers] = useState([])
  const [favorites, setFavorites] = useState([])
  const [value, setValue] = useState("");
  const [debouncedSearchValue, setdebouncedSearchValue] = useState("")

  const getInput = (eveObj) => {
    setValue(eveObj.target.value)
  }
  useEffect(() => {
    const timer = setTimeout(() => {
      setdebouncedSearchValue(value)
    }, 1000)
    return () => {
      clearTimeout(timer)
    }
  }, [value])

  // localStorage.clear()
  // localStorage.setItem("favItem", JSON.stringify(favorites))
  useEffect(() => {
    setFavorites(JSON.parse(localStorage.getItem("favItem") || "[]"))
  }, [])
  useEffect(() => {
    localStorage.setItem("favItem", JSON.stringify(favorites))
  }, [favorites])


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

  const filteredUsers = users.filter((u) => u.name.toLowerCase().includes(debouncedSearchValue.toLowerCase()))

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="mb-6">
        <SearchBar getInput={getInput} value={value} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-8">
        {
          filteredUsers.map((u) => {
            return <UserCard key={u.id} user={u} fav={favorites.includes(u.id)} toggleFavorite={toggleFavorite} />
          })
        }
      </div>
    </div>
  )
}

export default Users
