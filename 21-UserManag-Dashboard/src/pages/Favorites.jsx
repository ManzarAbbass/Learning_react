import { getUsers } from '../services/Services';
import { useEffect, useState } from 'react';
import { Star } from 'lucide-react';

const Favorites = () => {
  const favItem = JSON.parse(localStorage.getItem("favItem"))
  const [favuser, setFavUser] = useState([])
  useEffect(()=>{
    const fetchUsers = async ()=>{
      const data = await getUsers()
      setFavUser(data.filter((u)=>{
        if(favItem.includes(u.id)){
          return true
        }
        }))
    }
    fetchUsers()
  },[])

  return (
    favuser.map((u)=>{
      <div className=''>
        <Star/>
        <div>
          <h2></h2>
          <p></p>
          <p></p>
        </div>
      </div>
    })
  )
}

export default Favorites
