import { getUsers } from '../services/Services';
import { useEffect, useState } from 'react';
import { Star } from 'lucide-react';

const Favorites = () => {
  const favItem = JSON.parse(localStorage.getItem("favItem"))
  const [favuser, setFavUser] = useState(null)
  useEffect(()=>{
    const fetchUsers = async ()=>{
      const data = await getUsers()
      const Users= data.filter((u)=>(favItem.includes(u.id)))
      setFavUser(Users)
    }
    fetchUsers()
  },[])

  if(!favuser) return <h2 className="absolute top-[50%] left-[40%] font-bold text-xl">{"Loading Fav User....."}</h2>
  return (
    favuser.map((u)=>{
      <div className="bg-white flex flex-col items-center gap-6 p-5 rounded-xl shadow hover:shadow-lg transition cursor-pointer relative">
        <Star/>
        <div>
          <h2>{u.name}</h2>
          <p>{u.email}</p>
          <p></p>
        </div>
        <button className=' bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700'>return home</button>
      </div>
    })
  )
}

export default Favorites
