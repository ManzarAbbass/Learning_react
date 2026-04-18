import { Link } from "react-router-dom"

const SearchBar = () => {
  return (
    <div>
      <input className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" placeholder="Search users....." />     
    </div>
  )
}

export default SearchBar
