import axios from "axios";
import { useState } from "react";
const App = () => {
  // ...get data with fetch Api 
  // const getData=async ()=>{
  //   // console.log("data is fetched...!")
  //   const data =await fetch('https://jsonplaceholder.typicode.com/todos/1');
  //   const jsonData= await data.json();
  //   console.log(jsonData);
  // }

  // ..get data with axios
  const [users, setUsers] = useState([]);
  const getData=async ()=>{
    const response = await axios.get("https://jsonplaceholder.typicode.com/users");
    const data=await response.data;
    setUsers(data);
  }
  return (
    <div className="bg-black h-screen p-5">
      <button onClick={()=>{
        getData();
      }} className="bg-red-500 text-white px-5 py-3 rounded">Get data</button>
      {users.map(function(ueser,idx){
        return "Hello"
      })}
    </div>
  )
}

export default App
