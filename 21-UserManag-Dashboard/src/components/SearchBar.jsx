import { useState } from "react"
import { Link } from "react-router-dom"

const SearchBar = () => {
  const [value, setValue] = useState("")
  return (
    <div>
      <input 
      onChange={(eveObj)=>{
        setValue(eveObj.target.value)
      }}
      className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      type="text"
      value={value}
      placeholder="Search users....."
       />     
    </div>
  )
}

export default SearchBar
