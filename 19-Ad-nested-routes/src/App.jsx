import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import {Route, Routes} from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Notefound from './pages/Notfound'
import Product from "./pages/Product"
import Men from "./pages/Men"
import Women from "./pages/Women"

const App = () => {
  return (
    <div className="bg-black h-screen text-white">
      <Navbar />
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/product" element={<Product/>} />
      <Route path="/product/men" element={<Men/>} />
      <Route path="/product/women" element={<Women />} />
      <Route path="*" element={<Notefound />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
