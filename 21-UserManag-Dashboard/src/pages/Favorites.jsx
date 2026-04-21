import { getUsers } from '../services/Services';
import { useEffect, useState } from 'react';
import { Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Favorites = () => {
  const favItem = JSON.parse(localStorage.getItem("favItem"))
  const [favuser, setFavUser] = useState([])
  useEffect(() => {
    const fetchUsers = async () => {
      const data = await getUsers()
      const Users = data.filter((u) => (favItem.includes(u.id)))
      setFavUser(Users)
    }
    fetchUsers()
  }, [])

  const navigate = useNavigate();
  function goBackToUsers() {
    navigate("/")
  }

  if (favuser.length === 0) return <div className='min-h-screen flex items-center justify-center p-6'>
    <div className=' flex flex-col items-center gap-4 bg-blue-200 border-2 border-solid border-gray-300 p-6 rounded-lg text-gray-700'>
  <h2 className=" font-bold text-xl">{"No Favorite User Found....."}  </h2>
  <p>{"Please Click on the Star Icon to Add Users to Favorites"}</p>
  <button onClick={goBackToUsers} className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">
    return home
  </button>
  </div> 
  </div>
  
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className='text-center font-bold text-3xl border-blue-600 border-solid'>Favourites User</h2>
    <div className='grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-6 m-6'>
    
    {favuser.map(function(u){
        return <div className="bg-white flex flex-col items-center gap-6 p-5 rounded-xl shadow hover:shadow-lg transition cursor-pointer relative">
      <button className='absolute top-2 right-2'>
        <Star color="blue" fill="blue" size={20} />
      </button>
      <div>
        <h2>{u.name}</h2>
        <p>{u.email}</p>
        <p>{u?.address?.city}</p>
      </div>
      <button
        onClick={() => {
          goBackToUsers()
        }}
        className=' bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700'>return home</button>
    </div>
  
})}
  </div>
  </div>
  )
}

export default Favorites
