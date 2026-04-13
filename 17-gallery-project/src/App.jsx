import axios from "axios";
import { useState } from "react";
const App = () => {
  const [userdata, setUserData] = useState([])
  const fetchData=async()=>{
    // console.log("data a gya.....")
    const response=await axios.get('https://picsum.photos/v2/list?page=1&limit=15')
    const data=response.data;
    setUserData(data);
  }
  let isuserHave="No User is Available";
  if(userdata.length>0){
    isuserHave=userdata.map(function(user){
      return <h1 key={user.id}>Hello,{user.id}</h1>
    })
  }

  return (
    <div className="bg-black h-screen p-4 text-white">
      <button
      onClick={()=>{
        fetchData();
      }}
        className="bg-green-600 active:scale-95 mb-3 px-5 py-2 rounded">
        Get data
      </button>
      <div className="flex">
        <div>{isuserHave}</div>
      </div>
    </div>
  )
}

export default App
