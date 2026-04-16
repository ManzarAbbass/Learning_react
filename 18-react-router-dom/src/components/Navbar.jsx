import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className='flex justify-between px-10 py-5 bg-fuchsia-500'>
      <h2>Navbar</h2>
      <div className='flex gap-8'>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
      </div>
  )
}

export default Navbar
