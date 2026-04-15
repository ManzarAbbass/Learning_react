import {Route, Routes} from 'react-router-dom'
import Home from './pages/home'
const App = () => {
  return (
    <div className="bg-black h-screen text-white"> 
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
