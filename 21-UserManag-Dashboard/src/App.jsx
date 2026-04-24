import { Route,Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Users from "./pages/Users"
import Favorites from "./pages/Favorites"
import UserDetail from "./pages/UserDetail"

const App = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-gray-200">
      <Navbar />
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/userdetail/:id" element={<UserDetail />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
  )
}

export default App
