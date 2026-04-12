import axios from "axios";
const App = () => {
  // ...get data with fetch Api 
  // const getData=async ()=>{
  //   // console.log("data is fetched...!")
  //   const data =await fetch('https://jsonplaceholder.typicode.com/todos/1');
  //   const jsonData= await data.json();
  //   console.log(jsonData);
  // }

  // ..get data with axios
  const getData=async ()=>{
    const response = await axios.get("https://jsonplaceholder.typicode.com/users");
    const data=response.data;
    console.log(data);
  }
  return (
    <div className="bg-black h-screen p-5">
      <button onClick={()=>{
        getData();
      }} className="bg-red-500 text-white px-5 py-3 rounded">Get data</button>
    </div>
  )
}

export default App
