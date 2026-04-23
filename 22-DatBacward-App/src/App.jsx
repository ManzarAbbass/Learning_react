import { useState } from "react"
import Navbar from "./components/Navbar"

const App = () => {
  const [theme, setTheme] = useState("light")
  return (
    <div className="bg-black h-screen text-white">
      
      <Navbar/>
    </div>
  )
}

export default App
