import { useState } from "react"
import { Link } from "react-router-dom"

const SearchBar = ({ getInput, value }) => {
  return (
    <div>
<input
  onChange={(e)=>getInput(e)}
  value={value}
  type="text"
  placeholder="Search developers..."
  className="w-full p-3 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
/>    
    </div>
  )
}

export default SearchBar
