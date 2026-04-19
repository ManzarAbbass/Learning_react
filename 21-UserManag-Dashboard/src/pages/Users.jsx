import { useState ,useEffect } from "react"
import SearchBar from "../components/SearchBar"
import UserCard from "../components/UserCard"
import { getUsers } from "../services/Services"
const Users = () => {
  const [users, setUsers] = useState(null)
  useEffect(()=>{
    const fetchUsers=async ()=>{
    const data=await getUsers()
    setUsers(data)
    }
    fetchUsers()
  },[])
  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="mb-5">
      <SearchBar/>
      </div>
    <div className="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-3 gap-6">
      <UserCard user={users}/>
    </div>
    </div>
  )
}

export default Users
