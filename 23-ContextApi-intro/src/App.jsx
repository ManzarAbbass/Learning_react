import { useState } from "react"
import Navbar from "./components/Navbar"

const App = () => {
  const [theme, setTheme] = useState("light")
  return (
    <div className="bg-black h-screen text-white">
      {/* <Navbar theme={theme} /> */}

      <Navbar theme={theme} >
        <h2>this navbar</h2>
        <h2>another navbar</h2>
      </Navbar>
    </div>
  )
}

export default App
