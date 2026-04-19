import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
const Navbar = () => {
  return (
    <div className="bg-blue-600 text-white flex justify-between items-center px-10 py-4">
      <h2 className='font-bold text-lg'>UserMang.</h2>
      <div className='flex gap-8'>
        <Link className='hover:underline' to='/'>Users</Link>
        <Link className="hover:underline" to='/favorites'>Favorites</Link>
      </div>
    </div>
  )
}

export default Navbar
