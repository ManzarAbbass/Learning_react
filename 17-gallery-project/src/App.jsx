import axios from "axios";
import { useEffect, useState } from "react";
const App = () => {
  const [userdata, setUserData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [userInp, setUserInput] = useState("");
  const [debounceinp, setDebounceInp] = useState("")
  const fetchData = async () => {
    // console.log("data a gya.....")
    const response = await axios.get(`https://picsum.photos/v2/list?page=${currentPage}&limit=30`)
    const data = response.data;
    setUserData(data);
    console.log(data);
  }

  useEffect(() => {
    fetchData()
  }, [currentPage])

  useEffect(()=>{
    const timer = setTimeout(() => {
      setDebounceInp(userInp)
    },1000)
    return () => {
      clearTimeout(timer)
    }
  },[userInp])
  function nextPage() {
    setCurrentPage(prev => prev + 1);
  }

  function prevPage() {
    if (currentPage !== 1) {
      setCurrentPage(prev => prev - 1)
    }
  }

  function getInput(parmtr) {
    setUserInput(parmtr.target.value)
  }
  // if (userdata.length > 0) {
  //   isuserHave = userdata.map(function (user) {
  //     return <div key={user.id} className="flex flex-col items-center gap-2 p-2 bg-gray-800 rounded-xl">
  //       <a href={user.url} target="_blank" rel="noreferrer">
  //       <div className="h-45 w-55 overflow-hidden rounded-xl">
  //         <img className="h-full w-full object-cover" src={user.download_url} alt="img" />
  //       </div>
  //       <h2 className="font-bold text-lg">{user.author}</h2>
  //       </a>
  //     </div>
  //   })
  // }  extra mapping 


  const filterdata = userdata.filter((elem) => {
    return elem.author.toLowerCase().includes(debounceinp.toLowerCase())
  })
  
  let isuserHave;
  if(filterdata.length>0){
  isuserHave = filterdata.map(function (filteruser) {
    return <div key={filteruser.id} className="flex flex-col items-center gap-2 p-2 bg-gray-800 rounded-xl">
      <a href={filteruser.url} target="_blank" rel="noreferrer">
        <div className="h-45 w-55 overflow-hidden rounded-xl">
          <img className="h-full w-full object-cover" src={filteruser.download_url} alt="img" />
        </div>
        <h2 className="font-bold text-lg">{filteruser.author}</h2>
      </a>
    </div>
  })}
  else{
    isuserHave=<h2 className="text-white font-bold text-xl">No user Available</h2>
  }

  return (
    <div className="bg-black h-screen p-4 text-white flex flex-col gap-4">
      <div className="flex justify-center">
        <input
          value={userInp}
          type="text"
          placeholder="Search..."
          className="bg-gray-800 text-white placeholder:text-gray-500 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 px-3 py-4 w-80 rounded-xl"
          onChange={(evtObj) => {
            getInput(evtObj)
          }} />
      </div>
      <div className="flex flex-wrap gap-4 p-5 justify-center items-center flex-1 overflow-y-auto no-scrollbar">
        {isuserHave}
      </div>
      <div className="flex gap-4 mt-5 justify-center items-center">
        <button onClick={() => {
          prevPage()
        }} className={`bg-green-500 px-7 py-4 rounded hover:bg-green-600 ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""}`}>Prev</button>
        <p className="text-gray-500 font-bold text-md">Page {currentPage}</p>
        <button onClick={() => {
          nextPage()
        }} className="bg-green-500 px-7 py-4 rounded hover:bg-green-600">Next</button>
      </div>
    </div>
  )
}

export default App
