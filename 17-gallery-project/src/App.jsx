import axios from "axios";
import { useState } from "react";
const App = () => {
  const [userdata, setUserData] = useState([])
  const fetchData = async () => {
    // console.log("data a gya.....")
    const response = await axios.get('https://picsum.photos/v2/list?page=3&limit=30')
    const data = response.data;
    setUserData(data);
    console.log(data);
  }
  let isuserHave = "No User is Available";
  if (userdata.length > 0) {
    isuserHave = userdata.map(function (user) {
      return <div>
        <div className="h-40 w-44 overflow-hidden rounded-xl" key={user.id}>
          <img className="h-full w-full object-cover" src={user.download_url} alt="img" />
        </div>
        <h2>{user.author}</h2>
      </div>
    })
  }

  return (
    <div className="bg-black h-screen p-4 text-white">
      <button
        onClick={() => {
          fetchData();
        }}
        className="bg-green-600 active:scale-95 mb-3 px-5 py-2 rounded">
        Get data
      </button>
      <div className="flex flex-wrap gap-4">
        {isuserHave}
      </div>
    </div>
  )
}

export default App
