import { Star } from 'lucide-react';
import { getUsers } from '../services/Services';
import { useEffect } from 'react';
const Favorites = () => {
  const favItem = JSON.parse(localStorage.getItem("favItem"))
  
  useEffect(()=>{
    const fetchUsers = async ()=>{
      const data = await getUsers()
    }
  },[])


  return (
    "Hello Favorites"
  )
}

export default Favorites
