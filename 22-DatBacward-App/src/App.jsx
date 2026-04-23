import { useState } from "react"

const App = () => {
  const [theme, setTheme] = useState("light")
  return (
    <div>
      <h1>Theme is Light</h1>
    </div>
  )
}

export default App
