import axios from "axios";
import { useState } from "react";
const App = () => {
  const [data, setData] = useState([])
  const fetchData=async()=>{
    // console.log("data a gya.....")
    const response=await axios.get('https://picsum.photos/v2/list?page=2&limit=100')
    const data=response.data;
    setData(data)
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
    </div>
  )
}

export default App
