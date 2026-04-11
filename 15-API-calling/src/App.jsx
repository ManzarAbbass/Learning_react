const App = () => {
  const getData=async ()=>{
    // console.log("data is fetched...!")
    const data =await fetch('https://jsonplaceholder.typicode.com/todos/1');
    console.log(data.status)
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
