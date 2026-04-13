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
  let isuserHave = <h3 className="text-gray-400 text-xs">No User Available</h3>
  if (userdata.length > 0) {
    isuserHave = userdata.map(function (user) {
      return <div key={user.id} className="flex flex-col items-center gap-2 p-2 bg-gray-800 rounded-xl">
        <a href={user.url} target="_blank" rel="noreferrer">
        <div className="h-45 w-55 overflow-hidden rounded-xl">
          <img className="h-full w-full object-cover" src={user.download_url} alt="img" />
        </div>
        <h2 className="font-bold text-lg">{user.author}</h2>
        </a>
      </div>
    })
  }
  return (
    <div className="bg-black  p-4 text-white flex flex-col gap-4">
        <div className="flex gap-4 mt-5 justify-center">
        <button className="bg-green-500 px-7 py-4 rounded">Next</button>
        <button className="bg-green-500 px-7 py-4 rounded">Prev</button>
        </div>
      <div className="flex flex-wrap gap-4 p-5 justify-center items-center h-screen overflow-auto no-scrollbar">
        {isuserHave}
      </div>
    </div>
  )
}

export default App
