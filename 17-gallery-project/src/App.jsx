import axios from "axios";
import { useEffect, useState } from "react";
const App = () => {
  const [userdata, setUserData] = useState([])
  const fetchData = async () => {
    // console.log("data a gya.....")
    const response = await axios.get('https://picsum.photos/v2/list?page=3&limit=30')
    const data = response.data;
    setUserData(data);
    console.log(data);
  }
  useEffect(()=>{
    fetchData()
  },[])
  let isuserHave = "No User is Available";
  if (userdata.length > 0) {
    isuserHave = userdata.map(function (user) {
      return <div key={user.id} className="flex flex-col items-center gap-2">
        <a href={user.url} target="_blank" rel="noreferrer">
        <div className="h-40 w-44 overflow-hidden rounded-xl">
          <img className="h-full w-full object-cover" src={user.download_url} alt="img" />
        </div>
        <h2 className="font-bold text-lg">{user.author}</h2>
        </a>
      </div>
    })
  }

  return (
    <div className="bg-black h-screen p-4 text-white">
      <div className="flex flex-wrap gap-4">
        {isuserHave}
      </div>
    </div>
  )
}

export default App
