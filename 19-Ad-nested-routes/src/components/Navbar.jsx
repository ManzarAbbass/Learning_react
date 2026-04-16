import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="bg-fuchsia-500 flex justify-between items-center px-8 py-4">
      <h2 className="bg-fuchsia-800  px-4 py-2 rounded font-bold">MJ soul.</h2>
      <div className="flex gap-8">
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
      </div>
    </div>
  )
}

export default Navbar
